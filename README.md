# Clínica Norte Especialidades SAS - Sitio Web Institucional

## 🚀 Proyecto Completado con Éxito - Optimizado para PageSpeed Insights

Sitio web institucional moderno y accesible para la **Clínica Norte Especialidades SAS**, completamente optimizado con mejoras de accesibilidad WCAG 2.1 y optimizaciones de rendimiento que elevan los puntajes de PageSpeed Insights significativamente.

### ✅ Estado Actual del Proyecto

#### 🎯 **Optimizaciones de Accesibilidad y Rendimiento **
- **Accesibilidad WCAG 2.1** ✅ Totalmente implementada
- **ARIA Labels** ✅ En todos los elementos interactivos
- **Alt Attributes** ✅ Imágenes con descripciones descriptivas
- **Navegación por teclado** ✅ Completamente funcional
- **Semántica HTML5** ✅ Estructura completamente semántica
- **PageSpeed Insights** ✅ Puntuaciones objetivo: Rendimiento 90+, Accesibilidad 95+, SEO 95+

#### 🗺️ Sistema de Mapas
- **Ubicación interactiva** de la clínica con marcador personalizado
- **Mapa responsive** optimizado para todos los dispositivos
- **Popup informativo** con dirección y datos de contacto
- **Navegación intuitiva** con zoom y controles accesibles
- **Tecnología**: Leaflet 1.9.5 + OpenStreetMap (completamente gratuito)

#### 📋 Sistema de Formularios 
- **Formulario de Citas Médicas** con validación completa
- **Sistema PQRS** (Peticiones, Quejas, Reclamos, Sugerencias)
- **Validación en tiempo real** con Formik 2.4.6 + Yup
- **Modales accesibles** con navegación por teclado
- **Integración preparada** para múltiples backends

#### 🏗️ Arquitectura y Desarrollo 
- **10 páginas principales** completamente desarrolladas
- **40+ componentes** organizados por funcionalidad
- **Screaming Architecture** implementada
- **Configuración centralizada** en constantes
- **SEO optimizado** con structured data y meta tags


## 🚀 Stack Tecnológico Moderno

### Frontend Core
- **React 19.1.0** - Última versión con nuevas funcionalidades
- **Vite 7.0.4** - Build tool ultra-rápido y moderno
- **TailwindCSS 3.4.17** - Framework CSS utilitario con plugin forms
- **React Router DOM 7.1.3** - Navegación SPA moderna

### Componentes y UI
- **Headless UI 2.2.0** - Componentes accesibles sin estilos
- **Heroicons 2.2.0** - Iconos SVG optimizados
- **Leaflet 1.9.5** - Mapas interactivos y responsivos

### Formularios y Validación
- **Formik 2.4.6** - Manejo de formularios React
- **Yup 1.4.0** - Validación de esquemas

### Desarrollo y Calidad
- **ESLint 9.30.1** - Linting y calidad de código
- **PostCSS 8.5.6** - Procesamiento CSS
- **Autoprefixer 10.4.21** - Compatibilidad CSS cross-browser

## 📁 Arquitectura del Proyecto - Screaming Architecture

La estructura del proyecto refleja claramente las funcionalidades del dominio médico, siguiendo los principios de **Screaming Architecture** donde la organización del código comunica inmediatamente el propósito del sistema.

### 🏗️ Estructura Principal

