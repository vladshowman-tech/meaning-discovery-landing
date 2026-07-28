import { useState } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { plans } from '@/data/plans';

const Payment = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const plan = plans.find((p) => p.slug === slug);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  if (!plan) return <Navigate to="/" replace />;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    if (!phone.trim()) return setError('Введите телефон');
    setError('');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 h-96 aurora opacity-30 blur-3xl pointer-events-none" />

      <header className="relative container flex items-center justify-between py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Icon name="Sparkle" size={18} />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">
            Точка<span className="text-gradient"> Старта</span>
          </span>
        </button>
        <Button variant="ghost" onClick={() => navigate('/')} className="rounded-full">
          <Icon name="ArrowLeft" size={16} className="mr-2" /> На главную
        </Button>
      </header>

      <main className="relative container max-w-3xl py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div
            className={`relative flex flex-col rounded-3xl p-8 ${
              plan.featured
                ? 'bg-gradient-to-b from-secondary to-card border border-primary/40 glow'
                : 'glass'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  plan.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'
                }`}
              >
                {plan.tag}
              </span>
              <span className="font-display text-2xl font-semibold text-gradient">{plan.price}</span>
            </div>

            <h1 className="mt-6 font-display text-3xl font-semibold leading-tight">{plan.title}</h1>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>

            <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
              <Icon name="Users" size={15} /> {plan.audience}
            </div>

            <ul className="mt-6 space-y-2.5">
              {plan.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 text-sm">
                  <Icon name="Check" size={16} className="mt-0.5 text-primary shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs text-muted-foreground leading-relaxed border-t border-border pt-4">
              Оплата производится по счёту от ИП Володин В. Э. Реквизиты и ссылку на оплату пришлём
              после обработки заявки.
            </p>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="font-display text-2xl font-semibold">Оставить заявку</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Заполните форму — свяжемся с вами и оформим оплату по счёту от ИП Володин В. Э.
            </p>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-secondary/60 p-6 text-center animate-fade-up">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon name="Check" size={26} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">Заявка принята!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {name}, мы свяжемся с вами по телефону {phone} и пришлём счёт на {email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ваше имя"
                  className="h-14 rounded-full bg-card/60 border-border px-6"
                />
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Телефон"
                  className="h-14 rounded-full bg-card/60 border-border px-6"
                />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail"
                  className="h-14 rounded-full bg-card/60 border-border px-6"
                />
                <Button type="submit" size="lg" className="h-14 rounded-full px-8 glow font-medium w-full">
                  Оставить заявку на оплату
                </Button>
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground mt-1">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
