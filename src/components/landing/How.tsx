import Icon from '@/components/ui/icon';

const steps = [
  {
    n: '01',
    icon: 'Eye',
    title: 'Честный взгляд',
    text: 'Диагностика: где вы сейчас, что мешает слышать себя и откуда взялись «чужие» цели.',
  },
  {
    n: '02',
    icon: 'Map',
    title: 'Карта себя',
    text: 'Раскрываем ценности, сильные стороны и подлинные желания через практики и рефлексию.',
  },
  {
    n: '03',
    icon: 'Shield',
    title: 'Опора и границы',
    text: 'Учимся понимать эмоции, восстанавливать энергию и уверенно отстаивать своё пространство.',
  },
  {
    n: '04',
    icon: 'Rocket',
    title: 'Точка старта',
    text: 'Собираем личную стратегию: как жить и действовать из своего смысла, а не по инерции.',
  },
];

const How = () => {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Как проходит путь
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Четыре шага от пустоты <span className="text-gradient italic">к смыслу</span>
          </h2>
        </div>

        <div className="mt-16 relative grid md:grid-cols-4 gap-6">
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full glass glow">
                <Icon name={s.icon} size={26} className="text-primary" />
                <span className="absolute -top-2 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold font-body">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed px-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default How;
