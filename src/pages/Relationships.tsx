import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MENTOR_IMG from '@/assets/mentor.jpg';

const requests = [
  'Как наладить отношения с партнёром, родителями или детьми?',
  'Как избавиться от одиночества?',
  'Как создать баланс между работой и личной жизнью?',
  'Как изменить привычки и повысить качество повседневности?',
];

const Relationships = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <header className="relative container flex items-center justify-between py-6 z-10">
        <button onClick={() => navigate('/')} className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground animate-pulse-ring">
            <Icon name="Sparkle" size={18} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            Точка<span className="text-gradient"> Старта</span>
          </span>
        </button>
        <Button variant="ghost" onClick={() => navigate('/')} className="rounded-full">
          <Icon name="ArrowLeft" size={16} className="mr-2" /> На главную
        </Button>
      </header>

      <section className="relative overflow-hidden pt-10 pb-24 md:pb-32">
        <div className="absolute inset-0 aurora animate-aurora" />
        <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay pointer-events-none" />

        <div className="container relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm animate-fade-up">
              <Icon name="CalendarDays" size={15} className="text-primary" />
              <span className="text-primary font-medium">7–9 августа 2026</span>
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] animate-fade-up">
              Улучшение качества жизни
              <br />
              <span className="text-gradient italic">и отношений</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground animate-fade-up">
              Запрос на построение гармоничной жизни во всех её сферах.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {requests.map((r, i) => (
              <div
                key={r}
                className="group glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:glow flex items-start gap-4"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name="MessageCircleQuestion" size={20} />
                </span>
                <p className="text-sm leading-relaxed pt-1.5">«{r}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 -top-10 h-96 aurora opacity-30 blur-3xl pointer-events-none" />
        <div className="container relative grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border glow">
              <img
                src={MENTOR_IMG}
                alt="Елена Ширыкалова — тренер программы «Точка Старта»"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          <div>
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              Программа
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              «Точка <span className="text-gradient italic">Старта!</span>»
            </h2>

            <div className="mt-6 flex items-center gap-3 glass rounded-2xl px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} className="text-primary shrink-0" />
              <span className="text-sm">
                Длительность — 3 дня: 7 августа (вечер), 8 и 9 августа (весь день) 2026 года
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3 glass rounded-2xl px-5 py-4 max-w-md">
              <Icon name="Sparkles" size={18} className="text-primary shrink-0" />
              <span className="text-sm">Тренер программы — Елена Ширыкалова</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 md:p-16 text-center">
            <div className="absolute inset-0 aurora animate-aurora" />
            <div className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay" />

            <div className="relative max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
                <Icon name="Gift" size={16} className="text-primary" />
                Бесплатная консультация по целям!
              </div>

              <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-[1.02]">
                Сделайте первый шаг
                <br />
                <span className="text-gradient italic">к гармоничной жизни</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground">
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 glass rounded-2xl p-8 max-w-md mx-auto animate-fade-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold">Заявка принята!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="h-14 rounded-full bg-card/60 border-border px-6"
                  />
                  <Button type="submit" size="lg" className="h-14 rounded-full px-8 glow font-medium w-full">
                    Записаться на консультацию по целям
                  </Button>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <p className="text-xs text-muted-foreground mt-1">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-border py-14">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="Mail" size={15} /> activationmission@yandex.ru
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Phone" size={15} /> +7 964 488-73-65
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Relationships;
