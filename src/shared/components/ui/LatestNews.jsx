import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_ARTICLES } from '../../../data/news-data';
import { CalendarIcon } from '@heroicons/react/24/outline';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
};

const LatestNews = ({ count = 3 }) => {
    const sorted = [...NEWS_ARTICLES].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count);

    return (
        <section className="bg-white dark:bg-gray-800 py-12">
            <div className="container-custom">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">Últimas Noticias</h3>
                    <p className="text-gray-600 dark:text-gray-300">Lo más reciente de Clínica Norte</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sorted.map((a) => (
                        <div key={a.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm">
                            <div className="w-full h-40 overflow-hidden">
                                <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-300 mb-2">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    <span>{formatDate(a.date)}</span>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{a.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{a.summary}</p>
                                <div className="text-right">
                                    <Link to={`/noticias`} className="text-primary-600 hover:underline font-medium" aria-label={`Ver noticia ${a.title}`}>
                                        Ver noticias
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestNews;
