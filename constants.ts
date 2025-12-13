import { Project, Experience, SocialLink } from './types';
import { Instagram, Youtube, Send, Mail, Briefcase, Camera, Code } from 'lucide-react';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Telegram', url: 'https://t.me/Mikhail_Starun', icon: Send },
  { name: 'Email', url: 'mailto:starunflow@gmail.com', icon: Mail },
  { name: 'Behance', url: 'https://behance.net/toandfro', icon: Briefcase },
  { name: 'Instagram', url: 'https://instagram.com/robert_felixsovich', icon: Instagram },
  { name: 'YouTube', url: 'https://www.youtube.com/@robertfelixsovich', icon: Youtube },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Машинное Зрение (Video Analytics)",
    role: "Project Lead (Заказчик)",
    description: "Внедрение системы видеоаналитики безопасности на складах Heineken. Переход от реактивного контроля к превентивному.",
    tags: ["Agile/Scrum", "AI/ML", "Safety", "Инновации"],
    metrics: [
      "Снижение небезопасных событий в 5 раз",
      "Внедрено 4 алгоритма распознавания",
      "Масштабирование на другие заводы"
    ],
    image: "https://picsum.photos/800/600?grayscale" 
  },
  {
    id: 2,
    title: "Инфраструктура для Электропогрузчиков",
    role: "Project Manager",
    description: "Создание зарядной инфраструктуры для парка техники в условиях ограничений COVID-19. Гибридный подход к управлению.",
    tags: ["Waterfall", "Infrastructure", "Crisis Mgmt"],
    metrics: [
      "14 новых зарядных постов",
      "Минимизация простоев техники",
      "Реализация в рамках бюджета"
    ],
    image: "https://picsum.photos/800/601?grayscale"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Объединённые Пивоварни Холдинг / Heineken",
    role: "Специалист по планированию / Ведущий специалист логистики",
    period: "2019 — Наст. время",
    description: "Управление кросс-функциональными проектами, внедрение Lean Management и цифровых инструментов.",
    achievements: [
      "Лидирование IT-проекта 'Машинное зрение'",
      "Ключевой пользователь SAP EWM (знаю систему изнутри)",
      "Оптимизация утилизации контейнеров (-3% затрат)"
    ],
    type: 'Operations'
  },
  {
    id: 2,
    company: "Melon Fashion Group",
    role: "Технолог по складским процессам",
    period: "2023 — 2024",
    description: "Анализ и оптимизация WMS, внедрение стандартов качества.",
    achievements: [
      "Разработка системы из 20+ KPI",
      "Формирование требований к доработке WMS",
      "Внедрение 5S и Kaizen"
    ],
    type: 'IT'
  },
  {
    id: 3,
    company: "Транслес ДВ",
    role: "Менеджер проекта",
    period: "2014 — 2019",
    description: "Организация E2E процесса поставки круглого леса.",
    achievements: [
      "Увеличение прибыли в 4 раза",
      "Сокращение текучести персонала",
      "Оптимизация логистики"
    ],
    type: 'Logistics'
  }
];

export const SKILLS = [
  "Project Management (Agile, Scrum, Waterfall)",
  "Business Analysis (BPMN, Requirement Gathering)",
  "Tools (Jira, Confluence, MS Project, Miro, Figma)",
  "SAP ERP / EWM (Key User)",
  "Lean Management / Kaizen / 5S",
  "SQL (Basics)",
  "Python (Analytics Basics)"
];