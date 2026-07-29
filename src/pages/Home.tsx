import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import MissionBrand from '@/components/MissionBrand';

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

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 h-[32rem] aurora animate-aurora opacity-40 blur-3xl pointer-events-none" />

      <header className="relative container flex items-center justify-between py-6">
        <div className="flex items-center gap-2.5">
          <MissionBrand size={36} textClassName="font-display text-2xl font-semibold tracking-tight" />
        </div>
      </header>

      <main className="relative container max-w-4xl py-10 md:py-20 text-center">
        <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
          Программа личностного развития
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-tight">
          Путь состоит из <span className="text-gradient italic">четырёх ступеней</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
          Каждая ступень — новый уровень осознанности и работы над собой. Начните с первой —
          «Точка Старта», и двигайтесь дальше по мере готовности.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 gap-6 text-left">
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
                <Button
                  onClick={() => navigate('/1')}
                  className="mt-7 rounded-full h-12"
                >
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
      </main>

      <footer className="relative container py-10 text-center text-sm text-muted-foreground">
        © 2026 Точка Старта. Все права защищены.
      </footer>
    </div>
  );
};

export default Home;