
import React from 'react';

const GuidePage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16 text-gray-300">
            <div className="max-w-4xl mx-auto">
                {/* Section 1: BAIT Strategy */}
                <section className="mb-24 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">BAIT: Стратегия Привлечения</h1>
                    <p className="text-xl text-brand-primary mb-8">Руководство по взаимодействию с салонами красоты и барбершопами.</p>
                    
                    <p className="mb-6">Этот документ представляет собой руководство по взаимодействию с нашей целевой аудиторией — салонами красоты и барбершопами, использующими платформу YClients. Мы подробно рассмотрим, как идентифицировать идеальных клиентов, где их искать, выстроить мультиканальную воронку продаж и эффективно обрабатывать возражения, чтобы максимально увеличить конверсию и обеспечить долгосрочное сотрудничество.</p>

                    <div className="bg-white/5 p-6 rounded-xl border border-white/10 mb-12">
                        <h3 className="text-2xl font-bold text-white mb-3">Определение Идеального Клиентского Профиля (ICP)</h3>
                        <p className="mb-4">Наш идеальный клиент — это салон красоты или барбершоп, который уже использует или рассматривает использование платформы YClients. Это ключевой критерий, поскольку наш продукт разработан для бесшовной интеграции с этой системой.</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                            <li>Активное использование YClients для записи и управления.</li>
                            <li>Стремление к оптимизации операционных процессов.</li>
                            <li>Открытость к инновационным технологиям, таким как ИИ-инструменты.</li>
                            <li>Заинтересованность в увеличении выручки и освобождении времени персонала.</li>
                        </ul>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-6">Этапы Воронки Продаж</h3>
                    <div className="space-y-4 mb-8">
                        {['Новый лид', 'Связались', 'Демо назначено', 'Демо проведено', 'Тест запущен', 'Оплачено/Отказ'].map((stage, index) => (
                             <div key={stage} className="flex items-center">
                                <div className="bg-brand-primary h-10 w-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">{index + 1}</div>
                                <div className="ml-4 p-3 bg-white/5 rounded-lg w-full">{stage}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2: Beauty AI Technology */}
                <section className="animate-fadeIn" style={{ animationDelay: '200ms' }}>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Beauty AI Technology</h1>
                     <p className="text-xl text-brand-secondary mb-8">Ваш «умный администратор» для салона красоты и барбершопа.</p>

                     <p className="mb-6">Наш «умный администратор» — это не просто чат-бот, а полноценный виртуальный помощник, глубоко интегрированный с вашей системой YClients. Он полностью берёт на себя коммуникацию с клиентами в мессенджерах.</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <FeatureCard title="Мгновенная обработка заявок" description="Круглосуточная запись, перенос и отмена визитов, даже в нерабочее время." />
                        <FeatureCard title="Снижение нагрузки на персонал" description="Администраторы смогут сосредоточиться на сервисе в зале, а не на рутинной переписке." />
                        <FeatureCard title="Увеличение среднего чека" description="Бот аккуратно предлагает дополнительные услуги и актуальные акции, стимулируя продажи." />
                        <FeatureCard title="Систематизация обратной связи" description="Сбор отзывов после визита и оперативная реакция на негатив." />
                        <FeatureCard title="Управление записями в YClients" description="Осуществляет запись, перенос и отмену визитов напрямую в YClients, учитывая длительность услуг." />
                        <FeatureCard title="Мультиканальность и работа 24/7" description="Работает со всеми популярными мессенджерами (WhatsApp, Telegram, VK) и доступен круглосуточно." />
                    </div>
                </section>
                 <div className="text-center mt-16">
                    <a href="#/" className="px-8 py-4 bg-brand-primary text-white font-bold rounded-lg shadow-lg hover:bg-indigo-500 transform hover:scale-105 transition-all duration-300">
                        Вернуться на главную
                    </a>
                </div>
            </div>
        </div>
    );
};

const FeatureCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);


export default GuidePage;