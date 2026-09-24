import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { schoolLevels, schoolReasons, schoolTrajectories, schoolGallery, schoolQuiz } from '@/data/strongPersonality';
import './ConfidenceB5.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/0ec32c14-b5d9-4019-9838-b53cb67fd05a.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceB5 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="b5-page">
      <header className="relative b5-container flex items-center justify-between py-7">
        <MissionBrand size={36} textClassName="b5-display text-xl tracking-wide" />
        <button onClick={() => go('#b5-form')} className="b5-btn-outline hidden sm:inline-flex text-sm">Получить рекомендацию</button>
      </header>

      <section className="relative overflow-hidden pt-8 pb-24 md:pt-14 md:pb-32 b5-grid-line">
        <div className="b5-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="b5-tag b5-fade-up">// Школа сильной личности</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1] b5-fade-up" style={{ animationDelay: '0.08s' }}>
              Голос. Харизма.<br /><span className="b5-grad-text">Свобода. Лидерство.</span>
            </h1>
            <p className="mt-4 text-base" style={{ color: 'var(--b5-ink-soft)' }}>
              Мы развиваем навыки, которые помогают человеку увереннее проявлять себя в жизни,
              работе и отношениях с людьми.
            </p>

            <div className="mt-6 b5-card inline-block px-6 py-4">
              <p className="text-lg b5-display">4 уровня развития</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#b5-levels')} className="b5-btn text-base">
                Смотреть уровни <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => go('#b5-form')} className="b5-btn-outline text-base">
                <Icon name="Info" size={16} /> Получить рекомендацию
              </button>
            </div>
          </div>

          <div className="relative b5-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--b5-border)' }}>
              <img src={HERO_IMG} alt="Лидерство в команде" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="b5-levels" className="relative py-20 md:py-28" style={{ background: 'var(--b5-bg-soft)' }}>
        <div className="b5-container">
          <span className="b5-tag">// 4 уровня развития</span>
          <h2 className="mt-5 text-3xl md:text-5xl leading-tight max-w-xl">От свободы к лидерству</h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {schoolLevels.map((lvl) => (
              <div key={lvl.slug} className="b5-card p-8">
                <div className="flex items-center gap-2">
                  <span className="text-2xl b5-display" style={{ color: 'var(--b5-blue-soft)' }}>{lvl.num}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--b5-blue-soft)' }}>{lvl.stage}</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded" style={{ background: 'var(--b5-bg)', color: 'var(--b5-blue-soft)' }}>
                    <Icon name={lvl.icon} size={20} />
                  </span>
                  <h3 className="text-2xl b5-display">{lvl.title}</h3>
                </div>
                <p className="mt-4 text-sm" style={{ color: 'var(--b5-ink-soft)' }}>{lvl.desc}</p>
                <p className="mt-3 text-sm">{lvl.skills.join(' → ')}</p>
                <button onClick={() => go('#b5-form')} className="b5-btn-outline mt-6 text-sm">
                  Смотреть курс <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b5-container max-w-2xl">
          <h2 className="text-3xl md:text-4xl leading-tight">Почему мы объединили эти навыки</h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--b5-ink-soft)' }}>
            Потому что сильная коммуникация — это не только умение красиво говорить.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {schoolReasons.map((r) => (
              <div key={r.need} className="b5-card p-6">
                <p className="text-lg b5-display">{r.need}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b5-ink-soft)' }}>{r.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b5-bg-soft)' }}>
        <div className="b5-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Одна школа — четыре траектории</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {schoolTrajectories.map((t) => (
              <div key={t.q} className="b5-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{t.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--b5-blue-soft)' }}>
                  <Icon name="ArrowRight" size={14} /> {t.a}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base" style={{ color: 'var(--b5-ink-soft)' }}>
            А если хочется комплексного развития — можно пройти несколько программ последовательно.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b5-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Здесь не наблюдают.<br /><span className="b5-grad-text">Здесь тренируются.</span></h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--b5-ink-soft)' }}>
            Минимум пассивного обучения. Максимум практики. Каждое занятие — это возможность
            попробовать новое поведение в безопасной среде, получить обратную связь и закрепить навык.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b5-bg-soft)' }}>
        <div className="b5-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Посмотри, как проходят занятия</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {schoolGallery.map((g) => (
              <span key={g} className="b5-card px-5 py-2.5 text-sm font-medium">{g}</span>
            ))}
          </div>
          <button onClick={() => go('#b5-form')} className="b5-btn mt-8 text-base">Посмотреть фото и видео</button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b5-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="b5-tag">// Быстрый выбор</span>
            <h2 className="mt-5 text-3xl md:text-4xl leading-tight">Начни с того, что тебе нужно сейчас</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {schoolQuiz.map((q) => (
              <div key={q.title} className="b5-card p-5">
                <p className="text-base font-semibold">{q.title}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b5-ink-soft)' }}>{q.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#b5-form')} className="b5-btn text-base">Подобрать программу <Icon name="ArrowRight" size={18} /></button>
          </div>
        </div>
      </section>

      <section id="b5-form" className="relative py-20 md:py-28" style={{ background: 'var(--b5-bg-soft)' }}>
        <div className="b5-container">
          <div className="b5-card p-10 md:p-16 text-center max-w-xl mx-auto" style={{ border: '1px solid var(--b5-blue)' }}>
            <span className="b5-tag">// Первый шаг — попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Расскажи, какую задачу хочешь решить</h2>
            <p className="mt-4 text-base" style={{ color: 'var(--b5-ink-soft)' }}>
              Не нужно заранее знать, какой курс тебе подходит — мы поможем выбрать направление.
            </p>

            {sent ? (
              <div className="mt-8 b5-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--b5-blue)', color: '#fff' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl b5-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--b5-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="b5-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="b5-input" />
                <button type="submit" className="b5-btn w-full">Получить рекомендацию</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--b5-border)' }}>
        <div className="b5-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--b5-ink-soft)' }}>
          <span>© 2026 Школа сильной личности. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceB5;
