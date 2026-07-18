import Icon from '@/components/ui/icon';

const MENTOR_IMG =
  'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/6ba52faf-5a2f-4cdd-9d59-f577d0307580.jpg';

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Автор программы «Точка Старта»' },
];

const Mentor = () => {
  return (
    <section id="mentor" className="relative py-24 md:py-32">
      <div className="absolute inset-x-0 -top-10 h-96 aurora opacity-30 blur-3xl pointer-events-none" />
      <div className="container relative grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/20 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border glow">
            <img
              src={MENTOR_IMG}
              alt="Елена Ширыкалова — тренер программы «Точка Старта»"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div
            className="absolute -right-4 -bottom-6 glass rounded-2xl px-5 py-4 animate-float-slow max-w-[210px]"
          >
            <div className="flex items-center gap-2 text-primary">
              <Icon name="Quote" size={18} />
              <span className="font-display text-lg font-semibold">Ваш проводник</span>
            </div>
          </div>
        </div>

        <div>
          <span className="font-body text-sm uppercase tracking-[0.2em] text-primary">
            Тренер программы
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Елена <span className="text-gradient italic">Ширыкалова</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Больше десяти лет сопровождаю людей на пути к себе — помогаю разглядеть настоящие
            ценности за слоем чужих ожиданий и вернуть ощущение осмысленной жизни.
            «Точка Старта» — программа, в которую вложен весь мой опыт работы с теми, кто устал
            жить на автопилоте.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {credentials.map((c) => (
              <div key={c.text} className="flex items-center gap-3 glass rounded-2xl px-5 py-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Icon name={c.icon} size={18} />
                </span>
                <span className="text-sm">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;