import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-14">
      <div className="container">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon name="Sparkle" size={18} />
              </span>
              <span className="font-display text-2xl font-semibold">
                Точка<span className="text-gradient"> Старта</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Обучающие курсы и программы для поиска смысла, самопознания и работы над собой.
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
                <Icon name="Mail" size={15} /> hello@tochka-starta.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Send" size={15} /> Telegram
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={15} /> +7 900 000-00-00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© 2026 Точка Старта. Все права защищены.</span>
          <span>Сделано с заботой о тех, кто ищет себя</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
