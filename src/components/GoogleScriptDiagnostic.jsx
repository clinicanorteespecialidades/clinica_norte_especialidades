import React, { useState } from 'react';
import { testGoogleScriptConnection, submitAppointment, submitPQRS } from '../services/googleScript';

const GoogleScriptDiagnostic = () => {
  const [testResults, setTestResults] = useState(null);
  const [testing, setTesting] = useState(false);
  const [logs, setLogs] = useState([]);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { message, type, timestamp }]);
  };

  const clearLogs = () => {
    setLogs([]);
    setTestResults(null);
  };

  const runConnectionTest = async () => {
    setTesting(true);
    addLog('🔍 Iniciando diagnóstico de conexión...', 'info');
    
    try {
      const result = await testGoogleScriptConnection();
      setTestResults(result);
      
      if (result.success) {
        addLog('✅ Conexión exitosa', 'success');
      } else {
        addLog(`❌ Error: ${result.message}`, 'error');
        if (result.suggestion) {
          addLog(`💡 Sugerencia: ${result.suggestion}`, 'warning');
        }
      }
    } catch (error) {
      addLog(`💥 Error inesperado: ${error.message}`, 'error');
    } finally {
      setTesting(false);
    }
  };

  const testAppointmentSubmission = async () => {
    setTesting(true);
    addLog('📅 Probando envío de cita...', 'info');
    
    const testData = {
      firstName: 'Test',
      lastName: 'Usuario',
      email: 'test@example.com',
      phone: '1234567890',
      documentType: 'cedula',
      documentNumber: '12345678',
      appointmentType: 'primera_vez',
      specialty: 'medicina_general',
      preferredDate: '2024-12-20',
      preferredTime: '09:00',
      insurance: 'eps_sanitas',
      comments: 'Prueba de conexión'
    };

    try {
      const result = await submitAppointment(testData);
      
      if (result.success) {
        addLog('✅ Cita de prueba enviada exitosamente', 'success');
      } else {
        addLog(`❌ Error enviando cita: ${result.message}`, 'error');
      }
    } catch (error) {
      addLog(`💥 Error en envío de cita: ${error.message}`, 'error');
    } finally {
      setTesting(false);
    }
  };

  const testPQRSSubmission = async () => {
    setTesting(true);
    addLog('📝 Probando envío de PQRS...', 'info');
    
    const testData = {
      firstName: 'Test',
      lastName: 'Usuario',
      email: 'test@example.com',
      phone: '1234567890',
      documentType: 'cedula',
      documentNumber: '12345678',
      requestType: 'queja',
      subject: 'Prueba de conexión',
      description: 'Esta es una prueba del sistema PQRS'
    };

    try {
      const result = await submitPQRS(testData);
      
      if (result.success) {
        addLog('✅ PQRS de prueba enviado exitosamente', 'success');
      } else {
        addLog(`❌ Error enviando PQRS: ${result.message}`, 'error');
      }
    } catch (error) {
      addLog(`💥 Error en envío de PQRS: ${error.message}`, 'error');
    } finally {
      setTesting(false);
    }
  };

  const getLogColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-700 bg-green-50';
      case 'error': return 'text-red-700 bg-red-50';
      case 'warning': return 'text-amber-700 bg-amber-50';
      default: return 'text-blue-700 bg-blue-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          🔧 Diagnóstico Google Apps Script
        </h2>
        <p className="text-gray-600 mt-2">
          Herramientas para diagnosticar la conexión con Google Apps Script
        </p>
      </div>

      {/* Panel de Configuración */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">📋 Configuración Actual</h3>
        <div className="text-sm text-gray-700">
          <p><strong>URL:</strong> {import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'No configurada'}</p>
          <p><strong>Estado:</strong> {import.meta.env.VITE_GOOGLE_SCRIPT_URL ? '✅ Configurada' : '❌ No configurada'}</p>
        </div>
      </div>

      {/* Botones de Prueba */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <button
          onClick={runConnectionTest}
          disabled={testing}
          className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {testing ? '🔄 Probando...' : '🔍 Probar Conexión'}
        </button>
        
        <button
          onClick={testAppointmentSubmission}
          disabled={testing}
          className="px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {testing ? '🔄 Enviando...' : '📅 Probar Cita'}
        </button>
        
        <button
          onClick={testPQRSSubmission}
          disabled={testing}
          className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {testing ? '🔄 Enviando...' : '📝 Probar PQRS'}
        </button>
      </div>

      {/* Botón de Limpiar */}
      <div className="mb-6">
        <button
          onClick={clearLogs}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          🗑️ Limpiar Logs
        </button>
      </div>

      {/* Resultados de Prueba */}
      {testResults && (
        <div className="mb-6 p-4 rounded-lg border-2 border-dashed border-gray-300">
          <h3 className="font-semibold text-gray-900 mb-3">📊 Último Resultado</h3>
          <div className={`p-3 rounded-lg ${testResults.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border`}>
            <p className={`font-medium ${testResults.success ? 'text-green-800' : 'text-red-800'}`}>
              {testResults.success ? '✅' : '❌'} {testResults.message}
            </p>
            {testResults.suggestion && (
              <p className="text-orange-700 mt-2 text-sm">
                💡 <strong>Sugerencia:</strong> {testResults.suggestion}
              </p>
            )}
            {testResults.details && (
              <details className="mt-3">
                <summary className="cursor-pointer text-sm font-medium text-gray-600">
                  Ver detalles técnicos
                </summary>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                  {JSON.stringify(testResults.details, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
      )}

      {/* Logs */}
      {logs.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">📜 Logs de Actividad</h3>
          <div className="max-h-96 overflow-y-auto bg-gray-50 rounded-lg p-4 space-y-2">
            {logs.map((log, index) => (
              <div key={index} className={`p-2 rounded text-sm ${getLogColor(log.type)}`}>
                <span className="font-medium">[{log.timestamp}]</span> {log.message}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Guía de Solución de Problemas */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-3">🆘 Guía de Solución de Problemas</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Error de CORS:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Verificar que el Google Apps Script esté desplegado como "Web App"</li>
            <li>Configuración: "Ejecutar como: Yo" y "Acceso: Cualquier usuario"</li>
            <li>Redeployar después de hacer cambios al código</li>
            <li>Esperar unos minutos para que los cambios se propaguen</li>
          </ul>
          
          <p className="mt-3"><strong>Error 404:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Verificar que la URL en .env.local sea correcta</li>
            <li>Asegurarse de que el script esté desplegado y publicado</li>
          </ul>
          
          <p className="mt-3"><strong>Otras soluciones:</strong></p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Verificar que el SHEET_ID esté configurado en el Google Apps Script</li>
            <li>Comprobar permisos de la hoja de cálculo</li>
            <li>Revisar logs en Google Apps Script Editor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GoogleScriptDiagnostic;
