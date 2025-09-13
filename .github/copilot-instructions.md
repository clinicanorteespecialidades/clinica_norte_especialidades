<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Proyecto: Clínica Norte Especialidades SAS - Sitio Web Institucional

## Arquitectura del Proyecto

Este proyecto sigue **Screaming Architecture**, donde la estructura refleja claramente las funcionalidades del dominio médico:

- **src/features/** - Contiene las funcionalidades principales del sitio organizadas por dominio
- **src/shared/** - Componentes, utilidades y recursos compartidos
- **src/assets/** - Recursos estáticos (imágenes, iconos, etc.)

## Tecnologías Utilizadas

- **React 18** - Librería principal
- **Vite** - Herramienta de build y desarrollo
- **TailwindCSS** - Framework de estilos utilitarios
- **React Router DOM** - Navegación SPA
- **Headless UI** - Componentes accesibles
- **Leaflet** - Mapas interactivos
- **Formik + Yup** - Formularios y validación

## Convenciones de Código

### Nomenclatura
- **Componentes**: PascalCase (ej. `HeaderNavigation.jsx`)
- **Archivos**: camelCase (ej. `contactForm.js`)
- **Carpetas**: kebab-case (ej. `contact-form`)
- **CSS Classes**: Usar TailwindCSS utilities preferentemente

### Estructura de Componentes
```jsx
// Estructura básica de componente
const ComponentName = ({ prop1, prop2 }) => {
  // Hooks y estado
  // Funciones auxiliares
  // Render
  return (
    <div className="tailwind-classes">
      {/* Contenido */}
    </div>
  );
};

export default ComponentName;
```

### Estilos
- Priorizar clases de TailwindCSS
- Usar variables CSS para colores de la marca clínica
- Implementar diseño responsive mobile-first
- Seguir principios de accesibilidad WCAG 2.1

### Funcionalidades Específicas
- **Formularios**: Usar Formik con validación Yup
- **Navegación**: React Router DOM con rutas lazy loading
- **Mapas**: Leaflet para ubicación de la clínica
- **WhatsApp**: Botón flotante con animación CSS
- **SEO**: Meta tags apropiados en cada página

## Dominio de Negocio

**Clínica Norte Especialidades SAS** es una IPS (Institución Prestadora de Servicios de Salud) que requiere:
- Cumplimiento normativo colombiano (Habeas Data, transparencia)
- Información médica clara y accesible
- Facilitar contacto con pacientes
- Mostrar ubicación y servicios

## Paleta de Colores

```css
:root {
  --clinic-primary: #0ea5e9; /* Azul médico profesional */
  --clinic-secondary: #64748b; /* Gris neutro */
  --clinic-accent: #10b981; /* Verde salud */
}
```

Siempre generar código que respete estas convenciones y la arquitectura establecida.
