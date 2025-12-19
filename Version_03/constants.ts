import { Project, Experience, SocialLink } from './types';
import { Instagram, Youtube, Send, Mail, Briefcase } from 'lucide-react';

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
    title: "МАШИННОЕ ЗРЕНИЕ",
    role: "Project Lead",
    description: "Внедрение системы компьютерного зрения для контроля ПБ и ОТ. Снижение рисков на производстве за счет автоматического анализа видеопотока.",
    tags: ["CV/ML", "Safety", "Python"],
    metrics: [
      "-80% нарушений",
      "Real-time анализ"
    ],
    image: "/images/Project_01.jpg"
  },
  {
    id: 2,
    title: "ЗАРЯДНАЯ ИНФРАСТРУКТУРА",
    role: "Project Manager",
    description: "Развертывание сети зарядных станций для парка электротехники. Управление закупками, монтажом и интеграцией в IT-контур.",
    tags: ["Infrastructure", "EV", "Hardware"],
    metrics: [
      "14 станций",
      "0 простоев"
    ],
    image: "/images/Project_02.jpg"
  },
  {
    id: 3,
    title: "МИГРАЦИЯ SAP EWM",
    role: "Analyst & Key User",
    description: "Перевод складских процессов на архитектуру SAP EWM. Оптимизация топологии хранения и алгоритмов отбора заказов.",
    tags: ["SAP", "WMS", "Analysis"],
    metrics: [
      "+15% к скорости",
      "Zero Downtime"
    ],
    image: "/images/Project_03.jpg"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Объединённые Пивоварни Холдинг",
    role: "Специалист по планированию производства и поставок",
    period: "2024 — сейчас",
    description: "Планирование производства продукции с формированием производственных графиков, управлением запасами и координацией взаимодействующих подразделений.",
    achievements: [
      "Рост прибыли направления",
      "Настройка цепочек поставок",
      "Построение отчетности"
    ],
    type: 'Logistics'
  },
  {
    id: 2,
    company: "MELON FASHION GROUP",
    role: "Технолог по складским процессам",
    period: "2023 — 2024",
    description: "Анализ эффективности складских процессов и доработка WMS-системы.",
    achievements: [
      "Разработка ТЗ на доработку WMS",
      "Оптимизация KPI персонала",
      "Kaizen и 5S на практике"
    ],
    type: 'IT'
  },
  {
    id: 3,
    company: "HEINEKEN",
    role: "Ведущий специалист по логистике",
    period: "2019 — 2022",
    description: "Управление логистическими проектами, внедрение цифровых инструментов и методологии Lean.",
    achievements: [
      "Запуск AI-мониторинга безопасности",
      "Работа в SAP EWM как Key User",
      "Оптимизация затрат склада"
    ],
    type: 'Operations'
  },
  {
    id: 4,
    company: "ТРАНСЛЕС ДВ",
    role: "Менеджер проектов",
    period: "2014 — 2019",
    description: "Управление полным циклом транспортировки круглого леса.",
    achievements: [
      "Рост прибыли направления",
      "Настройка цепочек поставок",
      "Построение отчетности"
    ],
    type: 'Logistics'
  }
];

export const SKILLS = [
  "PROJECT MANAGEMENT",
  "BUSINESS ANALYSIS",
  "SAP EWM",
  "WMS / ERP",
  "LEAN MANAGEMENT",
  "PYTHON (DATA ANALYSIS)",
  "SQL BASICS"
];