import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

const CONSENT_API_URL = 'https://functions.poehali.dev/557d258a-7900-41d1-91a7-3ef6ecbf0e84';

const PrivacyPolicy = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !city.trim() || !phone.trim()) return setError('Заполните все поля');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    if (!agreed) return setError('Необходимо согласие на обработку данных');

    setError('');
    setLoading(true);
    try {
      const res = await fetch(CONSENT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, fullName, city, phone }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Ошибка отправки');
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка отправки');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="container max-w-3xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl font-semibold mb-8">
          Политика конфиденциальности
        </h1>

        <div className="space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground">
          <p>
            ИП Володин Виталий Эдуардович (ИНН: 665806406810, ОГРНИП 325665800163492), далее —
            «Оператор», информирует пользователей сайтов https://missiontrue.ru и
            https://воплощаюмечты.рф о правилах обработки персональных данных и защите
            конфиденциальной информации.
          </p>

          <p>
            Контактные данные:
            <br />
            Почтовый адрес: 620014, Свердловская область, г. Екатеринбург, ул. 8 марта, 7
            <br />
            E-mail: activationmission@yandex.ru
          </p>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              1. Общие положения
            </h2>
            <p>
              1.1. Настоящая Политика конфиденциальности применяется к любой информации, которую
              Оператор может получить о пользователях сайта.
            </p>
            <p>
              1.2. Обработка персональных данных может быть поручена следующим организациям:
              <br />
              ООО «УниСендер», ИНН: 7725511111, г. Москва, ул. Кржижановского, д. 13, корп. 1
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              2. Цели обработки персональных данных
            </h2>
            <p>Оператор обрабатывает персональные данные пользователей с целью:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Отправки информационных и рекламных рассылок;</li>
              <li>Идентификации пользователя;</li>
              <li>Улучшения качества предоставляемых услуг и сервиса.</li>
            </ul>
            <p>Основание для обработки — Федеральный закон № 152-ФЗ «О персональных данных».</p>
          </div>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              3. Сведения, которые собираются
            </h2>
            <p>
              Для выполнения указанных целей Оператор может запрашивать следующие персональные
              данные:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Электронная почта (e-mail);</li>
              <li>Название города проживания;</li>
              <li>Имя пользователя;</li>
              <li>Номер мобильного телефона.</li>
            </ul>
            <p>
              Также на сайте могут использоваться файлы cookie для корректной работы сервиса и
              анализа посещаемости.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              4. Согласие пользователя
            </h2>
            <p>
              4.1. Пользователь подтверждает согласие на обработку персональных данных, ставя
              галочку в соответствующем поле на сайте.
            </p>
            <p>
              4.2. Пользователь имеет право отозвать согласие в любой момент, направив письменное
              заявление на e-mail Оператора: activationmission@yandex.ru
            </p>
            <p>
              4.3. Срок хранения данных не превышает периода, необходимого для достижения целей
              их обработки.
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              5. Порядок работы с информацией
            </h2>
            <p>
              Персональные данные обрабатываются с использованием автоматизированных систем, в
              том числе:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Сбор, запись, систематизация и хранение;</li>
              <li>Использование для отправки рассылок и анализа эффективности;</li>
              <li>
                При необходимости — передача уполномоченным организациям для исполнения функций,
                указанных в разделе 1.2.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
              6. Защита конфиденциальных сведений
            </h2>
            <p>
              Оператор обеспечивает защиту персональных данных пользователей следующими
              способами:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Использование защищенного протокола передачи данных (SSL);</li>
              <li>
                Не разглашение информации третьим лицам, кроме случаев, предусмотренных
                законодательством;
              </li>
              <li>
                Принятие организационных и технических мер для предотвращения
                несанкционированного доступа к персональным данным.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-border">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
            Согласие на обработку персональных данных
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Заполните форму, чтобы подтвердить согласие с условиями настоящей Политики
            конфиденциальности.
          </p>

          {sent ? (
            <div className="glass rounded-2xl p-8 max-w-md">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon name="Check" size={26} />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Спасибо!</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ваше согласие принято.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="max-w-md flex flex-col gap-3">
              <Input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Имя Фамилия"
                className="h-12 rounded-full bg-card/60 border-border px-5"
              />
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="h-12 rounded-full bg-card/60 border-border px-5"
              />
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Город"
                className="h-12 rounded-full bg-card/60 border-border px-5"
              />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Номер телефона"
                className="h-12 rounded-full bg-card/60 border-border px-5"
              />

              <label className="flex items-start gap-2.5 mt-2 text-sm text-muted-foreground cursor-pointer">
                <Checkbox
                  checked={agreed}
                  onCheckedChange={(v) => setAgreed(v === true)}
                  className="mt-0.5"
                />
                Я согласен(а) с условиями Политики конфиденциальности и даю согласие на
                обработку персональных данных
              </label>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <Button type="submit" disabled={loading} className="h-12 rounded-full mt-2">
                {loading ? 'Отправка...' : 'Отправить'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;