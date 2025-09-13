import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  CalendarIcon, 
  ClockIcon, 
  UserIcon, 
  PhoneIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { MEDICAL_SPECIALTIES } from '../../../data/medical-data';
import { CLINIC_INFO } from '../../constants/config';
import { submitAppointment } from '../../../services/googleScript';

const AppointmentForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Esquema de validación
  const validationSchema = Yup.object({
    patientName: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .required('El nombre completo es requerido'),
    patientId: Yup.string()
      .min(6, 'El documento debe tener al menos 6 caracteres')
      .required('El documento de identidad es requerido'),
    patientBirthDate: Yup.date()
      .max(new Date(), 'La fecha de nacimiento no puede ser futura')
      .required('La fecha de nacimiento es requerida'),
    patientGender: Yup.string()
      .required('Selecciona el género'),
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

  // Horarios disponibles
  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  // Función para manejar el envío
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    
    try {
      // Transformar datos para compatibilidad con Google Apps Script
      const appointmentData = {
        nombre: values.patientName,
        cedula: values.patientId,
        telefono: values.patientPhone,
        email: values.patientEmail,
        fecha_nacimiento: values.patientBirthDate,
        genero: values.patientGender,
        especialidad: values.specialty,
        fecha_cita: values.preferredDate,
        hora_preferida: values.preferredTime,
        motivo: values.reason,
        acepta_terminos: values.acceptTerms ? 'Sí' : 'No',
        acepta_datos: values.acceptData ? 'Sí' : 'No'
      };
      
      // Enviar datos transformados
      await submitAppointment(appointmentData);
      
      setIsSubmitted(true);
      resetForm();
      
      // Llamar callback de éxito
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
      
    } catch (error) {
      console.error('Error al enviar cita:', error);
      alert('Error al enviar la solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  // Vista de confirmación
  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center z-50 p-4 transition-all duration-300">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transition-colors duration-300">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-4 flex items-center justify-center transition-colors duration-300">
            <svg className="w-8 h-8 text-green-600 dark:text-green-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
            ¡Solicitud Enviada!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
            Hemos recibido tu solicitud de cita. Te contactaremos en las próximas 24 horas para confirmar tu agendamiento.
          </p>
          
          <div className="space-y-3">
            <button
              onClick={onSuccess}
              className="btn-primary w-full"
            >
              Cerrar
            </button>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
              ¿Urgente? Llámanos al <a href={`tel:${CLINIC_INFO.contact.phone}`} className="text-primary-600 dark:text-primary-400 font-medium transition-colors duration-300">{CLINIC_INFO.contact.phone}</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl transition-colors duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl transition-colors duration-300">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Agendar Cita Médica
            </h2>
            <button
              onClick={onSuccess}
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6">
          <Formik
            initialValues={{
              patientName: '',
              patientId: '',
              patientBirthDate: '',
              patientGender: '',
              patientEmail: '',
              patientPhone: '',
              specialty: '',
              preferredDate: '',
              preferredTime: '',
              reason: '',
              acceptTerms: false,
              acceptData: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting: formSubmitting }) => (
              <Form className="space-y-6">
                {/* Información del Paciente */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
                    <UserIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
                    Información del Paciente
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Nombre Completo *
                      </label>
                      <Field
                        type="text"
                        id="patientName"
                        name="patientName"
                        className="form-input"
                        placeholder="Ej: Juan Pérez Gómez"
                      />
                      <ErrorMessage name="patientName" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="patientId" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Documento de Identidad *
                      </label>
                      <Field
                        type="text"
                        id="patientId"
                        name="patientId"
                        className="form-input"
                        placeholder="Ej: 12345678"
                      />
                      <ErrorMessage name="patientId" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Teléfono *
                      </label>
                      <Field
                        type="tel"
                        id="patientPhone"
                        name="patientPhone"
                        className="form-input"
                        placeholder={`Ej: ${CLINIC_INFO.contact.phone}`}
                      />
                      <ErrorMessage name="patientPhone" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Email *
                      </label>
                      <Field
                        type="email"
                        id="patientEmail"
                        name="patientEmail"
                        className="form-input"
                        placeholder={CLINIC_INFO.contact.email}
                      />
                      <ErrorMessage name="patientEmail" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="patientBirthDate" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Fecha de Nacimiento *
                      </label>
                      <Field
                        type="date"
                        id="patientBirthDate"
                        name="patientBirthDate"
                        className="form-input"
                      />
                      <ErrorMessage name="patientBirthDate" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="patientGender" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Género *
                      </label>
                      <Field
                        as="select"
                        id="patientGender"
                        name="patientGender"
                        className="form-select"
                      >
                        <option value="">Selecciona género</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                        <option value="Prefiero no decir">Prefiero no decir</option>
                      </Field>
                      <ErrorMessage name="patientGender" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Información de la Cita */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
                    <CalendarIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
                    Información de la Cita
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="specialty" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Especialidad *
                      </label>
                      <Field
                        as="select"
                        id="specialty"
                        name="specialty"
                        className="form-select"
                      >
                        <option value="">Selecciona una especialidad</option>
                        {MEDICAL_SPECIALTIES.map((specialty) => (
                          <option key={specialty.id} value={specialty.name}>
                            {specialty.name}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="specialty" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Fecha Preferida *
                      </label>
                      <Field
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        min={new Date().toISOString().split('T')[0]}
                        className="form-input"
                      />
                      <ErrorMessage name="preferredDate" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Hora Preferida *
                      </label>
                      <Field
                        as="select"
                        id="preferredTime"
                        name="preferredTime"
                        className="form-select"
                      >
                        <option value="">Selecciona una hora</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage name="preferredTime" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Motivo de la Consulta *
                      </label>
                      <Field
                        as="textarea"
                        id="reason"
                        name="reason"
                        rows="3"
                        className="form-textarea"
                        placeholder="Describe brevemente el motivo de tu consulta..."
                      />
                      <ErrorMessage name="reason" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Términos y Condiciones */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Field
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      className="form-checkbox mt-1"
                    />
                    <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      Acepto los <a href="/terminos" target="_blank" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300">términos y condiciones</a> del servicio *
                    </label>
                  </div>
                  <ErrorMessage name="acceptTerms" component="div" className="text-red-600 dark:text-red-400 text-sm transition-colors duration-300" />

                  <div className="flex items-start">
                    <Field
                      type="checkbox"
                      id="acceptData"
                      name="acceptData"
                      className="form-checkbox mt-1"
                    />
                    <label htmlFor="acceptData" className="ml-3 text-sm text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      Autorizo el tratamiento de mis datos personales según la <a href="/politicas-datos" target="_blank" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300">política de privacidad</a> *
                    </label>
                  </div>
                  <ErrorMessage name="acceptData" component="div" className="text-red-600 dark:text-red-400 text-sm transition-colors duration-300" />
                </div>

                {/* Botones */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={onSuccess}
                    className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={formSubmitting || isSubmitting}
                    className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {(formSubmitting || isSubmitting) ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Agendar Cita'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
