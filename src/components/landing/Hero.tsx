import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/3c59a3f5-fb89-4160-8276-a624a1e3c712.jpg';

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 aurora animate-aurora" />
      <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="container relative grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm animate-fade-up"
          >
            <Icon name="CalendarDays" size={15} className="text-primary" />
            <span className="text-primary font-medium">7–9 августа 2026</span>
          </div>

          <h1
            className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[0.98] animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            Найдите ответ
            <br />
            на вопрос
            <br />
            <span className="text-gradient italic">«Кто я на самом деле?»</span>
          </h1>

          <p
            className="mt-7 max-w-xl text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: '0.16s' }}
          >
            Вы добились многого, но внутри — пустота и жизнь «на автопилоте».
            Программа «Точки Старта» помогает вернуть ориентиры: понять свои ценности,
            желания и предназначение.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.24s' }}
          >
            <Button
              size="lg"
              onClick={() => go('#programs')}
              className="rounded-full text-base h-14 px-8 glow font-medium"
            >
              Выбрать программу
              <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => go('#path')}
              className="rounded-full text-base h-14 px-8 border-border bg-transparent hover:bg-secondary"
            >
              <Icon name="Compass" size={18} className="mr-1" />
              Куда я приду
            </Button>
          </div>

          <div
            className="mt-12 flex items-center gap-8 animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            {[
              { n: '4 200+', t: 'прошли путь' },
              { n: '92%', t: 'нашли опору' },
              { n: '4.9', t: 'средняя оценка' },
            ].map((s) => (
              <div key={s.t}>
                <div className="font-display text-3xl font-semibold text-gradient">{s.n}</div>
                <div className="text-sm text-muted-foreground">{s.t}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border glow">
            <img
              src={HERO_IMG}
              alt="Путь к себе"
              className="w-full h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
          </div>

          <div className="absolute -left-6 bottom-10 glass rounded-2xl px-5 py-4 animate-float-slow max-w-[220px]">
            <div className="flex items-center gap-2 text-primary">
              <Icon name="Heart" size={18} />
              <span className="font-display text-lg font-semibold">Понимаю себя</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Эмоции, желания и границы становятся ясными
            </p>
          </div>

          <div
            className="absolute -right-4 top-10 glass rounded-2xl px-5 py-4 animate-float-slow"
            style={{ animationDelay: '1.5s' }}
          >
            <div className="flex items-center gap-2 text-accent">
              <Icon name="Sparkles" size={18} />
              <span className="font-display text-lg font-semibold">Мои ценности</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;