import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MENTOR_IMG from '@/assets/mentor.jpg';
import { plans } from '@/data/plans';
import './Career.css';

const requests = [
  { icon: 'TrendingUp', text: 'Как увеличить доход?' },
  { icon: 'ArrowUpRight', text: 'Как получить повышение?' },
  { icon: 'Rocket', text: 'Как запустить свой проект?' },
  { icon: 'Users', text: 'Как перестать бояться руководить людьми?' },
];

const audience = [
  {
    icon: 'Briefcase',
    title: 'Предприниматели',
    text: 'Готовые запустить или масштабировать своё дело без страха ошибок.',
  },
  {
    icon: 'UserCog',
    title: 'Менеджеры',
    text: 'Развивающие управленческие навыки и уверенность в принятии решений.',
  },
  {
    icon: 'Star',
    title: 'Специалисты',
    text: 'Прокачивающие soft skills, харизму и умение влиять на других.',
  },
];

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Тренер программы «Точка Старта»' },
];

const navLinks = [
  { l: 'О программе', h: '#c-program' },
  { l: 'Маршрут', h: '#c-route' },
  { l: 'Стоимость', h: '#c-plans' },
  { l: 'Заявка', h: '#c-form' },
];

const routeDays = [
  { day: '07', label: 'Вечер знакомства', desc: 'Погружение в программу, знакомство с группой и запуск личного вектора.' },
  { day: '08', label: 'День практики', desc: 'Разбор запросов, работа с лидерскими качествами и харизмой.' },
  { day: '09', label: 'День результата', desc: 'Закрепление навыков, план действий и конкретные шаги к цели.' },
];

