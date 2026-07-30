import { NavigateFunction } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Plan } from '@/data/plans';

export type Credential = { icon: string; text: string };

interface CareerMentorAndPlansProps {
  navigate: NavigateFunction;
  mentorImg: string;
  credentials: Credential[];
  plans: Plan[];
}

const CareerMentorAndPlans = ({ navigate, mentorImg, credentials, plans }: CareerMentorAndPlansProps) => {
  return (
    <>
      <section id="c-program" className="relative py-20 md:py-28">
        <div className="c-container grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid var(--c-border)' }}>
              <img
                src={mentorImg}
                alt="Елена Ширыкалова — тренер программы"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>

          <div>
            <span className="c-tag">
              <Icon name="Sparkles" size={13} /> Тренер программы
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
                    style={{ background: 'var(--c-bg-soft)', color: 'var(--c-cyan)' }}
                  >
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="text-sm">{c.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 c-card px-5 py-4 max-w-md">
              <Icon name="Clock" size={18} style={{ color: 'var(--c-cyan)' }} className="shrink-0" />
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
              <Icon name="Wallet" size={13} /> Стоимость участия
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
                style={p.featured ? { border: '1.5px solid var(--c-cyan)' } : undefined}
              >
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold c-mono"
                    style={
                      p.featured
                        ? { background: 'var(--c-cyan)', color: '#06090b' }
                        : { background: 'var(--c-bg)', color: 'var(--c-cyan)' }
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
                        style={{ color: 'var(--c-cyan)' }}
                      />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    if (p.slug === 'standart') {
                      window.location.href = 'https://payment.alfabank.ru/sc/qqBIIRvrVfoyltPt';
                    } else if (p.slug === 'lgotnyy') {
                      window.location.href = 'https://payment.alfabank.ru/sc/wmCbmpNMFZOZRYlv';
                    } else if (p.slug === 'vmeste') {
                      window.location.href = 'https://payment.alfabank.ru/sc/efFvliuLpqmftlbw';
                    } else {
                      navigate(`/oplata/${p.slug}`);
                    }
                  }}
                  className={p.featured ? 'c-btn mt-7' : 'c-btn-outline mt-7'}
                >
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerMentorAndPlans;