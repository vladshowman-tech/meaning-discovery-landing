import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import MissionBrand from '@/components/MissionBrand';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Мне точно подойдёт, если я не в кризисе?',
    a: 'Да. Большинство участников — успешные люди без острых проблем, которым хочется больше смысла, ясности и удовлетворения. Программа работает и «на профилактику», и в моменты потери ориентиров.',
  },
  {
    q: 'Это психотерапия?',
    a: 'Нет. Это программы с практиками самопознания. Мы не лечим, а даём инструменты, чтобы вы лучше понимали себя, свои ценности и эмоции.',
  },
  {
    q: 'Сколько времени необходимо уделить?',
    a: 'Программа проходит три дня: вечер пятницы, суббота (весь день) и воскресенье (весь день).',
  },
  {
    q: 'Что если не подойдёт?',
    a: 'Вернём оплату без вопросов, если почувствуете, что формат не ваш.',
  },
  {
    q: 'Будет ли поддержка?',
    a: 'Да. Разборы в мини-группах, чат участников и личный наставник на программе.',
  },
];

const footerLinks = [
  { l: 'Что вы получите', h: '#benefits' },
  { l: 'Ступени', h: '#stages' },
  { l: 'Отзывы', h: '#testimonials' },
  { l: 'Вопросы', h: '#faq' },
];

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const HomeFaqCta = () => {
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
    <>
      <section id="faq" className="relative py-24 md:py-32">
        <div className="container grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
              Частые вопросы
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Отвечаем <span className="text-gradient italic">честно</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Не нашли свой вопрос? Напишите — ответим лично и поможем выбрать программу.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl px-6 mb-3 border-none"
              >
                <AccordionTrigger className="text-left font-display text-xl font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

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
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
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
                    className="h-14 rounded-full bg-card/60 border-border px-6"
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

      <footer className="relative border-t border-border py-14">
        <div className="container">
          <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <MissionBrand size={36} textClassName="font-display text-2xl font-semibold" />
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
                Программа личностного развития из 4 ступеней. Возвращаем ориентиры тем, кто
                живёт «на автопилоте».
              </p>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                {footerLinks.map((i) => (
                  <li key={i.h}>
                    <button onClick={() => go(i.h)} className="hover:text-foreground transition-colors">
                      {i.l}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-body font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={15} /> activationmission@yandex.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Send" size={15} /> @missiontrue
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={15} /> +7 964 488-73-65
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
            <span>© 2026 Миссия. Все права защищены.</span>
            <span>Сделано с заботой о тех, кто ищет себя</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFaqCta;
