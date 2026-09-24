import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { confidencePrograms, confidenceQuiz, confidenceActions, confidenceNegations } from '@/data/confidencePrograms';
import './ConfidenceV3.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/38459c7b-27bb-4017-b737-93970deb341a.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceV3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="v3-page">
      <div className="v3-blob w-96 h-96 -top-20 -left-20" style={{ background: 'var(--v3-accent-soft)' }} />
      <div className="v3-blob w-72 h-72 top-40 right-0" style={{ background: 'var(--v3-sage)' }} />

      <header className="relative v3-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="v3-display text-2xl tracking-wide" />
        <button onClick={() => go('#v3-form')} className="v3-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="v3-container grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
          <div className="v3-fade-up">
            <span className="v3-eyebrow"><Icon name="Heart" size={14} /> Точка Старта</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Ты знаешь, что можешь больше
            </h1>
            <p className="mt-4 text-xl" style={{ color: 'var(--v3-ink-soft)' }}>
              Но пока не всегда можешь это показать.
            </p>

            <div className="mt-6 space-y-2 text-base" style={{ color: 'var(--v3-ink-soft)' }}>
              <p>Ты знаешь ответ, но молчишь.</p>
              <p>Хочешь выступить, но начинаешь волноваться.</p>
              <p>Знакомишься с людьми, но не знаешь, как поддержать разговор.</p>
            </div>

            <p className="mt-6 text-lg">Иногда хочется быть смелее, свободнее, ярче.</p>

            <div className="mt-6 v3-card inline-block px-6 py-4">
              <p className="text-xl v3-display" style={{ color: 'var(--v3-accent)' }}>Проблема не в тебе.</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--v3-ink-soft)' }}>Эти навыки можно тренировать.</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#v3-programs')} className="v3-btn text-base">
                Смотреть программы <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => go('#v3-form')} className="v3-btn-outline text-base">
                <Icon name="Coffee" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative v3-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden border" style={{ borderColor: 'var(--v3-border)' }}>
              <img src={HERO_IMG} alt="Люди в тёплой обстановке" className="w-full h-[460px] object-cover" />
            </div>
            <div className="absolute -right-4 -bottom-6 v3-card px-5 py-4 max-w-[220px]">
              <div className="flex items-center gap-2" style={{ color: 'var(--v3-accent)' }}>
                <Icon name="Users" size={18} />
                <span className="v3-display text-lg">4 программы</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--v3-ink-soft)' }}>для раскрытия себя</p>
            </div>
          </div>
        </div>
      </section>

      <section id="v3-programs" className="relative py-20 md:py-28" style={{ background: 'var(--v3-bg-soft)' }}>
        <div className="v3-container">
          <span className="v3-eyebrow"><Icon name="Sparkles" size={14} /> Программы</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight max-w-xl">
            4 программы, которые помогают раскрыть себя
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {confidencePrograms.map((p) => (
              <div key={p.slug} className="v3-card p-8">
                <span className="text-xs font-semibold" style={{ color: 'var(--v3-accent)' }}>{p.tag}</span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl" style={{ background: 'var(--v3-bg-soft)', color: 'var(--v3-accent)' }}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="text-2xl v3-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--v3-ink-soft)' }}>{p.desc}</p>
                <p className="mt-4 text-sm">{p.skills.join(' → ')}</p>
                <button onClick={() => go('#v3-form')} className="v3-btn-outline mt-6 text-sm">
                  Узнать о программе <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v3-container max-w-2xl">
          <span className="v3-eyebrow"><Icon name="Dumbbell" size={14} /> Другой взгляд</span>
          <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
            А что, если проблема не в том, что ты неуверенный?
          </h2>
          <p className="mt-5 text-lg" style={{ color: 'var(--v3-ink-soft)' }}>
            Возможно, ты просто недостаточно тренировался. Как мышцы становятся сильнее от тренировок,
            так и уверенность развивается через действие. Поэтому на наших занятиях ты не просто слушаешь.
          </p>
          <p className="mt-4 text-2xl v3-display" style={{ color: 'var(--v3-accent)' }}>Ты делаешь.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {confidenceActions.map((a) => (
              <div key={a} className="v3-card p-5 text-center">
                <p className="text-sm font-medium">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg" style={{ color: 'var(--v3-ink-soft)' }}>
            И постепенно новое поведение становится естественным.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--v3-bg-soft)' }}>
        <div className="v3-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Наши занятия — это про людей</h2>
          <div className="mt-8 space-y-2">
            {confidenceNegations.map((n) => (
              <p key={n} className="text-base" style={{ color: 'var(--v3-ink-soft)' }}>{n}.</p>
            ))}
          </div>
          <p className="mt-6 text-xl v3-display">
            А про способность оставаться собой и при этом действовать увереннее.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v3-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="v3-eyebrow"><Icon name="HelpCircle" size={14} /> Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
              Какой навык ты хочешь развить первым?
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {confidenceQuiz.map((q) => (
              <div key={q.q} className="v3-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--v3-accent)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#v3-form')} className="v3-btn text-base">
              Помогите выбрать программу <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="v3-form" className="relative py-20 md:py-28" style={{ background: 'var(--v3-bg-soft)' }}>
        <div className="v3-container">
          <div className="v3-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="v3-eyebrow"><Icon name="Gift" size={14} /> Приходи попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Тебе не нужно заранее быть уверенным
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--v3-ink-soft)' }}>
              Уверенность появляется в процессе.
            </p>

            {sent ? (
              <div className="mt-8 v3-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--v3-accent)', color: '#fff' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl v3-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--v3-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="v3-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="v3-input" />
                <button type="submit" className="v3-btn w-full">
                  Записаться на пробное занятие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--v3-border)' }}>
        <div className="v3-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--v3-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceV3;