const Career = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (h: string) => {
    setMenuOpen(false);
    document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <div className="career-page">
      <nav className="c-nav">
        <div className="c-container flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: 'var(--c-cyan)', color: '#06090b' }}
            >
              <Icon name="Zap" size={17} />
            </span>
            <span className="c-display text-lg font-bold tracking-tight">Точка Старта</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((i) => (
              <button key={i.h} onClick={() => scrollTo(i.h)} className="c-nav-link">
                {i.l}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => navigate('/')} className="c-btn-outline text-sm py-2.5 px-4">
              <Icon name="ArrowLeft" size={14} /> На главную
            </button>
            <button onClick={() => scrollTo('#c-form')} className="c-btn text-sm py-2.5 px-5">
              Оставить заявку
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ border: '1px solid var(--c-border)' }}
          >
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="c-mobile-menu">
          <div className="flex items-center justify-between">
            <span className="c-display text-lg font-bold">Меню</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ border: '1px solid var(--c-border)' }}
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((i) => (
              <button
                key={i.h}
                onClick={() => scrollTo(i.h)}
                className="text-2xl font-semibold text-left"
              >
                {i.l}
              </button>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <button onClick={() => navigate('/')} className="c-btn-outline">
              <Icon name="ArrowLeft" size={15} /> На главную
            </button>
            <button onClick={() => scrollTo('#c-form')} className="c-btn">
              Оставить заявку
            </button>
          </div>
        </div>
      )}

      <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 c-grid-line">
        <div className="c-glow w-96 h-96 -top-20 -left-20" style={{ background: 'var(--c-cyan)' }} />
        <div className="c-glow w-80 h-80 top-10 -right-24" style={{ background: 'var(--c-cyan-dim)' }} />

        <div className="c-container relative">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
            <div>
              <span className="c-tag c-fade-up">
                <Icon name="Terminal" size={13} /> ТОЧКА_СТАРТА // 07–09.08.2026
              </span>

              <h1
                className="mt-6 text-4xl sm:text-5xl md:text-[3.6rem] font-bold leading-[1.05] c-fade-up"
                style={{ animationDelay: '0.08s' }}
              >
                Достижение конкретных целей
                <br />
                <span className="c-grad-text">и карьерный рост</span>
              </h1>

              <p
                className="mt-6 max-w-xl text-lg c-fade-up"
                style={{ color: 'var(--c-ink-soft)', animationDelay: '0.16s' }}
              >
                Многие участники рассматривают личностный рост как инструмент для решения
                прикладных задач.
              </p>

              <div
                className="mt-9 flex flex-wrap gap-3 c-fade-up"
                style={{ animationDelay: '0.24s' }}
              >
                <button onClick={() => scrollTo('#c-form')} className="c-btn text-base">
                  Оставить заявку <Icon name="ArrowRight" size={17} />
                </button>
                <button onClick={() => scrollTo('#c-program')} className="c-btn-outline text-base">
                  <Icon name="Info" size={16} /> О программе
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block h-[360px] c-fade-up" style={{ animationDelay: '0.3s' }}>
              <svg viewBox="0 0 320 360" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="c-rise-grad" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="var(--c-cyan-dim)" />
                    <stop offset="100%" stopColor="var(--c-sky)" />
                  </linearGradient>
                </defs>

                <line x1="20" y1="340" x2="300" y2="340" stroke="var(--c-border)" strokeWidth="1.5" />

                <path
                  d="M 30 320 C 80 300, 90 260, 130 230 C 170 200, 180 150, 220 110 C 250 80, 260 50, 290 25"
                  className="c-rise-path"
                />

                <circle r="6" className="c-rise-dot">
                  <animateMotion
                    dur="3.5s"
                    repeatCount="indefinite"
                    path="M 30 320 C 80 300, 90 260, 130 230 C 170 200, 180 150, 220 110 C 250 80, 260 50, 290 25"
                  />
                </circle>

                <circle cx="290" cy="25" r="5" fill="var(--c-sky)" opacity="0.9" />
              </svg>

              <div
                className="absolute right-2 top-2 c-card px-4 py-3"
              >
                <div className="flex items-center gap-2" style={{ color: 'var(--c-sky)' }}>
                  <Icon name="TrendingUp" size={16} />
                  <span className="c-mono text-sm font-bold">+40%</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: 'var(--c-ink-soft)' }}>
                  средний рост дохода
                </p>
              </div>
            </div>
          </div>

          <div id="c-route" className="mt-20 pt-4">
            <span className="c-tag">
              <Icon name="Route" size={13} /> Маршрут интенсива
            </span>

            <div className="mt-10 relative">
              <svg
                className="hidden md:block absolute left-0 right-0 top-8 w-full"
                height="16"
                preserveAspectRatio="none"
                viewBox="0 0 100 1"
              >
                <line x1="8" y1="0.5" x2="92" y2="0.5" className="c-route-line" />
              </svg>

              <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
                {routeDays.map((d, i) => (
                  <div key={d.day} className="relative c-fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                      <div
                        className="c-pulse flex h-16 w-16 shrink-0 items-center justify-center rounded-full c-mono text-xl font-bold"
                        style={{ background: 'var(--c-bg-soft)', border: '2px solid var(--c-cyan)', color: 'var(--c-cyan)' }}
                      >
                        {d.day}
                      </div>
                      <div className="md:mt-5">
                        <h3 className="c-display text-lg font-bold">{d.label}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed max-w-[240px]" style={{ color: 'var(--c-ink-soft)' }}>
                          {d.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="MessageCircleQuestion" size={13} /> Знакомые вопросы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Типичные запросы участников
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {requests.map((r) => (
              <div key={r.text} className="c-card p-7 flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'var(--c-bg-soft)', color: 'var(--c-cyan)' }}
                >
                  <Icon name={r.icon} size={20} />
                </span>
                <p className="text-sm leading-relaxed pt-2">«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--c-bg-soft)' }}>
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="Target" size={13} /> Для кого программа
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Контекст запросов
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Развитие soft skills, лидерских качеств, харизмы и умения влиять на других.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audience.map((a) => (
              <div key={a.title} className="c-card p-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'var(--c-bg)', color: 'var(--c-cyan)' }}
                >
                  <Icon name={a.icon} size={22} />
                </span>
                <h3 className="mt-5 c-display text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="c-program" className="relative py-20 md:py-28">
        <div className="c-container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
              <img
                src={MENTOR_IMG}
                alt="Елена Ширыкалова — тренер программы"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="c-tag">
              <Icon name="Sparkles" size={13} /> Тренер программы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Елена <span className="c-grad-text">Ширыкалова</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Больше десяти лет сопровождаю людей на пути к себе — помогаю разглядеть настоящие
              ценности и превратить личностный рост в конкретный результат: доход, карьеру,
              уверенное лидерство.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 c-card px-5 py-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--c-bg-soft)', color: 'var(--c-cyan)' }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 c-card px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} style={{ color: 'var(--c-cyan)' }} className="shrink-0" />
              <span className="text-sm">
                Длительность — 3 дня: 7 августа (вечер), 8 и 9 августа (весь день) 2026 года
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="c-plans" className="relative py-20 md:py-28" style={{ background: 'var(--c-bg-soft)' }}>
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="Wallet" size={13} /> Стоимость участия
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Выберите формат участия
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Программа одна, а условия участия разные.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.slug}
                className="c-card p-8 flex flex-col"
                style={p.featured ? { border: '1.5px solid var(--c-cyan)' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold c-mono"
                    style={
                      p.featured
                        ? { background: 'var(--c-cyan)', color: '#06090b' }
                        : { background: 'var(--c-bg)', color: 'var(--c-cyan)' }
                    }
                  >
                    {p.tag}
                  </span>
                  <span className="text-2xl font-bold c-grad-text">{p.price}</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
                  {p.desc}
                </p>

                <div
                  className="mt-5 flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--c-ink-soft)' }}
                >
                  <Icon name="Users" size={15} /> {p.audience}
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: 'var(--c-cyan)' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/oplata/${p.slug}`)}
                  className={p.featured ? 'c-btn mt-7' : 'c-btn-outline mt-7'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="c-form" className="relative py-20 md:py-28">
        <div className="c-container">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
            style={{ background: 'var(--c-card)', border: '1px solid var(--c-border)' }}
          >
            <div className="c-glow w-64 h-64 -top-16 left-1/4" style={{ background: 'var(--c-cyan)' }} />
            <div className="c-glow w-64 h-64 -bottom-16 right-1/4" style={{ background: 'var(--c-cyan-dim)' }} />

            <div className="relative max-w-xl mx-auto">
              <span className="c-tag">
                <Icon name="Gift" size={13} /> Бесплатная консультация по целям!
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
                Сделайте первый шаг
                <br />
                <span className="c-grad-text">к результату</span>
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 c-card p-8 max-w-md mx-auto c-fade-up">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'var(--c-cyan)', color: '#06090b' }}
                  >
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="c-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="c-input"
                  />
                  <button type="submit" className="c-btn w-full">
                    Записаться на консультацию по целям
                  </button>
                  {error && <p className="text-sm" style={{ color: '#ff6b6b' }}>{error}</p>}
                  <p className="text-xs mt-1" style={{ color: 'var(--c-ink-soft)' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="c-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: 'var(--c-cyan)', color: '#06090b' }}
              >
                <Icon name="Zap" size={18} />
              </span>
              <span className="c-display text-lg font-bold">Точка Старта</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
              Программа «Точка Старта» для тех, кто хочет превратить личностный рост в конкретный
              карьерный и финансовый результат.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
              {navLinks.map((i) => (
                <li key={i.h}>
                  <button onClick={() => scrollTo(i.h)} className="hover:opacity-70 transition-opacity">
                    {i.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
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

        <div
          className="c-container mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-ink-soft)' }}
        >
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <span>Сделано для тех, кто добивается результата</span>
        </div>
      </footer>
    </div>
  );
};

export default Career;