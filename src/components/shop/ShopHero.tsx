import Icon from '@/components/ui/icon';

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const stats = [
  { icon: 'Users2', v: '4 200+', l: 'выпускников' },
  { icon: 'Star', v: '4.9', l: 'средний рейтинг' },
  { icon: 'BookOpen', v: '4', l: 'программы роста' },
];

const ShopHero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-14 md:pt-20 md:pb-20 s-dots">
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-[var(--s-bg-soft)] to-white pointer-events-none" />

      <div className="s-container relative">
        <div className="max-w-2xl mx-auto text-center s-fade-up">
          <span className="s-tag">
            <Icon name="Sparkles" size={14} /> Объединение «Миссия»
          </span>
          <h1 className="mt-5 s-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] text-[var(--s-ink)]">
            Курсы и программы
            <br />
            для <span style={{ color: 'var(--s-accent)' }}>роста и результата</span>
          </h1>
          <p className="mt-5 text-lg text-[var(--s-ink-soft)] max-w-xl mx-auto">
            Четыре программы личностного развития: от поиска себя до карьерного роста.
            Выберите свою и запишитесь за пару минут.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => go('#catalog')} className="s-btn text-base h-14 px-8">
              Смотреть курсы
              <Icon name="ArrowRight" size={18} />
            </button>
            <button onClick={() => go('#how')} className="s-btn-outline text-base h-14 px-8">
              <Icon name="PlayCircle" size={18} />
              Как это работает
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 sm:gap-12">
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <div className="flex items-center gap-1.5" style={{ color: 'var(--s-accent)' }}>
                  <Icon name={s.icon} size={16} />
                  <span className="s-display text-2xl font-bold text-[var(--s-ink)]">{s.v}</span>
                </div>
                <span className="text-xs text-[var(--s-ink-soft)] mt-1">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHero;