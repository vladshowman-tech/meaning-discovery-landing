import Icon from '@/components/ui/icon';

const steps = [
  { icon: 'MousePointerClick', title: 'Выберите курс', text: 'Изучите каталог и выберите программу под свой запрос.' },
  { icon: 'CreditCard', title: 'Оплатите участие', text: 'Выберите формат — стандарт, льготный или для двоих.' },
  { icon: 'Users', title: 'Пройдите программу', text: '3 дня практик, разборов и работы в мини-группе с тренером.' },
  { icon: 'Trophy', title: 'Получите результат', text: 'Выйдете с конкретным планом действий и новыми ориентирами.' },
];

const ShopHow = () => {
  return (
    <section id="how" className="relative py-20 md:py-28" style={{ background: 'var(--s-bg-soft)' }}>
      <div className="s-container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="s-tag">
            <Icon name="Route" size={14} /> Как это работает
          </span>
          <h2 className="mt-4 s-display text-3xl md:text-5xl font-bold leading-tight text-[var(--s-ink)]">
            Четыре простых шага
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="s-card p-7 relative">
              <span
                className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: 'var(--s-accent)' }}
              >
                {i + 1}
              </span>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: 'var(--s-accent-soft)', color: 'var(--s-accent-dark)' }}
              >
                <Icon name={s.icon} size={22} />
              </div>
              <h3 className="mt-5 s-display text-xl font-bold text-[var(--s-ink)]">{s.title}</h3>
              <p className="mt-2 text-sm text-[var(--s-ink-soft)] leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopHow;
