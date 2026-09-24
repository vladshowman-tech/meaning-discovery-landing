import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import { confidencePrograms, confidenceQuiz, confidenceActions, confidenceNegations } from '@/data/confidencePrograms';
import './ConfidenceV5.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/779c3ec5-9a22-45fa-a04d-191cf58d2472.jpg';

const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ConfidenceV5 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <div className="v5-page">
      <header className="relative v5-container flex items-center justify-between py-7">
        <MissionBrand size={36} textClassName="v5-display text-xl tracking-wide" />
        <button onClick={() => go('#v5-form')} className="v5-btn-outline hidden sm:inline-flex text-sm">
          Пробное занятие
        </button>
      </header>

      <section className="relative overflow-hidden pt-8 pb-24 md:pt-14 md:pb-32 v5-grid-line">
        <div className="v5-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="v5-tag v5-fade-up">// Точка Старта</span>

            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl leading-[1.1] v5-fade-up" style={{ animationDelay: '0.08s' }}>
              Ты знаешь, что<br />
              <span className="v5-grad-text">можешь больше</span>
            </h1>
            <p className="mt-4 text-lg" style={{ color: 'var(--v5-ink-soft)', animationDelay: '0.12s' }}>
              Но пока не всегда можешь это показать.
            </p>

            <div className="mt-6 space-y-2 text-base v5-fade-up" style={{ color: 'var(--v5-ink-soft)', animationDelay: '0.18s' }}>
              <p>Ты знаешь ответ, но молчишь.</p>
              <p>Хочешь выступить, но начинаешь волноваться.</p>
              <p>Знакомишься с людьми, но не знаешь, как поддержать разговор.</p>
            </div>

            <p className="mt-6 text-lg v5-fade-up" style={{ animationDelay: '0.22s' }}>
              Иногда хочется быть смелее, свободнее, ярче.
            </p>

            <div className="mt-6 v5-card inline-block px-6 py-4 v5-fade-up" style={{ animationDelay: '0.26s' }}>
              <p className="text-xl v5-display">Проблема не в тебе.</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--v5-ink-soft)' }}>Эти навыки можно тренировать.</p>
            </div>

            <div className="mt-9 flex flex-wrap gap-3 v5-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => go('#v5-programs')} className="v5-btn text-base">
                Смотреть программы <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => go('#v5-form')} className="v5-btn-outline text-base">
                <Icon name="Info" size={16} /> Пробное занятие
              </button>
            </div>
          </div>

          <div className="relative v5-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-lg overflow-hidden border" style={{ borderColor: 'var(--v5-border)' }}>
              <img src={HERO_IMG} alt="Уверенность в деловой среде" className="w-full h-[480px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f16] via-transparent to-transparent" />
            </div>
            <div className="absolute -left-6 -bottom-6 v5-card px-5 py-4 max-w-[220px]">
              <div className="flex items-center gap-2" style={{ color: 'var(--v5-blue-soft)' }}>
                <Icon name="TrendingUp" size={18} />
                <span className="v5-display text-lg">4 программы</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--v5-ink-soft)' }}>для раскрытия себя</p>
            </div>
          </div>
        </div>
      </section>

      <section id="v5-programs" className="relative py-20 md:py-28" style={{ background: 'var(--v5-bg-soft)' }}>
        <div className="v5-container">
          <span className="v5-tag">// Программы</span>
          <h2 className="mt-5 text-3xl md:text-5xl leading-tight max-w-xl">
            4 программы, которые помогают раскрыть себя
          </h2>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {confidencePrograms.map((p) => (
              <div key={p.slug} className="v5-card p-8">
                <span className="text-xs font-semibold" style={{ color: 'var(--v5-blue-soft)' }}>{p.tag}</span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded" style={{ background: 'var(--v5-bg)', color: 'var(--v5-blue-soft)' }}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="text-2xl v5-display">{p.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--v5-ink-soft)' }}>{p.desc}</p>
                <p className="mt-4 text-sm">{p.skills.join(' → ')}</p>
                <button onClick={() => go('#v5-form')} className="v5-btn-outline mt-6 text-sm">
                  Узнать о программе <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v5-container max-w-2xl">
          <span className="v5-tag">// Другой взгляд</span>
          <h2 className="mt-5 text-3xl md:text-4xl leading-tight">
            А что, если проблема не в том, что ты неуверенный?
          </h2>
          <p className="mt-5 text-lg" style={{ color: 'var(--v5-ink-soft)' }}>
            Возможно, ты просто недостаточно тренировался. Как мышцы становятся сильнее от тренировок,
            так и уверенность развивается через действие. Поэтому на наших занятиях ты не просто слушаешь.
          </p>
          <p className="mt-4 text-2xl v5-display v5-grad-text">Ты делаешь.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {confidenceActions.map((a) => (
              <div key={a} className="v5-card p-5 text-center">
                <p className="text-sm font-medium">{a}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg" style={{ color: 'var(--v5-ink-soft)' }}>
            И постепенно новое поведение становится естественным.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--v5-bg-soft)' }}>
        <div className="v5-container max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl leading-tight">Наши занятия — это про людей</h2>
          <div className="mt-8 space-y-2">
            {confidenceNegations.map((n) => (
              <p key={n} className="text-base" style={{ color: 'var(--v5-ink-soft)' }}>{n}.</p>
            ))}
          </div>
          <p className="mt-6 text-xl v5-display">
            А про способность оставаться собой и при этом действовать увереннее.
          </p>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="v5-container">
          <div className="max-w-xl mx-auto text-center">
            <span className="v5-tag">// Быстрый выбор</span>
            <h2 className="mt-5 text-3xl md:text-4xl leading-tight">
              Какой навык ты хочешь развить первым?
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {confidenceQuiz.map((q) => (
              <div key={q.q} className="v5-card p-5 flex items-center justify-between gap-3">
                <span className="text-sm font-medium">{q.q}</span>
                <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: 'var(--v5-blue-soft)' }}>
                  <Icon name="ArrowRight" size={14} /> {q.a}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => go('#v5-form')} className="v5-btn text-base">
              Помогите выбрать программу <Icon name="ArrowRight" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section id="v5-form" className="relative py-20 md:py-28" style={{ background: 'var(--v5-bg-soft)' }}>
        <div className="v5-container">
          <div className="v5-card p-10 md:p-16 text-center max-w-xl mx-auto" style={{ border: '1px solid var(--v5-blue)' }}>
            <span className="v5-tag">// Приходи попробовать</span>
            <h2 className="mt-6 text-3xl md:text-4xl leading-tight">
              Тебе не нужно заранее быть уверенным
            </h2>
            <p className="mt-4 text-base" style={{ color: 'var(--v5-ink-soft)' }}>
              Уверенность появляется в процессе.
            </p>

            {sent ? (
              <div className="mt-8 v5-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--v5-blue)', color: '#fff' }}>
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 text-xl v5-display">Заявка принята!</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--v5-ink-soft)' }}>{name}, мы свяжемся с вами по номеру {phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ваше имя" className="v5-input" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" className="v5-input" />
                <button type="submit" className="v5-btn w-full">
                  Записаться на пробное занятие
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative py-12" style={{ borderTop: '1px solid var(--v5-border)' }}>
        <div className="v5-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm" style={{ color: 'var(--v5-ink-soft)' }}>
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default ConfidenceV5;
