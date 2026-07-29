import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Марина Соколова',
    role: 'HR-директор',
    course: 'Точка Старта',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/be66f2ed-0a29-4ec0-8da0-c4b5547639d5.jpg',
    text: 'Три дня перевернули то, как я смотрю на свою жизнь. Впервые поняла, чего хочу на самом деле.',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Предприниматель',
    course: 'Моя история',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/51e486eb-df87-4d0d-aba5-0a0905ebf156.jpg',
    text: 'Дали конкретные инструменты, а не абстрактную мотивацию. Через неделю принял решение, которое откладывал два года.',
  },
  {
    name: 'Анна Крылова',
    role: 'Дизайнер',
    course: 'Я в игре',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/22e62f7a-c8ce-43c6-97f9-6cbe28b66d19.jpg',
    text: 'Больше всего ценю поддержку группы и тренера. Не почувствовала себя одной с трудными вопросами.',
  },
];

const ShopReviews = () => {
  return (
    <section id="reviews" className="relative py-20 md:py-28">
      <div className="s-container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="s-tag">
            <Icon name="MessageCircle" size={14} /> Отзывы
          </span>
          <h2 className="mt-4 s-display text-3xl md:text-5xl font-bold leading-tight text-[var(--s-ink)]">
            Что говорят выпускники
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="s-card p-7">
              <div className="flex gap-0.5 mb-4" style={{ color: 'var(--s-gold)' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={15} className="fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--s-ink)]">&laquo;{r.text}&raquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <Avatar className="h-11 w-11 border" style={{ borderColor: 'var(--s-border)' }}>
                  <AvatarImage src={r.img} alt={r.name} />
                  <AvatarFallback>{r.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-semibold text-[var(--s-ink)]">{r.name}</div>
                  <div className="text-xs text-[var(--s-ink-soft)]">
                    {r.role} · курс «{r.course}»
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopReviews;