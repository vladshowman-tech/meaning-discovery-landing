export type Course = {
  route: string;
  tag: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
  price: string;
  duration: string;
  rating: number;
  students: number;
  accent: string;
};

export const courses: Course[] = [
  {
    route: '/tochkastarta',
    tag: 'Ступень №1',
    title: 'Точка Старта',
    subtitle: 'Кто я на самом деле?',
    desc: 'Поиск смысла, самопознание и работа над собой. Возвращаем ориентиры тем, кто живёт «на автопилоте».',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/3c59a3f5-fb89-4160-8276-a624a1e3c712.jpg',
    price: '15 500 ₽',
    duration: '3 дня',
    rating: 4.9,
    students: 4200,
    accent: '#f5a524',
  },
  {
    route: '/yavigre',
    tag: 'Ступень №2',
    title: 'Я в игре',
    subtitle: 'Качество жизни и отношений',
    desc: 'Запрос на построение гармоничной жизни во всех её сферах: отношения, семья, работа, привычки.',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/054e6a37-f606-4430-afed-8c15d453452d.jpg',
    price: '15 500 ₽',
    duration: '3 дня',
    rating: 4.8,
    students: 2760,
    accent: '#c96f4a',
  },
  {
    route: '/moyaistoriya',
    tag: 'Ступень №3',
    title: 'Моя история',
    subtitle: 'Достижение конкретных целей',
    desc: 'Личностный рост как инструмент для решения прикладных задач: доход, рост, управленческие навыки.',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/20c9a6b1-43ee-428f-8999-3004cda78470.jpg',
    price: '15 500 ₽',
    duration: '3 дня',
    rating: 4.9,
    students: 1980,
    accent: '#4da3ff',
  },
  {
    route: '/denegnyiproryv',
    tag: 'Ступень №4',
    title: 'Денежный прорыв',
    subtitle: 'Выход из тупика',
    desc: 'Мощный внешний импульс, чтобы сдвинуться с мёртвой точки и преодолеть кризисное состояние.',
    img: 'https://cdn.poehali.dev/projects/35e9750e-aa05-49ef-b129-884fed200ea0/files/9f7e7aa9-b8f1-4d6c-9cc4-18d226bf5c46.jpg',
    price: '15 500 ₽',
    duration: '3 дня',
    rating: 4.9,
    students: 1540,
    accent: '#ff5722',
  },
];