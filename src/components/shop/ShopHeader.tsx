import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';

const links = [
  { label: 'Курсы', href: '#catalog' },
  { label: 'Как проходит', href: '#how' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Вопросы', href: '#faq' },
];

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ShopHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b" style={{ borderColor: 'var(--s-border)' }}>
      <div className="s-container flex items-center justify-between py-4">
        <button onClick={() => go('#top')} className="flex items-center gap-2.5">
          <MissionBrand size={32} textClassName="s-display text-lg md:text-xl font-bold text-[var(--s-ink)]" />
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-sm font-medium text-[var(--s-ink-soft)] hover:text-[var(--s-ink)] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => navigate('/5')} className="s-btn-outline text-sm py-2 px-4">
            Другой дизайн
          </button>
          <button onClick={() => go('#catalog')} className="s-btn text-sm py-2.5 px-5">
            Выбрать курс
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border"
          style={{ borderColor: 'var(--s-border)' }}
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden s-container pb-4 s-fade-up">
          <div className="rounded-2xl border p-4 flex flex-col gap-1" style={{ borderColor: 'var(--s-border)' }}>
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  setOpen(false);
                  go(l.href);
                }}
                className="text-left px-4 py-3 rounded-xl hover:bg-[var(--s-bg-soft)] transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => go('#catalog')} className="s-btn mt-2">
              Выбрать курс
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default ShopHeader;
