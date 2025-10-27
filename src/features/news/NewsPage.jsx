import { useState } from "react";
import { 
  CalendarIcon, 
  TagIcon, 
  XMarkIcon,
  SparklesIcon,
  NewspaperIcon,
  UserIcon,
  FireIcon,
  ArrowRightIcon,
  ClockIcon,
  EyeIcon,
  ShareIcon,
  CheckIcon
} from "@heroicons/react/24/outline";
import { NEWS_ARTICLES, NEWS_CATEGORIES } from "../../data/news-data";
import SEOHead from '../../shared/components/seo/SEOHead';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [shareStatus, setShareStatus] = useState(null); // 'sharing', 'copied', 'error'

  const filteredNews =
    selectedCategory === "Todas"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((article) => article.category === selectedCategory);

  const featuredArticles = filteredNews.filter((a) => a.featured);
  const regularArticles = filteredNews.filter((a) => !a.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // utility: get embeddable youtube url if needed
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    try {
      const u = new URL(url);
      // youtube.com/watch?v=ID or youtu.be/ID
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.slice(1);
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.hostname.includes('youtube.com')) {
        return `https://www.youtube.com/embed/${u.searchParams.get('v')}`;
      }
      // if already embed url, return as is
      if (url.includes('embed')) return url;
      return null;
    } catch {
      return null;
    }
  };

  const handleShare = async (article) => {
    setShareStatus('sharing');
    
    const shareData = {
      title: `${article.title} - Clínica Norte Especialidades`,
      text: article.summary,
      url: window.location.origin + '/news#article-' + article.id
    };

    try {
      // Verificar si Web Share API está disponible
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        setShareStatus('shared');
      } else {
        // Fallback: copiar al portapapeles
        const shareText = `${article.title}\n\n${article.summary}\n\nLee más en: ${shareData.url}`;
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(shareText);
          setShareStatus('copied');
        } else {
          // Fallback para navegadores muy antiguos
          const textArea = document.createElement('textarea');
          textArea.value = shareText;
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setShareStatus('copied');
        }
      }
      
      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setShareStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error sharing:', error);
      setShareStatus('error');
      
      // Resetear estado después de 3 segundos
      setTimeout(() => {
        setShareStatus(null);
      }, 3000);
    }
  };

  return (
    <>
      <SEOHead 
        title="Noticias y Novedades"
        description="Mantente informado con las últimas noticias, eventos y novedades de Clínica Norte Especialidades SAS. Información médica actualizada y comunicados importantes."
        keywords="noticias clínica, eventos médicos, novedades salud, comunicados, información médica actualizada"
        canonicalUrl={typeof window !== 'undefined' ? `${window.location.origin}/news` : ''}
      />
      
      <div className="overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('/images/clinic/interior/consultorio-medicina-general-equipado.jpg')`,
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
              Noticias y <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
                Novedades
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto mb-8 animate-fade-in-up delay-300">
              Mantente informado con las últimas actualizaciones y eventos de 
              <span className="font-semibold"> Clínica Norte Especialidades SAS</span>
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up delay-500">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{NEWS_ARTICLES.length}+</div>
                <div className="text-white/80 text-sm md:text-base">Artículos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{NEWS_CATEGORIES.length}</div>
                <div className="text-white/80 text-sm md:text-base">Categorías</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm md:text-base">Actualización</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm md:text-base">Verificado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className="relative bg-white dark:bg-gray-800 py-12 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full px-6 py-2 mb-4">
              <TagIcon className="w-5 h-5" />
              <span className="font-medium">Filtrar por Categoría</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 dark:text-white">
              Explora Nuestro Contenido
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 shadow-md hover:shadow-lg"
                }`}
                aria-label={`Filtrar noticias por categoría: ${category}`}
                aria-pressed={selectedCategory === category}
                type="button"
              >
                {selectedCategory === category && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full blur opacity-60 animate-pulse" />
                )}
                <span className="relative flex items-center space-x-2">
                  {category === "Todas" && <FireIcon className="w-4 h-4" />}
                  {category === "Institucional" && <NewspaperIcon className="w-4 h-4" />}
                  {category === "Prevención" && <SparklesIcon className="w-4 h-4" />}
                  {category === "Eventos" && <CalendarIcon className="w-4 h-4" />}
                  <span>{category}</span>
                  {selectedCategory === category && (
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {selectedCategory === "Todas" ? NEWS_ARTICLES.length : 
                       NEWS_ARTICLES.filter(article => article.category === category).length}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced News Grid */}
      <section className="relative bg-gray-50 dark:bg-gray-900 section-padding transition-colors duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              {selectedCategory === "Todas" ? "Todas las Noticias" : selectedCategory}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {filteredNews.length} {filteredNews.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
            </p>
          </div>
          {/* Featured Articles (separated) */}
          {featuredArticles.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">Artículos Destacados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                {featuredArticles.map((article) => (
                  <div key={article.id} id={`article-${encodeURIComponent(article.id)}`} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                    <div className="relative w-full h-56 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{formatDate(article.date)}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{article.author}</div>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{article.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{article.summary}</p>
                      <div className="flex justify-end">
                        <button onClick={() => setSelectedArticle(article)} className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-white font-medium text-sm py-2 px-4 rounded-lg transition-all duration-300">
                          <span>Leer más</span>
                          <ArrowRightIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Regular Articles */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-6">Otras Noticias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <div key={article.id} id={`article-${encodeURIComponent(article.id)}`} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">
                  <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{formatDate(article.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                        <ClockIcon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">{article.summary}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{article.author}</span>
                      </div>
                      <button onClick={() => setSelectedArticle(article)} className="group/btn inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white font-medium text-sm py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>Leer más</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 dark:bg-gray-800 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <NewspaperIcon className="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No hay artículos en esta categoría
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Prueba seleccionando una categoría diferente o vuelve más tarde.
              </p>
              <button
                onClick={() => setSelectedCategory("Todas")}
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                aria-label="Mostrar todas las noticias disponibles"
                type="button"
              >
                Ver Todas las Noticias
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 dark:bg-black/80 backdrop-blur-sm px-2 sm:px-4 py-4 sm:py-8"
          onClick={() => setSelectedArticle(null)}
        >
          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative transform transition-all duration-500 max-h-[95vh] sm:max-h-[90vh] flex flex-col animate-fade-in"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/90 dark:bg-gray-700/90 hover:bg-primary-600 dark:hover:bg-primary-500 hover:text-white transition-all duration-300 p-2 sm:p-3 rounded-full shadow-lg z-20 group"
              aria-label="Cerrar ventana de artículo"
              type="button"
            >
              <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-300 group-hover:text-white" />
            </button>

            {/* Hero Image - Completely clean for maximum visibility */}
            <div className="relative w-full h-56 sm:h-72 md:h-96 bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              {/* No overlays or badges on image - completely clean */}
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-1 modal-content prevent-horizontal-scroll">
              {/* Article Title - Now separated from image */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white leading-tight mb-4">
                  {selectedArticle.title}
                </h2>
                
                {/* Article Meta Badges - Moved below title */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  {selectedArticle.featured && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs sm:text-sm font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2 shadow-md">
                      <FireIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden xs:inline">Artículo </span><span>Destacado</span>
                    </div>
                  )}
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2">
                    <TagIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="truncate max-w-[120px] sm:max-w-none">{selectedArticle.category}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center space-x-1 sm:space-x-2">
                    <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">{formatDate(selectedArticle.date)}</span>
                    <span className="sm:hidden">{new Date(selectedArticle.date).toLocaleDateString("es-CO", { day: "2-digit", month: "short" })}</span>
                  </div>
                </div>
              </div>

              {/* Article Stats - Optimized for mobile */}
              <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                {/* Mobile: Stack vertically, Desktop: Horizontal */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
                  <div className="flex items-center space-x-2">
                    <UserIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {selectedArticle.author}
                    </span>
                  </div>
                  
                  {/* Reading stats - Hide some on very small screens */}
                  <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
                    <div className="flex items-center space-x-2">
                      <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        3 min
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <EyeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                        {Math.floor(Math.random() * 500) + 100}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video embed (if provided) */}
              {selectedArticle.videoUrl && (
                <div className="mb-6">
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src={getYouTubeEmbedUrl(selectedArticle.videoUrl)}
                      title={selectedArticle.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              {/* Article Content - Optimized typography for mobile */}
              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none dark:prose-invert">
                <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-base sm:text-lg">
                  {selectedArticle.content}
                </div>
              </div>

              {/* Action Buttons - Mobile-first design */}
              <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-600">
                <div className="flex flex-col gap-4">
                  {/* Text description - Hidden on small mobile */}
                  <div className="hidden sm:block text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                    ¿Te gustó este artículo? Compártelo con otros.
                  </div>
                  
                  {/* Buttons - Full width on mobile, inline on desktop */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:justify-center">
                    <button 
                      onClick={() => handleShare(selectedArticle)}
                      disabled={shareStatus === 'sharing'}
                      className={`w-full sm:w-auto px-6 py-3 sm:py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-medium transform hover:scale-105 ${
                        shareStatus === 'copied' || shareStatus === 'shared'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : shareStatus === 'error'
                          ? 'bg-red-600 hover:bg-red-700 text-white'
                          : shareStatus === 'sharing'
                          ? 'bg-blue-500 text-white cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                      }`}
                      aria-label={`Compartir artículo: ${selectedArticle?.title}`}
                      type="button"
                    >
                      {shareStatus === 'sharing' ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          <span>Compartiendo...</span>
                        </>
                      ) : shareStatus === 'copied' ? (
                        <>
                          <CheckIcon className="w-4 h-4" />
                          <span>¡Copiado!</span>
                        </>
                      ) : shareStatus === 'shared' ? (
                        <>
                          <CheckIcon className="w-4 h-4" />
                          <span>¡Compartido!</span>
                        </>
                      ) : shareStatus === 'error' ? (
                        <>
                          <XMarkIcon className="w-4 h-4" />
                          <span>Error al compartir</span>
                        </>
                      ) : (
                        <>
                          <ShareIcon className="w-4 h-4" />
                          <span>Compartir Artículo</span>
                        </>
                      )}
                    </button>
                    {/* External Link button - open in new tab if provided */}
                    {selectedArticle.externalLink && (
                      <a
                        href={selectedArticle.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:py-2 rounded-lg bg-white/90 text-primary-700 hover:bg-white transition-colors duration-200 font-medium shadow-sm"
                      >
                        <span>Ver fuente</span>
                      </a>
                    )}
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 sm:py-2 rounded-lg transition-colors duration-300 font-medium transform hover:scale-105"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-gray-900 section-padding overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span className="text-white/90 font-medium">Mantente Informado</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              No te pierdas
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                nuestras novedades
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
              Síguenos en nuestras redes sociales para estar al día con las últimas noticias, 
              eventos y actualizaciones de la clínica.
            </p>

            {/* Social Media Links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
              <a 
                href="https://www.facebook.com/share/1JZaSsR1y2/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Síguenos en Facebook</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://www.instagram.com/clinica_norte_especialidades?igsh=enBhN2d4ZTl6Y3l6"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348 0-1.297 1.051-2.348 2.348-2.348 1.297 0 2.348 1.051 2.348 2.348 0 1.297-1.051 2.348-2.348 2.348z"/>
                </svg>
                <span>Síguenos en Instagram</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <NewspaperIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Noticias Semanales</div>
                <div className="text-white/80 text-sm">Actualizaciones constantes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CalendarIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Eventos Especiales</div>
                <div className="text-white/80 text-sm">Jornadas y actividades</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <SparklesIcon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-white font-semibold mb-1">Contenido Exclusivo</div>
                <div className="text-white/80 text-sm">Tips de salud y bienestar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
    </>
  );
};

export default NewsPage;
