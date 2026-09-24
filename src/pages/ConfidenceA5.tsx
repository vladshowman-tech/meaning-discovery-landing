import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { listenPrograms, listenTransforms, listenActions, listenAudience, listenReasons, listenQuiz, listenNoNeed } from '@/data/listenPrograms';
import './ConfidenceA5.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/9cf8082a-df67-4809-a5ef-e3d37abc926e.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceA5 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="a5-page">
      <header className="relative a5-container flex items-center justify-between py-7">
        <MissionBrand size={36} textClassName="a5-display text-xl tracking-wide" />
        <button onClick={() => go('#a5-form')} className="a5-btn-outline hidden sm:inline-flex text-sm">Пробное занятие</button>
      </header>

      <section className="relative overflow-hidden pt-8 pb-24 md:pt-14 md:pb-32 a5-grid-line">
        <div className="a5-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="a5-tag a5-fade-up">// Практические тренинги</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1] a5-fade-up" style={{ animationDelay: '0.08s' }}>
              Стань человеком,<br /><span className="a5-grad-text">которого слушают</span>
            </h1>
            <p className="mt-4 text-lg font-semibold v5-fade-up" style={{ animationDelay: '0.12s' }}>
              Говори уверенно. Действуй смело. Веди за собой.
            </p>
            <p className="mt-4 text-base a5-fade-up" style={{ color: 'var(--a5-ink-soft)', animationDelay: '0.16s' }}>
              Практические тренинги для тех, кто хочет свободнее проявляться, уверенно общаться,
              выступать перед людьми и раскрыть свой лидерский потенциал.
            </p>

            <div className="mt-6 a5-card inline-block px-6 py-4 a5-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg a5-display">4 направления → 1 трансформация</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 a5-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => go('#a5-programs')} className="a5-btn text-base">
                Посмотреть программы <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => go('#a5-form')} className="a5-btn-outline text-base">
                <Icon name="Info" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative a5-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--a5-border)' }}>
              <img src={HERO_IMG} alt="Уверенная презентация" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="a5-programs" className="relative py-20 md:py-28" style={{ background: 'var(--a5-bg-soft)' }}>
        <div className="a5-container">
          <span className="a5-tag">// Направления</span>
          <h2 className="mt-5 text-3xl md:text-5xl leading-tight max-w-xl">4 направления, 1 трансформация</h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {listenPrograms.map((p) => (
              <div key={p.slug} className="a5-card p-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded" style={{ background: 'var(--a5-bg)', color: 'var(--a5-blue-soft)' }}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="text-2xl a5-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--a5-blue-soft)' }}>{p.subtitle}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="text-sm" style={{ color: 'var(--a5-ink-soft)' }}>— {pt}</li>
                  ))}
                </ul>
                <button onClick={() => go('#a5-form')} className="a5-btn-outline mt-6 text-sm">
                  Подробнее <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a5-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Что изменится после обучения</h2>
          <div className="mt-10 space-y-3">
            {listenTransforms.map((t) => (
              <div key={t.before} className="a5-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <span className="text-sm flex-1" style={{ color: 'var(--a5-ink-soft)' }}>«{t.before}»</span>
                <Icon name="ArrowRight" size={16} style={{ color: 'var(--a5-blue-soft)' }} className="shrink-0" />
                <span className="text-sm font-semibold flex-1">{t.after}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a5-bg-soft)' }}>
        <div className="a5-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Не смотри теорию.<br /><span className="a5-grad-text">Проживи это на практике.</span></h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--a5-ink-soft)' }}>На занятиях ты не просто слушаешь преподавателя.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {listenActions.map((a) => (
              <span key={a} className="a5-card px-5 py-2.5 text-sm font-medium">{a}</span>
            ))}
          </div>
          <p className="mt-6 text-lg" style={{ color: 'var(--a5-ink-soft)' }}>И постепенно замечаешь, что ведёшь себя уже по-другому.</p>
          <button onClick={() => go('#a5-programs')} className="a5-btn mt-8 text-base">Посмотреть программы</button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a5-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Кому подойдут наши тренинги</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {listenAudience.map((a) => (
              <div key={a} className="a5-card p-5 text-center">
                <p className="text-sm font-medium">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--a5-bg-soft)' }}>
        <div className="a5-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Почему это работает</h2>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {listenReasons.map((r) => (
              <div key={r.title} className="a5-card p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded" style={{ background: 'var(--a5-bg)', color: 'var(--a5-blue-soft)' }}>
                  <Icon name={r.icon} size={20} />
                </span>
                <h3 className="mt-4 text-xl a5-display">{r.title}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a5-ink-soft)' }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="a5-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="a5-tag">// Быстрый выбор</span>
            <h2 className="mt-5 text-3xl md:text-4xl leading-tight">Выбери свою точку роста</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {listenQuiz.map((q) => (
              <div key={q.q} className="a5-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--a5-blue-soft)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#a5-form')} className="a5-btn text-base">Подобрать программу <Icon name="ArrowRight" size={18} /></button>
          </div>
        </div>
      </section>

      <section id="a5-form" className="relative py-20 md:py-28" style={{ background: 'var(--a5-bg-soft)' }}>
        <div className="a5-container">
          <div className="a5-card p-10 md:p-16 text-center max-w-xl mx-auto" style={{ border: '1px solid var(--a5-blue)' }}>
            <span className="a5-tag">// Первое занятие — не экзамен</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Нужно только прийти и попробовать</h2>
            <div className="mt-4 space-y-1">
              {listenNoNeed.map((n) => (
                <p key={n} className="text-sm" style={{ color: 'var(--a5-ink-soft)' }}>{n}</p>
              ))}
            </div>

            {sent ? (
              <div className="mt-8 a5-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--a5-blue)', color: '#fff' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl a5-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--a5-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="a5-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="a5-input" />
                <button type="submit" className="a5-btn w-full">Записаться на пробное занятие</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--a5-border)' }}>
        <div className="a5-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--a5-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceA5;
