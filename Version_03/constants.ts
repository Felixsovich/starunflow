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
    image: "/images/Photo_01.jpg"
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
    image: "/images/Photo_02.jpg"
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
    image: "/images/Photo_03.jpg"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "HEINEKEN / OPH",
    role: "Lead Logistics Specialist",
    period: "2019 — СЕЙЧАС",
    description: "Управление логистическими проектами, внедрение цифровых инструментов и методологии Lean.",
    achievements: [
      "Запуск AI-мониторинга безопасности",
      "Внедрение SAP EWM как Key User",
      "Оптимизация затрат склада"
    ],
    type: 'Operations'
  },
  {
    id: 2,
    company: "MELON FASHION GROUP",
    role: "Warehouse Technologist",
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
    company: "ТРАНСЛЕС ДВ",
    role: "Менеджер проектов",
    period: "2014 — 2019",
    description: "Организация сквозных поставок и управления запасами сырья.",
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