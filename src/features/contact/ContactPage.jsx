import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CalendarIcon,
  UserIcon,
  TagIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
  HeartIcon,
  ArrowRightIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  InformationCircleIcon,
  ChatBubbleLeftEllipsisIcon,
  BuildingOfficeIcon,
  ArrowTopRightOnSquareIcon,
  ShieldExclamationIcon
} from '@heroicons/react/24/outline';
import { CLINIC_INFO } from '../../shared/constants/config';
import { MEDICAL_SPECIALTIES } from '../../data/medical-data';
import { PQRSForm } from '../../shared/components/forms';
import SEOHead from '../../shared/components/seo/SEOHead';
import { generateClinicStructuredData } from '../../shared/utils/structuredData';
import { Map } from '../../shared/components/maps';
import { submitAppointment } from '../../services/googleScript';


const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPQRSForm, setShowPQRSForm] = useState(false);


  // Horarios disponibles
  const timeSlots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'
  ];


  // Validación completa como AppointmentForm
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

  // Envío del formulario
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
      
      await submitAppointment(appointmentData);
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error('Error al enviar cita:', error);
      alert('Error al enviar la solicitud. Por favor, intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-green-900/20 transition-all duration-300">
        <div className="text-center max-w-2xl mx-auto px-4">
          {/* Success Animation Container */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
              <CheckCircleIcon className="w-16 h-16 text-white" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="flex space-x-2">
                <SparklesIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
                <SparklesIcon className="w-4 h-4 text-green-400 animate-pulse delay-200" />
                <SparklesIcon className="w-5 h-5 text-blue-400 animate-pulse delay-400" />
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            ¡Solicitud Enviada!
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8 transition-colors duration-300">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Hemos recibido tu solicitud de cita médica. Nuestro equipo se pondrá en contacto contigo 
              en las próximas <span className="font-bold text-green-600 dark:text-green-400">24 horas</span> 
              para confirmar tu agendamiento.
            </p>
            
            {/* Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <ClockIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Paso 1</div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">Confirmación telefónica</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <CalendarIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Paso 2</div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">Agendamiento final</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                <HeartIcon className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                <div className="font-semibold text-gray-900 dark:text-white text-sm">Paso 3</div>
                <div className="text-gray-600 dark:text-gray-300 text-xs">Tu consulta médica</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              aria-label="Agendar una nueva cita médica"
              type="button"
            >
              <span>Agendar Otra Cita</span>
              <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            
            <a 
              href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hola, acabé de enviar una solicitud de cita y quiero confirmar los detalles.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>Contactar por WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Datos estructurados para SEO
  const structuredData = generateClinicStructuredData();

  return (
    <>
      <SEOHead 
        title="Contacto"
        description="Contáctanos para agendar tu cita médica en Clínica Norte Especialidades SAS. Atención personalizada, horarios flexibles y fácil comunicación. Ubicados en La Unión, Nariño."
        keywords="contacto clínica, agendar cita médica, teléfono clínica, dirección clínica, horarios atención, PQRS"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/contact` : ''}
        structuredData={structuredData}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">

      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/images/clinic/interior/laboratorio-clinico-certificado.jpg')`,
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-600/80 dark:from-gray-900/95 dark:via-primary-900/90 dark:to-primary-800/85" />
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Content */}
        <div className="relative z-10 container-custom section-padding text-center">
          <div className="max-w-4xl mx-auto">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in-up delay-200">
              Contáctanos
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Agenda tu cita médica fácilmente o ponte en contacto con nosotros para cualquier consulta
            </p>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
              <a 
                href="#appointment-form"
                className="bg-white hover:bg-gray-100 text-primary-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center space-x-2"
              >
                <CalendarIcon className="w-6 h-6" />
                <span>Agendar Cita</span>
              </a>
              
              <a 
                href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hola, necesito información sobre sus servicios médicos`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <PhoneIcon className="w-6 h-6" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Form and Contact Section */}
      <section id="appointment-form" className="relative bg-gray-50 dark:bg-gray-800 section-padding transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Appointment Form */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-2xl p-8 transition-colors duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-6 py-2 mb-4">
                  <CalendarIcon className="w-5 h-5" />
                  <span className="font-medium">Agendar Cita</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Solicita tu Cita Médica
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita
                </p>
              </div>

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
                    {/* Patient Information Section */}
                    <div className="bg-gray-50 dark:bg-gray-600 rounded-2xl p-6">
                      <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <UserIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                        Información Personal
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Nombre Completo *
                          </label>
                          <Field
                            type="text"
                            id="patientName"
                            name="patientName"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            placeholder="Ingresa tu nombre completo"
                          />
                          <ErrorMessage name="patientName" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Documento de Identidad *
                          </label>
                          <Field
                            type="text"
                            id="patientId"
                            name="patientId"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            placeholder="Ej: 12345678"
                          />
                          <ErrorMessage name="patientId" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="patientPhone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Teléfono *
                          </label>
                          <Field
                            type="tel"
                            id="patientPhone"
                            name="patientPhone"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            placeholder="300 123 4567"
                          />
                          <ErrorMessage name="patientPhone" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="patientEmail" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email *
                          </label>
                          <Field
                            type="email"
                            id="patientEmail"
                            name="patientEmail"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            placeholder="ejemplo@correo.com"
                          />
                          <ErrorMessage name="patientEmail" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <label htmlFor="patientBirthDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Fecha de Nacimiento *
                          </label>
                          <Field
                            type="date"
                            id="patientBirthDate"
                            name="patientBirthDate"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                          />
                          <ErrorMessage name="patientBirthDate" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>

                        <div>
                          <label htmlFor="patientGender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Género *
                          </label>
                          <Field
                            as="select"
                            id="patientGender"
                            name="patientGender"
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                          >
                            <option value="">Selecciona género</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otro">Otro</option>
                            <option value="Prefiero no decir">Prefiero no decir</option>
                          </Field>
                          <ErrorMessage name="patientGender" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>
                      </div>
                    </div>

                    {/* Appointment Information Section */}
                    <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6">
                      <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <CalendarIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                        Información de la Cita
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Especialidad Médica *
                          </label>
                          <Field 
                            as="select" 
                            id="specialty" 
                            name="specialty" 
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                          >
                            <option value="">Selecciona una especialidad</option>
                            {MEDICAL_SPECIALTIES.map((specialty) => (
                              <option key={specialty.id} value={specialty.name}>
                                {specialty.name} - {specialty.doctor}
                              </option>
                            ))}
                          </Field>
                          <ErrorMessage name="specialty" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Fecha Preferida *
                            </label>
                            <Field
                              type="date"
                              id="preferredDate"
                              name="preferredDate"
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            />
                            <ErrorMessage name="preferredDate" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                          </div>
                          
                          <div>
                            <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Hora Preferida *
                            </label>
                            <Field 
                              as="select" 
                              id="preferredTime" 
                              name="preferredTime" 
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                            >
                              <option value="">Selecciona una hora</option>
                              {timeSlots.map((time) => (
                                <option key={time} value={time}>
                                  {time}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage name="preferredTime" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Motivo de la Consulta *
                          </label>
                          <Field 
                            as="textarea" 
                            id="reason" 
                            name="reason" 
                            rows="4" 
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-500 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-none"
                            placeholder="Describe brevemente el motivo de tu consulta médica..."
                          />
                          <ErrorMessage name="reason" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1"/>
                        </div>
                      </div>
                    </div>

                    {/* Legal Acceptances */}
                    <div className="bg-gray-50 dark:bg-gray-600 rounded-2xl p-6">
                      <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                        <ShieldCheckIcon className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                        Autorizaciones
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-500">
                          <Field type="checkbox" id="acceptTerms" name="acceptTerms" className="w-5 h-5 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1" />
                          <label htmlFor="acceptTerms" className="ml-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Acepto los <a href="/terminos" target="_blank" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">términos y condiciones</a> de uso del servicio *
                          </label>
                        </div>
                        <ErrorMessage name="acceptTerms" component="div" className="text-red-600 dark:text-red-400 text-sm" />

                        <div className="flex items-start p-4 bg-white dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-500">
                          <Field type="checkbox" id="acceptData" name="acceptData" className="w-5 h-5 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mt-1" />
                          <label htmlFor="acceptData" className="ml-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            Autorizo el tratamiento de mis datos personales según la <a href="/politicas-datos" target="_blank" className="text-primary-600 dark:text-primary-400 hover:underline font-semibold">política de privacidad</a> *
                          </label>
                        </div>
                        <ErrorMessage name="acceptData" component="div" className="text-red-600 dark:text-red-400 text-sm" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formSubmitting || isSubmitting}
                      className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-3 disabled:cursor-not-allowed"
                      aria-label="Enviar solicitud de cita médica"
                    >
                      {(formSubmitting || isSubmitting) ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="w-6 h-6" aria-hidden="true" />
                          <span>Agendar Cita Médica</span>
                          <ArrowRightIcon className="w-5 h-5" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-2xl p-8 transition-colors duration-300">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full px-6 py-2 mb-4">
                  <UserGroupIcon className="w-5 h-5" />
                  <span className="font-medium">Información de Contacto</span>
                </div>
                <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Estamos Aquí para Ti
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Múltiples formas de ponerte en contacto con nosotros
                </p>
              </div>

              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="group flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 cursor-pointer"
                     onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${CLINIC_INFO.location.lat},${CLINIC_INFO.location.lng}`, '_blank')}>
                  <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-all duration-300">
                    <MapPinIcon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Dirección</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{CLINIC_INFO.contact.address}</p>
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">Ver en Google Maps →</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="group flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300 cursor-pointer"
                     onClick={() => window.open(`tel:${CLINIC_INFO.contact.phone}`, '_self')}>
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-all duration-300">
                    <PhoneIcon className="w-7 h-7 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Teléfono</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">{CLINIC_INFO.contact.phone}</p>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">Llamar ahora →</span>
                  </div>
                </div>

                {/* Email */}
                <div className="group flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 cursor-pointer"
                     onClick={() => window.open(`mailto:${CLINIC_INFO.contact.email}`, '_self')}>
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                    <EnvelopeIcon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 break-all">{CLINIC_INFO.contact.email}</p>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">Enviar email →</span>
                  </div>
                </div>

                {/* Schedule */}
                <div className="flex items-start space-x-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                  <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                    <ClockIcon className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Horarios de Atención</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{CLINIC_INFO.contact.schedule}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white text-center mb-8">
                <h3 className="text-xl font-bold mb-2">¿Necesitas atención inmediata?</h3>
                <p className="mb-4 text-green-100">Contáctanos por WhatsApp para respuesta rápida</p>
                <a 
                  href={`https://wa.me/${CLINIC_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=Hola, necesito información sobre servicios médicos`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>Enviar WhatsApp</span>
                </a>
              </div>
              
              {/* Interactive Map */}
              <div>
                <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <MapPinIcon className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400" />
                  Nuestra Ubicación
                </h3>
                <div className='relative z-0 rounded-2xl overflow-hidden shadow-xl'>
                  <Map 
                    height="350px" 
                    zoom={16} 
                    showPopup={true}
                    className="border border-gray-200 dark:border-gray-600"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                  Haz clic en el mapa para obtener direcciones
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced PQRS Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-yellow-900/10 transition-colors duration-300 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(245 158 11 / 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-amber-700 dark:text-amber-400 rounded-full px-8 py-3 mb-6 shadow-lg">
                <ClipboardDocumentCheckIcon className="w-6 h-6" />
                <span className="font-medium text-lg">Sistema PQRSF</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                Tu Voz <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Importa</span>
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones.
                Ayúdanos a mejorar nuestros servicios con tu retroalimentación valiosa.
              </p>
            </div>

            {/* PQRS Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-all duration-300">
                  <DocumentTextIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Peticiones</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Solicitudes de información, servicios o documentos específicos
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-all duration-300">
                  <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Quejas</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Manifestaciones de insatisfacción con nuestros servicios
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-200 dark:group-hover:bg-red-800/50 transition-all duration-300">
                  <ShieldExclamationIcon className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Reclamos</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Solicitudes de corrección o revisión de actuaciones
                </p>
              </div>

              <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-all duration-300">
                  <HeartIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Felicitaciones</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Reconocimientos por un servicio excepcional recibido
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
                Proceso de Atención PQRSF
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Envía tu PQRSF</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Completa el formulario con todos los detalles necesarios
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Procesamos</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Analizamos tu caso y trabajamos en la mejor solución
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Te Respondemos</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Recibes una respuesta completa en máximo 15 días hábiles
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <button
                onClick={() => {
                  // Simplemente renderizar el PQRSForm que ya tiene su propio modal
                  setShowPQRSForm(true);
                }}
                className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold py-4 px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3 mx-auto"
                aria-label="Abrir formulario de PQRS (Peticiones, Quejas, Reclamos y Sugerencias)"
                type="button"
              >
                <ClipboardDocumentCheckIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-lg">Presentar PQRSF</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <ClockIcon className="w-4 h-4 text-amber-500" />
                  <span><strong>Tiempo de respuesta:</strong> 15 días hábiles máximo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="w-4 h-4 text-green-500" />
                  <span><strong>Normativa:</strong> Cumplimos legislación colombiana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PQRS Form - Renderizado directamente cuando se necesita */}
      {showPQRSForm && (
        <PQRSForm onSuccess={() => setShowPQRSForm(false)} />
      )}


      </div>
    </>
  );
};

export default ContactPage;
