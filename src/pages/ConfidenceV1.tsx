import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { confidencePrograms, confidenceQuiz, confidenceActions, confidenceNegations } from '@/data/confidencePrograms';
import './ConfidenceV1.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/8fac3d78-da56-4c26-95d1-d95d27cb2ed6.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceV1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="v1-page">
      <div className="v1-noise" />

      <header className="relative v1-container flex items-center justify-between py-7">
        <div className="flex items-center gap-2.5">
          <MissionBrand size={40} textClassName="v1-display text-2xl tracking-wide" />
        </div>
        <button onClick={() => go('#v1-form')} className="v1-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative overflow-hidden pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="v1-spotlight w-[36rem] h-[36rem] -top-40 left-1/2 -translate-x-1/2" style={{ background: 'var(--v1-accent)', opacity: 0.15 }} />

        <div className="v1-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="v1-tag v1-fade-up">
              <Icon name="Sparkles" size={14} /> Точка Старта
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.05] v1-fade-up" style={{ animationDelay: '0.08s' }}>
              ТЫ ЗНАЕШЬ, ЧТО<br />
              <span className="v1-grad-text">МОЖЕШЬ БОЛЬШЕ</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium v1-fade-up" style={{ color: 'var(--v1-ink-soft)', animationDelay: '0.12s' }}>
              Но пока не всегда можешь это показать.
            </p>

            <div className="mt-7 space-y-2.5 v1-fade-up" style={{ animationDelay: '0.18s' }}>
              {[
                'Ты знаешь ответ, но молчишь.',
                'Хочешь выступить, но начинаешь волноваться.',
                'Знакомишься с людьми, но не знаешь, как поддержать разговор.',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <Icon name="ChevronRight" size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--v1-accent)' }} />
                  <p className="text-base" style={{ color: 'var(--v1-ink-soft)' }}>{t}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-lg v1-fade-up" style={{ animationDelay: '0.22s' }}>
              Иногда хочется быть смелее, свободнее, ярче.
            </p>

            <div className="mt-6 v1-card inline-block px-6 py-4 v1-fade-up" style={{ border: '1px solid var(--v1-accent)', animationDelay: '0.26s' }}>
              <p className="text-xl v1-display">Проблема не в тебе.</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--v1-ink-soft)' }}>Эти навыки можно тренировать.</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 v1-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => go('#v1-programs')} className="v1-btn text-base">
                Смотреть программы <Icon name="ArrowRight" size={18} />
              </button>
              <button onClick={() => go('#v1-form')} className="v1-btn-outline text-base">
                <Icon name="CalendarCheck" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative v1-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-[1.5rem] overflow-hidden border" style={{ borderColor: 'var(--v1-border)' }}>
              <img src={HERO_IMG} alt="Уверенность на сцене" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 -bottom-6 v1-card px-5 py-4 max-w-[240px]">
              <div className="flex items-center gap-2" style={{ color: 'var(--v1-accent)' }}>
                <Icon name="Flame" size={18} />
                <span className="v1-display text-lg">4 программы</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--v1-ink-soft)' }}>
                которые помогают раскрыть себя
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="v1-programs" className="relative py-20 md:py-28" style={{ background: 'var(--v1-bg-soft)' }}>
        <div className="v1-container">
          <div className="max-w-xl">
            <span className="v1-tag"><Icon name="LayoutGrid" size={14} /> Программы</span>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
              4 программы, которые<br /><span className="v1-grad-text">помогают раскрыть себя</span>
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {confidencePrograms.map((p) => (
              <div key={p.slug} className="v1-card p-8">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--v1-accent)' }}>
                  {p.tag}
                </span>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'var(--v1-bg)', color: 'var(--v1-accent)' }}>
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="text-2xl v1-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--v1-ink-soft)' }}>{p.desc}</p>
                <p className="mt-4 text-sm">
                  Ты будешь тренировать:{' '}
                  <span style={{ color: 'var(--v1-accent-soft)' }}>{p.skills.join(' → ')}</span>
                </p>
                <button onClick={() => go('#v1-form')} className="v1-btn-outline mt-6 text-sm">
                  Узнать о программе <Icon name="ArrowRight" size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v1-container">
          <div className="max-w-2xl">
            <span className="v1-tag"><Icon name="Dumbbell" size={14} /> Другой взгляд</span>
            <h2 className="mt-4 text-3xl md:text-5xl leading-tight">
              А что, если проблема не в том,<br /><span className="v1-grad-text">что ты неуверенный?</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--v1-ink-soft)' }}>
              Возможно, ты просто недостаточно тренировался. Как мышцы становятся сильнее от тренировок,
              так и уверенность развивается через действие. Поэтому на наших занятиях ты не просто слушаешь.
            </p>
            <p className="mt-4 text-2xl v1-display v1-grad-text">Ты делаешь.</p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {confidenceActions.map((a) => (
              <div key={a} className="v1-card p-5 text-center">
                <p className="text-sm font-medium">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg" style={{ color: 'var(--v1-ink-soft)' }}>
            И постепенно новое поведение становится естественным.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--v1-bg-soft)' }}>
        <div className="v1-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl leading-tight">НАШИ ЗАНЯТИЯ — ЭТО<br /><span className="v1-grad-text">ПРО ЛЮДЕЙ</span></h2>

            <div className="mt-8 space-y-3">
              {confidenceNegations.map((n) => (
                <p key={n} className="text-base" style={{ color: 'var(--v1-ink-soft)' }}>{n}.</p>
              ))}
            </div>

            <p className="mt-6 text-xl v1-display">
              А про способность оставаться собой и при этом действовать увереннее.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v1-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="v1-tag"><Icon name="HelpCircle" size={14} /> Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
              Какой навык ты хочешь<br />развить первым?
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {confidenceQuiz.map((q) => (
              <div key={q.q} className="v1-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm" style={{ color: 'var(--v1-accent)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#v1-form')} className="v1-btn text-base">
              Помогите выбрать программу <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="v1-form" className="relative py-20 md:py-28" style={{ background: 'var(--v1-bg-soft)' }}>
        <div className="v1-container">
          <div className="v1-card p-10 md:p-16 text-center max-w-xl mx-auto" style={{ border: '1px solid var(--v1-accent)' }}>
            <span className="v1-tag"><Icon name="Gift" size={14} /> Приходи попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Тебе не нужно заранее<br />быть уверенным
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--v1-ink-soft)' }}>
              Уверенность появляется в процессе.
            </p>

            {sent ? (
              <div className="mt-8 v1-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--v1-accent)', color: '#0a0a0a' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl v1-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--v1-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="v1-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="v1-input" />
                <button type="submit" className="v1-btn w-full">
                  Записаться на пробное занятие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--v1-border)' }}>
        <div className="v1-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--v1-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceV1;
