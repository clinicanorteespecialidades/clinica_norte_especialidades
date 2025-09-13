// Test component para verificar que TailwindCSS funciona
const TestStyles = () => {
  return (
    <div className="p-4 m-4 bg-red-500 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Test TailwindCSS</h1>
      <p className="bg-blue-500 p-2 rounded">
        Si ves este texto en blanco sobre fondo azul, TailwindCSS está funcionando.
      </p>
      <div className="mt-4 flex space-x-2">
        <button className="btn-primary">Botón Primario</button>
        <button className="btn-secondary">Botón Secundario</button>
      </div>
    </div>
  );
};

export default TestStyles;
