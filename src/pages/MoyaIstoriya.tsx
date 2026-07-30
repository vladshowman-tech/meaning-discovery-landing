import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MissionBrand from '@/components/MissionBrand';
import Mentor from '@/components/landing/Mentor';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/b857ee6f-e959-40dc-aa39-5024cff82527.jpg';

const navLinks = [
  { l: 'О ступени', h: '#mi-about' },
  { l: 'Что внутри', h: '#mi-program' },
  { l: 'Тренер', h: '#mentor' },
  { l: 'Результат', h: '#mi-result' },
  { l: 'Вопросы', h: '#mi-faq' },
];

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const focusPoints = [
  {
    icon: 'MoveUpRight',
    title: 'Выход из зоны комфорта',
    text: 'Выполняете задания, которые сегодня кажутся невозможными или пугающими — и убеждаетесь, что можете больше.',
  },
  {
    icon: 'ShieldOff',
    title: 'Работа со страхом, стыдом и виной',
    text: 'Разбираем главные внутренние тормоза, которые годами не дают перейти к масштабным целям.',
  },
  {
    icon: 'Mic2',
    title: 'Ораторское мастерство',
    text: 'Практика публичного позиционирования себя — говорить убедительно и уверенно перед любой аудиторией.',
  },
  {
    icon: 'Handshake',
    title: 'Партнёрства внутри группы',
    text: 'Учитесь видеть возможности для совместного бизнеса и проектов прямо среди участников программы.',
  },
  {
    icon: 'Scale',
    title: 'Баланс мужской и женской энергии',
    text: 'Новый уровень осознанности в управлении конфликтами и во взаимодействии с противоположным полом.',
  },
  {
    icon: 'Target',
    title: 'От «Быть-Делать-Иметь» к плану',
    text: 'Переходите от слов и намерений к реальному планированию крупных, амбициозных достижений.',
  },
];

const results = [
  { icon: 'TrendingUp', title: 'Кратный рост дохода', text: 'По отзывам выпускников — уже во время прохождения ступени.' },
  { icon: 'Rocket', title: 'Новые бизнес-направления', text: 'Запуск проектов, на которые раньше не хватало решимости.' },
  { icon: 'Users2', title: 'Круг единомышленников', text: 'Люди, способные поддержать любую вашу инициативу.' },
];

const faqs = [
  {
    q: 'Нужно ли сначала пройти «Точку Старта» и «Я в игре»?',
    a: 'Да, это обязательное условие. «Моя история» — третья ступень, она опирается на результаты первых двух и продолжает работу с уже заложенными ориентирами.',
  },
  {
    q: 'Когда пройдёт ближайший интенсив?',
    a: 'Следующий интенсивный уикенд назначается через несколько недель после завершения ближайшего потока «Точка Старта». Точные даты пришлём после записи.',
  },
  {
    q: 'Формат очный?',
    a: 'Да, интенсив проходит очно, четыре полных дня подряд: четверг, пятница, суббота и воскресенье.',
  },
  {
    q: 'Мне некомфортно от «выхода из зоны комфорта» — это точно для меня?',
    a: 'Именно с этим дискомфортом мы и работаем — бережно, но по-настоящему. Все задания выполняются в поддерживающей группе и под сопровождением тренера.',
  },
  {
    q: 'Будет ли поддержка после программы?',
    a: 'Да. Участники формируют круг единомышленников и партнёрств, который продолжает работать и после завершения интенсива.',
  },
];

