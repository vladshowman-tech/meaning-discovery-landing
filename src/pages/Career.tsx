import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MENTOR_IMG from '@/assets/mentor.jpg';
import { plans } from '@/data/plans';
import CareerHeader from '@/components/career/CareerHeader';
import CareerHero from '@/components/career/CareerHero';
import CareerDaysProgram from '@/components/career/CareerDaysProgram';
import CareerMentorAndPlans from '@/components/career/CareerMentorAndPlans';
import CareerFormAndFooter from '@/components/career/CareerFormAndFooter';
import './Career.css';

const requests = [
  { icon: 'TrendingUp', text: 'Как увеличить доход?' },
  { icon: 'ArrowUpRight', text: 'Как получить повышение?' },
  { icon: 'Rocket', text: 'Как запустить свой проект?' },
  { icon: 'Users', text: 'Как перестать бояться руководить людьми?' },
];

const audience = [
  {
    icon: 'Briefcase',
    title: 'Предприниматели',
    text: 'Готовые запустить или масштабировать своё дело без страха ошибок.',
  },
  {
    icon: 'UserCog',
    title: 'Менеджеры',
    text: 'Развивающие управленческие навыки и уверенность в принятии решений.',
  },
  {
    icon: 'Star',
    title: 'Специалисты',
    text: 'Прокачивающие soft skills, харизму и умение влиять на других.',
  },
];

const credentials = [
  { icon: 'GraduationCap', text: 'Психолог, специалист по самоопределению' },
  { icon: 'Users2', text: '4 200+ участников программ' },
  { icon: 'BadgeCheck', text: 'Сертифицированный коуч ICF' },
  { icon: 'Sparkles', text: 'Тренер программы «Точка Старта»' },
];

const navLinks = [
  { l: 'Маршрут', h: '#c-route' },
  { l: 'Программа по дням', h: '#c-days' },
  { l: 'О программе', h: '#c-program' },
  { l: 'Стоимость', h: '#c-plans' },
  { l: 'Заявка', h: '#c-form' },
];

const routeDays = [
  { day: '07', label: 'Вечер знакомства', desc: 'Погружение в программу, знакомство с группой и запуск личного вектора.' },
  { day: '08', label: 'День практики', desc: 'Разбор запросов, работа с лидерскими качествами и харизмой.' },
  { day: '09', label: 'День результата', desc: 'Закрепление навыков, план действий и конкретные шаги к цели.' },
];

const dayPrograms = [
  {
    day: '07',
    title: 'Вечер знакомства',
    theme: 'Точка старта и личный вектор',
    steps: [
      'Знакомство с группой и правила программы',
      'Диагностика текущей точки: доход, роль, амбиции',
      'Выявление ограничивающих установок в карьере',
      'Формулировка личной цели на 3 дня программы',
    ],
  },
  {
    day: '08',
    title: 'День практики',
    theme: 'Лидерство, харизма и влияние',
    steps: [
      'Работа с уверенностью и правом на руководство',
      'Практики харизматичной коммуникации',
      'Разбор реальных кейсов управления командой',
      'Техники влияния и убедительной аргументации',
      'Парная практика обратной связи',
    ],
  },
  {
    day: '09',
    title: 'День результата',
    theme: 'Конкретный план действий',
    steps: [
      'Сборка личной стратегии карьерного роста',
      'План запуска проекта или повышения дохода',
      'Проработка страхов перед новым уровнем ответственности',
      'Постановка целей на 30/60/90 дней',
      'Итоговый разбор и обратная связь тренера',
    ],
  },
];

const Career = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDay, setActiveDay] = useState(0);

  const scrollTo = (h: string) => {
    setMenuOpen(false);
    document.querySelector(h)?.scrollIntoView({ behavior: 'smooth' });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return setError('Введите имя');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Проверьте e-mail');
    setError('');
    setSent(true);
  };

  return (
    <div className="career-page">
      <CareerHeader
        navigate={navigate}
        scrollTo={scrollTo}
        navLinks={navLinks}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <CareerHero scrollTo={scrollTo} routeDays={routeDays} />

      <CareerDaysProgram
        dayPrograms={dayPrograms}
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        requests={requests}
        audience={audience}
      />

      <CareerMentorAndPlans
        navigate={navigate}
        mentorImg={MENTOR_IMG}
        credentials={credentials}
        plans={plans}
      />

      <CareerFormAndFooter
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        sent={sent}
        error={error}
        submit={submit}
        scrollTo={scrollTo}
        navLinks={navLinks}
      />
    </div>
  );
};

export default Career;
