import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import MissionBrand from '@/components/MissionBrand';

const links = [
  { label: 'О программе', href: '#benefits' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'Вопросы', href: '#faq' },
];

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const HomeHeader = () => {
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSent(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass py-4">
      <div className="container flex items-center justify-between">
        <button onClick={() => go('#top')} className="flex items-center gap-2.5">
          <MissionBrand size={34} textClassName="font-display text-xl md:text-2xl font-semibold tracking-tight" />
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => setDialogOpen(true)} className="rounded-full font-medium glow">
            Записаться
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
          <div className="glass rounded-2xl p-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  setOpen(false);
                  go(l.href);
                }}
                className="text-left px-4 py-3 rounded-xl hover:bg-secondary transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              onClick={() => {
                setOpen(false);
                setDialogOpen(true);
              }}
              className="rounded-full mt-2"
            >
              Записаться
            </Button>
          </div>
        </div>
      )}

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="glass border-border sm:max-w-md">
          {sent ? (
            <div className="py-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon name="Check" size={26} />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Заявка принята!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {name}, мы свяжемся с вами по номеру {phone}.
              </p>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl">Быстрая заявка</DialogTitle>
                <DialogDescription>
                  Оставьте контакты — перезвоним и поможем выбрать программу.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={submit} className="flex flex-col gap-3 mt-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="h-12 rounded-full bg-card/60 border-border px-5"
                />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  className="h-12 rounded-full bg-card/60 border-border px-5"
                />
                <Button type="submit" className="h-12 rounded-full glow font-medium mt-1">
                  Отправить заявку
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default HomeHeader;