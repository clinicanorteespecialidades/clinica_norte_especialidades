import { useState } from 'react';
import { MEDICAL_SPECIALTIES } from '../data/medical-data';
import { CLINIC_INFO } from '../shared/constants/config';

const GoogleScriptDebugger = () => {
  const [testResults, setTestResults] = useState([]);
  const [testing, setTesting] = useState(false);

  const addLog = (message, type = 'info', data = null) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      message,
      type,
      data
    };
    setTestResults(prev => [...prev, newLog]);
  };

  const clearLogs = () => setTestResults([]);

  // Test básico de conexión
  const testConnection = async () => {
    addLog('🔍 Probando conexión básica...', 'info');
    
    try {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      if (!url) {
        throw new Error('URL de Google Script no configurada');
      }

      const response = await fetch(url, { method: 'GET' });
      const result = await response.json();
      
      addLog('✅ Conexión exitosa', 'success', result);
    } catch (error) {
      addLog('❌ Error de conexión: ' + error.message, 'error');
    }
  };

  // Test de envío POST
  const testPOST = async () => {
    addLog('📤 Probando envío POST...', 'info');
    
    try {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      const testData = {
        action: 'submitAppointment',
        data: {
          nombre: 'Juan Test POST',
          telefono: '+57 300 123 4567',
          email: 'test@post.com',
          especialidad: 'Medicina General',
          fecha_cita: '2025-08-15',
          hora_preferida: '09:00',
          motivo: 'Test POST directo',
          acepta_terminos: 'Sí',
          acepta_datos: 'Sí'
        },
        timestamp: new Date().toISOString()
      };

      addLog('📊 Datos POST a enviar:', 'info', testData);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
      });

      const result = await response.json();
      addLog('✅ Respuesta POST:', response.ok ? 'success' : 'warning', result);
      
    } catch (error) {
      addLog('❌ Error POST: ' + error.message, 'error');
    }
  };

  // Test de envío GET (fallback)
  const testGET = async () => {
    addLog('📤 Probando envío GET (fallback)...', 'info');
    
    try {
      const url = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
      const testData = {
        nombre: 'Maria Test GET',
        telefono: '+57 300 987 6543',
        email: 'test@get.com',
        especialidad: 'Cardiología',
        fecha_cita: '2025-08-16',
        hora_preferida: '10:30',
        motivo: 'Test GET fallback',
        acepta_terminos: 'Sí',
        acepta_datos: 'Sí'
      };

      const params = new URLSearchParams({
        action: 'submitAppointment',
        data: JSON.stringify(testData),
        timestamp: new Date().toISOString()
      });

      const fullUrl = `${url}?${params}`;
      addLog('🔗 URL GET generada:', 'info', { url: fullUrl, params: Object.fromEntries(params) });

      const response = await fetch(fullUrl, { method: 'GET' });
      const result = await response.json();
      
      addLog('✅ Respuesta GET:', 'success', result);
      
    } catch (error) {
      addLog('❌ Error GET: ' + error.message, 'error');
    }
  };

  // Test usando el servicio real
  const testRealService = async () => {
    addLog('🎯 Probando servicio real (como el formulario)...', 'info');
    
    try {
      const { submitAppointment } = await import('../services/googleScript');
      
      const testData = {
        patientName: 'Carlos Test Real',
        patientPhone: '+57 300 555 1234',
        patientEmail: 'test@real.com',
        specialty: 'Neurología',
        preferredDate: '2025-08-17',
        preferredTime: '14:00',
        reason: 'Test usando servicio real del formulario',
        acceptTerms: true,
        acceptData: true
      };

      addLog('📊 Datos del formulario:', 'info', testData);

      const result = await submitAppointment(testData);
      addLog('✅ Resultado del servicio real:', 'success', result);
      
    } catch (error) {
      addLog('❌ Error servicio real: ' + error.message, 'error');
    }
  };

  // Test completo
  const runFullTest = async () => {
    setTesting(true);
    clearLogs();
    
    addLog('🚀 Iniciando diagnóstico completo...', 'info');
    
    await testConnection();
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await testPOST();
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await testGET();
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    await testRealService();
    
    addLog('🏁 Diagnóstico completo finalizado', 'info');
    setTesting(false);
  };

  const getLogColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-800 bg-green-50 border-green-200';
      case 'error': return 'text-red-800 bg-red-50 border-red-200';
      case 'warning': return 'text-yellow-800 bg-yellow-50 border-yellow-200';
      default: return 'text-blue-800 bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        🐛 Depurador de Google Apps Script
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Panel de Control */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Panel de Control</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-700 mb-3">Información del Sistema</h3>
            <div className="text-sm space-y-1">
              <p><strong>Google Script URL:</strong> {import.meta.env.VITE_GOOGLE_SCRIPT_URL ? '✅ Configurado' : '❌ No configurado'}</p>
              <p><strong>Especialidades:</strong> {MEDICAL_SPECIALTIES.length}</p>
              <p><strong>Estado:</strong> {testing ? '🔄 Ejecutando tests...' : '⏳ Esperando'}</p>
            </div>
          </div>

          <div className="space-y-2">
            <button
              onClick={testConnection}
              disabled={testing}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              🔍 Test Conexión
            </button>
            
            <button
              onClick={testPOST}
              disabled={testing}
              className="w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              📤 Test POST
            </button>
            
            <button
              onClick={testGET}
              disabled={testing}
              className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 disabled:opacity-50 transition-colors"
            >
              📥 Test GET (Fallback)
            </button>
            
            <button
              onClick={testRealService}
              disabled={testing}
              className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 disabled:opacity-50 transition-colors"
            >
              🎯 Test Servicio Real
            </button>
            
            <button
              onClick={runFullTest}
              disabled={testing}
              className="w-full py-3 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 transition-colors font-medium"
            >
              {testing ? '⏳ Ejecutando...' : '🚀 Test Completo'}
            </button>
            
            <button
              onClick={clearLogs}
              disabled={testing}
              className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:opacity-50 transition-colors"
            >
              🗑️ Limpiar Logs
            </button>
          </div>
        </div>

        {/* Panel de Resultados */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Resultados del Diagnóstico</h2>
          
          <div className="bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto space-y-3">
            {testResults.length === 0 ? (
              <p className="text-gray-500 text-center">No hay logs aún. Ejecuta un test para ver los resultados.</p>
            ) : (
              testResults.map((log) => (
                <div key={log.id} className={`p-3 rounded border ${getLogColor(log.type)}`}>
                  <div className="flex items-start justify-between">
                    <span className="font-medium">{log.message}</span>
                    <span className="text-xs opacity-75">{log.timestamp}</span>
                  </div>
                  
                  {log.data && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs font-medium opacity-75">Ver datos</summary>
                      <pre className="mt-1 text-xs bg-black bg-opacity-10 p-2 rounded overflow-auto">
                        {JSON.stringify(log.data, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">📝 Instrucciones para Solucionar</h3>
        <div className="text-yellow-700 space-y-2 text-sm">
          <p><strong>1. Copia el código corregido:</strong> Usa el archivo <code>google-apps-script-CORREGIDO.js</code> que acabo de crear</p>
          <p><strong>2. Reemplaza en Google Apps Script:</strong> Pega TODO el código nuevo en tu Apps Script</p>
          <p><strong>3. Verifica el SHEET_ID:</strong> Asegúrate de que el ID de tu Google Sheet esté correcto</p>
          <p><strong>4. Implementa de nuevo:</strong> Implementar → Nueva implementación → Web App</p>
          <p><strong>5. Ejecuta el test completo:</strong> Usa el botón "🚀 Test Completo" para verificar que todo funciona</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleScriptDebugger;
