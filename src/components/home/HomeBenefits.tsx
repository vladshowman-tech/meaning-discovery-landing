import Icon from '@/components/ui/icon';

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

const HomeBenefits = () => {
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
    </>
  );
};

export default HomeBenefits;