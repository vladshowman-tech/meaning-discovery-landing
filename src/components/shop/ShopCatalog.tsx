import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { courses } from '@/data/courses';

const ShopCatalog = () => {
  const navigate = useNavigate();

  return (
    <section id="catalog" className="relative py-20 md:py-28">
      <div className="s-container">
        <div className="max-w-2xl">
          <span className="s-tag">
            <Icon name="LayoutGrid" size={14} /> Каталог программ
          </span>
          <h2 className="mt-4 s-display text-3xl md:text-5xl font-bold leading-tight text-[var(--s-ink)]">
            Выберите свою программу
          </h2>
          <p className="mt-4 text-lg text-[var(--s-ink-soft)]">
            Каждая программа — самостоятельный трёхдневный курс. Проходите по одной или
            двигайтесь по всем четырём ступеням подряд.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c) => (
            <div
              key={c.route}
              onClick={() => navigate(c.route)}
              className="s-card overflow-hidden flex flex-col cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: c.accent }}
                >
                  {c.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="s-display text-xl font-bold text-[var(--s-ink)]">{c.title}</h3>
                <p className="text-sm mt-0.5" style={{ color: c.accent }}>
                  {c.subtitle}
                </p>
                <p className="mt-3 text-sm text-[var(--s-ink-soft)] leading-relaxed flex-1">
                  {c.desc}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-[var(--s-ink-soft)]">
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {c.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Star" size={13} className="fill-current" style={{ color: 'var(--s-gold)' }} />
                    {c.rating} · {c.students.toLocaleString('ru-RU')}
                  </span>
                </div>

                <div
                  className="mt-4 pt-4 flex items-center justify-between border-t"
                  style={{ borderColor: 'var(--s-border)' }}
                >
                  <span className="s-display text-lg font-bold text-[var(--s-ink)]">
                    от {c.price}
                  </span>
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                    style={{ background: 'var(--s-bg-soft)', color: 'var(--s-ink)' }}
                  >
                    <Icon name="ArrowRight" size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCatalog;
