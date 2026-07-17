import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

type Program = {
  tag: string;
  title: string;
  desc: string;
  duration: string;
  format: string;
  price: string;
  featured?: boolean;
  points: string[];
};

const categories = ['Все', 'Ценности', 'Эмоции', 'Предназначение'] as const;

const programs: (Program & { cat: (typeof categories)[number] })[] = [
  {
    cat: 'Ценности',
    tag: 'Старт',
    title: 'Кто я на самом деле',
    desc: 'Базовый курс самоидентификации: снимаем чужие ожидания и находим свои настоящие ценности.',
    duration: '4 недели',
    format: 'Видео + практика',
    price: '9 900 ₽',
    points: ['21 урок с заданиями', 'Карта личных ценностей', 'Разбор в мини-группе'],
  },
  {
    cat: 'Предназначение',
    tag: 'Хит',
    title: 'В точке предназначения',
    desc: 'Глубокая программа для тех, кто достиг внешнего успеха и ищет внутренний смысл и дело жизни.',
    duration: '8 недель',
    format: 'Группа + наставник',
    price: '24 900 ₽',
    featured: true,
    points: ['Личный наставник', 'Еженедельные созвоны', 'Индивидуальная стратегия', 'Доступ навсегда'],
  },
  {
    cat: 'Эмоции',
    tag: 'Практика',
    title: 'Понять свои эмоции',
    desc: 'Учимся распознавать чувства, управлять состоянием и уверенно отстаивать личные границы.',
    duration: '6 недель',
    format: 'Воркшопы',
    price: '14 900 ₽',
    points: ['Дневник эмоций', 'Техники саморегуляции', 'Практика границ'],
  },
];

const Programs = () => {
  const [active, setActive] = useState<(typeof categories)[number]>('Все');
  const list = active === 'Все' ? programs : programs.filter((p) => p.cat === active);

  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-1/3 h-96 aurora opacity-40 blur-2xl pointer-events-none" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              Обучающие программы
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Курсы для работы <span className="text-gradient italic">над собой</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm transition-all ${
                  active === c
                    ? 'bg-primary text-primary-foreground'
                    : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <div
              key={p.title}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                p.featured
                  ? 'bg-gradient-to-b from-secondary to-card border border-primary/40 glow'
                  : 'glass hover:glow'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    p.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'
                  }`}
                >
                  {p.tag}
                </span>
                <span className="font-display text-2xl font-semibold text-gradient">{p.price}</span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-5 flex gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Icon name="Clock" size={15} /> {p.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Icon name="Play" size={15} /> {p.format}
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <Icon name="Check" size={16} className="mt-0.5 text-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() =>
                  document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })
                }
                className={`mt-7 rounded-full h-12 ${
                  p.featured ? '' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
