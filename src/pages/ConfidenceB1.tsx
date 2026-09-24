import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { schoolLevels, schoolReasons, schoolTrajectories, schoolGallery, schoolQuiz } from '@/data/strongPersonality';
import './ConfidenceB1.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/1ff39da1-563d-45cb-a204-4a036e7eea20.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceB1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="b1-page">
      <div className="b1-noise" />

      <header className="relative b1-container flex items-center justify-between py-7">
        <MissionBrand size={40} textClassName="b1-display text-2xl tracking-wide" />
        <button onClick={() => go('#b1-form')} className="b1-btn-outline hidden sm:inline-flex text-sm">
          Получить рекомендацию
        </button>
      </header>

      <section className="relative overflow-hidden pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="b1-spotlight w-[36rem] h-[36rem] -top-40 left-1/2 -translate-x-1/2" style={{ background: 'var(--b1-accent)', opacity: 0.15 }} />

        <div className="b1-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="b1-tag b1-fade-up"><Icon name="Sparkles" size={14} /> Школа сильной личности</span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.05] b1-fade-up" style={{ animationDelay: '0.08s' }}>
              ГОЛОС. ХАРИЗМА.<br /><span className="b1-grad-text">СВОБОДА. ЛИДЕРСТВО.</span>
            </h1>
            <p className="mt-5 text-lg b1-fade-up" style={{ color: 'var(--b1-ink-soft)', animationDelay: '0.16s' }}>
              Мы развиваем навыки, которые помогают человеку увереннее проявлять себя в жизни,
              работе и отношениях с людьми.
            </p>

            <div className="mt-6 b1-card inline-block px-6 py-4 b1-fade-up" style={{ border: '1px solid var(--b1-accent)', animationDelay: '0.2s' }}>
              <p className="text-lg b1-display">4 уровня развития</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 b1-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => go('#b1-levels')} className="b1-btn text-base">
                Смотреть уровни <Icon name="ArrowRight" size={18} />
              </button>
              <button onClick={() => go('#b1-form')} className="b1-btn-outline text-base">
                <Icon name="Compass" size={16} /> Получить рекомендацию
              </button>
            </div>
          </div>

          <div className="relative b1-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-[1.5rem] overflow-hidden border" style={{ borderColor: 'var(--b1-border)' }}>
              <img src={HERO_IMG} alt="Сильная личность" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="b1-levels" className="relative py-20 md:py-28" style={{ background: 'var(--b1-bg-soft)' }}>
        <div className="b1-container">
          <span className="b1-tag"><Icon name="LayoutGrid" size={14} /> 4 уровня развития</span>
          <h2 className="mt-4 text-4xl md:text-5xl leading-tight max-w-xl">От свободы к лидерству</h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {schoolLevels.map((lvl) => (
              <div key={lvl.slug} className="b1-card p-8">
                <div className="flex items-center gap-3">
                  <span className="b1-display text-3xl" style={{ color: 'var(--b1-accent)' }}>{lvl.num}</span>
                  <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--b1-accent-soft)' }}>{lvl.stage}</span>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ background: 'var(--b1-bg)', color: 'var(--b1-accent)' }}>
                    <Icon name={lvl.icon} size={20} />
                  </span>
                  <h3 className="text-2xl b1-display">{lvl.title}</h3>
                </div>
                <p className="mt-4 text-sm" style={{ color: 'var(--b1-ink-soft)' }}>{lvl.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lvl.skills.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full" style={{ background: 'var(--b1-bg)', color: 'var(--b1-accent-soft)' }}>→ {s}</span>
                  ))}
                </div>
                <button onClick={() => go('#b1-form')} className="b1-btn-outline mt-6 text-sm">
                  Смотреть курс <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b1-container">
          <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">Почему мы объединили эти навыки</h2>
          <p className="mt-4 text-lg" style={{ color: 'var(--b1-ink-soft)' }}>
            Потому что сильная коммуникация — это не только умение красиво говорить.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {schoolReasons.map((r) => (
              <div key={r.need} className="b1-card p-6">
                <p className="text-lg b1-display" style={{ color: 'var(--b1-accent)' }}>{r.need}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b1-ink-soft)' }}>{r.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b1-bg-soft)' }}>
        <div className="b1-container">
          <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">Одна школа — четыре траектории</h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {schoolTrajectories.map((t) => (
              <div key={t.q} className="b1-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{t.q}</span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--b1-accent)' }}>
                  <Icon name="ArrowRight" size={14} /> {t.a}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-base" style={{ color: 'var(--b1-ink-soft)' }}>
            А если хочется комплексного развития — можно пройти несколько программ последовательно.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b1-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">ЗДЕСЬ НЕ НАБЛЮДАЮТ.<br /><span className="b1-grad-text">ЗДЕСЬ ТРЕНИРУЮТСЯ.</span></h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--b1-ink-soft)' }}>
            Минимум пассивного обучения. Максимум практики. Каждое занятие — это возможность
            попробовать новое поведение в безопасной среде, получить обратную связь и закрепить навык.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--b1-bg-soft)' }}>
        <div className="b1-container">
          <h2 className="text-3xl md:text-5xl leading-tight max-w-xl">Посмотри, как проходят занятия</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {schoolGallery.map((g) => (
              <span key={g} className="b1-card px-5 py-2.5 text-sm font-medium">{g}</span>
            ))}
          </div>
          <button onClick={() => go('#b1-form')} className="b1-btn mt-8 text-base">
            Посмотреть фото и видео <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="b1-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="b1-tag"><Icon name="HelpCircle" size={14} /> Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">Начни с того, что тебе нужно сейчас</h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {schoolQuiz.map((q) => (
              <div key={q.title} className="b1-card p-5">
                <p className="text-base font-semibold">{q.title}</p>
                <p className="mt-1 text-sm" style={{ color: 'var(--b1-ink-soft)' }}>{q.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#b1-form')} className="b1-btn text-base">
              Подобрать программу <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="b1-form" className="relative py-20 md:py-28" style={{ background: 'var(--b1-bg-soft)' }}>
        <div className="b1-container">
          <div className="b1-card p-10 md:p-16 text-center max-w-xl mx-auto" style={{ border: '1px solid var(--b1-accent)' }}>
            <span className="b1-tag"><Icon name="Gift" size={14} /> Первый шаг — попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">Расскажи, какую задачу хочешь решить</h2>
            <p className="mt-4 text-base" style={{ color: 'var(--b1-ink-soft)' }}>
              Не нужно заранее знать, какой курс тебе подходит — мы поможем выбрать направление.
            </p>

            {sent ? (
              <div className="mt-8 b1-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--b1-accent)', color: '#0a0a0a' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl b1-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--b1-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="b1-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="b1-input" />
                <button type="submit" className="b1-btn w-full">Получить рекомендацию</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--b1-border)' }}>
        <div className="b1-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--b1-ink-soft)' }}>
          <span>© 2026 Школа сильной личности. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceB1;