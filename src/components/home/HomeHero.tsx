import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const START_DATE = new Date('2026-08-07T19:00:00+03:00').getTime();

const getTimeLeft = () => {
  const diff = Math.max(0, START_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const go = (href: string) =>
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

const HomeHero = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { v: time.days, l: 'дней' },
    { v: time.hours, l: 'часов' },
    { v: time.minutes, l: 'минут' },
    { v: time.seconds, l: 'секунд' },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 aurora animate-aurora" />
      <div className="absolute inset-0 grain opacity-[0.15] mix-blend-overlay pointer-events-none" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm animate-fade-up">
            <Icon name="CalendarDays" size={15} className="text-primary" />
            <span className="text-primary font-medium">Старт потока — 7 августа 2026</span>
          </div>

          <h1
            className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] animate-fade-up"
            style={{ animationDelay: '0.08s' }}
          >
            Найдите ответ на вопрос
            <br />
            <span className="text-gradient italic">«Кто я на самом деле?»</span>
          </h1>

          <p
            className="mt-6 max-w-xl mx-auto text-lg text-muted-foreground animate-fade-up"
            style={{ animationDelay: '0.16s' }}
          >
            Программа личностного развития из 4 ступеней. Начните с первой — «Точка Старта» —
            и двигайтесь дальше по мере готовности.
          </p>

          <div
            className="mt-9 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
            style={{ animationDelay: '0.24s' }}
          >
            <Button
              size="lg"
              onClick={() => navigate('/1')}
              className="rounded-full text-base h-14 px-8 glow font-medium"
            >
              Перейти к ступени №1
              <Icon name="ArrowRight" size={18} className="ml-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => go('#benefits')}
              className="rounded-full text-base h-14 px-8 border-border bg-transparent hover:bg-secondary"
            >
              <Icon name="Sparkles" size={18} className="mr-1" />
              Что вы получите
            </Button>
          </div>

          <div
            className="mt-14 animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              До старта программы осталось
            </p>
            <div className="flex items-center justify-center gap-3 sm:gap-5">
              {units.map((u) => (
                <div
                  key={u.l}
                  className="glass rounded-2xl px-4 py-3 sm:px-6 sm:py-4 min-w-[72px] sm:min-w-[92px] glow"
                >
                  <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient tabular-nums">
                    {String(u.v).padStart(2, '0')}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{u.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-14 flex items-center justify-center gap-8 sm:gap-12 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
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
      </div>
    </section>
  );
};

export default HomeHero;
