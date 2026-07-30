import Icon from '@/components/ui/icon';
import MissionBrand from '@/components/MissionBrand';

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="container">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <MissionBrand size={36} textClassName="font-display text-2xl font-semibold" />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Программа "Точка старта!" - это поиск смысла, самопознания и работы над собой.
              Возвращаем ориентиры тем, кто живёт «на автопилоте».
            </p>
          </div>

          <div>
            <h4 className="font-body font-semibold mb-4">Разделы</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {[
                { l: 'Путь', h: '#path' },
                { l: 'Программы', h: '#programs' },
                { l: 'Как проходит', h: '#how' },
                { l: 'Вопросы', h: '#faq' },
              ].map((i) => (
                <li key={i.h}>
                  <button
                    onClick={() => document.querySelector(i.h)?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-foreground transition-colors"
                  >
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

        <div className="mt-8 pt-6 border-t border-border text-xs text-muted-foreground leading-relaxed">
          <p>ИП Володин Виталий Эдуардович</p>
          <p>ИНН 665806406810</p>
          <p>ОГРНИП 325665800163492</p>
        </div>

        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <a href="/privacypolicy" className="hover:text-foreground transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;