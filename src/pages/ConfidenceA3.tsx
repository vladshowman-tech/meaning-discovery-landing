import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { listenPrograms, listenTransforms, listenActions, listenAudience, listenReasons, listenQuiz, listenNoNeed } from '@/data/listenPrograms';
import './ConfidenceA3.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/d9e47de4-3086-4540-a58c-307bc4ae010d.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceA3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="a3-page">
      <div className="a3-blob w-96 h-96 -top-20 -left-20" style={{ background: 'var(--a3-accent-soft)' }} />
      <div className="a3-blob w-72 h-72 top-40 right-0" style={{ background: 'var(--a3-sage)' }} />

      <header className="relative a3-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="a3-display text-2xl tracking-wide" />
        <button onClick={() => go('#a3-form')} className="a3-btn-outline hidden sm:inline-flex text-sm">Пробное занятие</button>
      </header>

      <section className="relative pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="a3-container grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <div className="a3-fade-up">
            <span className="a3-eyebrow"><Icon name="MessageCircle" size={14} /> Практические тренинги</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Стань человеком, которого слушают
            </h1>
            <p className="mt-4 text-xl font-semibold">Говори уверенно. Действуй смело. Веди за собой.</p>
            <p className="mt-4 text-lg" style={{ color: 'var(--a3-ink-soft)' }}>
              Практические тренинги для тех, кто хочет свободнее проявляться, уверенно общаться,
              выступать перед людьми и раскрыть свой лидерский потенциал.
            </p>

            <div className="mt-6 a3-card inline-block px-6 py-4">
              <p className="text-lg a3-display" style={{ color: 'var(--a3-accent)' }}>4 направления → 1 большая трансформация</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#a3-programs')} className="a3-btn text-base">
                Посмотреть программы <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => go('#a3-form')} className="a3-btn-outline text-base">
                <Icon name="Coffee" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative a3-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden border" style={{ borderColor: 'var(--a3-border)' }}>
              <img src={HERO_IMG} alt="Практика ораторского мастерства" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="a3-programs" className="relative py-20 md:py-28" style={{ background: 'var(--a3-bg-soft)' }}>
        <div className="a3-container">
          <span className="a3-eyebrow"><Icon name="Sparkles" size={14} /> Направления</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight max-w-xl">4 направления, 1 трансформация</h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {listenPrograms.map((p) => (
              <div key={p.slug} className="a3-card p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'var(--a3-bg-soft)', color: 'var(--a3-accent)' }}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="text-2xl a3-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--a3-accent)' }}>{p.subtitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm" style={{ color: 'var(--a3-ink-soft)' }}>— {pt}</li>
                  ))}
                </ul>
                <button onClick={() => go('#a3-form')} className="a3-btn-outline mt-6 text-sm">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a3-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Что изменится после обучения</h2>
          <div className="mt-10 space-y-3">
            {listenTransforms.map((t) => (
              <div key={t.before} className="a3-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <span className="text-sm flex-1" style={{ color: 'var(--a3-ink-soft)' }}>«{t.before}»</span>
                <Icon name="ArrowRight" size={16} style={{ color: 'var(--a3-accent)' }} className="shrink-0" />
                <span className="text-sm font-semibold flex-1">{t.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a3-bg-soft)' }}>
        <div className="a3-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Не смотри теорию. Проживи это на практике.</h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--a3-ink-soft)' }}>На занятиях ты не просто слушаешь преподавателя.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {listenActions.map((a) => (
              <span key={a} className="a3-card px-5 py-2.5 text-sm font-medium">{a}</span>
            ))}
          </div>
          <p className="mt-6 text-lg" style={{ color: 'var(--a3-ink-soft)' }}>И постепенно замечаешь, что ведёшь себя уже по-другому.</p>
          <button onClick={() => go('#a3-programs')} className="a3-btn mt-8 text-base">Посмотреть программы</button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a3-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Кому подойдут наши тренинги</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {listenAudience.map((a) => (
              <div key={a} className="a3-card p-5 text-center">
                <p className="text-sm font-medium">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a3-bg-soft)' }}>
        <div className="a3-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Почему это работает</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {listenReasons.map((r) => (
              <div key={r.title} className="a3-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'var(--a3-bg-soft)', color: 'var(--a3-accent)' }}>
                  <Icon name={r.icon} size={20} />
                </span>
                <h3 className="mt-4 text-xl a3-display">{r.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a3-ink-soft)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a3-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="a3-eyebrow"><Icon name="HelpCircle" size={14} /> Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">Выбери свою точку роста</h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {listenQuiz.map((q) => (
              <div key={q.q} className="a3-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--a3-accent)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#a3-form')} className="a3-btn text-base">Подобрать программу <Icon name="ArrowRight" size={18} /></button>
          </div>
        </div>
      </section>

      <section id="a3-form" className="relative py-20 md:py-28" style={{ background: 'var(--a3-bg-soft)' }}>
        <div className="a3-container">
          <div className="a3-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="a3-eyebrow"><Icon name="Gift" size={14} /> Первое занятие — не экзамен</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Нужно только прийти и попробовать</h2>
            <div className="mt-4 space-y-1">
              {listenNoNeed.map((n) => (
                <p key={n} className="text-sm" style={{ color: 'var(--a3-ink-soft)' }}>{n}</p>
              ))}
            </div>

            {sent ? (
              <div className="mt-8 a3-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--a3-accent)', color: '#fff' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl a3-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a3-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="a3-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="a3-input" />
                <button type="submit" className="a3-btn w-full">Записаться на пробное занятие</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--a3-border)' }}>
        <div className="a3-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--a3-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceA3;
