import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { listenPrograms, listenTransforms, listenActions, listenAudience, listenReasons, listenQuiz, listenNoNeed } from '@/data/listenPrograms';
import './ConfidenceA2.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/000b58f7-31c4-4c8a-b176-e49830591eef.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceA2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="a2-page">
      <header className="relative a2-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="a2-display text-2xl tracking-wide" />
        <button onClick={() => go('#a2-form')} className="a2-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
        <div className="a2-container grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
          <div className="a2-fade-up">
            <span className="a2-eyebrow">Практические тренинги</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Стань человеком, которого слушают
            </h1>
            <p className="mt-5 text-xl font-semibold">Говори уверенно. Действуй смело. Веди за собой.</p>
            <p className="mt-4 text-lg" style={{ color: 'var(--a2-ink-soft)' }}>
              Практические тренинги для тех, кто хочет свободнее проявляться, уверенно общаться,
              выступать перед людьми и раскрыть свой лидерский потенциал.
            </p>

            <div className="mt-3 a2-divider" />
            <p className="mt-5 text-lg v2-display" style={{ fontFamily: 'Fraunces, serif' }}>4 направления → 1 большая трансформация</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#a2-programs')} className="a2-btn text-base">
                Посмотреть программы <Icon name="ArrowRight" size={16} />
              </button>
              <button onClick={() => go('#a2-form')} className="a2-btn-outline text-base">
                Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative a2-fade-up" style={{ animationDelay: '0.15s' }}>
            <img src={HERO_IMG} alt="Спокойная уверенность" className="w-full h-[540px] object-cover rounded-sm" />
          </div>
        </div>
      </section>

      <section id="a2-programs" className="relative py-24 md:py-32" style={{ background: 'var(--a2-bg-soft)' }}>
        <div className="a2-container">
          <span className="a2-eyebrow">Направления</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight max-w-xl">4 направления, 1 трансформация</h2>

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ background: 'var(--a2-border)' }}>
            {listenPrograms.map((p) => (
              <div key={p.slug} className="p-9" style={{ background: 'var(--a2-card)' }}>
                <h3 className="text-2xl a2-display">{p.title}</h3>
                <p className="mt-3 text-base font-semibold" style={{ color: 'var(--a2-accent)' }}>{p.subtitle}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm" style={{ color: 'var(--a2-ink-soft)' }}>— {pt}</li>
                  ))}
                </ul>
                <button onClick={() => go('#a2-form')} className="mt-6 text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--a2-accent)' }}>
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="a2-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Что изменится после обучения</h2>
          <div className="mt-10 space-y-4">
            {listenTransforms.map((t) => (
              <div key={t.before} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 py-3" style={{ borderBottom: '1px solid var(--a2-border)' }}>
                <span className="text-sm flex-1" style={{ color: 'var(--a2-ink-soft)' }}>«{t.before}»</span>
                <Icon name="ArrowRight" size={14} style={{ color: 'var(--a2-accent)' }} className="shrink-0" />
                <span className="text-sm font-semibold flex-1">{t.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" style={{ background: 'var(--a2-bg-soft)' }}>
        <div className="a2-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Не смотри теорию. Проживи это на практике.</h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--a2-ink-soft)' }}>На занятиях ты не просто слушаешь преподавателя.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-2 gap-y-3 text-base">
            {listenActions.map((a, i) => (
              <span key={a}>{a}{i < listenActions.length - 1 && <span style={{ color: 'var(--a2-accent-soft)' }}> · </span>}</span>
            ))}
          </div>
          <p className="mt-6 text-lg" style={{ color: 'var(--a2-ink-soft)' }}>И постепенно замечаешь, что ведёшь себя уже по-другому.</p>
          <button onClick={() => go('#a2-programs')} className="a2-btn mt-8 text-base">Посмотреть программы</button>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="a2-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Кому подойдут наши тренинги</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
            {listenAudience.map((a) => (
              <p key={a} className="text-sm" style={{ color: 'var(--a2-ink-soft)' }}>— {a}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" style={{ background: 'var(--a2-bg-soft)' }}>
        <div className="a2-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Почему это работает</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {listenReasons.map((r) => (
              <div key={r.title}>
                <h3 className="text-xl a2-display">{r.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a2-ink-soft)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="a2-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="a2-eyebrow">Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">Выбери свою точку роста</h2>
          </div>
          <div className="mt-12 max-w-2xl mx-auto">
            {listenQuiz.map((q) => (
              <div key={q.q} className="flex items-center justify-between gap-3 py-4" style={{ borderBottom: '1px solid var(--a2-border)' }}>
                <span className="text-base">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--a2-accent)' }}>
                  {q.a} <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#a2-form')} className="a2-btn text-base">Подобрать программу</button>
          </div>
        </div>
      </section>

      <section id="a2-form" className="relative py-24 md:py-32" style={{ background: 'var(--a2-bg-soft)' }}>
        <div className="a2-container">
          <div className="a2-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="a2-eyebrow">Первое занятие — не экзамен</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Нужно только прийти и попробовать</h2>
            <div className="mt-4 space-y-1">
              {listenNoNeed.map((n) => (
                <p key={n} className="text-sm" style={{ color: 'var(--a2-ink-soft)' }}>{n}</p>
              ))}
            </div>

            {sent ? (
              <div className="mt-8 a2-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--a2-ink)', color: 'var(--a2-bg)' }}>
                  <Icon name="Check" size={24} />
                </div>
                <h3 className="mt-4 text-xl a2-display">Заявка принята</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a2-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="a2-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="a2-input" />
                <button type="submit" className="a2-btn w-full mt-2">Записаться на пробное занятие</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--a2-border)' }}>
        <div className="a2-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--a2-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceA2;
