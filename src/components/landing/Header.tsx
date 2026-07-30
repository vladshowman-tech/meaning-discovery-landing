import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import MissionBrand from '@/components/MissionBrand';

const links = [
  { label: 'Путь', href: '#path' },
  { label: 'Тренер', href: '#mentor' },
  { label: 'Как проходит', href: '#how' },
  { label: 'Вопросы', href: '#faq' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <button onClick={() => go('#top')} className="flex items-center gap-2.5 group">
          <MissionBrand size={36} textClassName="font-display text-2xl font-semibold tracking-tight" />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => go('#programs')} className="rounded-full font-medium">
            Начать путь
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full glass"
          aria-label="Меню"
        >
          <Icon name={open ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden container mt-3 animate-fade-up">
          <div className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-1 shadow-xl">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="text-left px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button onClick={() => go('#programs')} className="rounded-full mt-2">
              Начать путь
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;