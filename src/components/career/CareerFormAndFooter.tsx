import Icon from '@/components/ui/icon';
import { NavLink } from '@/components/career/CareerHeader';
import MissionBrand from '@/components/MissionBrand';

interface CareerFormAndFooterProps {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  sent: boolean;
  error: string;
  submit: (e: React.FormEvent) => void;
  scrollTo: (h: string) => void;
  navLinks: NavLink[];
}

const CareerFormAndFooter = ({
  name,
  setName,
  email,
  setEmail,
  sent,
  error,
  submit,
  scrollTo,
  navLinks,
}: CareerFormAndFooterProps) => {
  return (
    <>
      <section id="c-form" className="relative py-20 md:py-28">
        <div className="c-container">
          <div
            className="relative overflow-hidden rounded-[2rem] p-10 md:p-16 text-center"
            style={{ background: 'var(--c-card)', border: '1px solid var(--c-border)' }}
          >
            <div className="c-glow w-64 h-64 -top-16 left-1/4" style={{ background: 'var(--c-cyan)' }} />
            <div className="c-glow w-64 h-64 -bottom-16 right-1/4" style={{ background: 'var(--c-cyan-dim)' }} />

            <div className="relative max-w-xl mx-auto">
              <span className="c-tag">
                <Icon name="Gift" size={13} /> Бесплатная консультация по целям!
              </span>

              <h2 className="mt-6 text-3xl md:text-5xl font-bold leading-tight">
                Сделайте первый шаг
                <br />
                <span className="c-grad-text">к результату</span>
              </h2>
              <p className="mt-5 text-lg" style={{ color: 'var(--c-ink-soft)' }}>
                Оставьте контакты — проведём бесплатную консультацию по целям и поможем зайти на
                программу с вашим запросом.
              </p>

              {sent ? (
                <div className="mt-9 c-card p-8 max-w-md mx-auto c-fade-up">
                  <div
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ background: 'var(--c-cyan)', color: '#06090b' }}
                  >
                    <Icon name="Check" size={26} />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold">Заявка принята!</h3>
                  <p className="mt-2 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
                    {name}, мы свяжемся с вами и пришлём вводный урок на {email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-9 max-w-md mx-auto flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="c-input"
                  />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className="c-input"
                  />
                  <button type="submit" className="c-btn w-full">
                    Записаться на консультацию по целям
                  </button>
                  {error && <p className="text-sm" style={{ color: '#ff6b6b' }}>{error}</p>}
                  <p className="text-xs mt-1" style={{ color: 'var(--c-ink-soft)' }}>
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/privacypolicy" className="underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-14" style={{ borderTop: '1px solid var(--c-border)' }}>
        <div className="c-container grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <MissionBrand size={32} textClassName="c-display text-lg font-bold" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: 'var(--c-ink-soft)' }}>
              Программа «Точка Старта» для тех, кто хочет превратить личностный рост в конкретный
              карьерный и финансовый результат.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
              {navLinks.map((i) => (
                <li key={i.h}>
                  <button onClick={() => scrollTo(i.h)} className="hover:opacity-70 transition-opacity">
                    {i.l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm" style={{ color: 'var(--c-ink-soft)' }}>
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
          className="c-container mt-8 pt-6 text-xs leading-relaxed"
          style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-ink-soft)' }}
        >
          <p>ИП Володин Виталий Эдуардович</p>
          <p>ИНН 665806406810</p>
          <p>ОГРНИП 325665800163492</p>
        </div>

        <div
          className="c-container mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm"
          style={{ borderTop: '1px solid var(--c-border)', color: 'var(--c-ink-soft)' }}
        >
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:opacity-70 transition-opacity">
            Политика конфиденциальности
          </a>
        </div>
      </footer>
    </>
  );
};

export default CareerFormAndFooter;