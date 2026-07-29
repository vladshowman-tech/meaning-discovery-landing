import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: 'Compass',
    title: 'Ясные ориентиры',
    text: 'Поймёте свои настоящие ценности и желания вместо навязанных извне целей.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Эмоциональная опора',
    text: 'Научитесь распознавать эмоции, восстанавливать энергию и отстаивать границы.',
  },
  {
    icon: 'Map',
    title: 'Личная стратегия',
    text: 'Выйдете с конкретным планом действий, а не абстрактной мотивацией на один вечер.',
  },
  {
    icon: 'Users2',
    title: 'Поддержка группы',
    text: 'Разборы в мини-группах, чат участников и сопровождение тренера на всей программе.',
  },
];

const stages = [
  {
    n: 1,
    title: 'Точка Старта',
    desc: 'Поиск смысла, самопознание и работа над собой. Возвращаем ориентиры тем, кто живёт «на автопилоте».',
    active: true,
  },
  {
    n: 2,
    title: 'Ступень №2',
    desc: 'Открывается после прохождения первой ступени.',
    active: false,
  },
  {
    n: 3,
    title: 'Ступень №3',
    desc: 'Открывается после прохождения второй ступени.',
    active: false,
  },
  {
    n: 4,
    title: 'Ступень №4',
    desc: 'Открывается после прохождения третьей ступени.',
    active: false,
  },
];

const HomeBenefits = () => {
  const navigate = useNavigate();

  return (
    <>
      <section id="benefits" className="relative py-24 md:py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              Что вы получите
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Конкретный результат, <span className="text-gradient italic">а не просто мотивация</span>
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div
                key={b.title}
                className="group glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:glow"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon name={b.icon} size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stages" className="relative py-24 md:py-32">
        <div className="absolute inset-x-0 top-1/3 h-96 aurora opacity-30 blur-2xl pointer-events-none" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              Путь развития
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Путь состоит из <span className="text-gradient italic">четырёх ступеней</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Каждая ступень — новый уровень осознанности и работы над собой.
            </p>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {stages.map((s) => (
              <div
                key={s.n}
                className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 ${
                  s.active
                    ? 'bg-gradient-to-b from-secondary to-card border border-primary/40 glow hover:-translate-y-2'
                    : 'glass opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      s.active ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    Ступень №{s.n}
                  </span>
                  {!s.active && <Icon name="Lock" size={16} className="text-muted-foreground" />}
                </div>

                <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>

                {s.active ? (
                  <Button onClick={() => navigate('/1')} className="mt-7 rounded-full h-12">
                    Перейти к ступени №1
                  </Button>
                ) : (
                  <Button disabled variant="secondary" className="mt-7 rounded-full h-12">
                    Скоро
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBenefits;
