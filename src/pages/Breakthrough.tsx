import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MENTOR_IMG from '@/assets/mentor.jpg';
import { plans } from '@/data/plans';
import MissionBrand from '@/components/MissionBrand';
import './Breakthrough.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/9f7e7aa9-b8f1-4d6c-9cc4-18d226bf5c46.jpg';

const states = [
  { icon: 'FlameKindling', text: 'Эмоциональное выгорание' },
  { icon: 'Hourglass', text: 'Прокрастинация' },
  { icon: 'Activity', text: 'Хронический стресс' },
  { icon: 'TrendingDown', text: 'Низкая самооценка' },
  { icon: 'Mic', text: 'Страх публичных выступлений' },
  { icon: 'SplitSquareVertical', text: 'Страх принятия решений' },
];

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Тренер программы «Точка Старта»' },
];

const programPoints = [
  {
    icon: 'Hammer',
    title: 'Практика, а не теория',
    text: 'Каждый блок закрепляется упражнением — вы пробуете, а не просто слушаете.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Поддержка тренера',
    text: 'Елена сопровождает лично на каждом этапе и даёт обратную связь по вашему запросу.',
  },
  {
    icon: 'ListChecks',
    title: 'Понятный план действий',
    text: 'На выходе — не абстрактная мотивация, а конкретные шаги на ближайшее время.',
  },
];

