import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('все');

  const categories = [
    { id: 'все', label: 'Все статьи', icon: 'Grid3x3' },
    { id: 'маркетинг', label: 'Маркетинг', icon: 'TrendingUp' },
    { id: 'стартапы', label: 'Стартапы', icon: 'Rocket' },
    { id: 'рост', label: 'Рост бизнеса', icon: 'BarChart3' },
  ];

  const articles = [
    {
      id: 1,
      title: 'Как масштабировать стартап с нуля до 1M пользователей',
      excerpt: 'Проверенные стратегии роста, которые помогли нам достичь первого миллиона пользователей за 8 месяцев.',
      category: 'стартапы',
      readTime: '12 мин',
      date: '15 окт 2025',
    },
    {
      id: 2,
      title: '10 ошибок в контент-маркетинге, которые убивают конверсию',
      excerpt: 'Разбираем самые частые промахи в маркетинге и показываем, как их избежать на реальных примерах.',
      category: 'маркетинг',
      readTime: '8 мин',
      date: '12 окт 2025',
    },
    {
      id: 3,
      title: 'Секреты построения отдела продаж в digital-продукте',
      excerpt: 'От найма первого сейлза до создания эффективной воронки продаж — полный гайд для основателей.',
      category: 'рост',
      readTime: '15 мин',
      date: '10 окт 2025',
    },
    {
      id: 4,
      title: 'Performance-маркетинг 2025: что работает сейчас',
      excerpt: 'Актуальные каналы привлечения, метрики и инструменты для эффективного роста в новой реальности.',
      category: 'маркетинг',
      readTime: '10 мин',
      date: '8 окт 2025',
    },
    {
      id: 5,
      title: 'Как мы увеличили LTV в 3 раза за квартал',
      excerpt: 'Конкретные тактики и эксперименты, которые помогли нам кратно поднять пожизненную ценность клиента.',
      category: 'рост',
      readTime: '11 мин',
      date: '5 окт 2025',
    },
    {
      id: 6,
      title: 'Product-market fit: как понять, что вы его нашли',
      excerpt: 'Практические индикаторы и методы валидации, чтобы не обманывать себя на раннем этапе.',
      category: 'стартапы',
      readTime: '9 мин',
      date: '2 окт 2025',
    },
  ];

  const filteredArticles = selectedCategory === 'все' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
              <Icon name="Zap" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">БизнесАкула</h1>
              <p className="text-xs text-gray-600">Блог о предпринимательстве</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#статьи" className="text-gray-700 hover:text-primary transition-colors font-medium">Статьи</a>
            <a href="#о-блоге" className="text-gray-700 hover:text-primary transition-colors font-medium">О блоге</a>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20">
              🔥 Новые статьи каждую неделю
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Бизнес-хватка для роста
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Практические советы по маркетингу, стратегии роста стартапов и реальные кейсы от предпринимателей, которые добились результатов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <Icon name="BookOpen" className="mr-2" size={20} />
                Читать статьи
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                <Icon name="Mail" className="mr-2" size={20} />
                Подписаться
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/df3a8245-c68a-4d6a-93fa-c70d757d10e8/files/2a2e67e2-4c35-4834-9ddc-1d272f1716cb.jpg" 
              alt="Акула в кроссовках - символ бизнес-хватки"
              className="w-full h-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section id="статьи" className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={`transition-all ${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-primary to-secondary shadow-lg scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <Icon name={category.icon as any} className="mr-2" size={18} />
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card 
              key={article.id} 
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20 hover:-translate-y-2 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-gradient-to-r from-primary/10 to-secondary/10 text-primary">
                    {article.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Icon name="ArrowRight" className="text-primary group-hover:translate-x-2 transition-transform" size={20} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="о-блоге" className="container mx-auto px-4 py-20 mb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-primary/10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
              <Icon name="Target" className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              О блоге
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-primary">БизнесАкула</strong> — это блог для предпринимателей, которые не боятся экспериментов и стремятся к росту. 
              Мы делимся только проверенными стратегиями, которые работают в реальном бизнесе.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 my-10">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                <Icon name="Users" className="mx-auto mb-3 text-primary" size={40} />
                <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm text-gray-600">Читателей ежемесячно</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl">
                <Icon name="FileText" className="mx-auto mb-3 text-secondary" size={40} />
                <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                <div className="text-sm text-gray-600">Опубликованных статей</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl">
                <Icon name="TrendingUp" className="mx-auto mb-3 text-accent" size={40} />
                <div className="text-3xl font-bold text-accent mb-2">95%</div>
                <div className="text-sm text-gray-600">Практического контента</div>
              </div>
            </div>

            <p>
              Наша миссия — помочь вам избежать типичных ошибок и найти свой путь к успеху быстрее. 
              Каждая статья основана на реальном опыте и подкреплена данными.
            </p>

            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 rounded-2xl mt-8">
              <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                <Icon name="Lightbulb" className="text-secondary" size={24} />
                Что вы найдёте в блоге:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Актуальные маркетинговые стратегии и тактики</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Разборы успешных и провальных кейсов стартапов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Инструменты для масштабирования бизнеса</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span>Советы по управлению командой и процессами</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">БизнесАкула</span>
              </div>
              <p className="text-gray-400">
                Блог о предпринимательстве и маркетинге для тех, кто стремится к росту.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#статьи" className="hover:text-white transition-colors">Статьи</a></li>
                <li><a href="#о-блоге" className="hover:text-white transition-colors">О блоге</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Подписка</h4>
              <p className="text-gray-400 mb-4">Получайте новые статьи первыми</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary">
                  <Icon name="Send" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
            <p>&copy; 2025 БизнесАкула. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