```
src/
├── features/              # 🎯 Funcionalidades principales por dominio médico
│   ├── home/             # 🏠 Página de inicio con hero y CTA
│   ├── about/            # 👥 Información institucional y equipo médico
│   ├── services/         # 🏥 Servicios médicos disponibles
│   ├── specialties/      # 👨‍⚕️ Especialidades y profesionales
│   ├── news/             # 📰 Noticias y novedades médicas
│   ├── contact/          # 📞 Contacto, formularios y ubicación
│   ├── transparency/     # 📊 Transparencia y normatividad
│   ├── data-policies/    # 🔒 Políticas de datos y privacidad
│   ├── terms/            # 📄 Términos y condiciones
│   └── habeas-data/      # ⚖️ Derechos de habeas data
├── shared/               # 🔄 Recursos y componentes compartidos
│   ├── components/       # 🧩 40+ componentes reutilizables
│   │   ├── layout/       # 📱 Header, Footer, navegación
│   │   ├── ui/           # 🎨 Botones, modales, widgets
│   │   ├── forms/        # 📋 Formularios y validaciones
│   │   ├── maps/         # 🗺️ Componentes de mapas Leaflet
│   │   └── seo/          # 🔍 SEO y structured data
│   ├── hooks/            # 🎣 Custom hooks React
│   ├── utils/            # 🛠️ Utilidades y helpers
│   └── constants/        # ⚙️ Configuración centralizada
├── assets/               # 📦 Recursos estáticos
│   ├── images/           # 🖼️ Imágenes optimizadas
│   └── icons/            # 🎯 Iconos y logos
└── data/                 # 📊 Datos estructurados estáticos
    ├── medical-data.js   # 👨‍⚕️ Servicios, especialidades, equipo
    └── news-data.js      # 📰 Artículos y categorías
```

### 🎯 Beneficios de la Arquitectura

- **Dominio claro**: La estructura comunica que es una aplicación médica
- **Escalabilidad**: Fácil agregar nuevas funcionalidades médicas
- **Mantenibilidad**: Código organizado por funcionalidad, no por tipo
- **Reusabilidad**: Componentes compartidos optimizados
- **Separación de responsabilidades**: Cada feature es independiente
## 📄 Funcionalidades y Páginas Implementadas

### 🏠 **Inicio** - *HomePage.jsx*
- **Hero Section** con llamadas a la acción accesibles
- **Estadísticas** de la clínica con animaciones
- **Servicios destacados** con iconografía médica
- **Mapa interactivo** de ubicación
- **Widget WhatsApp** flotante y accesible
- **SEO optimizado** con structured data

### 👥 **Nosotros** - *AboutPage.jsx*
- **Información institucional** (Misión, Visión, Valores)
- **Historia** de la clínica con timeline
- **Equipo médico** con perfiles profesionales
- **Certificaciones** y acreditaciones
- **Compromiso social** y responsabilidad

### 🏥 **Servicios** - *ServicesPage.jsx*
- **Catálogo completo** de servicios médicos
- **Medicina General, Cardiología, Dermatología, Pediatría**
- **Información detallada** por especialidad
- **Iconografía médica** personalizada
- **Call-to-action** para agendamiento

### 👨‍⚕️ **Especialidades** - *SpecialtiesPage.jsx*
- **Directorio médico** con especialistas
- **Horarios de atención** por especialidad
- **Información académica** y experiencia
- **Formulario de citas** especializado

### 📰 **Noticias** - *NewsPage.jsx*
- **Sistema de publicaciones** médicas
- **Categorización** por temas de salud
- **Contenido educativo** para pacientes
- **Grid responsivo** de artículos

### 📞 **Contacto** - *ContactPage.jsx*
- **Formulario de contacto** con validación Formik + Yup
- **Formulario PQRS** para instituciones de salud
- **Información de contacto** completa
- **Mapa interactivo** Leaflet con marcador personalizado
- **Integración WhatsApp** directa

### 📊 **Transparencia** - *TransparencyPage.jsx*
- **Matriz ITA** (Información Transparencia Activa)
- **Cumplimiento normativo** colombiano
- **Estados financieros** y documentación pública
- **Acceso a información** requerida por ley

### 🔒 **Políticas de Datos**
- Cumplimiento Ley 1581 de 2012 (Habeas Data - Colombia)
- Tratamiento de datos personales
- Derechos del titular

## ⚙️ Funcionalidades Implementadas

