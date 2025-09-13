// Servicio de Google Apps Script MEJORADO - Con estrategia de fallback
// Este servicio es 100% gratuito y sin limitaciones

// Configuración
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

// Verificar que la URL esté configurada
const isConfigured = GOOGLE_SCRIPT_URL && !GOOGLE_SCRIPT_URL.includes('pega_aqui');

/**
 * Función universal para enviar datos a Google Apps Script
 * Intenta POST primero, si falla usa GET como fallback
 */
const sendToGoogleScript = async (action, data = {}) => {
  if (!isConfigured) {
    throw new Error('Google Apps Script no configurado');
  }

  const payload = {
    action,
    data,
    timestamp: new Date().toISOString()
  };

  // Estrategia 1: Intentar POST normal
  try {
    console.log(`📤 Intentando POST para ${action}...`);
    
    const postResponse = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (postResponse.ok) {
      const result = await postResponse.json();
      console.log(`✅ POST exitoso para ${action}`);
      return result;
    } else {
      throw new Error(`POST falló: ${postResponse.status}`);
    }

  } catch (postError) {
    console.log(`⚠️ POST falló para ${action}, intentando GET fallback...`);
    
    // Estrategia 2: Fallback a GET con parámetros
    try {
      const params = new URLSearchParams({
        action,
        data: JSON.stringify(data),
        timestamp: new Date().toISOString()
      });
      
      const getResponse = await fetch(`${GOOGLE_SCRIPT_URL}?${params}`, {
        method: 'GET',
        mode: 'cors'
      });

      if (!getResponse.ok) {
        throw new Error(`GET falló: ${getResponse.status}`);
      }

      const result = await getResponse.json();
      console.log(`✅ GET fallback exitoso para ${action}`);
      
      return {
        ...result,
        methodUsed: 'GET_FALLBACK',
        note: 'POST bloqueado por CORS, usando GET como alternativa'
      };

    } catch (getError) {
      console.error(`❌ Ambos métodos fallaron para ${action}:`, { postError, getError });
      throw new Error(`Conexión falló: POST (${postError.message}) y GET (${getError.message})`);
    }
  }
};

/**
 * Enviar datos de cita médica a Google Apps Script
 * @param {Object} appointmentData - Datos del formulario de cita (ya transformados)
 * @returns {Promise} Respuesta del servidor
 */
export const submitAppointment = async (appointmentData) => {
  try {
    // Los datos ya vienen transformados desde el formulario
    const result = await sendToGoogleScript('submitAppointment', appointmentData);
    
    return {
      success: true,
      message: 'Cita médica registrada exitosamente',
      timestamp: new Date().toISOString(),
      ...result
    };

  } catch (error) {
    console.error('❌ Error enviando cita:', error);
    
    // Fallback a simulación
    console.warn('🔄 Ejecutando modo simulación como fallback');
    return await simulateAppointmentSubmission(appointmentData);
  }
};

/**
 * Enviar datos de PQRS a Google Apps Script
 * @param {Object} pqrsData - Datos del formulario PQRS (ya transformados)
 * @returns {Promise} Respuesta del servidor
 */
export const submitPQRS = async (pqrsData) => {
  try {
    // Los datos ya vienen transformados desde el formulario
    const result = await sendToGoogleScript('submitPQRS', pqrsData);

    return {
      success: true,
      message: 'PQRS registrada exitosamente en Google Sheets',
      timestamp: new Date().toISOString(),
      ...result
    };

  } catch (error) {
    console.error('❌ Error enviando PQRS:', error);

    // Fallback a simulación
    console.warn('🔄 Ejecutando modo simulación como fallback');
    return await simulatePQRSSubmission(pqrsData);
  }
};


/**
 * Verificar el estado de la configuración de Google Apps Script
 * @returns {Object} Estado de la configuración
 */
export const getGoogleScriptStatus = () => {
  return {
    configured: isConfigured,
    url: GOOGLE_SCRIPT_URL ? (isConfigured ? 'Configurado' : 'Pendiente') : 'No configurado',
    environment: import.meta.env.MODE || 'development',
    ready: isConfigured
  };
};

/**
 * Probar la conexión con Google Apps Script
 * @returns {Promise} Resultado de la prueba
 */
/**
 * Probar la conexión con Google Apps Script
 * @returns {Promise} Resultado de la prueba
 */
/**
 * Probar la conexión con Google Apps Script
 * @returns {Promise} Resultado de la prueba
 */
export const testGoogleScriptConnection = async () => {
  if (!isConfigured) {
    return {
      success: false,
      message: 'Google Apps Script no configurado',
      suggestion: 'Configurar VITE_GOOGLE_SCRIPT_URL en .env.local'
    };
  }

  try {
    console.log('🧪 Probando conexión con Google Apps Script...');
    console.log('🔗 URL:', GOOGLE_SCRIPT_URL);

    const result = await sendToGoogleScript('testConnection');
    
    return {
      success: true,
      message: 'Conexión exitosa con Google Apps Script',
      details: {
        url: GOOGLE_SCRIPT_URL,
        timestamp: new Date().toISOString(),
        response: result
      }
    };

  } catch (error) {
    console.error('❌ Error probando conexión:', error);
    
    // Detectar errores específicos de CORS
    if (error.message.includes('CORS') || error.message.includes('No \'Access-Control-Allow-Origin\'')) {
      return {
        success: false,
        message: 'Error de CORS: Google Apps Script no está configurado correctamente',
        suggestion: '1. Verificar que el script esté desplegado como Web App\n2. Configuración: "Ejecutar como: Yo" y "Acceso: Cualquier usuario"\n3. Reimplementar el script después de hacer cambios',
        details: {
          error: 'CORS_ERROR',
          url: GOOGLE_SCRIPT_URL,
          solution: 'Redeployar Google Apps Script con configuración correcta'
        }
      };
    }
    
    return {
      success: false,
      message: `Error de conexión: ${error.message}`,
      suggestion: 'Verificar que la URL de Google Apps Script sea correcta y que el script esté desplegado',
      details: {
        error: error.name,
        url: GOOGLE_SCRIPT_URL,
        message: error.message
      }
    };
  }
};

/**
 * Simulación de envío de cita (para desarrollo y fallback)
 */
const simulateAppointmentSubmission = async (appointmentData) => {
  console.log('🧪 SIMULACIÓN: Enviando cita médica', appointmentData);
  
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: '✅ Cita simulada registrada exitosamente (modo desarrollo)',
    id: `sim-cita-${Date.now()}`,
    timestamp: new Date().toISOString(),
    simulation: true,
    data: appointmentData
  };
};

/**
 * Simulación de envío de PQRS (para desarrollo y fallback)
 */
const simulatePQRSSubmission = async (pqrsData) => {
  console.log('🧪 SIMULACIÓN: Enviando PQRS', pqrsData);
  
  // Simular delay de red
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: '✅ PQRS simulada registrada exitosamente (modo desarrollo)',
    id: `sim-pqrs-${Date.now()}`,
    timestamp: new Date().toISOString(),
    simulation: true,
    data: pqrsData
  };
};
