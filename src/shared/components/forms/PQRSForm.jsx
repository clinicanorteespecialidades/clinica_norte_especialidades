import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  ExclamationTriangleIcon,
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  DocumentTextIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO } from '../../constants/config';
import { submitPQRS } from '../../../services/googleScript';

const PQRSForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Tipos de PQRS
  const pqrsTypes = [
    {
      value: 'felicitacion',
      label: 'Felicitación',
      icon: StarIcon,
      description: 'Felicitación por el servicio recibido'
    },
    {
      value: 'peticion',
      label: 'Petición',
      icon: DocumentTextIcon,
      description: 'Solicitud de información o servicios'
    },
    {
      value: 'queja',
      label: 'Queja',
      icon: ExclamationTriangleIcon,
      description: 'Insatisfacción con el servicio recibido'
    },
    {
      value: 'reclamo',
      label: 'Reclamo',
      icon: ChatBubbleLeftRightIcon,
      description: 'Inconformidad que requiere solución'
    },
    {
      value: 'sugerencia',
      label: 'Sugerencia',
      icon: LightBulbIcon,
      description: 'Propuesta de mejora'
    }
  ];

  // Esquema de validación
  const validationSchema = Yup.object({
    userType: Yup.string()
      .required('Selecciona el tipo de usuario'),
    fullName: Yup.string()
      .min(2, 'El nombre debe tener al menos 2 caracteres')
      .required('El nombre completo es requerido'),
    email: Yup.string()
      .email('Ingresa un email válido')
      .required('El email es requerido'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]+$/, 'Ingresa un teléfono válido')
      .required('El teléfono es requerido'),
    idNumber: Yup.string()
      .required('El número de identificación es requerido'),
    pqrsType: Yup.string()
      .required('Selecciona el tipo de PQRS'),
    subject: Yup.string()
      .min(5, 'El asunto debe tener al menos 5 caracteres')
      .required('El asunto es requerido'),
    description: Yup.string()
      .min(20, 'La descripción debe tener al menos 20 caracteres')
      .required('La descripción es requerida'),
    acceptTerms: Yup.boolean()
      .oneOf([true], 'Debes aceptar los términos y condiciones'),
    acceptData: Yup.boolean()
      .oneOf([true], 'Debes autorizar el tratamiento de datos personales')
  });

  // Función para manejar el envío
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setIsSubmitting(true);
    
    try {
      // Transformar datos para compatibilidad con Google Apps Script
      const pqrsData = {
        userType: values.userType,
        name: values.fullName, // Mapeo correcto
        cedula: values.idNumber, // Mapeo correcto
        phone: values.phone,
        email: values.email,
        pqrsType: values.pqrsType,
        subject: values.subject,
        description: values.description,
        acceptTerms: values.acceptTerms ? 'Sí' : 'No',
        acceptData: values.acceptData ? 'Sí' : 'No'
      };
      
      // Enviar datos transformados
      await submitPQRS(pqrsData);
      
      setIsSubmitted(true);
      resetForm();
      
      // Llamar callback de éxito
      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
      
    } catch (error) {
      console.error('Error al enviar PQRS:', error);
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
            ¡PQRS Enviado!
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
            Tu solicitud ha sido radicada exitosamente. Te enviaremos un número de radicado por email.
          </p>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 transition-colors duration-300">
            <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <strong>Tiempo de respuesta:</strong><br />
              • Peticiones: 15 días hábiles<br />
              • Quejas y Reclamos: 15 días hábiles<br />
              • Sugerencias: 30 días hábiles
            </p>
          </div>
          
          <button
            onClick={onSuccess}
            className="btn-primary w-full"
          >
            Cerrar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 flex items-center justify-center z-50 p-4 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl transition-colors duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-2xl transition-colors duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-heading font-bold text-gray-900 dark:text-white transition-colors duration-300">
                Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-300">
                Sistema de atención al usuario - PQRSF
              </p>
            </div>
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
        <div className="flex-1 overflow-y-auto p-6 pb-8 bg-white dark:bg-gray-800 transition-colors duration-300">
          <Formik
            initialValues={{
              userType: '',
              fullName: '',
              email: '',
              phone: '',
              idNumber: '',
              pqrsType: '',
              subject: '',
              description: '',
              acceptTerms: false,
              acceptData: false
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting: formSubmitting }) => (
              <Form className="space-y-6">
                {/* Tipo de Usuario */}
                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                    Tipo de Usuario *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { value: 'paciente', label: 'Paciente' },
                      { value: 'familiar', label: 'Familiar' },
                      { value: 'otro', label: 'Otro' }
                    ].map((type) => (
                      <label key={type.value} className="relative">
                        <Field
                          type="radio"
                          name="userType"
                          value={type.value}
                          className="sr-only peer"
                        />
                        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                          <span className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-300">{type.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  <ErrorMessage name="userType" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                </div>

                {/* Información Personal */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
                    <UserIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
                    Información Personal
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Nombre Completo *
                      </label>
                      <Field
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="form-input"
                        placeholder="Nombre completo"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Email *
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder={CLINIC_INFO.contact.email}
                      />
                      <ErrorMessage name="email" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Teléfono *
                      </label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="+57 300 123 4567"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="idNumber" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Número de Identificación *
                      </label>
                      <Field
                        type="text"
                        id="idNumber"
                        name="idNumber"
                        className="form-input"
                        placeholder="Cédula, pasaporte, etc."
                      />
                      <ErrorMessage name="idNumber" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Tipo de PQRS */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">
                    Tipo de Solicitud *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pqrsTypes.map((type) => {
                      const IconComponent = type.icon;
                      return (
                        <label key={type.value} className="relative">
                          <Field
                            type="radio"
                            name="pqrsType"
                            value={type.value}
                            className="sr-only peer"
                          />
                          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer peer-checked:border-primary-500 peer-checked:bg-primary-50 dark:peer-checked:bg-primary-900/30 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                            <div className="flex items-start space-x-3">
                              <IconComponent className="w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5 transition-colors duration-300" />
                              <div>
                                <span className="text-sm font-medium text-gray-900 dark:text-white block transition-colors duration-300">{type.label}</span>
                                <span className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-300">{type.description}</span>
                              </div>
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                  <ErrorMessage name="pqrsType" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                </div>

                {/* Detalles de la Solicitud */}
                <div>
                  <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
                    <DocumentTextIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400 transition-colors duration-300" />
                    Detalles de la Solicitud
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Asunto *
                      </label>
                      <Field
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input"
                        placeholder="Resumen breve de tu solicitud"
                      />
                      <ErrorMessage name="subject" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-1 transition-colors duration-300">
                        Descripción Detallada *
                      </label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        rows="5"
                        className="form-textarea"
                        placeholder="Describe detalladamente tu solicitud. Incluye fechas, nombres, y cualquier información relevante..."
                      />
                      <ErrorMessage name="description" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1 transition-colors duration-300" />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300">
                        Mínimo 20 caracteres. Se específico para una mejor atención.
                      </p>
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
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 bg-white dark:bg-gray-700 transition-colors duration-300"
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
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 bg-white dark:bg-gray-700 transition-colors duration-300"
                    />
                    <label htmlFor="acceptData" className="ml-3 text-sm text-gray-900 dark:text-gray-100 transition-colors duration-300">
                      Autorizo el tratamiento de mis datos personales según la <a href="/politicas-datos" target="_blank" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300">política de privacidad</a> *
                    </label>
                  </div>
                  <ErrorMessage name="acceptData" component="div" className="text-red-600 dark:text-red-400 text-sm transition-colors duration-300" />
                </div>

                {/* Información Legal */}
                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg p-4 transition-colors duration-300">
                  <h4 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2 transition-colors duration-300">📋 Tiempos de Respuesta</h4>
                  <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1 transition-colors duration-300">
                    <li>• <strong>Peticiones:</strong> 15 días hábiles</li>
                    <li>• <strong>Quejas y Reclamos:</strong> 15 días hábiles</li>
                    <li>• <strong>Sugerencias:</strong> 30 días hábiles</li>
                  </ul>
                </div>

                {/* Botones */}
                <div className="flex space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={onSuccess}
                    className="flex-1 py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
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
                      'Enviar PQRSF'
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

export default PQRSForm;
