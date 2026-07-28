import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Cta = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-10 md:p-16 text-center">
          <div className="absolute inset-0 aurora animate-aurora" />
          <div className="absolute inset-0 grain opacity-[0.12] mix-blend-overlay" />

          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
              <Icon name="Gift" size={16} className="text-primary" />
              Бесплатная консультация по целям!
            </div>

            <h2 className="mt-6 font-display text-4xl md:text-6xl font-semibold leading-[1.02]">
              Сделайте первый шаг
              <br />
              <span className="text-gradient italic">к себе настоящему</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Оставьте контакты — проведем бесплатную консультацию по целям и поможем зайти на программу с вашим запросом.
            </p>

            {sent ? (
              <div className="mt-9 glass rounded-2xl p-8 max-w-md mx-auto animate-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold">Заявка принята!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="h-13 rounded-full bg-card/60 border-border px-6 h-14"
                />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="h-14 rounded-full bg-card/60 border-border px-6"
                />
                <Button type="submit" size="lg" className="h-14 rounded-full px-8 glow font-medium w-full">
                  Записаться на консультацию по целям
                </Button>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground mt-1">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;