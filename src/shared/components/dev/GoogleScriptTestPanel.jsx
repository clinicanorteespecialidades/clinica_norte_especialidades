import { useState } from 'react';
import { getGoogleScriptStatus, testGoogleScriptConnection } from '../../../services/googleScript';

const GoogleScriptTestPanel = () => {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const status = getGoogleScriptStatus();

  const handleTestConnection = async () => {
    setIsLoading(true);
    try {
      const result = await testGoogleScriptConnection();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        message: `Error: ${error.message}`,
        suggestion: 'Verificar que el Google Apps Script esté desplegado correctamente'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        🔧 Panel de Pruebas Google Apps Script
      </h2>
      
      {/* Estado de configuración */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Estado de Configuración</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Google Script URL:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              status.configured 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {status.url}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Entorno:</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
              {status.environment}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Estado:</span>
            <span className={`px-2 py-1 rounded text-sm ${
              status.ready 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {status.ready ? 'Listo' : 'Configuración pendiente'}
            </span>
          </div>
        </div>
      </div>

      {/* Botón de prueba */}
      <div className="mb-6">
        <button
          onClick={handleTestConnection}
          disabled={isLoading}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Probando conexión...' : 'Probar Conexión Google Apps Script'}
        </button>
      </div>

      {/* Resultado de la prueba */}
      {testResult && (
        <div className={`p-4 rounded-lg ${
          testResult.success 
            ? 'bg-green-50 border border-green-200' 
            : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-start space-x-3">
            <div className={`flex-shrink-0 w-5 h-5 mt-0.5 ${
              testResult.success ? 'text-green-500' : 'text-red-500'
            }`}>
              {testResult.success ? '✅' : '❌'}
            </div>
            <div className="flex-1">
              <h4 className={`font-medium ${
                testResult.success ? 'text-green-800' : 'text-red-800'
              }`}>
                {testResult.success ? 'Conexión Exitosa' : 'Error de Conexión'}
              </h4>
              <p className={`mt-1 text-sm ${
                testResult.success ? 'text-green-700' : 'text-red-700'
              }`}>
                {testResult.message}
              </p>
              
              {testResult.suggestion && (
                <p className="mt-2 text-sm text-yellow-700 bg-yellow-100 p-2 rounded">
                  💡 {testResult.suggestion}
                </p>
              )}
              
              {testResult.details && (
                <details className="mt-3">
                  <summary className={`cursor-pointer text-sm font-medium ${
                    testResult.success ? 'text-green-800' : 'text-red-800'
                  }`}>
                    Ver detalles técnicos
                  </summary>
                  <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                    {JSON.stringify(testResult.details, null, 2)}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Instrucciones */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 Instrucciones de Configuración</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Crear Google Sheet con pestañas "Citas" y "PQRS"</li>
          <li>Ir a Extensiones → Apps Script</li>
          <li>Pegar el código de docs/google-apps-script-code.js</li>
          <li>Implementar como Web App (Deploy → New Deployment)</li>
          <li>Copiar la URL del Web App</li>
          <li>Actualizar VITE_GOOGLE_SCRIPT_URL en .env.local</li>
          <li>Reiniciar el servidor (npm run dev)</li>
        </ol>
      </div>

      {/* Beneficios */}
      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h3 className="text-lg font-semibold text-green-900 mb-2">✅ Beneficios de Google Apps Script</h3>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• 100% Gratuito (sin límites)</li>
          <li>• Más simple que AppSheet</li>
          <li>• Integración directa con Google Sheets</li>
          <li>• Deploy inmediato (sin checks)</li>
          <li>• Más confiable y estable</li>
        </ul>
      </div>

      {/* Enlaces útiles */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          📖 Consulta: 
          <a href="/docs/GOOGLE_APPS_SCRIPT_SOLUTION.md" className="text-blue-600 hover:text-blue-700 ml-1">
            Guía completa de configuración
          </a>
        </p>
      </div>
    </div>
  );
};

export default GoogleScriptTestPanel;