const Breakthrough = () => {
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
    <div className="break-page">
      <div className="b-noise" />

      <header className="relative b-container flex items-center justify-between py-7">
        <div className="flex items-center gap-2.5">
          <MissionBrand size={40} textClassName="b-display text-2xl tracking-wide" />
        </div>
      </header>

      <section className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
        <div className="b-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="b-tag b-fade-up">
              <Icon name="AlertTriangle" size={14} /> Выход из тупика
            </span>

            <h1
              className="mt-6 text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.95] b-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              Выход из тупика
              <br />
              <span className="b-fire-text">и кризисных состояний</span>
            </h1>

            <p
              className="mt-7 max-w-xl text-lg b-fade-up"
              style={{ color: 'var(--b-ink-soft)', animationDelay: '0.16s' }}
            >
              Программа часто становится попыткой решить проблему, которую человек не может
              преодолеть самостоятельно годами.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 b-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              <button
                onClick={() => document.querySelector('#b-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="b-btn text-base"
              >
                Сделать шаг сейчас <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => document.querySelector('#b-program')?.scrollIntoView({ behavior: 'smooth' })}
                className="b-btn-outline text-base"
              >
                <Icon name="Info" size={16} /> О программе
              </button>
            </div>
          </div>

          <div className="relative b-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded overflow-hidden" style={{ border: '1px solid var(--b-border)' }}>
              <img src={HERO_IMG} alt="Выход из кризиса" className="w-full h-[440px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100d0c] via-transparent to-transparent" />
            </div>
            <div
              className="absolute -left-6 -bottom-6 b-card px-5 py-4 max-w-[230px] b-flicker"
            >
              <div className="flex items-center gap-2" style={{ color: 'var(--b-fire-soft)' }}>
                <Icon name="Zap" size={18} />
                <span className="b-display text-xl">Волшебный пинок</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--b-ink-soft)' }}>
                Мощный внешний импульс, чтобы сдвинуться с мёртвой точки
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b-bg-soft)' }}>
        <div className="b-container">
          <div className="max-w-xl">
            <span className="b-tag">
              <Icon name="HeartCrack" size={14} /> Знакомые состояния
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-normal leading-tight">
              Если это про вас —<br />
              <span className="b-fire-text">вы не одни</span>
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {states.map((s) => (
              <div key={s.text} className="b-card p-6 flex items-center gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded"
                  style={{ background: 'var(--b-bg)', color: 'var(--b-fire-soft)' }}
                >
                  <Icon name={s.icon} size={20} />
                </span>
                <p className="text-sm font-medium">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b-container">
          <div
            className="b-card p-10 md:p-14 relative overflow-hidden"
            style={{ border: '1px solid var(--b-fire)' }}
          >
            <div className="max-w-2xl relative">
              <span className="b-tag">
                <Icon name="Compass" size={14} /> Мотивация участников
              </span>
              <p className="mt-6 text-xl md:text-2xl leading-relaxed" style={{ fontFamily: 'Inter' }}>
                Человеку нужен мощный внешний импульс — «волшебный пинок», чтобы сдвинуться с
                мёртвой точки. Он ищет способ побороть страхи, неуверенность в себе и выйти из
                так называемой{' '}
                <span className="b-fire-text font-semibold">«зоны комфорта»</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="b-program" className="relative py-20 md:py-28">
        <div className="b-container">
          <div className="max-w-2xl">
            <span className="b-tag">
              <Icon name="Info" size={14} /> О программе
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-normal leading-tight">
              Что такое <span className="b-fire-text">«Точка Старта»</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--b-ink-soft)' }}>
              Это трёхдневный очный старт с тренером Еленой Ширыкаловой: 7 августа (вечер),
              8 и 9 августа 2026 года — весь день. Формат построен так, чтобы за три дня пройти
              путь от точки старта к первому конкретному результату, а не просто получить
              мотивацию на один вечер.
            </p>
          </div>

          <div className="mt-8 b-card p-8 md:p-10 max-w-3xl" style={{ border: '1px solid var(--b-fire)' }}>
            <div className="flex items-center gap-3">
              <Icon name="Clock" size={18} style={{ color: 'var(--b-fire-soft)' }} className="shrink-0" />
              <span className="text-sm font-medium">
                7 августа (вечер) — знакомство и запуск. 8–9 августа (весь день) — практика и результат.
              </span>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {programPoints.map((p) => (
              <div key={p.title} className="b-card p-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded"
                  style={{ background: 'var(--b-bg)', color: 'var(--b-fire-soft)' }}
                >
                  <Icon name={p.icon} size={22} />
                </span>
                <h3 className="mt-5 text-xl font-normal">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--b-ink-soft)' }}>
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="b-mentor" className="relative py-20 md:py-28" style={{ background: 'var(--b-bg-soft)' }}>
        <div className="b-container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="relative rounded overflow-hidden" style={{ border: '1px solid var(--b-border)' }}>
              <img
                src={MENTOR_IMG}
                alt="Елена Ширыкалова — тренер программы «Точка Старта»"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="b-tag">
              <Icon name="Sparkles" size={14} /> Тренер программы
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-normal leading-tight">
              Елена <span className="b-fire-text">Ширыкалова</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--b-ink-soft)' }}>
              Больше десяти лет сопровождаю людей на пути к себе — помогаю выйти из состояний,
              в которых человек застревает годами. «Точка Старта» — программа-импульс для тех,
              кто готов наконец сделать шаг из зоны комфорта.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 b-card px-5 py-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded"
                    style={{ background: 'var(--b-bg)', color: 'var(--b-fire-soft)' }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 b-card px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} style={{ color: 'var(--b-fire-soft)' }} className="shrink-0" />
              <span className="text-sm">
                Длительность — 3 дня: 7 августа (вечер), 8 и 9 августа (весь день) 2026 года
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="b-plans" className="relative py-20 md:py-28">
        <div className="b-container">
          <div className="max-w-xl">
            <span className="b-tag">
              <Icon name="Wallet" size={14} /> Стоимость участия
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-normal leading-tight">
              Выберите формат участия
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--b-ink-soft)' }}>
              Программа одна, а условия участия разные.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.slug}
                className="b-card p-8 flex flex-col"
                style={p.featured ? { border: '1.5px solid var(--b-fire)' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded px-3 py-1 text-xs font-bold uppercase tracking-wide"
                    style={
                      p.featured
                        ? { background: 'var(--b-fire)', color: '#100d0c' }
                        : { background: 'var(--b-bg)', color: 'var(--b-fire-soft)' }
                    }
                  >
                    {p.tag}
                  </span>
                  <span className="text-2xl font-semibold b-fire-text">{p.price}</span>
                </div>

                <h3 className="mt-6 text-3xl font-normal leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--b-ink-soft)' }}>
                  {p.desc}
                </p>

                <div
                  className="mt-5 flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--b-ink-soft)' }}
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
                        style={{ color: 'var(--b-fire-soft)' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (p.slug === 'standart') {
                      window.location.href = 'https://payment.alfabank.ru/sc/qqBIIRvrVfoyltPt';
                    } else if (p.slug === 'lgotnyy') {
                      window.location.href = 'https://payment.alfabank.ru/sc/wmCbmpNMFZOZRYlv';
                    } else if (p.slug === 'vmeste') {
                      window.location.href = 'https://payment.alfabank.ru/sc/efFvliuLpqmftlbw';
                    } else {
                      navigate(`/oplata/${p.slug}`);
                    }
                  }}
                  className={p.featured ? 'b-btn mt-7' : 'b-btn-outline mt-7'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="b-form" className="relative py-20 md:py-28" style={{ background: 'var(--b-bg-soft)' }}>
        <div className="b-container">
          <div
            className="relative overflow-hidden rounded p-10 md:p-16 text-center"
            style={{ background: 'var(--b-card)', border: '1px solid var(--b-fire)' }}
          >
            <div className="relative max-w-xl mx-auto">
              <span className="b-tag">
                <Icon name="Gift" size={14} /> Бесплатная консультация по целям!
              </span>

              <h2 className="mt-6 text-4xl md:text-6xl font-normal leading-tight">
                Хватит ждать
                <br />
                <span className="b-fire-text">удобного момента</span>
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'var(--b-ink-soft)' }}>
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 b-card p-8 max-w-md mx-auto b-fade-up">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'var(--b-fire)', color: '#100d0c' }}
                  >
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 text-2xl">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--b-ink-soft)' }}>
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="b-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="b-input"
                  />
                  <button type="submit" className="b-btn w-full">
                    Записаться на консультацию по целям
                  </button>
                  {error && <p className="text-sm" style={{ color: '#ff6b6b' }}>{error}</p>}
                  <p className="text-xs mt-1" style={{ color: 'var(--b-ink-soft)' }}>
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacypolicy" className="underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14" style={{ borderTop: '1px solid var(--b-border)' }}>
        <div className="b-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <MissionBrand size={32} textClassName="b-display text-xl tracking-wide" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--b-ink-soft)' }}>
              Программа «Точка Старта» для тех, кто застрял в кризисе и ищет мощный импульс
              для выхода из тупика.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--b-ink-soft)' }}>
              {[
                { l: 'О программе', h: '#b-program' },
                { l: 'Стоимость', h: '#b-plans' },
                { l: 'Заявка', h: '#b-form' },
              ].map((i) => (
                <li key={i.h}>
                  <button
                    onClick={() => document.querySelector(i.h)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {i.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--b-ink-soft)' }}>
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
          className="b-container mt-8 pt-6 text-xs leading-relaxed"
          style={{ borderTop: '1px solid var(--b-border)', color: 'var(--b-ink-soft)' }}
        >
          <p>ИП Володин Виталий Эдуардович</p>
          <p>ИНН 665806406810</p>
          <p>ОГРНИП 325665800163492</p>
        </div>

        <div
          className="b-container mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid var(--b-border)', color: 'var(--b-ink-soft)' }}
        >
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Breakthrough;