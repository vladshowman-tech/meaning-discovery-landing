import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { confidencePrograms, confidenceQuiz, confidenceActions, confidenceNegations } from '@/data/confidencePrograms';
import './ConfidenceV4.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/851dfbfa-2614-481f-8e34-62ee73bb84f6.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceV4 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="v4-page">
      <div className="v4-blob w-80 h-80 -top-10 -left-10" style={{ background: 'var(--v4-yellow)' }} />
      <div className="v4-blob w-72 h-72 top-60 right-0" style={{ background: 'var(--v4-cyan)' }} />

      <header className="relative v4-container flex items-center justify-between py-8">
        <MissionBrand size={36} textClassName="v4-display text-xl tracking-wide" />
        <button onClick={() => go('#v4-form')} className="v4-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative pt-8 pb-24 md:pt-14 md:pb-32">
        <div className="v4-container grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div className="v4-fade-up">
            <span className="v4-tag">Точка Старта</span>

            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              ТЫ ЗНАЕШЬ, ЧТО<br />
              <span className="v4-splash-text">МОЖЕШЬ БОЛЬШЕ</span>
            </h1>
            <p className="mt-5 text-xl font-bold">
              Но пока не всегда можешь это показать.
            </p>

            <div className="mt-6 space-y-2 text-base font-medium" style={{ color: 'var(--v4-ink-soft)' }}>
              <p>Ты знаешь ответ, но молчишь.</p>
              <p>Хочешь выступить, но начинаешь волноваться.</p>
              <p>Знакомишься с людьми, но не знаешь, как поддержать разговор.</p>
            </div>

            <p className="mt-6 text-lg font-bold">Иногда хочется быть смелее, свободнее, ярче.</p>

            <div className="mt-6 v4-card inline-block px-6 py-4">
              <p className="text-xl v4-display">ПРОБЛЕМА НЕ В ТЕБЕ.</p>
              <p className="mt-1 text-sm font-semibold" style={{ color: 'var(--v4-ink-soft)' }}>Эти навыки можно тренировать.</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <button onClick={() => go('#v4-programs')} className="v4-btn text-base">
                Смотреть программы <Icon name="ArrowRight" size={18} />
              </button>
              <button onClick={() => go('#v4-form')} className="v4-btn-outline text-base">
                <Icon name="Zap" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative v4-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ border: '2px solid var(--v4-border)', boxShadow: '8px 8px 0 var(--v4-border)' }}>
              <img src={HERO_IMG} alt="Дерзкая уверенность" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="v4-programs" className="relative py-20 md:py-28" style={{ background: 'var(--v4-bg-soft)' }}>
        <div className="v4-container">
          <span className="v4-tag">Программы</span>
          <h2 className="mt-6 text-3xl md:text-5xl leading-tight max-w-xl">
            4 программы, которые помогают раскрыть себя
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 gap-7">
            {confidencePrograms.map((p, i) => (
              <div key={p.slug} className="v4-card p-8" style={{ transform: i % 2 ? 'rotate(0.6deg)' : 'rotate(-0.6deg)' }}>
                <span className="text-xs font-extrabold uppercase" style={{ color: 'var(--v4-magenta)' }}>{p.tag}</span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: 'var(--v4-yellow)', border: '2px solid var(--v4-border)' }}>
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="text-2xl v4-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm font-medium leading-relaxed">{p.desc}</p>
                <p className="mt-4 text-sm font-bold">{p.skills.join(' → ')}</p>
                <button onClick={() => go('#v4-form')} className="v4-btn-outline mt-6 text-sm">
                  Узнать о программе <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v4-container max-w-2xl">
          <span className="v4-tag">Другой взгляд</span>
          <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
            А что, если проблема не в том, что ты неуверенный?
          </h2>
          <p className="mt-5 text-lg font-medium" style={{ color: 'var(--v4-ink-soft)' }}>
            Возможно, ты просто недостаточно тренировался. Как мышцы становятся сильнее от тренировок,
            так и уверенность развивается через действие. Поэтому на наших занятиях ты не просто слушаешь.
          </p>
          <p className="mt-4 text-2xl v4-display v4-splash-text">ТЫ ДЕЛАЕШЬ.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {confidenceActions.map((a, i) => (
              <div key={a} className="v4-card p-5 text-center" style={{ transform: i % 2 ? 'rotate(1deg)' : 'rotate(-1deg)' }}>
                <p className="text-sm font-bold">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-medium" style={{ color: 'var(--v4-ink-soft)' }}>
            И постепенно новое поведение становится естественным.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--v4-bg-soft)' }}>
        <div className="v4-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">НАШИ ЗАНЯТИЯ — ЭТО<br /><span className="v4-splash-text">ПРО ЛЮДЕЙ</span></h2>
          <div className="mt-8 space-y-2">
            {confidenceNegations.map((n) => (
              <p key={n} className="text-base font-medium" style={{ color: 'var(--v4-ink-soft)' }}>{n}.</p>
            ))}
          </div>
          <p className="mt-6 text-xl v4-display">
            А ПРО СПОСОБНОСТЬ ОСТАВАТЬСЯ СОБОЙ И ДЕЙСТВОВАТЬ УВЕРЕННЕЕ.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v4-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="v4-tag">Быстрый выбор</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Какой навык ты хочешь развить первым?
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {confidenceQuiz.map((q, i) => (
              <div key={q.q} className="v4-card p-5 flex items-center justify-between gap-3" style={{ transform: i % 2 ? 'rotate(0.5deg)' : 'rotate(-0.5deg)' }}>
                <span className="text-sm font-bold">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-extrabold" style={{ color: 'var(--v4-magenta)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#v4-form')} className="v4-btn text-base">
              Помогите выбрать программу <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="v4-form" className="relative py-20 md:py-28" style={{ background: 'var(--v4-bg-soft)' }}>
        <div className="v4-container">
          <div className="v4-card p-10 md:p-16 text-center max-w-xl mx-auto">
            <span className="v4-tag">Приходи попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Тебе не нужно заранее быть уверенным
            </h2>
            <p className="mt-4 text-base font-medium" style={{ color: 'var(--v4-ink-soft)' }}>
              Уверенность появляется в процессе.
            </p>

            {sent ? (
              <div className="mt-8 v4-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--v4-magenta)', color: '#fff', border: '2px solid var(--v4-border)' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl v4-display">ЗАЯВКА ПРИНЯТА!</h3>
                <p className="mt-2 text-sm font-medium" style={{ color: 'var(--v4-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="v4-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="v4-input" />
                <button type="submit" className="v4-btn w-full">
                  Записаться на пробное занятие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '2px solid var(--v4-border)' }}>
        <div className="v4-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-semibold">
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceV4;
