import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';

export type NavLink = { l: string; h: string };

interface CareerHeaderProps {
  scrollTo: (h: string) => void;
  navLinks: NavLink[];
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const CareerHeader = ({ scrollTo, navLinks, menuOpen, setMenuOpen }: CareerHeaderProps) => {
  return (
    <>
      <nav className="c-nav">
        <div className="c-container flex items-center justify-between py-4">
          <div className="flex items-center gap-2.5">
            <MissionBrand size={32} textClassName="c-display text-lg font-bold tracking-tight" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((i) => (
              <button key={i.h} onClick={() => scrollTo(i.h)} className="c-nav-link">
                {i.l}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
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