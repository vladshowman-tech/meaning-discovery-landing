import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MENTOR_IMG from '@/assets/mentor.jpg';
import { plans } from '@/data/plans';
import './Relationships.css';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/054e6a37-f606-4430-afed-8c15d453452d.jpg';

const requests = [
  { icon: 'Heart', text: 'Как наладить отношения с партнёром, родителями или детьми?' },
  { icon: 'Users', text: 'Как избавиться от одиночества?' },
  { icon: 'Scale', text: 'Как создать баланс между работой и личной жизнью?' },
  { icon: 'Sunrise', text: 'Как изменить привычки и повысить качество повседневности?' },
];

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Тренер программы «Точка Старта»' },
];

const Relationships = () => {
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
    <div className="harmony-page">
      <header className="relative h-container flex items-center justify-between py-7">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: 'var(--h-accent)', color: '#fff8f2' }}
          >
            <Icon name="Flower2" size={19} />
          </span>
          <span className="h-serif text-2xl font-semibold tracking-tight">Гармония</span>
        </div>
        <button onClick={() => navigate('/')} className="h-btn-outline text-sm">
          <Icon name="ArrowLeft" size={15} /> На главную
        </button>
      </header>

      <section className="relative overflow-hidden pt-6 pb-20 md:pt-10 md:pb-28">
        <div className="h-blob w-72 h-72 -top-10 -left-16" style={{ background: 'var(--h-accent-soft)' }} />
        <div className="h-blob w-80 h-80 top-20 -right-20" style={{ background: 'var(--h-sage)' }} />

        <div className="h-container relative grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
          <div>
            <span className="h-eyebrow h-fade-up">
              <Icon name="CalendarHeart" size={15} /> 7–9 августа 2026
            </span>

            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.08] h-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              Улучшение качества жизни
              <br />
              <span style={{ color: 'var(--h-accent)' }}>и отношений</span>
            </h1>

            <p
              className="mt-6 max-w-lg text-lg h-fade-up"
              style={{ color: 'var(--h-ink-soft)', animationDelay: '0.16s' }}
            >
              Запрос на построение гармоничной жизни во всех её сферах.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 h-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              <button
                onClick={() => document.querySelector('#h-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-btn text-base"
              >
                Оставить заявку <Icon name="ArrowRight" size={17} />
              </button>
              <button
                onClick={() => document.querySelector('#h-program')?.scrollIntoView({ behavior: 'smooth' })}
                className="h-btn-outline text-base"
              >
                <Icon name="Info" size={16} /> О программе
              </button>
            </div>
          </div>

          <div className="relative h-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-[2rem] overflow-hidden" style={{ border: '1px solid var(--h-border)' }}>
              <img src={HERO_IMG} alt="Гармония в отношениях" className="w-full h-[420px] object-cover" />
            </div>
            <div
              className="absolute -left-6 -bottom-6 h-card px-5 py-4 h-float max-w-[210px]"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center gap-2" style={{ color: 'var(--h-accent)' }}>
                <Icon name="HeartHandshake" size={18} />
                <span className="h-serif text-lg font-semibold">Больше близости</span>
              </div>
              <p className="text-xs mt-1" style={{ color: 'var(--h-ink-soft)' }}>
                В отношениях с собой и близкими
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="h-container">
          <div className="max-w-xl">
            <span className="h-eyebrow">
              <Icon name="MessageCircleQuestion" size={15} /> Знакомые вопросы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Типичные запросы наших участников
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {requests.map((r) => (
              <div key={r.text} className="h-card p-7 flex items-start gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: 'var(--h-bg-soft)', color: 'var(--h-accent)' }}
                >
                  <Icon name={r.icon} size={20} />
                </span>
                <p className="text-sm leading-relaxed pt-2">«{r.text}»</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="h-program" className="relative py-20 md:py-28" style={{ background: 'var(--h-bg-soft)' }}>
        <div className="h-container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-[2rem] overflow-hidden" style={{ border: '1px solid var(--h-border)' }}>
              <img
                src={MENTOR_IMG}
                alt="Елена Ширыкалова — тренер программы «Точка Старта»"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="h-eyebrow">
              <Icon name="Sparkles" size={15} /> Тренер программы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Елена <span style={{ color: 'var(--h-accent)' }}>Ширыкалова</span>
            </h2>
            <p className="mt-5 text-lg" style={{ color: 'var(--h-ink-soft)' }}>
              Больше десяти лет сопровождаю людей на пути к себе — помогаю разглядеть настоящие
              ценности за слоем чужих ожиданий и вернуть ощущение осмысленной жизни. «Точка
              Старта» — программа, в которую вложен весь мой опыт работы с теми, кто устал жить на
              автопилоте.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.text} className="flex items-center gap-3 h-card px-5 py-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--h-bg-soft)', color: 'var(--h-accent)' }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 h-card px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} style={{ color: 'var(--h-accent)' }} className="shrink-0" />
              <span className="text-sm">
                Длительность — 3 дня: 7 августа (вечер), 8 и 9 августа (весь день) 2026 года
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="h-plans" className="relative py-20 md:py-28">
        <div className="h-container">
          <div className="max-w-xl">
            <span className="h-eyebrow">
              <Icon name="Wallet" size={15} /> Стоимость участия
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Выберите формат участия
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--h-ink-soft)' }}>
              Программа одна, а условия участия разные.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div
                key={p.slug}
                className="h-card p-8 flex flex-col"
                style={
                  p.featured
                    ? { border: '1.5px solid var(--h-accent)', background: 'var(--h-bg-soft)' }
                    : undefined
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={
                      p.featured
                        ? { background: 'var(--h-accent)', color: '#fff8f2' }
                        : { background: 'var(--h-bg-soft)', color: 'var(--h-accent)' }
                    }
                  >
                    {p.tag}
                  </span>
                  <span className="text-2xl font-semibold" style={{ color: 'var(--h-accent)' }}>
                    {p.price}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--h-ink-soft)' }}>
                  {p.desc}
                </p>

                <div
                  className="mt-5 flex items-center gap-1.5 text-sm"
                  style={{ color: 'var(--h-ink-soft)' }}
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
                        style={{ color: 'var(--h-accent)' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/oplata/${p.slug}`)}
                  className={p.featured ? 'h-btn mt-7' : 'h-btn-outline mt-7'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="h-form" className="relative py-20 md:py-28">
        <div className="h-container">
          <div
            className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-center"
            style={{ background: 'var(--h-card)', border: '1px solid var(--h-border)' }}
          >
            <div className="h-blob w-64 h-64 -top-16 left-1/4" style={{ background: 'var(--h-rose)' }} />
            <div className="h-blob w-64 h-64 -bottom-16 right-1/4" style={{ background: 'var(--h-sage)' }} />

            <div className="relative max-w-xl mx-auto">
              <span className="h-eyebrow">
                <Icon name="Gift" size={15} /> Бесплатная консультация по целям!
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
                Сделайте первый шаг
                <br />
                <span style={{ color: 'var(--h-accent)' }}>к гармоничной жизни</span>
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'var(--h-ink-soft)' }}>
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 h-card p-8 max-w-md mx-auto h-fade-up">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'var(--h-accent)', color: '#fff8f2' }}
                  >
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--h-ink-soft)' }}>
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="h-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="h-input"
                  />
                  <button type="submit" className="h-btn w-full">
                    Записаться на консультацию по целям
                  </button>
                  {error && <p className="text-sm" style={{ color: 'var(--h-rose)' }}>{error}</p>}
                  <p className="text-xs mt-1" style={{ color: 'var(--h-ink-soft)' }}>
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14" style={{ borderTop: '1px solid var(--h-border)' }}>
        <div className="h-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
                style={{ background: 'var(--h-accent)', color: '#fff8f2' }}
              >
                <Icon name="Flower2" size={18} />
              </span>
              <span className="text-2xl font-semibold">Гармония</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--h-ink-soft)' }}>
              Программа «Точка Старта» для построения гармоничной жизни во всех её сферах —
              отношения, семья, работа и личные привычки.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--h-ink-soft)' }}>
              {[
                { l: 'О программе', h: '#h-program' },
                { l: 'Стоимость', h: '#h-plans' },
                { l: 'Заявка', h: '#h-form' },
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
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--h-ink-soft)' }}>
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
          className="h-container mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid var(--h-border)', color: 'var(--h-ink-soft)' }}
        >
          <span>© 2026 Гармония. Все права защищены.</span>
          <span>Сделано с заботой о тех, кто ищет гармонию</span>
        </div>
      </footer>
    </div>
  );
};

export default Relationships;