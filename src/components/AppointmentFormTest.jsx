import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MEDICAL_SPECIALTIES } from '../data/medical-data';
import { submitAppointment } from '../services/googleScript';

const AppointmentFormTest = () => {
    const [jsonOutput, setJsonOutput] = useState(null);
    const [submissionResult, setSubmissionResult] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Esquema de validación (igual al original)
    const validationSchema = Yup.object({
        patientName: Yup.string()
            .min(2, 'El nombre debe tener al menos 2 caracteres')
            .required('El nombre completo es requerido'),
        patientEmail: Yup.string()
            .email('Ingresa un email válido')
            .required('El email es requerido'),
        patientPhone: Yup.string()
            .matches(/^[0-9+\-\s()]+$/, 'Ingresa un teléfono válido')
            .required('El teléfono es requerido'),
        specialty: Yup.string()
            .required('Selecciona una especialidad'),
        preferredDate: Yup.date()
            .min(new Date(), 'La fecha debe ser futura')
            .required('Selecciona una fecha preferida'),
        preferredTime: Yup.string()
            .required('Selecciona un horario preferido'),
        reason: Yup.string()
            .min(10, 'Describe brevemente el motivo de la consulta')
            .required('El motivo de consulta es requerido'),
        acceptTerms: Yup.boolean()
            .oneOf([true], 'Debes aceptar los términos y condiciones'),
        acceptData: Yup.boolean()
            .oneOf([true], 'Debes autorizar el tratamiento de datos personales')
    });

    const timeSlots = [
        '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
        '11:00', '11:30', '02:00', '02:30', '03:00', '03:30',
        '04:00', '04:30', '05:00', '05:30'
    ];

    // Función para mostrar datos sin enviar
    const previewData = (values) => {
        const dataToSend = {
            // Datos originales del formulario
            originalFormData: values,

            // Datos transformados que se envían al backend
            transformedData: {
                nombre: values.patientName,
                cedula: values.patientId || 'No especificado',
                telefono: values.patientPhone,
                email: values.patientEmail,
                fecha_nacimiento: values.patientBirthDate || 'No especificado',
                genero: values.patientGender || 'No especificado',
                especialidad: values.specialty,
                fecha_cita: values.preferredDate,
                hora_preferida: values.preferredTime,
                motivo: values.reason,
                acepta_terminos: values.acceptTerms ? 'Sí' : 'No',
                acepta_datos: values.acceptData ? 'Sí' : 'No'
            },

            // Payload completo que se envía a Google Apps Script
            fullPayload: {
                action: 'submitAppointment',
                data: {
                    nombre: values.patientName,
                    cedula: values.patientId || 'No especificado',
                    telefono: values.patientPhone,
                    email: values.patientEmail,
                    fecha_nacimiento: values.patientBirthDate || 'No especificado',
                    genero: values.patientGender || 'No especificado',
                    especialidad: values.specialty,
                    fecha_cita: values.preferredDate,
                    hora_preferida: values.preferredTime,
                    motivo: values.reason,
                    acepta_terminos: values.acceptTerms ? 'Sí' : 'No',
                    acepta_datos: values.acceptData ? 'Sí' : 'No'
                },
                timestamp: new Date().toISOString()
            }
        };

        setJsonOutput(dataToSend);
    };

    // Función para enviar realmente los datos
    const handleSubmit = async (values, { setSubmitting }) => {
        setIsSubmitting(true);
        previewData(values); // Mostrar JSON primero

        try {
            const result = await submitAppointment(values);
            setSubmissionResult({
                success: true,
                data: result,
                message: 'Cita enviada exitosamente'
            });
        } catch (error) {
            setSubmissionResult({
                success: false,
                error: error.message,
                message: 'Error al enviar la cita'
            });
        } finally {
            setIsSubmitting(false);
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
                🧪 Test del Formulario de Citas Médicas
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Formulario */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Formulario de Prueba</h2>

                    <Formik
                        initialValues={{
                            patientName: 'Juan Pérez González',
                            patientEmail: 'juan.perez@email.com',
                            patientPhone: '00 123 4567',
                            specialty: '',
                            preferredDate: '',
                            preferredTime: '',
                            reason: 'Consulta de control y revisión general de salud',
                            acceptTerms: false,
                            acceptData: false
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values }) => (
                            <Form className="space-y-4">
                                {/* Información del Paciente */}
                                <div className="space-y-3">
                                    <h3 className="font-medium text-gray-700">Información del Paciente</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Nombre Completo *
                                        </label>
                                        <Field
                                            type="text"
                                            name="patientName"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage name="patientName" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email *
                                        </label>
                                        <Field
                                            type="email"
                                            name="patientEmail"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage name="patientEmail" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Teléfono *
                                        </label>
                                        <Field
                                            type="tel"
                                            name="patientPhone"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage name="patientPhone" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                </div>

                                {/* Información de la Cita */}
                                <div className="space-y-3">
                                    <h3 className="font-medium text-gray-700">Información de la Cita</h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Especialidad *
                                        </label>
                                        <Field
                                            as="select"
                                            name="specialty"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Selecciona una especialidad</option>
                                            {MEDICAL_SPECIALTIES.map((specialty) => (
                                                <option key={specialty.id} value={specialty.name}>
                                                    {specialty.name}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="specialty" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Fecha Preferida *
                                        </label>
                                        <Field
                                            type="date"
                                            name="preferredDate"
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage name="preferredDate" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Hora Preferida *
                                        </label>
                                        <Field
                                            as="select"
                                            name="preferredTime"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="">Selecciona una hora</option>
                                            {timeSlots.map((time) => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="preferredTime" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Motivo de la Consulta *
                                        </label>
                                        <Field
                                            as="textarea"
                                            name="reason"
                                            rows="3"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <ErrorMessage name="reason" component="div" className="text-red-600 text-sm mt-1" />
                                    </div>
                                </div>

                                {/* Términos y Condiciones */}
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <Field
                                            type="checkbox"
                                            name="acceptTerms"
                                            className="mt-1 mr-3"
                                        />
                                        <label className="text-sm text-gray-700">
                                            Acepto los términos y condiciones *
                                        </label>
                                    </div>
                                    <ErrorMessage name="acceptTerms" component="div" className="text-red-600 text-sm" />

                                    <div className="flex items-start">
                                        <Field
                                            type="checkbox"
                                            name="acceptData"
                                            className="mt-1 mr-3"
                                        />
                                        <label className="text-sm text-gray-700">
                                            Autorizo el tratamiento de datos personales *
                                        </label>
                                    </div>
                                    <ErrorMessage name="acceptData" component="div" className="text-red-600 text-sm" />
                                </div>

                                {/* Botones */}
                                <div className="flex space-x-4 pt-4">
                                    <button
                                        type="button"
                                        onClick={() => previewData(values)}
                                        className="flex-1 py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                                    >
                                        👁️ Ver JSON sin Enviar
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
                                    >
                                        {isSubmitting ? '⏳ Enviando...' : '📤 Enviar Cita'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                {/* Panel de Resultados */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800">Resultados del Test</h2>

                    {/* JSON de datos */}
                    {jsonOutput && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-medium text-gray-700 mb-3">📋 Datos que se enviarán:</h3>
                            <pre className="bg-gray-900 text-green-400 p-4 rounded text-sm overflow-auto max-h-96">
                                {JSON.stringify(jsonOutput, null, 2)}
                            </pre>
                        </div>
                    )}

                    {/* Resultado del envío */}
                    {submissionResult && (
                        <div className={`p-4 rounded-lg ${submissionResult.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                            <h3 className={`font-medium mb-3 ${submissionResult.success ? 'text-green-800' : 'text-red-800'}`}>
                                {submissionResult.success ? '✅ Resultado Exitoso' : '❌ Error en el Envío'}
                            </h3>
                            <p className={`mb-3 ${submissionResult.success ? 'text-green-700' : 'text-red-700'}`}>
                                {submissionResult.message}
                            </p>
                            <pre className={`text-sm p-3 rounded overflow-auto max-h-64 ${submissionResult.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {JSON.stringify(submissionResult.success ? submissionResult.data : submissionResult.error, null, 2)}
                            </pre>
                        </div>
                    )}

                    {/* Información de configuración */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h3 className="font-medium text-blue-800 mb-3">ℹ️ Información del Sistema</h3>
                        <div className="text-sm text-blue-700 space-y-1">
                            <p><strong>Google Script URL:</strong> {import.meta.env.VITE_GOOGLE_SCRIPT_URL ? '✅ Configurado' : '❌ No configurado'}</p>
                            <p><strong>Especialidades disponibles:</strong> {MEDICAL_SPECIALTIES.length}</p>
                            <p><strong>Horarios disponibles:</strong> {timeSlots.length}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentFormTest;
