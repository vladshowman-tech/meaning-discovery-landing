import Icon from '@/components/ui/icon';

export type RouteDay = { day: string; label: string; desc: string };

interface CareerHeroProps {
  scrollTo: (h: string) => void;
  routeDays: RouteDay[];
}

const CareerHero = ({ scrollTo, routeDays }: CareerHeroProps) => {
  return (
    <section id="c-route" className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 c-grid-line">
      <div className="c-glow w-96 h-96 -top-20 -left-20" style={{ background: 'var(--c-cyan)' }} />
      <div className="c-glow w-80 h-80 top-10 -right-24" style={{ background: 'var(--c-cyan-dim)' }} />

      <div className="c-container relative">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <span className="c-tag c-fade-up">
              <Icon name="Terminal" size={13} /> ТОЧКА_СТАРТА // 07–09.08.2026
            </span>

            <h1
              className="mt-6 text-4xl sm:text-5xl md:text-[3.6rem] font-bold leading-[1.05] c-fade-up"
              style={{ animationDelay: '0.08s' }}
            >
              Достижение конкретных целей
              <br />
              <span className="c-grad-text">и карьерный рост</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-lg c-fade-up"
              style={{ color: 'var(--c-ink-soft)', animationDelay: '0.16s' }}
            >
              Многие участники рассматривают личностный рост как инструмент для решения
              прикладных задач.
            </p>

            <div
              className="mt-9 flex flex-wrap gap-3 c-fade-up"
              style={{ animationDelay: '0.24s' }}
            >
              <button onClick={() => scrollTo('#c-form')} className="c-btn text-base">
                Оставить заявку <Icon name="ArrowRight" size={17} />
              </button>
              <button onClick={() => scrollTo('#c-program')} className="c-btn-outline text-base">
                <Icon name="Info" size={16} /> О программе
              </button>
            </div>

            <div className="mt-10 lg:hidden flex flex-col gap-3">
              {routeDays.map((d, i) => (
                <div key={d.day} className="c-card p-5 flex items-start gap-4 c-fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                  <div
                    className="c-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-full c-mono text-base font-bold"
                    style={{ background: 'var(--c-bg-soft)', border: '2px solid var(--c-cyan)', color: 'var(--c-cyan)' }}
                  >
                    {d.day}
                  </div>
                  <div>
                    <h3 className="c-display text-base font-bold">{d.label}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
                      {d.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block h-[420px] c-fade-up" style={{ animationDelay: '0.3s' }}>
            <svg viewBox="0 0 360 420" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="c-rise-grad" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="var(--c-cyan-dim)" />
                  <stop offset="100%" stopColor="var(--c-sky)" />
                </linearGradient>
              </defs>

              <line x1="20" y1="390" x2="340" y2="390" stroke="var(--c-border)" strokeWidth="1.5" />

              <path
                d="M 40 370 C 90 350, 100 260, 160 235 C 200 218, 230 130, 300 70"
                className="c-rise-path"
              />

              <circle r="6" className="c-rise-dot">
                <animateMotion
                  dur="3.5s"
                  repeatCount="indefinite"
                  path="M 40 370 C 90 350, 100 260, 160 235 C 200 218, 230 130, 300 70"
                />
              </circle>

              {[
                { x: 40, y: 370 },
                { x: 160, y: 235 },
                { x: 300, y: 70 },
              ].map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r="7"
                  fill="var(--c-bg-soft)"
                  stroke="var(--c-sky)"
                  strokeWidth="2.5"
                />
              ))}
            </svg>

            {[
              { day: '07', label: routeDays[0].label, left: '4%', top: '82%' },
              { day: '08', label: routeDays[1].label, left: '38%', top: '48%' },
              { day: '09', label: routeDays[2].label, left: '76%', top: '5%' },
            ].map((n, i) => (
              <div
                key={n.day}
                className="absolute c-card px-4 py-3 c-fade-up"
                style={{ left: n.left, top: n.top, animationDelay: `${0.4 + i * 0.15}s` }}
              >
                <div className="flex items-center gap-2" style={{ color: 'var(--c-sky)' }}>
                  <span className="c-mono text-sm font-bold">{n.day}</span>
                </div>
                <p className="text-xs mt-0.5 whitespace-nowrap" style={{ color: 'var(--c-ink)' }}>
                  {n.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
