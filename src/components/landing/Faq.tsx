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
    a: 'Нет. Это программы с практиками самопознания. Мы не лечим, а даём инструменты, чтобы вы лучше понимали себя, свои ценности и эмоции. При необходимости подскажем, когда полезен специалист.',
  },
  {
    q: 'Сколько времени необходимо уделить?',
    a: 'Программа проходит три дня: вечер пятницы, суббота (весь день) и воскресенье (весь день). Такой формат погружения позволяет пройти путь без отрыва.',
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

const Faq = () => {
  return (
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
  );
};

export default Faq;