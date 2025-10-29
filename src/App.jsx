import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Layout components
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import WhatsAppButton from './shared/components/ui/WhatsAppButton';
import LoadingSpinner from './shared/components/ui/LoadingSpinner';
import ScrollToTop from './shared/components/layout/ScrollToTop';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./features/home/HomePage'));
const AboutPage = lazy(() => import('./features/about/AboutPage'));
const ServicesPage = lazy(() => import('./features/services/ServicesPage'));
const SpecialtiesPage = lazy(() => import('./features/specialties/SpecialtiesPage'));
const NewsPage = lazy(() => import('./features/news/NewsPage'));
const ContactPage = lazy(() => import('./features/contact/ContactPage'));
const TransparencyPage = lazy(() => import('./features/transparency/TransparencyPage'));
const DataPoliciesPage = lazy(() => import('./features/data-policies/DataPoliciesPage'));
const TermsPage = lazy(() => import('./features/terms/TermsPage'));
const HabeasDataPage = lazy(() => import('./features/habeas-data/HabeasDataPage'));

// Debug/Development components
const GoogleScriptDiagnostic = lazy(() => import('./components/GoogleScriptDiagnostic'));
const CORSDebugger = lazy(() => import('./components/CORSDebugger'));
const AppointmentFormTest = lazy(() => import('./components/AppointmentFormTest'));
const GoogleScriptDebugger = lazy(() => import('./components/GoogleScriptDebugger'));

// 404 Page
const NotFoundPage = lazy(() => import('./shared/components/ui/NotFoundPage'));

function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<AboutPage />} />
              <Route path="/servicios" element={<ServicesPage />} />
              <Route path="/especialidades" element={<SpecialtiesPage />} />
              <Route path="/noticias" element={<NewsPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/transparencia" element={<TransparencyPage />} />
              <Route path="/politicas-datos" element={<DataPoliciesPage />} />
              <Route path="/terminos" element={<TermsPage />} />
              <Route path="/habeas-data" element={<HabeasDataPage />} />
              
              {/* Debug/Development routes */}
              <Route path="/debug/google-script" element={<GoogleScriptDiagnostic />} />
              <Route path="/debug/cors" element={<CORSDebugger />} />
              <Route path="/debug/appointment-form" element={<AppointmentFormTest />} />
              <Route path="/debug/google-script-debugger" element={<GoogleScriptDebugger />} />
              
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <WhatsAppButton />
        </div>
      </Router>
  );
}

export default App;
