import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary font-heading">
            iLIZ 🎼
          </div>
          <div className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">Обо мне</button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('awards')} className="text-foreground hover:text-primary transition-colors">Награды</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-foreground hover:text-primary transition-colors">Отзывы</button>
            <Button onClick={() => scrollToSection('contact')} className="bg-accent hover:bg-accent/90">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">⭐️ Музыкальное наставничество</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Елизавета iLIZ
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Музыкальный наставник, сонграйтер и продюсер.<br/>
            Помогаю артистам раскрыть талант и построить яркую карьеру
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" onClick={() => scrollToSection('services')} className="bg-primary hover:bg-primary/90">
              <Icon name="Music" className="mr-2" size={20} />
              Мои услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать мне
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-orange-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Обо мне</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Моя история — это путь активистки, которая всегда бежала за яркими эмоциями
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="overflow-hidden animate-scale-in border-primary/20">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Heart" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Страсть к музыке</h3>
                      <p className="text-muted-foreground">
                        Всегда была активисткой, в первых рядах бежала за яркими эмоциями, которые освещали путь как лучики солнца
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Новые вершины</h3>
                      <p className="text-muted-foreground">
                        Время шло, на горизонте появлялись новые вершины — выше, суровее и опаснее. И я шла к ним с поддержкой наставников и близких
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">Заслуженные награды</h3>
                      <p className="text-muted-foreground">
                        Сейчас это этап внутренних убеждений, возможностей, знакомств и заслуженных наград, включая медаль от Президента РФ
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <Icon name="Sparkles" className="text-primary" size={24} />
                  Моя миссия
                </h3>
                <p className="text-muted-foreground">
                  Помочь артистам раскрыть таланты, достигнуть личных и профессиональных вершин, сделать музыкальную карьеру яркой и успешной
                </p>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-orange-50/50 border-accent/20">
                <h3 className="font-heading font-semibold text-xl mb-3 flex items-center gap-2">
                  <Icon name="Users" className="text-accent" size={24} />
                  Моя поддержка
                </h3>
                <p className="text-muted-foreground">
                  Благодарна родным и сестре Арине за поддержку. Они всегда закладывали культурные ценности и учили правильному поведению
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Мои услуги</h2>
            <p className="text-muted-foreground text-lg">Комплексная поддержка на всех этапах музыкальной карьеры</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-primary/20 hover:border-primary/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Mic" className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Эстрадно-джазовый вокал</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Подбор репертуара, проработка технических нюансов, устранение зажимов
                </p>
                <div className="text-primary font-semibold text-lg">1700 ₽ + студия</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-secondary/20 hover:border-secondary/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="BookOpen" className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Теория музыки</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Сольфеджио, музыкальная литература, развитие слуха, нотная грамота
                </p>
                <div className="text-secondary font-semibold text-lg">1200–1300 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-accent/20 hover:border-accent/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="Trophy" className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Конкурсы и фестивали</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Поиск и сопровождение на конкурсы, кастинги, повышение концертного уровня
                </p>
                <div className="text-accent font-semibold text-lg">1000–3000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-primary/20 hover:border-primary/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-primary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Стратегия артиста</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Анализ, целевая аудитория, уникальный бренд, маркетинг и продвижение
                </p>
                <div className="text-primary font-semibold text-lg">10000–30000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-secondary/20 hover:border-secondary/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Music" className="text-secondary" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Сонграйтинг</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Создание песен: текст, мелодия, аранжировка, запись на студии
                </p>
                <div className="text-secondary font-semibold text-lg">3000–50000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-accent/20 hover:border-accent/40 animate-fade-in">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-accent" size={28} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Работа с нотами</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Набор и снятие партитуры, транскрипция с аудио
                </p>
                <div className="text-accent font-semibold text-lg">1500–5000 ₽</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Accordion type="single" collapsible className="max-w-2xl mx-auto text-left">
              <AccordionItem value="item-1" className="border-primary/20">
                <AccordionTrigger className="font-heading hover:text-primary">
                  <div className="flex items-center">
                    <Icon name="Share2" className="mr-2" size={20} />
                    PR и продвижение
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <span>Создание и ведение соцсетей</span>
                    <span className="font-semibold text-primary">5000–15000 ₽/мес</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Разработка пресс-листа</span>
                    <span className="font-semibold text-primary">3000–8000 ₽</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-primary/20">
                <AccordionTrigger className="font-heading hover:text-primary">
                  <div className="flex items-center">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Организация мероприятий
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground space-y-2">
                  <div className="flex justify-between items-center py-2">
                    <span>Планирование концертов</span>
                    <span className="font-semibold text-primary">10000–30000 ₽</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Координация репетиций</span>
                    <span className="font-semibold text-primary">2000–5000 ₽</span>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="awards" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-orange-50/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Награды и достижения</h2>
            <p className="text-muted-foreground text-lg">Признание на государственном уровне</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-accent/30 shadow-xl animate-scale-in">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name="Award" className="text-white" size={48} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <Badge className="mb-3 bg-accent/10 text-accent border-accent/30">🏆 2024</Badge>
                    <h3 className="font-heading font-bold text-2xl mb-3">
                      Медаль от Президента РФ
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Награда за вклад в подготовку и проведение Всемирного Фестиваля Молодежи 2024. 
                      Церемония награждения проходила в Доме Правительства Московской области.
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Всего 95 человек из Московской области получили эту награду
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card className="p-6 text-center border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h4 className="font-heading font-semibold mb-2">Участник ВФМ</h4>
                <p className="text-sm text-muted-foreground">Всемирный Фестиваль Молодежи</p>
              </Card>
              <Card className="p-6 text-center border-secondary/20">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Star" className="text-secondary" size={32} />
                </div>
                <h4 className="font-heading font-semibold mb-2">Конкурсы</h4>
                <p className="text-sm text-muted-foreground">Множество побед и грамот</p>
              </Card>
              <Card className="p-6 text-center border-accent/20">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" className="text-accent" size={32} />
                </div>
                <h4 className="font-heading font-semibold mb-2">Педагог</h4>
                <p className="text-sm text-muted-foreground">Опытный наставник</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Что говорят ученики</h2>
            <p className="text-muted-foreground text-lg">Отзывы тех, кто уже работает со мной</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Анастасия",
                role: "Студентка вокала",
                text: "Лиза помогла мне раскрыться и поверить в свой голос. Теперь я уверенно выступаю на сцене!",
                rating: 5
              },
              {
                name: "Дмитрий",
                role: "Начинающий артист",
                text: "Благодаря Лизе я нашел свой стиль и записал первую песню. Профессиональный подход на всех этапах!",
                rating: 5
              },
              {
                name: "Екатерина",
                role: "Педагог",
                text: "Занятия по теории музыки структурированы идеально. Лиза объясняет сложное простым языком.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all animate-fade-in border-primary/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-heading font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Свяжитесь со мной</h2>
            <p className="text-muted-foreground text-lg">Готова ответить на все вопросы и обсудить сотрудничество</p>
          </div>
          <Card className="overflow-hidden border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1">Телефон</div>
                      <a href="tel:+79999999999" className="text-muted-foreground hover:text-primary transition-colors">
                        +7 (999) 999-99-99
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1">Email</div>
                      <a href="mailto:iliz@example.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        iliz@example.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" className="text-accent" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1">Telegram</div>
                      <a href="https://t.me/username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                        @username
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-heading font-semibold mb-1">ВКонтакте</div>
                      <a href="https://vk.com/username" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        vk.com/username
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-primary/10 text-center">
                <p className="text-muted-foreground mb-4">
                  Давайте вместе напишем классную историю вашей музыкальной карьеры!
                </p>
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  <Icon name="Sparkles" className="mr-2" size={20} />
                  Начать сотрудничество
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-purple-100">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 iLIZ — Музыкальное наставничество. Все права защищены.</p>
          <p className="text-sm mt-2">Создано с 🎼 и любовью к музыке</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