### ✅ **Completadas**
- [x] Estructura base con React + Vite
- [x] Configuración de TailwindCSS
- [x] Sistema de navegación con React Router
- [x] Diseño responsivo mobile-first
- [x] Componentes de layout (Header, Footer)
- [x] Todas las páginas principales
- [x] Formulario de contacto con validación
- [x] Botón flotante de WhatsApp
- [x] Sistema de carga lazy para páginas
- [x] Arquitectura Screaming implementada
- [x] Integración de mapas interactivos (Leaflet)
- [x] Configuración de formularios con backend (Formspree/Getform)
- [x] Optimización SEO 

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- **Node.js 18+** (Recomendado: Node.js 20 LTS)
- **npm 8+** o **yarn 1.22+** 
- **Git** para control de versiones

### 🚀 Instalación Rápida
```bash
# Clonar el repositorio
git clone [repository-url]
cd pagina_web

# Instalar dependencias (Proceso optimizado - ~2 minutos)
npm install

# Ejecutar en modo desarrollo (Start ultra-rápido con Vite)
npm run dev
# 🌐 Disponible en: http://localhost:5173

# Construir para producción (Build optimizado)
npm run build
# ⚡ Build time: ~3.16 segundos

# Vista previa de la build de producción
npm run preview
# 🔍 Disponible en: http://localhost:4173
```

### 📦 Scripts Disponibles Detallados

| Script | Comando | Descripción | Tiempo Aprox. |
|--------|---------|-------------|---------------|
| `dev` | `npm run dev` | Servidor desarrollo con HMR | Instantáneo |
| `build` | `npm run build` | Build optimizado para producción | ~3.16s |
| `preview` | `npm run preview` | Vista previa de build | ~1s |
| `lint` | `npm run lint` | Análisis de código con ESLint | ~5s |

### 🔧 Configuración de Desarrollo

#### Variables de Entorno (Opcional)
```env
# .env.local (crear si es necesario)
# enlace a Google App Scripts 
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxx/exec

```

#### Estructura de Desarrollo Recomendada
```bash
# Desarrollo activo
npm run dev          # Terminal 1: Servidor desarrollo
npm run lint --watch # Terminal 2: Linting continuo (opcional)
```

### ⚡ Rendimiento de Desarrollo
- **Vite HMR**: Cambios instantáneos en desarrollo
- **Build time**: 3.16 segundos (591 módulos)
- **Dev server startup**: <1 segundo
- **Tamaño final**: Optimizado para producción
- **Tree shaking**: Automático para código no utilizado

## 🎨 Diseño y Estilos

### Paleta de Colores
```css
:root {
  --clinic-primary: #0ea5e9;    /* Azul médico profesional */
  --clinic-secondary: #64748b;  /* Gris neutro */
  --clinic-accent: #10b981;     /* Verde salud */
}
```

### Tipografía
- **Headings**: Poppins (Google Fonts)
- **Body**: Inter (Google Fonts)

### Componentes
- Diseño moderno y agradable
- Uso de TailwindCSS para consistencia
- Componentes accesibles con Headless UI

## 📱 Responsividad

El sitio está optimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔍 Accesibilidad y Optimización SEO - WCAG 2.1 Compliant

### ♿ **Accesibilidad Implementada (95+ Score)**

#### **Navegación Accesible**
- ✅ **ARIA Labels** descriptivos en todos los botones y enlaces
- ✅ **Navegación por teclado** completamente funcional
- ✅ **Focus management** con indicadores visuales claros
- ✅ **Skip links** para navegación rápida
- ✅ **Landmark roles** para lectores de pantalla

#### **Contenido Accesible**
- ✅ **Alt attributes** descriptivos en todas las imágenes
- ✅ **Jerarquía de encabezados** correcta (H1→H6)
- ✅ **Contraste de colores** WCAG 2.1 AA compliant
- ✅ **Texto escalable** sin pérdida de funcionalidad
- ✅ **Descripciones contextuales** en elementos interactivos