const MoyaIstoriya = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!phone.trim()) return setError('Введите телефон');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
        <div className="container flex items-center justify-between">
          <button onClick={() => go('#top')} className="flex items-center gap-2.5">
            <MissionBrand size={34} textClassName="font-display text-xl md:text-2xl font-semibold tracking-tight" />
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <button
                key={l.h}
                onClick={() => go(l.h)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.l}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" onClick={() => navigate('/yavigre')} className="rounded-full text-sm">
              <Icon name="ArrowLeft" size={15} className="mr-1.5" /> К ступени №2
            </Button>
            <Button onClick={() => go('#mi-form')} className="rounded-full font-medium glow">
              Записаться
            </Button>
          </div>

          <button
            onClick={() => go('#mi-form')}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass"
            aria-label="Записаться"
          >
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </header>

      <main>
        <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="absolute inset-0 aurora animate-aurora" />
          <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay pointer-events-none" />

          <div className="container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm animate-fade-up">
                <Icon name="Lock" size={14} className="text-primary" />
                <span className="text-primary font-medium">Ступень №3 · открывается после «Я в игре»</span>
              </div>

              <h1
                className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.98] animate-fade-up"
                style={{ animationDelay: '0.08s' }}
              >
                <span className="text-gradient italic">«Моя история»</span>
                <br />
                От слов — к масштабу
              </h1>

              <p
                className="mt-7 max-w-xl text-lg text-muted-foreground animate-fade-up"
                style={{ animationDelay: '0.16s' }}
              >
                Масштабируем результаты «Точки Старта» и «Я в игре», преодолеваем страх перед
                амбициозными целями и переходим от слов к по-настоящему масштабным действиям.
              </p>

              <div
                className="mt-7 flex items-center gap-2.5 text-sm text-muted-foreground animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                <Icon name="CalendarDays" size={16} className="text-primary shrink-0" />
                Интенсивный уикенд: четверг, пятница, суббота, воскресенье — четыре полных дня
              </div>

              <div
                className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: '0.28s' }}
              >
                <Button
                  size="lg"
                  onClick={() => go('#mi-form')}
                  className="rounded-full text-base h-14 px-8 glow font-medium"
                >
                  Записаться на ступень №3
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => go('#mi-program')}
                  className="rounded-full text-base h-14 px-8 border-border bg-transparent hover:bg-secondary"
                >
                  <Icon name="Sparkles" size={18} className="mr-1" />
                  Что будет на интенсиве
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-border glow">
                <img
                  src={HERO_IMG}
                  alt="Моя история — масштабные действия"
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              </div>

              <div className="absolute -left-6 bottom-10 glass rounded-2xl px-5 py-4 animate-float-slow max-w-[220px]">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name="Flame" size={18} />
                  <span className="font-display text-lg font-semibold">Своя история масштаба</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Реальные партнёрства и амбициозные цели
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="mi-about" className="relative py-24 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
                Зачем нужна эта ступень
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                Шесть направлений <span className="text-gradient italic">глубокой работы</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Каждый блок закрепляется практикой — не абстрактной теорией, а реальным действием
                прямо в группе.
              </p>
            </div>

            <div id="mi-program" className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {focusPoints.map((b, i) => (
                <div
                  key={b.title}
                  className="group glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:glow"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={b.icon} size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Mentor />

        <section id="mi-result" className="relative py-24 md:py-32">
          <div className="absolute inset-x-0 top-1/3 h-96 aurora opacity-30 blur-2xl pointer-events-none" />
          <div className="container relative">
            <div className="max-w-2xl mx-auto text-center">
              <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
                Результат
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                Не мотивация на вечер, <span className="text-gradient italic">а рост в цифрах</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Кардинальное увеличение дохода, запуск новых бизнес-направлений и круг
                единомышленников, готовых поддержать любую инициативу.
              </p>
            </div>

            <div className="mt-14 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {results.map((r) => (
                <div key={r.title} className="glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-500 hover:glow">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon name={r.icon} size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="mi-form" className="relative py-24 md:py-32">
          <div className="container">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 md:p-16 text-center">
              <div className="absolute inset-0 aurora animate-aurora" />
              <div className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay" />

              <div className="relative max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
                  <Icon name="Gift" size={16} className="text-primary" />
                  Бесплатная консультация по ступени №3
                </div>

                <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-[1.02]">
                  Готовы написать
                  <br />
                  <span className="text-gradient italic">свою историю масштаба?</span>
                </h2>
                <p className="mt-5 text-lg text-muted-foreground">
                  Оставьте контакты — расскажем о ближайшем потоке и поможем понять, готовы ли вы
                  к ступени №3.
                </p>

                {sent ? (
                  <div className="mt-9 glass rounded-2xl p-8 max-w-md mx-auto animate-fade-up">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Icon name="Check" size={26} />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold">Заявка принята!</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {name}, мы свяжемся с вами по номеру {phone} и пришлём детали на {email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ваше имя"
                      className="h-14 rounded-full bg-card/60 border-border px-6"
                    />
                    <Input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Телефон"
                      className="h-14 rounded-full bg-card/60 border-border px-6"
                    />
                    <Input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail"
                      className="h-14 rounded-full bg-card/60 border-border px-6"
                    />
                    <Button type="submit" size="lg" className="h-14 rounded-full px-8 glow font-medium w-full">
                      Записаться на ступень №3
                    </Button>
                    {error && <p className="text-sm text-destructive">{error}</p>}
                    <p className="text-xs text-muted-foreground mt-1">
                      Нажимая кнопку, вы соглашаетесь с{' '}
                      <a href="/privacypolicy" className="underline hover:text-foreground">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="mi-faq" className="relative py-24 md:py-32">
          <div className="container grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
                Частые вопросы
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
                Отвечаем <span className="text-gradient italic">честно</span>
              </h2>
              <p className="mt-5 text-muted-foreground">
                Не нашли свой вопрос? Напишите — ответим лично и поможем принять решение.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass rounded-2xl px-6 mb-3 border-none"
                >
                  <AccordionTrigger className="text-left font-display text-xl font-medium hover:no-underline py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-border py-14">
        <div className="container">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <MissionBrand size={36} textClassName="font-display text-2xl font-semibold" />
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Ступень №3 «Моя история» — масштабирование результатов «Точки Старта» и «Я в игре»,
                переход от слов к масштабным действиям.
              </p>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {navLinks.map((i) => (
                  <li key={i.h}>
                    <button onClick={() => go(i.h)} className="hover:text-foreground transition-colors">
                      {i.l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={15} /> activationmission@yandex.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={15} /> @missiontrue
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={15} /> +7 964 488-73-65
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground leading-relaxed">
            <p>ИП Володин Виталий Эдуардович</p>
            <p>ИНН 665806406810</p>
            <p>ОГРНИП 325665800163492</p>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>© 2026 Точка Старта. Все права защищены.</span>
            <a href="/privacypolicy" className="hover:text-foreground transition-colors">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MoyaIstoriya;
