import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MENTOR_IMG from '@/assets/mentor.jpg';
import { plans } from '@/data/plans';
import './Career.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/d53b6535-b217-42ed-b6b5-4b58c87dbcb7.jpg';

const requests = [
  { icon: 'TrendingUp', text: 'Как увеличить доход?' },
  { icon: 'ArrowUpRight', text: 'Как получить повышение?' },
  { icon: 'Rocket', text: 'Как запустить свой проект?' },
  { icon: 'Users', text: 'Как перестать бояться руководить людьми?' },
];

const audience = [
  {
    icon: 'Briefcase',
    title: 'Предприниматели',
    text: 'Готовые запустить или масштабировать своё дело без страха ошибок.',
  },
  {
    icon: 'UserCog',
    title: 'Менеджеры',
    text: 'Развивающие управленческие навыки и уверенность в принятии решений.',
  },
  {
    icon: 'Star',
    title: 'Специалисты',
    text: 'Прокачивающие soft skills, харизму и умение влиять на других.',
  },
];

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Тренер программы «Точка Старта»' },
];

const Career = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <div className="career-page">
      <header className="relative c-container flex items-center justify-between py-7">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ background: 'var(--c-lime)', color: '#0e0f11' }}
          >
            <Icon name="Zap" size={19} />
          </span>
          <span className="c-display text-xl font-bold tracking-tight">Рост</span>
        </div>
        <button onClick={() => navigate('/')} className="c-btn-outline text-sm">
          <Icon name="ArrowLeft" size={15} /> На главную
        </button>
      </header>

      <section className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28 c-grid-line">
        <div className="c-glow w-96 h-96 -top-20 -left-20" style={{ background: 'var(--c-lime)' }} />
        <div className="c-glow w-96 h-96 top-10 -right-24" style={{ background: 'var(--c-blue)' }} />

        <div className="c-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="c-tag c-fade-up">
              <Icon name="CalendarDays" size={14} /> 7–9 августа 2026
            </span>

            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-[3.4rem] font-bold leading-[1.05] c-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              Достижение конкретных целей
              <br />
              <span className="c-grad-text">и карьерный рост</span>
            </h1>

            <p
              className="mt-6 max-w-lg text-lg c-fade-up"
              style={{ color: 'var(--c-ink-soft)', animationDelay: '0.16s' }}
            >
              Многие участники рассматривают личностный рост как инструмент для решения
              прикладных задач.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 c-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              <button
                onClick={() => document.querySelector('#c-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="c-btn text-base"
              >
                Оставить заявку <Icon name="ArrowRight" size={17} />
              </button>
              <button
                onClick={() => document.querySelector('#c-program')?.scrollIntoView({ behavior: 'smooth' })}
                className="c-btn-outline text-base"
              >
                <Icon name="Info" size={16} /> О программе
              </button>
            </div>
          </div>

          <div className="relative c-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
              <img src={HERO_IMG} alt="Карьерный рост" className="w-full h-[420px] object-cover" />
            </div>
            <div
              className="absolute -left-6 -bottom-6 c-card px-5 py-4 max-w-[220px]"
            >
              <div className="flex items-center gap-2" style={{ color: 'var(--c-lime)' }}>
                <Icon name="TrendingUp" size={18} />
                <span className="c-display text-lg font-bold">+40% дохода</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--c-ink-soft)' }}>
                В среднем у участников после программы
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="MessageCircleQuestion" size={14} /> Знакомые вопросы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Типичные запросы участников
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {requests.map((r) => (
              <div key={r.text} className="c-card p-7 flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                  style={{ background: 'var(--c-bg-soft)', color: 'var(--c-lime)' }}
                >
                  <Icon name={r.icon} size={20} />
                </span>
                <p className="text-sm leading-relaxed pt-2">«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28" style={{ background: 'var(--c-bg-soft)' }}>
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="Target" size={14} /> Для кого программа
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Контекст запросов
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Развитие soft skills, лидерских качеств, харизмы и умения влиять на других.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audience.map((a) => (
              <div key={a.title} className="c-card p-7">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'var(--c-bg)', color: 'var(--c-lime)' }}
                >
                  <Icon name={a.icon} size={22} />
                </span>
                <h3 className="mt-5 c-display text-xl font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="c-program" className="relative py-20 md:py-28">
        <div className="c-container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
              <img
                src={MENTOR_IMG}
                alt="Елена Ширыкалова — тренер программы"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="c-tag">
              <Icon name="Sparkles" size={14} /> Тренер программы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Елена <span className="c-grad-text">Ширыкалова</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Больше десяти лет сопровождаю людей на пути к себе — помогаю разглядеть настоящие
              ценности и превратить личностный рост в конкретный результат: доход, карьеру,
              уверенное лидерство.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 c-card px-5 py-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: 'var(--c-bg-soft)', color: 'var(--c-lime)' }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 c-card px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} style={{ color: 'var(--c-lime)' }} className="shrink-0" />
              <span className="text-sm">
                Длительность — 3 дня: 7 августа (вечер), 8 и 9 августа (весь день) 2026 года
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="c-plans" className="relative py-20 md:py-28" style={{ background: 'var(--c-bg-soft)' }}>
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="Wallet" size={14} /> Стоимость участия
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Выберите формат участия
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Программа одна, а условия участия разные.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.slug}
                className="c-card p-8 flex flex-col"
                style={p.featured ? { border: '1.5px solid var(--c-lime)' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={
                      p.featured
                        ? { background: 'var(--c-lime)', color: '#0e0f11' }
                        : { background: 'var(--c-bg)', color: 'var(--c-lime)' }
                    }
                  >
                    {p.tag}
                  </span>
                  <span className="text-2xl font-bold c-grad-text">{p.price}</span>
                </div>

                <h3 className="mt-6 text-2xl font-bold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
                  {p.desc}
                </p>

                <div
                  className="mt-5 flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--c-ink-soft)' }}
                >
                  <Icon name="Users" size={15} /> {p.audience}
                </div>

                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm">
                      <Icon
                        name="Check"
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: 'var(--c-lime)' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/oplata/${p.slug}`)}
                  className={p.featured ? 'c-btn mt-7' : 'c-btn-outline mt-7'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="c-form" className="relative py-20 md:py-28">
        <div className="c-container">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
            style={{ background: 'var(--c-card)', border: '1px solid var(--c-border)' }}
          >
            <div className="c-glow w-64 h-64 -top-16 left-1/4" style={{ background: 'var(--c-lime)' }} />
            <div className="c-glow w-64 h-64 -bottom-16 right-1/4" style={{ background: 'var(--c-blue)' }} />

            <div className="relative max-w-xl mx-auto">
              <span className="c-tag">
                <Icon name="Gift" size={14} /> Бесплатная консультация по целям!
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
                Сделайте первый шаг
                <br />
                <span className="c-grad-text">к результату</span>
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 c-card p-8 max-w-md mx-auto c-fade-up">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'var(--c-lime)', color: '#0e0f11' }}
                  >
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="c-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="c-input"
                  />
                  <button type="submit" className="c-btn w-full">
                    Записаться на консультацию по целям
                  </button>
                  {error && <p className="text-sm" style={{ color: '#ff6b6b' }}>{error}</p>}
                  <p className="text-xs mt-1" style={{ color: 'var(--c-ink-soft)' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="c-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl"
                style={{ background: 'var(--c-lime)', color: '#0e0f11' }}
              >
                <Icon name="Zap" size={18} />
              </span>
              <span className="c-display text-xl font-bold">Рост</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
              Программа «Точка Старта» для тех, кто хочет превратить личностный рост в конкретный
              карьерный и финансовый результат.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
              {[
                { l: 'О программе', h: '#c-program' },
                { l: 'Стоимость', h: '#c-plans' },
                { l: 'Заявка', h: '#c-form' },
              ].map((i) => (
                <li key={i.h}>
                  <button
                    onClick={() => document.querySelector(i.h)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {i.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={15} /> activationmission@yandex.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Send" size={15} /> @missiontrue
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={15} /> +7 964 488-73-65
              </li>
            </ul>
          </div>
        </div>

        <div
          className="c-container mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-ink-soft)' }}
        >
          <span>© 2026 Рост. Все права защищены.</span>
          <span>Сделано для тех, кто добивается результата</span>
        </div>
      </footer>
    </div>
  );
};

export default Career;
