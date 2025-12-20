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
    title: "МАШИННОЕ ЗРЕНИЕ (AI)",
    role: "Stakeholder / Project Lead",
    description: "Внедрение системы видеоаналитики для контроля безопасности. Сформулировал ТЗ на алгоритмы ML, координировал Agile-команду и тестирование на реальных данных.",
    tags: ["AI/ML", "Agile", "Requirements"],
    metrics: [
      "-80% инцидентов",
      "4 алгоритма AI"
    ],
    image: "/images/Project_01.jpg"
  },
  {
    id: 2,
    title: "ЗАРЯДНАЯ ИНФРАСТРУКТУРА",
    role: "Project Manager (Waterfall)",
    description: "Управление проектом развертывания сети зарядных станций с бюджетом 3 млн руб. Адаптация плана под ограничения пандемии и минимизация простоев техники.",
    tags: ["Infrastructure", "Budgeting", "Waterfall"],
    metrics: [
      "10 постов",
      "3 млн руб."
    ],
    image: "/images/Project_02.jpg"
  },
  {
    id: 3,
    title: "ОПТИМИЗАЦИЯ УТИЛИЗАЦИИ",
    role: "Team Leader / Analyst",
    description: "Анализ данных и маппинг процессов (SIPOC/MAKIGAMI). Изменение правил консолидации заказов и маршрутов для устранения недогруза контейнеров.",
    tags: ["Data Analysis", "Lean", "SIPOC"],
    metrics: [
      "-3% расходов",
      "~2 млн руб./год"
    ],
    image: "/images/Project_03.jpg"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "Объединённые Пивоварни Холдинг (ОПХ)",
    role: "Специалист по планированию производства и поставок",
    period: "2024 — сейчас",
    description: "Планирование производства и управление поставками 100+ SKU в SAP ERP. Анализ спроса и кросс-функциональная координация с 4+ отделами.",
    achievements: [
      "Стабильность в условиях колебаний спроса",
      "Аналитика причин 'вырезания' продуктов",
      "Оптимизация уровней запасов"
    ],
    type: 'Logistics'
  },
  {
    id: 2,
    company: "MELON FASHION GROUP",
    role: "Технолог по складским процессам",
    period: "2023 — 2024",
    description: "Анализ процессов AS IS/TO BE. Сбор и формулирование требований к WMS на языке, понятном IT-разработчикам. Стандартизация операций по Lean.",
    achievements: [
      "Система из 20+ KPI (рост прозрачности на 40%)",
      "ТЗ на доработку WMS для IT-команды",
      "Внедрение Kaizen и 5S стандартов"
    ],
    type: 'IT'
  },
  {
    id: 3,
    company: "HEINEKEN",
    role: "Ведущий специалист по складской логистике",
    period: "2019 — 2022",
    description: "Цифровая трансформация и лидирование TPM-команд. Роль Key User в SAP EWM: описание багов, тестирование (UAT) и внедрение новых функций.",
    achievements: [
      "Запуск AI-мониторинга безопасности",
      "Оптимизация утилизации (экономия 2 млн/год)",
      "Маппинг процессов в BPMN 2.0"
    ],
    type: 'Operations'
  },
  {
    id: 4,
    company: "ТРАНСЛЕС ДВ",
    role: "Руководитель проекта",
    period: "2014 — 2019",
    description: "Управление цепочкой поставок end-to-end. Анализ операционных данных, расчет окупаемости инвестиций и управление бюджетом затрат.",
    achievements: [
      "Прибыль выросла в 4 раза за 3 года",
      "Организация бесперебойных отгрузок",
      "Снижение текучести персонала"
    ],
    type: 'Logistics'
  }
];

export const SKILLS = [
  "БИЗНЕС-АНАЛИЗ",
  "АНАЛИЗ ДАННЫХ",
  "СБОР ТРЕБОВАНИЙ",
  "ПРОЦЕССНАЯ АНАЛИТИКА (BPMN 2.0)",
  "LEAN / TPM / KAIZEN",
  "SAP ERP / EWM",
  "SQL (BASICS)",
  "WMS / ERP OPTIMIZATION"
];