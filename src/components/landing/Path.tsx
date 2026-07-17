import Icon from '@/components/ui/icon';

const signs = [
  {
    icon: 'BatteryLow',
    title: 'Жизнь на автопилоте',
    text: 'Дни похожи один на другой. Делаете «как надо», но не чувствуете, что живёте своей жизнью.',
  },
  {
    icon: 'CircleHelp',
    title: 'Потеря ориентиров',
    text: 'Раньше знали, чего хотите. Теперь — сомнения и вопрос «а моё ли это вообще?».',
  },
  {
    icon: 'Trophy',
    title: 'Успех без радости',
    text: 'Карьера, деньги, статус есть — а удовлетворения нет. Внутри тихая пустота.',
  },
  {
    icon: 'Waves',
    title: 'Не понимаю эмоций',
    text: 'Сложно распознать, что чувствуете, и трудно отстаивать личные границы.',
  },
];

const Path = () => {
  return (
    <section id="path" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Знакомо?
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Внешне всё хорошо, а внутри — <span className="text-gradient italic">вопросы без ответов</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Это не кризис и не слабость. Это сигнал, что пора остановиться и услышать себя.
            С этого и начинается путь.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {signs.map((s, i) => (
            <div
              key={s.title}
              className="group glass rounded-3xl p-7 hover:-translate-y-2 transition-all duration-500 hover:glow"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Path;
