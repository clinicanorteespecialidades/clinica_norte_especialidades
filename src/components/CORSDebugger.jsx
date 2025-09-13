import React, { useState } from 'react';

const CORSDebugger = () => {
  const [testResults, setTestResults] = useState([]);
  const [testing, setTesting] = useState(false);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setTestResults(prev => [...prev, { message, type, timestamp }]);
  };

  const clearLogs = () => setTestResults([]);

  const testURL = async (url, description) => {
    addLog(`🧪 Probando: ${description}`, 'info');
    addLog(`📍 URL: ${url}`, 'info');

    try {
      // Primero probar un GET simple
      addLog('1️⃣ Probando petición GET...', 'info');
      
      const getResponse = await fetch(url, {
        method: 'GET',
        mode: 'cors'
      });
      
      addLog(`✅ GET exitoso - Status: ${getResponse.status}`, 'success');
      
      const getResult = await getResponse.text();
      addLog(`📄 Respuesta GET: ${getResult.substring(0, 200)}...`, 'info');

    } catch (error) {
      addLog(`❌ Error en GET: ${error.message}`, 'error');
    }

    try {
      // Luego probar un POST
      addLog('2️⃣ Probando petición POST...', 'info');
      
      const postResponse = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'testConnection',
          timestamp: new Date().toISOString()
        })
      });
      
      addLog(`✅ POST exitoso - Status: ${postResponse.status}`, 'success');
      
      const postResult = await postResponse.json();
      addLog(`📊 Respuesta POST: ${JSON.stringify(postResult, null, 2)}`, 'success');

    } catch (error) {
      addLog(`❌ Error en POST: ${error.message}`, 'error');
      
      // Análisis detallado del error
      if (error.message.includes('CORS')) {
        addLog('🔍 Análisis: Error de CORS detectado', 'warning');
        addLog('💡 Solución: Verificar configuración de Google Apps Script', 'warning');
        addLog('📝 Asegurar que uses URL /exec (no /echo)', 'warning');
        addLog('⚙️ Verificar que "Who has access" = "Anyone"', 'warning');
      }
      
      if (error.message.includes('Failed to fetch')) {
        addLog('🔍 Análisis: Fallo de conexión', 'warning');
        addLog('💡 Posibles causas: URL incorrecta, script no implementado', 'warning');
      }
    }
  };

  const runDiagnosticTests = async () => {
    setTesting(true);
    clearLogs();
    
    addLog('🚀 Iniciando diagnóstico completo de CORS...', 'info');
    
    const currentURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    if (!currentURL) {
      addLog('❌ No hay URL configurada en .env.local', 'error');
      setTesting(false);
      return;
    }

    await testURL(currentURL, 'URL actual del .env.local');
    
    // Sugerir URL alternativa si la actual es /echo
    if (currentURL.includes('/echo')) {
      addLog('⚠️ DETECTADO: Estás usando URL /echo', 'warning');
      addLog('💡 RECOMENDACIÓN: Cambiar a URL /exec', 'warning');
      addLog('📋 PASOS:', 'info');
      addLog('1. Ir a Apps Script → Deploy → Manage deployments', 'info');
      addLog('2. Obtener URL que termine en /exec', 'info');
      addLog('3. Actualizar .env.local con esa URL', 'info');
    }
    
    setTesting(false);
  };

  const getLogColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🔧 Diagnóstico CORS - Google Apps Script
        </h2>
        
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              onClick={runDiagnosticTests}
              disabled={testing}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {testing ? '🔄 Diagnosticando...' : '🚀 Ejecutar Diagnóstico'}
            </button>
            <button
              onClick={clearLogs}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              🧹 Limpiar Logs
            </button>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-4 h-96 overflow-y-auto">
          {testResults.length === 0 ? (
            <p className="text-gray-400">Haz clic en "Ejecutar Diagnóstico" para comenzar...</p>
          ) : (
            <div className="space-y-2">
              {testResults.map((log, index) => (
                <div
                  key={index}
                  className={`p-2 rounded text-sm font-mono ${getLogColor(log.type)}`}
                >
                  <span className="opacity-75">[{log.timestamp}]</span> {log.message}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">📋 Checklist de Solución:</h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>☐ Verificar que Google Apps Script esté implementado como Web App</li>
            <li>☐ "Execute as" = "Me"</li>
            <li>☐ "Who has access" = "Anyone"</li>
            <li>☐ Usar URL que termine en /exec (NO /echo)</li>
            <li>☐ Código de Google Apps Script incluye función doOptions()</li>
            <li>☐ Variable VITE_GOOGLE_SCRIPT_URL en .env.local correcta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CORSDebugger;
