import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Марина Соколова',
    role: 'HR-директор',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/be66f2ed-0a29-4ec0-8da0-c4b5547639d5.jpg',
    text: 'Три дня перевернули то, как я смотрю на свою жизнь. Впервые за долгое время я поняла, чего хочу на самом деле, а не что «положено» хотеть.',
    rating: 5,
  },
  {
    name: 'Дмитрий Волков',
    role: 'Предприниматель',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/51e486eb-df87-4d0d-aba5-0a0905ebf156.jpg',
    text: 'Скептически относился к таким программам, но здесь дали конкретные инструменты, а не абстрактную мотивацию. Уже через неделю принял решение, которое откладывал два года.',
    rating: 5,
  },
  {
    name: 'Анна Крылова',
    role: 'Дизайнер',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/22e62f7a-c8ce-43c6-97f9-6cbe28b66d19.jpg',
    text: 'Больше всего ценю поддержку группы и тренера. Не почувствовала себя одной с трудными вопросами — рядом были люди, которые действительно слышат.',
    rating: 5,
  },
  {
    name: 'Игорь Петров',
    role: 'Руководитель отдела',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/51e486eb-df87-4d0d-aba5-0a0905ebf156.jpg',
    text: 'Понял, что жил чужими целями. Программа дала карту, как вернуться к себе и не потерять этот вектор после окончания курса.',
    rating: 5,
  },
];

const HomeTestimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    onSelect();

    const t = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 5000);

    return () => {
      clearInterval(t);
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-0 h-96 aurora opacity-25 blur-3xl pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Отзывы участников
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Что говорят те, кто <span className="text-gradient italic">уже прошёл путь</span>
          </h2>
        </div>

        <div className="mt-14 max-w-3xl mx-auto">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name}>
                  <div className="glass rounded-3xl p-8 md:p-10">
                    <div className="flex gap-0.5 text-primary mb-5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-primary" />
                      ))}
                    </div>
                    <p className="text-lg leading-relaxed">&laquo;{t.text}&raquo;</p>
                    <div className="mt-7 flex items-center gap-3">
                      <Avatar className="h-12 w-12 border border-border">
                        <AvatarImage src={t.img} alt={t.name} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-display text-lg font-semibold">{t.name}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Отзыв ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  current === i ? 'w-6 bg-primary' : 'w-2 bg-secondary'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;
