import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { schoolLevels, schoolReasons, schoolTrajectories, schoolGallery, schoolQuiz } from '@/data/strongPersonality';
import './ConfidenceB2.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/246916bb-94c4-4452-9570-061a616021fd.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceB2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="b2-page">
      <header className="relative b2-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="b2-display text-2xl tracking-wide" />
        <button onClick={() => go('#b2-form')} className="b2-btn-outline hidden sm:inline-flex text-sm">
          Получить рекомендацию
        </button>
      </header>

      <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
        <div className="b2-container grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
          <div className="b2-fade-up">
            <span className="b2-eyebrow">Школа сильной личности</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Голос. Харизма.<br />Свобода. Лидерство.
            </h1>
            <p className="mt-5 text-lg" style={{ color: 'var(--b2-ink-soft)' }}>
              Мы развиваем навыки, которые помогают человеку увереннее проявлять себя в жизни,
              работе и отношениях с людьми.
            </p>

            <div className="mt-3 b2-divider" />
            <p className="mt-5 text-lg" style={{ fontFamily: 'Fraunces, serif' }}>4 уровня развития</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#b2-levels')} className="b2-btn text-base">
                Смотреть уровни <Icon name="ArrowRight" size={16} />
              </button>
              <button onClick={() => go('#b2-form')} className="b2-btn-outline text-base">
                Получить рекомендацию
              </button>
            </div>
          </div>

          <div className="relative b2-fade-up" style={{ animationDelay: '0.15s' }}>
            <img src={HERO_IMG} alt="Спокойная уверенность" className="w-full h-[540px] object-cover rounded-sm" />
          </div>
        </div>
      </section>

      <section id="b2-levels" className="relative py-24 md:py-32" style={{ background: 'var(--b2-bg-soft)' }}>
        <div className="b2-container">
          <span className="b2-eyebrow">4 уровня развития</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight max-w-xl">От свободы к лидерству</h2>

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ background: 'var(--b2-border)' }}>
            {schoolLevels.map((lvl) => (
              <div key={lvl.slug} className="p-9" style={{ background: 'var(--b2-card)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl b2-display" style={{ color: 'var(--b2-accent)' }}>{lvl.num}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--b2-accent)' }}>{lvl.stage}</span>
                </div>
                <h3 className="mt-3 text-2xl b2-display">{lvl.title}</h3>
                <p className="mt-3 text-base" style={{ color: 'var(--b2-ink-soft)' }}>{lvl.desc}</p>
                <p className="mt-4 text-sm">{lvl.skills.join(' · ')}</p>
                <button onClick={() => go('#b2-form')} className="mt-6 text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--b2-accent)' }}>
                  Смотреть курс <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="b2-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Почему мы объединили эти навыки</h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--b2-ink-soft)' }}>
            Потому что сильная коммуникация — это не только умение красиво говорить.
          </p>
          <div className="mt-8 space-y-4">
            {schoolReasons.map((r) => (
              <div key={r.need} className="py-3" style={{ borderBottom: '1px solid var(--b2-border)' }}>
                <p className="text-lg b2-display">{r.need}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b2-ink-soft)' }}>{r.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32" style={{ background: 'var(--b2-bg-soft)' }}>
        <div className="b2-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Одна школа — четыре траектории</h2>
          <div className="mt-10 max-w-2xl">
            {schoolTrajectories.map((t) => (
              <div key={t.q} className="flex items-center justify-between gap-3 py-4" style={{ borderBottom: '1px solid var(--b2-border)' }}>
                <span className="text-base">{t.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--b2-accent)' }}>
                  {t.a} <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base" style={{ color: 'var(--b2-ink-soft)' }}>
            А если хочется комплексного развития — можно пройти несколько программ последовательно.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="b2-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Здесь не наблюдают. Здесь тренируются.</h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--b2-ink-soft)' }}>
            Минимум пассивного обучения. Максимум практики. Каждое занятие — это возможность
            попробовать новое поведение в безопасной среде, получить обратную связь и закрепить навык.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32" style={{ background: 'var(--b2-bg-soft)' }}>
        <div className="b2-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Посмотри, как проходят занятия</h2>
          <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3 text-base">
            {schoolGallery.map((g, i) => (
              <span key={g}>{g}{i < schoolGallery.length - 1 && <span style={{ color: 'var(--b2-accent-soft)' }}> · </span>}</span>
            ))}
          </div>
          <button onClick={() => go('#b2-form')} className="b2-btn mt-8 text-base">Посмотреть фото и видео</button>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="b2-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="b2-eyebrow">Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">Начни с того, что тебе нужно сейчас</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl mx-auto">
            {schoolQuiz.map((q) => (
              <div key={q.title}>
                <p className="text-base font-semibold">{q.title}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b2-ink-soft)' }}>{q.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#b2-form')} className="b2-btn text-base">Подобрать программу</button>
          </div>
        </div>
      </section>

      <section id="b2-form" className="relative py-24 md:py-32" style={{ background: 'var(--b2-bg-soft)' }}>
        <div className="b2-container">
          <div className="b2-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="b2-eyebrow">Первый шаг — попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Расскажи, какую задачу хочешь решить</h2>
            <p className="mt-4 text-base" style={{ color: 'var(--b2-ink-soft)' }}>
              Не нужно заранее знать, какой курс тебе подходит — мы поможем выбрать направление.
            </p>

            {sent ? (
              <div className="mt-8 b2-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--b2-ink)', color: 'var(--b2-bg)' }}>
                  <Icon name="Check" size={24} />
                </div>
                <h3 className="mt-4 text-xl b2-display">Заявка принята</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--b2-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="b2-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="b2-input" />
                <button type="submit" className="b2-btn w-full mt-2">Получить рекомендацию</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--b2-border)' }}>
        <div className="b2-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--b2-ink-soft)' }}>
          <span>© 2026 Школа сильной личности. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceB2;
