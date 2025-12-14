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
    title: "VIDEO ANALYTICS AI",
    role: "Project Lead",
    description: "Внедрение системы компьютерного зрения для безопасности. Переход от реактивного контроля к предиктивной аналитике.",
    tags: ["CV/ML", "Safety", "Innovation"],
    metrics: [
      "-80% инцидентов",
      "4 алгоритма",
      "Scale Ready"
    ],
    // Пользователю нужно создать этот файл
    image: "/images/Project_01.jpg"
  },
  {
    id: 2,
    title: "E-FLEET INFRASTRUCTURE",
    role: "Project Manager",
    description: "Развертывание зарядной инфраструктуры для парка техники. Управление в условиях ограничений и неопределенности.",
    tags: ["Infrastructure", "Lean", "Hardware"],
    metrics: [
      "14 станций",
      "0 простоев",
      "В бюджете"
    ],
    // Пользователю нужно создать этот файл
    image: "/images/Project_02.jpg"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    company: "HEINEKEN / OPH",
    role: "Lead Logistics Specialist",
    period: "2019 — NOW",
    description: "Управление кросс-функциональными проектами, внедрение Lean Management и цифровых инструментов.",
    achievements: [
      "Лидирование IT-проекта 'Машинное зрение'",
      "Key User SAP EWM",
      "Оптимизация костов (-3%)"
    ],
    type: 'Operations'
  },
  {
    id: 2,
    company: "MELON FASHION GROUP",
    role: "Warehouse Technologist",
    period: "2023 — 2024",
    description: "Анализ и оптимизация WMS, внедрение стандартов качества.",
    achievements: [
      "Разработка системы KPI (20+ метрик)",
      "Тех. задание для WMS",
      "Kaizen & 5S"
    ],
    type: 'IT'
  },
  {
    id: 3,
    company: "TRANSLES DV",
    role: "Project Manager",
    period: "2014 — 2019",
    description: "Организация E2E процесса поставки круглого леса.",
    achievements: [
      "Рост прибыли x4",
      "Сокращение текучести",
      "Логистика 'под ключ'"
    ],
    type: 'Logistics'
  }
];

export const SKILLS = [
  "PROJECT MGMT (AGILE/WATERFALL)",
  "BUSINESS ANALYSIS (BPMN)",
  "TOOLS (JIRA/FIGMA/MIRO)",
  "SAP EWM (KEY USER)",
  "LEAN / KAIZEN",
  "SQL BASICS",
  "PYTHON DATA"
];