import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { schoolLevels, schoolReasons, schoolTrajectories, schoolGallery, schoolQuiz } from '@/data/strongPersonality';
import './ConfidenceB4.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/035c8a25-5457-411e-97a5-bb61729b10fc.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceB4 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="b4-page">
      <div className="b4-blob w-80 h-80 -top-10 -left-10" style={{ background: 'var(--b4-yellow)' }} />
      <div className="b4-blob w-72 h-72 top-60 right-0" style={{ background: 'var(--b4-cyan)' }} />

      <header className="relative b4-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="b4-display text-xl tracking-wide" />
        <button onClick={() => go('#b4-form')} className="b4-btn-outline hidden sm:inline-flex text-sm">Получить рекомендацию</button>
      </header>

      <section className="relative pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="b4-container grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="b4-fade-up">
            <span className="b4-tag">Школа сильной личности</span>
            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              ГОЛОС. ХАРИЗМА.<br /><span className="b4-splash-text">СВОБОДА. ЛИДЕРСТВО.</span>
            </h1>
            <p className="mt-5 text-base font-medium" style={{ color: 'var(--b4-ink-soft)' }}>
              Мы развиваем навыки, которые помогают человеку увереннее проявлять себя в жизни,
              работе и отношениях с людьми.
            </p>

            <div className="mt-6 b4-card inline-block px-6 py-4">
              <p className="text-lg b4-display">4 УРОВНЯ РАЗВИТИЯ</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => go('#b4-levels')} className="b4-btn text-base">
                Смотреть уровни <Icon name="ArrowRight" size={18} />
              </button>
              <button onClick={() => go('#b4-form')} className="b4-btn-outline text-base">
                <Icon name="Zap" size={16} /> Получить рекомендацию
              </button>
            </div>
          </div>

          <div className="relative b4-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ border: '2px solid var(--b4-border)', boxShadow: '8px 8px 0 var(--b4-border)' }}>
              <img src={HERO_IMG} alt="Лидерская энергия" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="b4-levels" className="relative py-20 md:py-28" style={{ background: 'var(--b4-bg-soft)' }}>
        <div className="b4-container">
          <span className="b4-tag">4 уровня развития</span>
          <h2 className="mt-6 text-3xl md:text-5xl leading-tight max-w-xl">От свободы к лидерству</h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-7">
            {schoolLevels.map((lvl, i) => (
              <div key={lvl.slug} className="b4-card p-8" style={{ transform: i % 2 ? 'rotate(0.6deg)' : 'rotate(-0.6deg)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl b4-display" style={{ color: 'var(--b4-magenta)' }}>{lvl.num}</span>
                  <span className="text-xs font-extrabold uppercase">{lvl.stage}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'var(--b4-yellow)', border: '2px solid var(--b4-border)' }}>
                    <Icon name={lvl.icon} size={22} />
                  </span>
                  <h3 className="text-2xl b4-display">{lvl.title}</h3>
                </div>
                <p className="mt-4 text-sm font-medium">{lvl.desc}</p>
                <p className="mt-3 text-sm font-bold">{lvl.skills.join(' → ')}</p>
                <button onClick={() => go('#b4-form')} className="b4-btn-outline mt-6 text-sm">
                  Смотреть курс <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b4-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Почему мы объединили эти навыки</h2>
          <p className="mt-4 text-lg font-medium" style={{ color: 'var(--b4-ink-soft)' }}>
            Потому что сильная коммуникация — это не только умение красиво говорить.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {schoolReasons.map((r, i) => (
              <div key={r.need} className="b4-card p-6" style={{ transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)' }}>
                <p className="text-lg b4-display">{r.need}</p>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--b4-ink-soft)' }}>{r.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b4-bg-soft)' }}>
        <div className="b4-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Одна школа — четыре траектории</h2>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {schoolTrajectories.map((t, i) => (
              <div key={t.q} className="b4-card p-5 flex items-center justify-between gap-3" style={{ transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)' }}>
                <span className="text-sm font-bold">{t.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-extrabold" style={{ color: 'var(--b4-magenta)' }}>
                  <Icon name="ArrowRight" size={14} /> {t.a}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base font-medium" style={{ color: 'var(--b4-ink-soft)' }}>
            А если хочется комплексного развития — можно пройти несколько программ последовательно.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b4-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">ЗДЕСЬ НЕ НАБЛЮДАЮТ.<br /><span className="b4-splash-text">ЗДЕСЬ ТРЕНИРУЮТСЯ.</span></h2>
          <p className="mt-6 text-lg font-medium" style={{ color: 'var(--b4-ink-soft)' }}>
            Минимум пассивного обучения. Максимум практики. Каждое занятие — это возможность
            попробовать новое поведение в безопасной среде, получить обратную связь и закрепить навык.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b4-bg-soft)' }}>
        <div className="b4-container">
          <h2 className="text-3xl md:text-4xl leading-tight max-w-xl">Посмотри, как проходят занятия</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {schoolGallery.map((g, i) => (
              <span key={g} className="b4-card px-5 py-2.5 text-sm font-bold" style={{ transform: i % 2 ? 'rotate(1deg)' : 'rotate(-1deg)' }}>{g}</span>
            ))}
          </div>
          <button onClick={() => go('#b4-form')} className="b4-btn mt-8 text-base">Посмотреть фото и видео</button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b4-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="b4-tag">Быстрый выбор</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Начни с того, что тебе нужно сейчас</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {schoolQuiz.map((q, i) => (
              <div key={q.title} className="b4-card p-5" style={{ transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)' }}>
                <p className="text-base font-extrabold">{q.title}</p>
                <p className="mt-1 text-sm font-medium" style={{ color: 'var(--b4-ink-soft)' }}>{q.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button onClick={() => go('#b4-form')} className="b4-btn text-base">Подобрать программу <Icon name="ArrowRight" size={18} /></button>
          </div>
        </div>
      </section>

      <section id="b4-form" className="relative py-20 md:py-28" style={{ background: 'var(--b4-bg-soft)' }}>
        <div className="b4-container">
          <div className="b4-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="b4-tag">Первый шаг — попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Расскажи, какую задачу хочешь решить</h2>
            <p className="mt-4 text-base font-medium" style={{ color: 'var(--b4-ink-soft)' }}>
              Не нужно заранее знать, какой курс тебе подходит — мы поможем выбрать направление.
            </p>

            {sent ? (
              <div className="mt-8 b4-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--b4-magenta)', color: '#fff', border: '2px solid var(--b4-border)' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl b4-display">ЗАЯВКА ПРИНЯТА!</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--b4-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="b4-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="b4-input" />
                <button type="submit" className="b4-btn w-full">Получить рекомендацию</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '2px solid var(--b4-border)' }}>
        <div className="b4-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold">
          <span>© 2026 Школа сильной личности. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceB4;
