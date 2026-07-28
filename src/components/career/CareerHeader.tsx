import { NavigateFunction } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export type NavLink = { l: string; h: string };

interface CareerHeaderProps {
  navigate: NavigateFunction;
  scrollTo: (h: string) => void;
  navLinks: NavLink[];
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const CareerHeader = ({ navigate, scrollTo, navLinks, menuOpen, setMenuOpen }: CareerHeaderProps) => {
  return (
    <>
      <nav className="c-nav">
        <div className="c-container flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: 'var(--c-cyan)', color: '#06090b' }}
            >
              <Icon name="Zap" size={17} />
            </span>
            <span className="c-display text-lg font-bold tracking-tight">Точка Старта</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((i) => (
              <button key={i.h} onClick={() => scrollTo(i.h)} className="c-nav-link">
                {i.l}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => navigate('/')} className="c-btn-outline text-sm py-2.5 px-4">
              <Icon name="ArrowLeft" size={14} /> На главную
            </button>
            <button onClick={() => scrollTo('#c-form')} className="c-btn text-sm py-2.5 px-5">
              Оставить заявку
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg"
            style={{ border: '1px solid var(--c-border)' }}
          >
            <Icon name="Menu" size={20} />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="c-mobile-menu">
          <div className="flex items-center justify-between">
            <span className="c-display text-lg font-bold">Меню</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ border: '1px solid var(--c-border)' }}
            >
              <Icon name="X" size={20} />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-6">
            {navLinks.map((i) => (
              <button
                key={i.h}
                onClick={() => scrollTo(i.h)}
                className="text-2xl font-semibold text-left"
              >
                {i.l}
              </button>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <button onClick={() => navigate('/')} className="c-btn-outline">
              <Icon name="ArrowLeft" size={15} /> На главную
            </button>
            <button onClick={() => scrollTo('#c-form')} className="c-btn">
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CareerHeader;
