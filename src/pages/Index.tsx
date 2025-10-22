import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('blog');

  const projects = [
    {
      id: 1,
      title: 'Лампа из карбюратора',
      description: 'Винтажный карбюратор превращен в стильную настольную лампу с LED-подсветкой',
      parts: ['Карбюратор Weber', 'LED лента', 'Медная труба'],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Часы из поршня',
      description: 'Настенные часы из поршня V8 двигателя с хромированной отделкой',
      parts: ['Поршень двигателя', 'Часовой механизм', 'Хромированные болты'],
      image: 'https://images.unsplash.com/photo-1563725265914-1207f7a2f0c4?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Полка из выхлопной трубы',
      description: 'Промышленная полка из нержавеющей выхлопной системы мотоцикла',
      parts: ['Выхлопная труба', 'Кронштейны', 'Деревянная доска'],
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&h=600&fit=crop'
    }
  ];

  const historyTimeline = [
    {
      year: '1960-е',
      title: 'Зарождение движения',
      description: 'Первые энтузиасты начали создавать мебель из автомобильных деталей в гаражах'
    },
    {
      year: '1980-е',
      title: 'Индустриальный стиль',
      description: 'Апсайклинг авто-запчастей становится частью индустриального дизайна интерьеров'
    },
    {
      year: '2000-е',
      title: 'Экологическое движение',
      description: 'Переработка автозапчастей набирает популярность как экологичная альтернатива'
    },
    {
      year: '2020-е',
      title: 'Арт-объекты',
      description: 'Создание уникальных произведений искусства из винтажных деталей классических авто'
    }
  ];

  const masters = [
    {
      name: 'Алексей Кузнецов',
      specialty: 'Светильники из деталей двигателя',
      experience: '15 лет',
      projects: 127
    },
    {
      name: 'Дмитрий Петров',
      specialty: 'Мебель из кузовных деталей',
      experience: '12 лет',
      projects: 89
    },
    {
      name: 'Сергей Волков',
      specialty: 'Арт-объекты из трансмиссий',
      experience: '8 лет',
      projects: 64
    }
  ];

  const blogPosts = [
    {
      title: 'Как правильно подготовить запчасти к переработке',
      date: '15 октября 2025',
      excerpt: 'Важные этапы очистки, обработки и покрытия металлических деталей перед началом работы'
    },
    {
      title: 'Топ-10 инструментов для работы с авто-запчастями',
      date: '8 октября 2025',
      excerpt: 'Необходимый набор инструментов для создания изделий из металлических деталей'
    },
    {
      title: 'Безопасность при работе с автозапчастями',
      date: '1 октября 2025',
      excerpt: 'Правила техники безопасности и необходимое защитное оборудование'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="metal-texture border-b-4 border-primary">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground flex items-center gap-3">
                <Icon name="Wrench" size={48} className="text-primary" />
                AUTO UPCYCLING
              </h1>
              <p className="text-muted-foreground text-lg mt-2 font-light">
                Вторая жизнь автомобильных запчастей
              </p>
            </div>
          </div>
        </div>
      </header>

      <nav className="bg-card border-b-2 border-border sticky top-0 z-50 bolt-shadow">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 py-4 overflow-x-auto">
            <Button
              variant={activeSection === 'blog' ? 'default' : 'outline'}
              onClick={() => setActiveSection('blog')}
              className="flex items-center gap-2"
            >
              <Icon name="BookOpen" size={18} />
              Блог
            </Button>
            <Button
              variant={activeSection === 'history' ? 'default' : 'outline'}
              onClick={() => setActiveSection('history')}
              className="flex items-center gap-2"
            >
              <Icon name="Clock" size={18} />
              История
            </Button>
            <Button
              variant={activeSection === 'projects' ? 'default' : 'outline'}
              onClick={() => setActiveSection('projects')}
              className="flex items-center gap-2"
            >
              <Icon name="Lightbulb" size={18} />
              Проекты
            </Button>
            <Button
              variant={activeSection === 'masters' ? 'default' : 'outline'}
              onClick={() => setActiveSection('masters')}
              className="flex items-center gap-2"
            >
              <Icon name="Users" size={18} />
              Мастера
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'blog' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Блог</h2>
              <p className="text-muted-foreground text-lg">Советы, инструкции и вдохновение</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="hover-scale metal-texture border-2 border-border">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Icon name="Calendar" size={16} />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      Читать далее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'history' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">История апсайклинга</h2>
              <p className="text-muted-foreground text-lg">Эволюция движения от гаражей до музеев</p>
            </div>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-primary rust-accent"></div>
              <div className="space-y-12">
                {historyTimeline.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 -ml-4 rounded-full bg-primary rust-accent flex items-center justify-center bolt-shadow">
                      <Icon name="Zap" size={16} className="text-background" />
                    </div>
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                      <Card className="metal-texture border-2 border-primary">
                        <CardHeader>
                          <CardTitle className="text-2xl text-primary">{event.year}</CardTitle>
                          <CardDescription className="text-xl font-bold text-foreground">
                            {event.title}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'projects' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Проекты</h2>
              <p className="text-muted-foreground text-lg">Вдохновляющие примеры трансформации запчастей</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover-scale metal-texture border-2 border-border">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary rust-accent text-background px-3 py-1 rounded bolt-shadow">
                      <Icon name="Star" size={16} className="inline mr-1" />
                      <span className="font-bold">ТОП</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-foreground">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Package" size={16} className="text-primary" />
                        <span className="text-sm font-semibold">Использованные детали:</span>
                      </div>
                      <ul className="space-y-1 ml-6">
                        {project.parts.map((part, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {part}
                          </li>
                        ))}
                      </ul>
                      <Button variant="default" className="w-full mt-4 rust-accent">
                        <Icon name="ExternalLink" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'masters' && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Мастера</h2>
              <p className="text-muted-foreground text-lg">Профессионалы авто-апсайклинга</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {masters.map((master, index) => (
                <Card key={index} className="metal-texture border-2 border-primary hover-scale">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center border-4 border-primary bolt-shadow">
                      <Icon name="User" size={48} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{master.name}</CardTitle>
                    <CardDescription className="text-foreground font-semibold">
                      {master.specialty}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={16} className="text-primary" />
                        <span className="text-sm">Опыт:</span>
                      </div>
                      <span className="font-bold text-foreground">{master.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon name="Briefcase" size={16} className="text-primary" />
                        <span className="text-sm">Проектов:</span>
                      </div>
                      <span className="font-bold text-foreground">{master.projects}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Связаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="metal-texture border-t-4 border-primary mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                <Icon name="Wrench" size={24} className="text-primary" />
                AUTO UPCYCLING
              </h3>
              <p className="text-muted-foreground">
                Превращаем старые запчасти в уникальные произведения искусства
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-foreground">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => setActiveSection('blog')} className="hover:text-primary transition-colors">
                    Блог
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('history')} className="hover:text-primary transition-colors">
                    История
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('projects')} className="hover:text-primary transition-colors">
                    Проекты
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('masters')} className="hover:text-primary transition-colors">
                    Мастера
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-foreground">Контакты</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@autoupcycling.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+7 (495) 123-45-67</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 Auto Upcycling. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
