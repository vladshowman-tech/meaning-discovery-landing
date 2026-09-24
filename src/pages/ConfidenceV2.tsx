import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { confidencePrograms, confidenceQuiz, confidenceActions, confidenceNegations } from '@/data/confidencePrograms';
import './ConfidenceV2.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/b97978ec-3364-4897-841f-bcef218b66bc.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceV2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="v2-page">
      <header className="relative v2-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="v2-display text-2xl tracking-wide" />
        <button onClick={() => go('#v2-form')} className="v2-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative pt-10 pb-24 md:pt-16 md:pb-32">
        <div className="v2-container grid lg:grid-cols-[1fr_0.85fr] gap-16 items-center">
          <div className="v2-fade-up">
            <span className="v2-eyebrow">Точка Старта</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1]">
              Ты знаешь, что<br />можешь больше
            </h1>
            <p className="mt-5 text-xl" style={{ color: 'var(--v2-ink-soft)' }}>
              Но пока не всегда можешь это показать.
            </p>

            <div className="mt-3 v2-divider" />

            <div className="mt-6 space-y-2 text-base" style={{ color: 'var(--v2-ink-soft)' }}>
              <p>Ты знаешь ответ, но молчишь.</p>
              <p>Хочешь выступить, но начинаешь волноваться.</p>
              <p>Знакомишься с людьми, но не знаешь, как поддержать разговор.</p>
            </div>

            <p className="mt-6 text-lg">Иногда хочется быть смелее, свободнее, ярче.</p>
            <p className="mt-4 text-xl v2-display">Проблема не в тебе. Эти навыки можно тренировать.</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button onClick={() => go('#v2-programs')} className="v2-btn text-base">
                Смотреть программы <Icon name="ArrowRight" size={16} />
              </button>
              <button onClick={() => go('#v2-form')} className="v2-btn-outline text-base">
                Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative v2-fade-up" style={{ animationDelay: '0.15s' }}>
            <img src={HERO_IMG} alt="Спокойная уверенность" className="w-full h-[540px] object-cover rounded-sm" />
          </div>
        </div>
      </section>

      <section id="v2-programs" className="relative py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }}>
        <div className="v2-container">
          <span className="v2-eyebrow">Программы</span>
          <h2 className="mt-4 text-3xl md:text-5xl leading-tight max-w-xl">
            4 программы, которые помогают раскрыть себя
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ background: 'var(--v2-border)' }}>
            {confidencePrograms.map((p) => (
              <div key={p.slug} className="p-9" style={{ background: 'var(--v2-card)' }}>
                <span className="v2-eyebrow">{p.tag}</span>
                <h3 className="mt-4 text-2xl v2-display">{p.title}</h3>
                <p className="mt-3 text-base" style={{ color: 'var(--v2-ink-soft)' }}>{p.desc}</p>
                <p className="mt-4 text-sm leading-relaxed">
                  {p.skills.join(' → ')}
                </p>
                <button onClick={() => go('#v2-form')} className="mt-6 text-sm font-semibold flex items-center gap-1.5" style={{ color: 'var(--v2-accent)' }}>
                  Узнать о программе <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="v2-container max-w-2xl">
          <span className="v2-eyebrow">Другой взгляд</span>
          <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
            А что, если проблема не в том, что ты неуверенный?
          </h2>
          <p className="mt-6 text-lg" style={{ color: 'var(--v2-ink-soft)' }}>
            Возможно, ты просто недостаточно тренировался. Как мышцы становятся сильнее от тренировок,
            так и уверенность развивается через действие. Поэтому на наших занятиях ты не просто слушаешь.
          </p>
          <p className="mt-4 text-2xl v2-display">Ты делаешь.</p>

          <div className="mt-10 flex flex-wrap gap-x-2 gap-y-3 text-base">
            {confidenceActions.map((a, i) => (
              <span key={a} className="flex items-center gap-2">
                {a}
                {i < confidenceActions.length - 1 && <span style={{ color: 'var(--v2-accent-soft)' }}>·</span>}
              </span>
            ))}
          </div>
          <p className="mt-8 text-lg" style={{ color: 'var(--v2-ink-soft)' }}>
            И постепенно новое поведение становится естественным.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }}>
        <div className="v2-container max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Наши занятия — это про людей</h2>
          <div className="mt-8 space-y-2">
            {confidenceNegations.map((n) => (
              <p key={n} className="text-base" style={{ color: 'var(--v2-ink-soft)' }}>{n}.</p>
            ))}
          </div>
          <p className="mt-6 text-xl v2-display">
            А про способность оставаться собой и при этом действовать увереннее.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32">
        <div className="v2-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="v2-eyebrow">Быстрый выбор</span>
            <h2 className="mt-4 text-3xl md:text-4xl leading-tight">
              Какой навык ты хочешь развить первым?
            </h2>
          </div>

          <div className="mt-12 max-w-2xl mx-auto divide-y" style={{ borderColor: 'var(--v2-border)' }}>
            {confidenceQuiz.map((q) => (
              <div key={q.q} className="flex items-center justify-between gap-3 py-4" style={{ borderBottom: '1px solid var(--v2-border)' }}>
                <span className="text-base">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--v2-accent)' }}>
                  {q.a} <Icon name="ArrowRight" size={14} />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#v2-form')} className="v2-btn text-base">
              Помогите выбрать программу
            </button>
          </div>
        </div>
      </section>

      <section id="v2-form" className="relative py-24 md:py-32" style={{ background: 'var(--v2-bg-soft)' }}>
        <div className="v2-container">
          <div className="v2-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="v2-eyebrow">Приходи попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Тебе не нужно заранее быть уверенным
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--v2-ink-soft)' }}>
              Уверенность появляется в процессе.
            </p>

            {sent ? (
              <div className="mt-8 v2-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--v2-ink)', color: 'var(--v2-bg)' }}>
                  <Icon name="Check" size={24} />
                </div>
                <h3 className="mt-4 text-xl v2-display">Заявка принята</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--v2-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-4">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="v2-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="v2-input" />
                <button type="submit" className="v2-btn w-full mt-2">
                  Записаться на пробное занятие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--v2-border)' }}>
        <div className="v2-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--v2-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceV2;
