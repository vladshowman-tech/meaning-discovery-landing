import Icon from '@/components/ui/icon';

export type DayProgram = { day: string; title: string; theme: string; steps: string[] };
export type Request = { icon: string; text: string };
export type AudienceItem = { icon: string; title: string; text: string };

interface CareerDaysProgramProps {
  dayPrograms: DayProgram[];
  activeDay: number;
  setActiveDay: (i: number) => void;
  requests: Request[];
  audience: AudienceItem[];
}

const CareerDaysProgram = ({ dayPrograms, activeDay, setActiveDay, requests, audience }: CareerDaysProgramProps) => {
  return (
    <>
      <section id="c-days" className="relative py-20 md:py-28" style={{ background: 'var(--c-bg-soft)' }}>
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="CalendarClock" size={13} /> Путь программы
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
              Программа по дням
            </h2>
            <p className="mt-4 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
              Три дня — три шага одного маршрута: от знакомства к результату.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {dayPrograms.map((d, i) => (
              <button
                key={d.day}
                onClick={() => setActiveDay(i)}
                className="flex items-center gap-3 rounded-2xl px-5 py-3.5 transition-all duration-300"
                style={
                  activeDay === i
                    ? {
                        background: 'linear-gradient(135deg, var(--c-sky), var(--c-cyan))',
                        color: '#05080f',
                        boxShadow: '0 8px 28px -8px rgba(77, 163, 255, 0.5)',
                      }
                    : {
                        background: 'var(--c-card)',
                        color: 'var(--c-ink)',
                        border: '1px solid var(--c-border)',
                      }
                }
              >
                <span className="c-mono text-lg font-bold">{d.day}</span>
                <span className="text-sm font-semibold hidden sm:inline">{d.title}</span>
              </button>
            ))}
          </div>

          <div className="mt-8 c-card p-8 md:p-10 c-fade-up" key={activeDay}>
            <div className="flex items-center gap-4 flex-wrap">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl c-mono text-xl font-bold"
                style={{ background: 'var(--c-bg-soft)', border: '2px solid var(--c-cyan)', color: 'var(--c-sky)' }}
              >
                {dayPrograms[activeDay].day}
              </div>
              <div>
                <h3 className="c-display text-2xl font-bold">{dayPrograms[activeDay].title}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--c-cyan)' }}>
                  {dayPrograms[activeDay].theme}
                </p>
              </div>
            </div>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {dayPrograms[activeDay].steps.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 rounded-xl px-4 py-3.5"
                  style={{ background: 'var(--c-bg-soft)', border: '1px solid var(--c-border)' }}
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full c-mono text-xs font-bold mt-0.5"
                    style={{ background: 'var(--c-cyan)', color: '#05080f' }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="c-container">
          <div className="max-w-xl">
            <span className="c-tag">
              <Icon name="MessageCircleQuestion" size={13} /> Знакомые вопросы
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
                  style={{ background: 'var(--c-bg-soft)', color: 'var(--c-cyan)' }}
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
              <Icon name="Target" size={13} /> Для кого программа
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
                  style={{ background: 'var(--c-bg)', color: 'var(--c-cyan)' }}
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
    </>
  );
};

export default CareerDaysProgram;
