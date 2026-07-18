import Icon from '@/components/ui/icon';

const ITEM = 'Старт программы 7 августа 2026 года';

const Marquee = () => {
  const items = Array.from({ length: 8 });

  return (
    <section className="relative py-6 md:py-7 overflow-hidden border-y border-border bg-gradient-to-r from-secondary via-card to-secondary">
      <div className="absolute inset-0 aurora opacity-30 pointer-events-none" />
      <div className="relative flex whitespace-nowrap">
        <div className="flex items-center animate-marquee">
          {items.map((_, i) => (
            <span
              key={`a-${i}`}
              className="flex items-center gap-3 mx-6 font-display text-2xl md:text-4xl font-semibold"
            >
              <Icon name="Sparkle" size={22} className="text-primary shrink-0" />
              <span>
                {ITEM.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="text-gradient italic">{ITEM.split(' ').slice(2).join(' ')}</span>
              </span>
            </span>
          ))}
        </div>
        <div className="flex items-center animate-marquee" aria-hidden="true">
          {items.map((_, i) => (
            <span
              key={`b-${i}`}
              className="flex items-center gap-3 mx-6 font-display text-2xl md:text-4xl font-semibold"
            >
              <Icon name="Sparkle" size={22} className="text-primary shrink-0" />
              <span>
                {ITEM.split(' ').slice(0, 2).join(' ')}{' '}
                <span className="text-gradient italic">{ITEM.split(' ').slice(2).join(' ')}</span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