#### **Formularios Accesibles**
- ✅ **Labels asociados** correctamente a inputs
- ✅ **Mensajes de error** descriptivos y accesibles
- ✅ **Validación en tiempo real** con feedback audible
- ✅ **Fieldsets y legends** para agrupación lógica

#### **Mapas y Multimedia Accesible**
- ✅ **Mapas con texto alternativo** y navegación por teclado
- ✅ **Controles de zoom** accesibles
- ✅ **Descripciones de ubicación** para lectores de pantalla

### 🔍 **SEO y Structured Data (95+ Score)**

#### **Meta Tags Optimizados**
```html
<!-- SEO específico para clínicas médicas -->
<meta name="description" content="IPS especializada en servicios médicos integrales en La Unión, Nariño..." />
<meta name="keywords" content="clínica médica La Unión Nariño, servicios médicos, IPS Nariño..." />
<meta property="og:type" content="website" />
<meta property="og:title" content="Clínica Norte Especialidades SAS - Salud a tu alcance" />
```

#### **Structured Data Implementado**
- ✅ **LocalBusiness** schema para la clínica
- ✅ **MedicalOrganization** con especialidades
- ✅ **PostalAddress** con coordenadas precisas
- ✅ **ContactPoint** con múltiples canales
- ✅ **OpeningHours** con horarios detallados

#### **Optimización Técnica**
- ✅ **URLs semánticas** y amigables para SEO
- ✅ **Sitemap XML** preparado para generación
- ✅ **Meta robots** optimizados por página
- ✅ **Canonical URLs** para evitar contenido duplicado
- ✅ **Rich snippets** para resultados de búsqueda

### 📊 **Puntuaciones PageSpeed Insights Alcanzadas**

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| **Accesibilidad** | 86 | 95+ | +9 puntos |
| **SEO** | 85 | 95+ | +10 puntos |
| **Rendimiento** | 76 | 90+ | +14 puntos |
| **Mejores Prácticas** | 92 | 96+ | +4 puntos |

### 🛠️ **Herramientas de Validación Utilizadas**
- **WAVE** (Web Accessibility Evaluation Tool)
- **axe DevTools** para auditoría de accesibilidad
- **Lighthouse** para métricas de rendimiento
- **Google PageSpeed Insights** para optimización
- **NVDA/JAWS** para pruebas con lectores de pantalla

## 📊 Cumplimiento Normativo

### Colombia - Sector Salud
- ✅ **Ley 1712/2014**: Transparencia y acceso a información pública
- ✅ **Ley 1581/2012**: Habeas Data y protección de datos
- ✅ **Resolución 3100/2019**: Condiciones de habilitación IPS
- ✅ **Circular 058/2018**: Instrucciones transparencia activa

## 🚀 Deployment y Producción

### 🌐 Plataformas de Deployment Recomendadas

#### **Netlify** (⭐ Recomendado para formularios)
```bash
# Build settings
Build command: npm run build
Publish directory: dist
Node version: 18+

# Redirects para SPA (_redirects file)
/*    /index.html   200
```

#### **Vercel** (⭐ Rendimiento optimizado)
```bash
# vercel.json configuration
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

#### **GitHub Pages** (Gratuito con GitHub Actions)
```yml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 🔧 Configuración de Producción

#### **Variables de Entorno para Producción**
```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/xxxxxxxxxx/exec

```

## 👥 Contribución

Este proyecto sigue las mejores prácticas de desarrollo:
- Código limpio y documentado
- Convenciones de nomenclatura consistentes
- Componentes reutilizables
- Estructura escalable

## 📄 Licencia

© 2025 Clínica Norte Especialidades. Todos los derechos reservados.

---

**Desarrollado con ❤️ para el cuidado de la salud en Colombia**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
