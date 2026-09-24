import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { listenPrograms, listenTransforms, listenActions, listenAudience, listenReasons, listenQuiz, listenNoNeed } from '@/data/listenPrograms';
import './ConfidenceA4.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/64c97520-a09d-4335-a675-0da692b38c23.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceA4 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="a4-page">
      <div className="a4-blob w-80 h-80 -top-10 -left-10" style={{ background: 'var(--a4-yellow)' }} />
      <div className="a4-blob w-72 h-72 top-60 right-0" style={{ background: 'var(--a4-cyan)' }} />

      <header className="relative a4-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="a4-display text-xl tracking-wide" />
        <button onClick={() => go('#a4-form')} className="a4-btn-outline hidden sm:inline-flex text-sm">Пробное занятие</button>
      </header>

      <section className="relative pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="a4-container grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="a4-fade-up">
            <span className="a4-tag">Практические тренинги</span>
            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              СТАНЬ ЧЕЛОВЕКОМ,<br /><span className="a4-splash-text">КОТОРОГО СЛУШАЮТ</span>
            </h1>
            <p className="mt-5 text-xl font-bold">Говори уверенно. Действуй смело. Веди за собой.</p>
            <p className="mt-4 text-base font-medium" style={{ color: 'var(--a4-ink-soft)' }}>
              Практические тренинги для тех, кто хочет свободнее проявляться, уверенно общаться,
              выступать перед людьми и раскрыть свой лидерский потенциал.
            </p>

            <div className="mt-6 a4-card inline-block px-6 py-4">
              <p className="text-lg v4-display">4 НАПРАВЛЕНИЯ → 1 ТРАНСФОРМАЦИЯ</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => go('#a4-programs')} className="a4-btn text-base">
                Посмотреть программы <Icon name="ArrowRight" size={18} />
              </button>
              <button onClick={() => go('#a4-form')} className="a4-btn-outline text-base">
                <Icon name="Zap" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative a4-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ border: '2px solid var(--a4-border)', boxShadow: '8px 8px 0 var(--a4-border)' }}>
              <img src={HERO_IMG} alt="Дерзкое выступление" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="a4-programs" className="relative py-20 md:py-28" style={{ background: 'var(--a4-bg-soft)' }}>
        <div className="a4-container">
          <span className="a4-tag">Направления</span>
          <h2 className="mt-6 text-3xl md:text-5xl leading-tight max-w-xl">4 направления, 1 трансформация</h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-7">
            {listenPrograms.map((p, i) => (
              <div key={p.slug} className="a4-card p-8" style={{ transform: i % 2 ? 'rotate(0.6deg)' : 'rotate(-0.6deg)' }}>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'var(--a4-yellow)', border: '2px solid var(--a4-border)' }}>
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="text-2xl a4-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm font-extrabold" style={{ color: 'var(--a4-magenta)' }}>{p.subtitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm font-medium">— {pt}</li>
                  ))}
                </ul>
                <button onClick={() => go('#a4-form')} className="a4-btn-outline mt-6 text-sm">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a4-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Что изменится после обучения</h2>
          <div className="mt-10 space-y-3">
            {listenTransforms.map((t, i) => (
              <div key={t.before} className="a4-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6" style={{ transform: i % 2 ? 'rotate(0.4deg)' : 'rotate(-0.4deg)' }}>
                <span className="text-sm font-medium flex-1" style={{ color: 'var(--a4-ink-soft)' }}>«{t.before}»</span>
                <Icon name="ArrowRight" size={16} style={{ color: 'var(--a4-magenta)' }} className="shrink-0" />
                <span className="text-sm font-extrabold flex-1">{t.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a4-bg-soft)' }}>
        <div className="a4-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">НЕ СМОТРИ ТЕОРИЮ.<br /><span className="a4-splash-text">ПРОЖИВИ ЭТО НА ПРАКТИКЕ.</span></h2>
          <p className="mt-6 text-lg font-medium" style={{ color: 'var(--a4-ink-soft)' }}>На занятиях ты не просто слушаешь преподавателя.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {listenActions.map((a, i) => (
              <span key={a} className="a4-card px-5 py-2.5 text-sm font-bold" style={{ transform: i % 2 ? 'rotate(1deg)' : 'rotate(-1deg)' }}>{a}</span>
            ))}
          </div>
          <p className="mt-6 text-lg font-medium" style={{ color: 'var(--a4-ink-soft)' }}>И постепенно замечаешь, что ведёшь себя уже по-другому.</p>
          <button onClick={() => go('#a4-programs')} className="a4-btn mt-8 text-base">Посмотреть программы</button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a4-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Кому подойдут наши тренинги</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {listenAudience.map((a, i) => (
              <div key={a} className="a4-card p-5 text-center" style={{ transform: i % 2 ? 'rotate(1deg)' : 'rotate(-1deg)' }}>
                <p className="text-sm font-bold">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a4-bg-soft)' }}>
        <div className="a4-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Почему это работает</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {listenReasons.map((r) => (
              <div key={r.title} className="a4-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--a4-yellow)', border: '2px solid var(--a4-border)' }}>
                  <Icon name={r.icon} size={20} />
                </span>
                <h3 className="mt-4 text-xl a4-display">{r.title}</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--a4-ink-soft)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a4-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="a4-tag">Быстрый выбор</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Выбери свою точку роста</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {listenQuiz.map((q, i) => (
              <div key={q.q} className="a4-card p-5 flex items-center justify-between gap-3" style={{ transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)' }}>
                <span className="text-sm font-bold">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-extrabold" style={{ color: 'var(--a4-magenta)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#a4-form')} className="a4-btn text-base">Подобрать программу <Icon name="ArrowRight" size={18} /></button>
          </div>
        </div>
      </section>

      <section id="a4-form" className="relative py-20 md:py-28" style={{ background: 'var(--a4-bg-soft)' }}>
        <div className="a4-container">
          <div className="a4-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="a4-tag">Первое занятие — не экзамен</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Нужно только прийти и попробовать</h2>
            <div className="mt-4 space-y-1">
              {listenNoNeed.map((n) => (
                <p key={n} className="text-sm font-medium" style={{ color: 'var(--a4-ink-soft)' }}>{n}</p>
              ))}
            </div>

            {sent ? (
              <div className="mt-8 a4-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--a4-magenta)', color: '#fff', border: '2px solid var(--a4-border)' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl a4-display">ЗАЯВКА ПРИНЯТА!</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--a4-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="a4-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="a4-input" />
                <button type="submit" className="a4-btn w-full">Записаться на пробное занятие</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '2px solid var(--a4-border)' }}>
        <div className="a4-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold">
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceA4;
