import { useState } from 'react';
import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Как выбрать подходящую программу?',
    a: 'Начните с «Точки Старта» — это база для самопознания. Остальные три программы можно проходить в любом порядке, ориентируясь на свой текущий запрос.',
  },
  {
    q: 'Можно ли купить сразу несколько курсов?',
    a: 'Да, вы можете записаться на любое количество программ. Многие участники проходят все четыре ступени подряд.',
  },
  {
    q: 'Это психотерапия?',
    a: 'Нет. Это программы с практиками самопознания и конкретными инструментами, а не лечение.',
  },
  {
    q: 'Что если формат не подойдёт?',
    a: 'Вернём оплату без вопросов, если почувствуете, что курс не ваш.',
  },
];

const footerLinks = [
  { l: 'Каталог курсов', h: '#catalog' },
  { l: 'Как проходит', h: '#how' },
  { l: 'Отзывы', h: '#reviews' },
  { l: 'Вопросы', h: '#faq' },
];

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const ShopFaqCta = () => {
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
      <section id="faq" className="relative py-20 md:py-28" style={{ background: 'var(--s-bg-soft)' }}>
        <div className="s-container grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
          <div>
            <span className="s-tag">
              <Icon name="HelpCircle" size={14} /> Частые вопросы
            </span>
            <h2 className="mt-4 s-display text-3xl md:text-5xl font-bold leading-tight text-[var(--s-ink)]">
              Отвечаем честно
            </h2>
            <p className="mt-4 text-[var(--s-ink-soft)]">
              Не нашли свой вопрос? Напишите — ответим лично и поможем выбрать программу.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="s-card px-6 mb-3 border"
                style={{ borderColor: 'var(--s-border)' }}
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-[var(--s-ink)]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--s-ink-soft)] text-sm leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="s-container">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
            style={{ background: 'var(--s-ink)' }}
          >
            <div className="relative max-w-xl mx-auto">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
              >
                <Icon name="Gift" size={15} /> Бесплатная консультация по выбору курса
              </span>

              <h2 className="mt-6 s-display text-3xl md:text-5xl font-bold leading-tight text-white">
                Не знаете, с чего начать?
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Оставьте контакты — поможем выбрать программу под ваш запрос.
              </p>

              {sent ? (
                <div className="mt-8 rounded-2xl p-7 max-w-md mx-auto s-fade-up" style={{ background: 'rgba(255,255,255,0.08)' }}>
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ background: 'var(--s-accent)' }}>
                    <Icon name="Check" size={26} className="text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {name}, мы свяжемся с вами и пришлём подборку курсов на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-8 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="s-input h-14 bg-white"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="s-input h-14 bg-white"
                  />
                  <button type="submit" className="s-btn h-14 w-full">
                    Получить консультацию
                  </button>
                  {error && <p className="text-sm" style={{ color: '#ff6b6b' }}>{error}</p>}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14 border-t" style={{ borderColor: 'var(--s-border)' }}>
        <div className="s-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <MissionBrand size={32} textClassName="s-display text-lg font-bold text-[var(--s-ink)]" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-[var(--s-ink-soft)] leading-relaxed">
              Объединение «Миссия» — четыре программы личностного развития
              для тех, кто хочет расти осознанно.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[var(--s-ink)]">Разделы</h4>
            <ul className="space-y-2.5 text-sm text-[var(--s-ink-soft)]">
              {footerLinks.map((i) => (
                <li key={i.h}>
                  <button onClick={() => go(i.h)} className="hover:text-[var(--s-ink)] transition-colors">
                    {i.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[var(--s-ink)]">Контакты</h4>
            <ul className="space-y-2.5 text-sm text-[var(--s-ink-soft)]">
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

        <div
          className="s-container mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[var(--s-ink-soft)] border-t"
          style={{ borderColor: 'var(--s-border)' }}
        >
          <span>© 2026 Миссия. Все права защищены.</span>
          <span>Сделано с заботой о тех, кто растёт</span>
        </div>
      </footer>
    </>
  );
};

export default ShopFaqCta;