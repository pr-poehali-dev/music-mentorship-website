import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Index = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: "Mic",
      title: "Эстрадно-джазовый вокал",
      price: "1700 ₽ + студия",
      color: "from-purple-500 to-pink-500",
      description: "Комплексная работа над вокальными навыками",
      details: [
        "Подбор индивидуального репертуара под ваш голос и стиль",
        "Проработка сложных технических моментов (изучение вокальных техник, расширение диапазона)",
        "Работа над устранением мышечных зажимов и правильной постановкой дыхания",
        "Развитие артикуляции и дикции для чёткого звучания",
        "Постановка сценического образа и работа с эмоциональной подачей",
        "Анализ и разбор ваших выступлений с профессиональной точки зрения"
      ]
    },
    {
      icon: "BookOpen",
      title: "Теория музыки",
      price: "1300 ₽",
      color: "from-blue-500 to-cyan-500",
      description: "Глубокое погружение в музыкальную теорию",
      details: [
        "Проверка текущего уровня знаний и составление индивидуальной программы",
        "Устранение пробелов в школьной/училищной программе",
        "Обучение музыкальному диктанту: одноголосие, двухголосие, а также аккордовые последовательности, интервальные цепочки, ступени",
        "Развитие музыкального слуха: интервалы, аккорды, лады",
        "Тренировка ритма и метроритмики: от простого к сложному",
        "Освоение нотной грамоты: чтение с листа в разных ключах",
        "Изучение истории музыки, стилей и жанров",
        "Анализ произведений: форма, гармония, структура",
        "Теория гармонии: построение аккордов, функциональность",
        "Подготовка к экзаменам, конкурсам и вступительным испытаниям"
      ]
    },
    {
      icon: "Trophy",
      title: "Вокальные конкурсы и фестивали",
      price: "от 1000 ₽",
      color: "from-yellow-500 to-orange-500",
      description: "Полное сопровождение на конкурсных мероприятиях",
      details: [
        "Поиск подходящих конкурсов, фестивалей и кастингов под ваш уровень",
        "Анализ требований и критериев оценки мероприятий",
        "Подготовка конкурсных программ с учётом специфики жюри",
        "Оформление заявок и всех необходимых документов",
        "Репетиции перед выступлением с имитацией конкурсных условий",
        "Психологическая подготовка к выступлению",
        "Личное сопровождение на мероприятие (обсуждается отдельно)",
        "Сбор грамот и наград для профессионального портфолио",
        "Повышение концертного уровня через регулярные выступления",
        "План конкурсов на 1-2 месяца (4-6 мероприятий): 5000-7000 ₽"
      ]
    },
    {
      icon: "Target",
      title: "Стратегия артиста",
      price: "от 15000 ₽",
      color: "from-pink-500 to-rose-500",
      description: "Построение музыкальной карьеры от А до Я",
      details: [
        "Глубокий анализ текущего положения: SWOT-анализ вашей карьеры",
        "Определение целевой аудитории и позиционирования",
        "Разработка уникального бренда и визуального имиджа",
        "Создание стратегии контента для социальных сетей",
        "Планирование выпусков: синглы, EP, альбомы",
        "Стратегия маркетинга и продвижения: от таргета до PR",
        "Финансовое планирование: бюджет, монетизация, гранты",
        "Разработка дорожной карты на 6-12 месяцев",
        "Поиск команды: продюсер, менеджер, саунд-дизайнер",
        "Работа с лейблами и дистрибуцией",
        "Регулярные встречи для корректировки стратегии"
      ]
    },
    {
      icon: "Music",
      title: "Сонграйтинг",
      price: "от 7000 ₽",
      color: "from-violet-500 to-purple-500",
      description: "Создание авторских песен под ключ",
      details: [
        "Написание текстов: от идеи до финального варианта",
        "Создание мелодии: подбор гармонии под ваш голос и стиль",
        "Разработка аранжировки: от акустики до полного бэнда",
        "Работа с референсами: анализ треков-вдохновителей",
        "Подбор темпа, тональности и настроения композиции",
        "Создание демо-версии для прослушивания",
        "Корректировки до полного соответствия вашему видению",
        "Сопровождение на студии звукозаписи (2000-5000 ₽/сессия)",
        "Помощь в записи вокала и инструментальных партий",
        "Консультации по аранжировке с саунд-продюсером",
        "Правки и рекомендации на этапе сведения (1500-5000 ₽)"
      ]
    },
    {
      icon: "FileText",
      title: "Работа с нотами",
      price: "1500–5000 ₽",
      color: "from-emerald-500 to-teal-500",
      description: "Профессиональная нотография",
      details: [
        "Набор партитуры в программе Sibelius/MuseScore/Finale",
        "Создание вокальных строчек с текстом и дыханием",
        "Набор инструментальных партий любой сложности",
        "Транспонирование в удобную тональность",
        "Снятие партитуры с аудио: мелодия, гармония, ритм",
        "Создание упрощённых версий для обучения",
        "Аранжировка для различных составов (соло, дуэт, хор, оркестр)",
        "Подготовка нот для публикации и печати",
        "Цена зависит от сложности произведения и количества инструментов"
      ]
    },
    {
      icon: "Share2",
      title: "PR и продвижение",
      price: "5000–15000 ₽/мес",
      color: "from-cyan-500 to-blue-500",
      description: "Построение онлайн-присутствия артиста",
      details: [
        "Создание и оформление профилей в соцсетях: VK, Instagram, Telegram",
        "Разработка контент-плана на месяц вперёд",
        "Создание визуального контента: посты, сторис, reels",
        "Взаимодействие с подписчиками: ответы, опросы, конкурсы",
        "Аналитика и отчёты по росту и вовлечённости",
        "Разработка пресс-листа (3000-8000 ₽): биография, фото, достижения",
        "Написание пресс-релизов для СМИ",
        "Поиск и взаимодействие с музыкальными блогерами",
        "Размещение в плейлистах и музыкальных подборках",
        "Таргетированная реклама для привлечения аудитории"
      ]
    },
    {
      icon: "Calendar",
      title: "Организация мероприятий",
      price: "10000–30000 ₽",
      color: "from-orange-500 to-red-500",
      description: "Полный цикл подготовки концерта",
      details: [
        "Поиск и выбор площадки для выступления",
        "Переговоры с владельцами клубов и концертных залов",
        "Составление технического райдера",
        "Работа с подрядчиками: звук, свет, видео",
        "Координация репетиций (2000-5000 ₽/репетиция)",
        "Организация саунд-чеков перед выступлением",
        "Промо-кампания мероприятия",
        "Продажа билетов и контроль посещаемости",
        "Управление бэкстейджем и логистикой",
        "Постпродакшн: фото, видео, отчёты",
        "Цена зависит от масштаба мероприятия"
      ]
    },
    {
      icon: "MessageCircle",
      title: "Консультации",
      price: "2000–5000 ₽",
      color: "from-pink-500 to-purple-500",
      description: "Персональные консультации по развитию",
      details: [
        "Консультации по музыкальной карьере: куда двигаться дальше",
        "Помощь в выборе репертуара под ваши задачи",
        "Анализ текущих записей и выступлений",
        "Рекомендации по улучшению вокала и сценического образа",
        "Советы по работе с командой: продюсер, звукорежиссёр, PR",
        "Обсуждение стратегии релизов и продвижения",
        "Помощь в выборе обучающих программ и курсов",
        "Разбор проблем и поиск решений",
        "Мотивация и психологическая поддержка",
        "Планирование ближайших шагов и постановка целей"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Анастасия",
      role: "Студентка вокала",
      text: "Лиза помогла мне раскрыться и поверить в свой голос. Теперь я уверенно выступаю на сцене!",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Дмитрий",
      role: "Начинающий артист",
      text: "Благодаря Лизе я нашел свой стиль и записал первую песню. Профессиональный подход на всех этапах!",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Екатерина",
      role: "Педагог",
      text: "Занятия по теории музыки структурированы идеально. Лиза объясняет сложное простым языком.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 -z-10"></div>
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            iLIZ 🎼
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('home')} className="text-foreground/80 hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground/80 hover:text-primary transition-colors">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground/80 hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('awards')} className="text-foreground/80 hover:text-primary transition-colors">Награды</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground/80 hover:text-primary transition-colors">Отзывы</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-accent to-yellow-400 text-black hover:opacity-90 font-semibold">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-32 px-4 relative">
        <div className="container mx-auto text-center animate-fade-in">
          <div className="mb-6 inline-block">
            <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-none px-6 py-2 text-base animate-glow">
              ⭐️ Музыкальное наставничество
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-scale-in">
            Елизавета iLIZ
          </h1>
          <p className="text-xl md:text-3xl text-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Музыкальный наставник, сонграйтер и продюсер.<br/>
            <span className="text-accent font-semibold">Помогаю артистам раскрыть талант</span> и построить яркую карьеру 🎤
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('services')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg">
              <Icon name="Music" className="mr-2" size={24} />
              Мои услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="border-2 border-accent text-accent hover:bg-accent hover:text-black px-8 py-6 text-lg">
              <Icon name="MessageCircle" className="mr-2" size={24} />
              Написать мне
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Обо мне
            </h2>
            <p className="text-foreground/80 text-xl max-w-3xl mx-auto">
              Моя история — это путь активистки, которая всегда бежала за яркими эмоциями ✨
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 backdrop-blur-sm animate-scale-in hover:scale-105 transition-transform">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 mx-auto animate-glow">
                  <Icon name="Heart" className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-center text-primary">Страсть к музыке</h3>
                <p className="text-foreground/80 text-center">
                  Всегда была активисткой, в первых рядах бежала за яркими эмоциями, которые освещали путь как лучики солнца
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 backdrop-blur-sm animate-scale-in hover:scale-105 transition-transform" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-6 mx-auto animate-glow" style={{ animationDelay: '1s' }}>
                  <Icon name="Target" className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-center text-accent">Новые вершины</h3>
                <p className="text-foreground/80 text-center">
                  Время шло, на горизонте появлялись новые вершины — выше, суровее и опаснее. И я шла к ним с поддержкой наставников
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 backdrop-blur-sm animate-scale-in hover:scale-105 transition-transform overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/files/f2f26adc-eb2d-4248-98c7-54a265e8a55f.jpeg" 
                    alt="Награда от Президента РФ"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3 animate-glow" style={{ animationDelay: '2s' }}>
                      <Icon name="Award" className="text-white" size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-2 text-white">Награды</h3>
                    <p className="text-white/90 text-sm">
                      Медаль от Президента РФ за достижения в культуре и искусстве
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-accent via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Мои услуги
            </h2>
            <p className="text-foreground/80 text-xl">Комплексная поддержка на всех этапах музыкальной карьеры 🚀</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card/40 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all cursor-pointer group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} className="text-white" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-foreground">{service.title}</h3>
                  <p className="text-foreground/60 mb-4 text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <div className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>
                  <div className="mt-4 text-xs text-foreground/50 flex items-center gap-2">
                    <Icon name="Info" size={14} />
                    Нажмите для подробностей
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-xl border-white/20">
          {selectedService && (
            <>
              <DialogHeader>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${selectedService.color} flex items-center justify-center mb-4 mx-auto`}>
                  <Icon name={selectedService.icon} className="text-white" size={40} />
                </div>
                <DialogTitle className="text-3xl font-heading text-center">{selectedService.title}</DialogTitle>
                <DialogDescription className="text-center text-lg text-foreground/70">
                  {selectedService.description}
                </DialogDescription>
                <div className={`text-2xl font-bold bg-gradient-to-r ${selectedService.color} bg-clip-text text-transparent text-center mt-4`}>
                  {selectedService.price}
                </div>
              </DialogHeader>
              <div className="mt-6">
                <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Что входит в услугу:</h4>
                <ul className="space-y-3">
                  {selectedService.details.map((detail: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${selectedService.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon name="Check" className="text-white" size={16} />
                      </div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex gap-4">
                <Button onClick={() => scrollToSection('contact')} className={`flex-1 bg-gradient-to-r ${selectedService.color} text-white hover:opacity-90`}>
                  Записаться
                </Button>
                <Button onClick={() => setSelectedService(null)} variant="outline" className="border-white/20 text-foreground hover:bg-white/10">
                  Закрыть
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section id="awards" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Награды и достижения
            </h2>
            <p className="text-foreground/80 text-xl">Признание на государственном уровне 🏆</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 border-yellow-500/30 backdrop-blur-sm overflow-hidden animate-scale-in">
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-2xl animate-glow">
                    <Icon name="Award" className="text-white" size={64} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black border-none px-4 py-1">
                      🏆 2024
                    </Badge>
                    <h3 className="font-heading font-bold text-3xl mb-4 text-foreground">
                      Медаль от Президента РФ
                    </h3>
                    <p className="text-foreground/80 mb-4 text-lg">
                      Награда за вклад в подготовку и проведение Всемирного Фестиваля Молодежи 2024. 
                      Церемония награждения проходила в Доме Правительства Московской области.
                    </p>
                    <p className="text-sm text-foreground/60 italic">
                      Всего 95 человек из Московской области получили эту награду ⭐️
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Что говорят ученики
            </h2>
            <p className="text-foreground/80 text-xl">Отзывы тех, кто уже работает со мной 💬</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/40 backdrop-blur-sm border-white/10 hover:border-white/30 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-xl`}>
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-foreground/60">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-heading bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Свяжитесь со мной
            </h2>
            <p className="text-foreground/80 text-xl">Готова ответить на все вопросы и обсудить сотрудничество 📞</p>
          </div>
          <Card className="bg-card/40 backdrop-blur-xl border-white/20 overflow-hidden">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1 text-foreground">Телефон</div>
                      <a href="tel:+79151836484" className="text-foreground/70 hover:text-primary transition-colors">
                        +7 (915) 183-64-84
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1 text-foreground">Email</div>
                      <a href="mailto:alic1107@mail.ru" className="text-foreground/70 hover:text-secondary transition-colors">
                        alic1107@mail.ru
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="Send" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1 text-foreground">Telegram</div>
                      <a href="https://t.me/lizashmiganovskaya" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
                        @lizashmiganovskaya
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon name="MessageCircle" className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1 text-foreground">ВКонтакте</div>
                      <a href="https://vk.com/liza_shmiganovskaya" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                        vk.com/liza_shmiganovskaya
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 text-center">
                <p className="text-foreground/80 mb-6 text-lg">
                  Давайте вместе напишем классную историю вашей музыкальной карьеры! 🎵
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white px-12 py-6 text-lg">
                  <Icon name="Sparkles" className="mr-2" size={24} />
                  Начать сотрудничество
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-white/10 backdrop-blur-sm">
        <div className="container mx-auto text-center text-foreground/60">
          <p className="mb-2">© 2024 iLIZ — Музыкальное наставничество. Все права защищены.</p>
          <p className="text-sm">Создано с 🎼 и любовью к музыке</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;