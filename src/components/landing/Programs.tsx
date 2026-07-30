import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { plans } from '@/data/plans';

const Programs = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 top-1/3 h-96 aurora opacity-40 blur-2xl pointer-events-none" />
      <div className="container relative">
        <div className="max-w-2xl">
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Запись на программу
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Программа <span className="text-gradient italic">«ТОЧКА СТАРТА!»</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Выберите подходящий формат участия — программа одна, а условия участия разные.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.slug}
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                p.featured
                  ? 'bg-gradient-to-b from-secondary to-card border border-primary/40 glow'
                  : 'glass hover:glow'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    p.featured ? 'bg-primary text-primary-foreground' : 'bg-secondary text-primary'
                  }`}
                >
                  {p.tag}
                </span>
                <span className="font-display text-2xl font-semibold text-gradient">{p.price}</span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-semibold leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

              <div className="mt-5 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Icon name="Users" size={15} /> {p.audience}
              </div>

              <ul className="mt-6 space-y-2.5 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm">
                    <Icon name="Check" size={16} className="mt-0.5 text-primary shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => {
                  if (p.slug === 'standart') {
                    window.location.href = 'https://payment.alfabank.ru/sc/qqBIIRvrVfoyltPt';
                  } else if (p.slug === 'lgotnyy') {
                    window.location.href = 'https://payment.alfabank.ru/sc/wmCbmpNMFZOZRYlv';
                  } else {
                    navigate(`/oplata/${p.slug}`);
                  }
                }}
                className={`mt-7 rounded-full h-12 ${
                  p.featured ? '' : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;