import { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      period: "Ноябрь 2024 — настоящее время",
      company: "Объединённые Пивоварни Холдинг",
      role: "Специалист по планированию производства и поставок",
      description: "Планирование графиков производства, анализ данных, работа в SAP ERP",
      tags: ["SAP ERP", "Supply Chain", "Data Analysis"]
    },
    {
      period: "Ноябрь 2023 — Ноябрь 2024",
      company: "Melon Fashion Group",
      role: "Технолог по складским процессам",
      description: "Анализ складских операций, сбор требований для WMS, внедрение Lean",
      achievements: ["Разработал KPI-систему", "Оптимизировал инвентаризацию"],
      tags: ["WMS", "Business Analysis", "Lean"]
    },
    {
      period: "Декабрь 2023 — Август 2024",
      company: "Яндекс Практикум",
      role: "Менеджер IT проектов (обучение)",
      description: "Agile, Scrum, сбор требований, тест-кейсы, управление проектами",
      tags: ["Agile", "Scrum", "Project Management"]
    },
    {
      period: "Июль 2019 — Ноябрь 2022",
      company: "Heineken",
      role: "Ведущий специалист по логистике",
      description: "Ключевой пользователь SAP EWM, внедрение видеоаналитики",
      achievements: ["Проект машинного зрения", "Снижение затрат на 3%"],
      tags: ["SAP EWM", "Digital Projects", "Process Optimization"],
      highlight: true
    }
  ];

  const projects = [
    {
      title: "Машинное зрение для складов",
      company: "Heineken",
      period: "2021-2022",
      description: "Пилотный проект по внедрению системы видеоаналитики для повышения культуры безопасности на складах",
      results: [
        "Снижение небезопасных событий в 5 раз",
        "4 алгоритма распознавания (СИЗ, зоны, скорость)",
        "Одобрено для масштабирования на все заводы"
      ],
      tech: ["Computer Vision", "Agile/Scrum", "User Stories", "Testing"],
      role: "Product Owner",
      image: "🎥"
    },
    {
      title: "Зарядные станции для электропогрузчиков",
      company: "Heineken",
      period: "2020-2021",
      description: "Проект создания инфраструктуры для перехода на электропогрузчики",
      results: [
        "14 зарядных станций",
        "Завершено в рамках бюджета",
        "Масштабируемое решение для всех заводов"
      ],
      tech: ["Waterfall", "Risk Management", "Budget Planning"],
      role: "Project Manager",
      image: "⚡"
    }
  ];

  const skills = [
    { category: "Business Analysis", items: ["Сбор требований", "BPMN", "User Stories", "Test Cases"], level: 85 },
    { category: "Project Management", items: ["Agile/Scrum", "Waterfall", "Risk Management", "Stakeholder Management"], level: 80 },
    { category: "Technical", items: ["SAP EWM", "WMS", "SQL (базовый)", "Python (базовый)"], level: 70 },
    { category: "Process Optimization", items: ["Lean", "Kaizen", "5S", "KPI Development"], level: 90 }
  ];

  return (
    <div style={styles.app}>
      {/* Progress Bar */}
      <div style={{ ...styles.scrollProgress, width: `${scrollProgress}%` }} />

      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>MS</div>
          <ul style={styles.navLinks}>
            <li><a href="#hero" style={styles.navLink}>Главная</a></li>
            <li><a href="#experience" style={styles.navLink}>Опыт</a></li>
            <li><a href="#projects" style={styles.navLink}>Проекты</a></li>
            <li><a href="#skills" style={styles.navLink}>Навыки</a></li>
            <li><a href="#contact" style={styles.navLink}>Контакты</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroBgShapes}>
          <div style={{ ...styles.shape, ...styles.shape1 }} />
          <div style={{ ...styles.shape, ...styles.shape2 }} />
        </div>
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>
              Я знаю, как превратить <span style={styles.highlight}>операционный хаос</span> в чёткие требования
            </h1>
            <p style={styles.heroSubtitle}>
              16 лет в операциях → 2 IT-проекта → Переход в продуктовую разработку
            </p>
            <p style={styles.heroTagline}>
              "Хороший аналитик понимает документацию. Отличный аналитик понимает людей, которые будут работать с системой."
            </p>
            <div style={styles.ctaButtons}>
              <a href="#projects" style={{ ...styles.btn, ...styles.btnPrimary }}>Посмотреть проекты</a>
              <a href="#contact" style={{ ...styles.btn, ...styles.btnSecondary }}>Связаться</a>
            </div>

            <div style={styles.stats}>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>16</div>
                <div style={styles.statLabel}>Лет в операциях</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>7</div>
                <div style={styles.statLabel}>Заводов с SAP EWM</div>
              </div>
              <div style={styles.statItem}>
                <div style={styles.statNumber}>2</div>
                <div style={styles.statLabel}>IT-проекта</div>
              </div>
            </div>
          </div>

          <div style={styles.heroImage}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Михаил Старун"
              style={styles.heroImg}
            />
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section style={styles.whyMe}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Почему я?</h2>
          <div style={styles.whyGrid}>
            {[
              { icon: "🎯", title: "Понимаю бизнес изнутри", text: "16 лет работы в операциях — я знаю боли складов, производства и логистики не из теории" },
              { icon: "🔄", title: "Перевожу хаос в требования", text: "Работал ключевым пользователем SAP EWM на 7 заводах — фиксировал баги, которые реально мешают работать" },
              { icon: "🚀", title: "Запускал реальные IT-проекты", text: "Машинное зрение для повышения культуры безопасности — от концепции до внедрения и масштабирования" }
            ].map((item, i) => (
              <div key={i} style={styles.whyCard}>
                <div style={styles.whyIcon}>{item.icon}</div>
                <h3 style={styles.whyCardTitle}>{item.title}</h3>
                <p style={styles.whyCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" style={styles.experience}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Опыт работы</h2>
          <div style={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={{ ...styles.timelineDot, ...(exp.highlight ? styles.timelineDotHighlight : {}) }} />
                <div style={styles.timelineContent}>
                  <div style={styles.timelinePeriod}>{exp.period}</div>
                  <h3 style={styles.timelineCompany}>{exp.company}</h3>
                  <h4 style={styles.timelineRole}>{exp.role}</h4>
                  <p style={styles.timelineDescription}>{exp.description}</p>
                  {exp.achievements && (
                    <ul style={styles.timelineAchievements}>
                      {exp.achievements.map((ach, i) => (
                        <li key={i} style={styles.achievementItem}>✓ {ach}</li>
                      ))}
                    </ul>
                  )}
                  <div style={styles.timelineTags}>
                    {exp.tags.map((tag, i) => (
                      <span key={i} style={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.projects}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Ключевые проекты</h2>
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectEmoji}>{project.image}</div>
                <div>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <div style={styles.projectMeta}>
                    <span>{project.company}</span>
                    <span>{project.period}</span>
                  </div>
                </div>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.projectRole}>Роль: {project.role}</div>
                <div style={styles.projectResults}>
                  <strong style={styles.projectResultsTitle}>Результаты:</strong>
                  <ul style={styles.resultsList}>
                    {project.results.map((result, i) => (
                      <li key={i} style={styles.resultItem}>→ {result}</li>
                    ))}
                  </ul>
                </div>
                <div style={styles.projectTech}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={styles.skills}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Навыки</h2>
          <div style={styles.skillsGrid}>
            {skills.map((skill, index) => (
              <div key={index} style={styles.skillCard}>
                <div style={styles.skillHeader}>
                  <h3 style={styles.skillCategory}>{skill.category}</h3>
                  <span style={styles.skillLevel}>{skill.level}%</span>
                </div>
                <div style={styles.skillBar}>
                  <div style={{ ...styles.skillProgress, width: `${skill.level}%` }} />
                </div>
                <ul style={styles.skillItems}>
                  {skill.items.map((item, i) => (
                    <li key={i} style={styles.skillItem}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Давайте работать вместе</h2>
          <p style={styles.contactSubtitle}>
            Ищу возможности в роли Business Analyst, System Analyst или Project Manager в производственных компаниях с собственной IT
          </p>
          <div style={styles.contactGrid}>
            <a href="tel:+79215925202" style={styles.contactCard}>
              <div style={styles.contactIcon}>📱</div>
              <div>
                <div style={styles.contactLabel}>Телефон</div>
                <div style={styles.contactValue}>+7 (921) 592-52-02</div>
              </div>
            </a>
            <a href="https://t.me/Mikhail_Starun" style={styles.contactCard} target="_blank" rel="noopener noreferrer">
              <div style={styles.contactIcon}>✈️</div>
              <div>
                <div style={styles.contactLabel}>Telegram</div>
                <div style={styles.contactValue}>@Mikhail_Starun</div>
              </div>
            </a>
            <a href="mailto:starunflow@gmail.com" style={styles.contactCard}>
              <div style={styles.contactIcon}>📧</div>
              <div>
                <div style={styles.contactLabel}>Email</div>
                <div style={styles.contactValue}>starunflow@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p>© 2024 Михаил Старун • Санкт-Петербург</p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    background: '#0a0a0a',
    color: '#F5F5F5',
    lineHeight: 1.6,
    overflowX: 'hidden',
  },
  scrollProgress: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '3px',
    background: 'linear-gradient(90deg, #E67B4C, #C5D71D)',
    zIndex: 9999,
    transition: 'width 0.1s',
  },
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    background: 'rgba(10, 10, 10, 0.95)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: '1.5rem 5%',
    borderBottom: '1px solid rgba(230, 123, 76, 0.1)',
  },
  navContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    background: 'linear-gradient(135deg, #E67B4C, #C5D71D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  navLinks: {
    display: 'flex',
    gap: '2rem',
    listStyle: 'none',
  },
  navLink: {
    color: '#F5F5F5',
    textDecoration: 'none',
    fontWeight: 500,
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '8rem 5% 4rem',
    position: 'relative',
    overflow: 'hidden',
  },
  heroBgShapes: {
    position: 'absolute',
    inset: 0,
    zIndex: 0,
  },
  shape: {
    position: 'absolute',
    borderRadius: '50%',
  },
  shape1: {
    top: '-50%',
    right: '-20%',
    width: '800px',
    height: '800px',
    background: 'radial-gradient(circle, rgba(230, 123, 76, 0.15), transparent)',
  },
  shape2: {
    bottom: '-30%',
    left: '-10%',
    width: '600px',
    height: '600px',
    background: 'radial-gradient(circle, rgba(197, 215, 29, 0.1), transparent)',
  },
  heroContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '4rem',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
  },
  heroContent: {},
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: '1.5rem',
  },
  highlight: {
    background: 'linear-gradient(135deg, #E67B4C, #C5D71D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  heroSubtitle: {
    fontSize: '1.3rem',
    color: '#888',
    marginBottom: '2rem',
    fontWeight: 300,
  },
  heroTagline: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
    marginBottom: '3rem',
    borderLeft: '3px solid #C5D71D',
    paddingLeft: '1.5rem',
    fontStyle: 'italic',
  },
  ctaButtons: {
    display: 'flex',
    gap: '1.5rem',
    marginBottom: '4rem',
  },
  btn: {
    padding: '1rem 2.5rem',
    borderRadius: '50px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '2px solid transparent',
    cursor: 'pointer',
    fontSize: '1rem',
    display: 'inline-block',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #E67B4C, #C5D71D)',
    color: '#0a0a0a',
  },
  btnSecondary: {
    background: 'transparent',
    border: '2px solid #E67B4C',
    color: '#E67B4C',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  statItem: {
    textAlign: 'center',
    padding: '1.5rem',
    background: '#1a1a1a',
    borderRadius: '15px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: 800,
    background: 'linear-gradient(135deg, #E67B4C, #C5D71D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  statLabel: {
    color: '#888',
    fontSize: '0.9rem',
    marginTop: '0.5rem',
  },
  heroImage: {},
  heroImg: {
    width: '100%',
    maxWidth: '500px',
    borderRadius: '20px',
    border: '3px solid #E67B4C',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 5%',
  },
  sectionTitle: {
    fontSize: '3rem',
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: '4rem',
    background: 'linear-gradient(135deg, #E67B4C, #C5D71D)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  whyMe: {
    padding: '6rem 5%',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
  },
  whyGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
  },
  whyCard: {
    background: '#0a0a0a',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
  },
  whyIcon: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
  },
  whyCardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#E67B4C',
  },
  whyCardText: {
    color: '#888',
    lineHeight: 1.8,
  },
  experience: {
    padding: '6rem 5%',
    background: '#0a0a0a',
  },
  timeline: {
    maxWidth: '900px',
    margin: '0 auto',
    position: 'relative',
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: '60px',
    marginBottom: '3rem',
  },
  timelineDot: {
    position: 'absolute',
    left: '12px',
    top: 0,
    width: '18px',
    height: '18px',
    background: '#E67B4C',
    borderRadius: '50%',
    border: '3px solid #0a0a0a',
    zIndex: 2,
  },
  timelineDotHighlight: {
    width: '24px',
    height: '24px',
    left: '9px',
    background: '#C5D71D',
  },
  timelineContent: {
    background: '#1a1a1a',
    padding: '2rem',
    borderRadius: '15px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
  },
  timelinePeriod: {
    color: '#E67B4C',
    fontSize: '0.9rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  timelineCompany: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  timelineRole: {
    fontSize: '1.1rem',
    color: '#C5D71D',
    marginBottom: '1rem',
    fontWeight: 500,
  },
  timelineDescription: {
    color: '#888',
    marginBottom: '1rem',
  },
  timelineAchievements: {
    listStyle: 'none',
    marginBottom: '1rem',
  },
  achievementItem: {
    color: '#F5F5F5',
    marginBottom: '0.5rem',
  },
  timelineTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  tag: {
    padding: '0.3rem 1rem',
    background: 'rgba(230, 123, 76, 0.1)',
    border: '1px solid #E67B4C',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: '#E67B4C',
  },
  projects: {
    padding: '6rem 5%',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '3rem',
  },
  projectCard: {
    background: '#0a0a0a',
    padding: '3rem',
    borderRadius: '20px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
  },
  projectEmoji: {
    fontSize: '4rem',
    marginBottom: '1.5rem',
  },
  projectTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
  },
  projectMeta: {
    display: 'flex',
    gap: '1rem',
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '1.5rem',
  },
  projectDescription: {
    color: '#888',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  },
  projectRole: {
    color: '#C5D71D',
    fontWeight: 600,
    marginBottom: '1rem',
  },
  projectResults: {
    marginBottom: '1.5rem',
  },
  projectResultsTitle: {
    color: '#E67B4C',
    display: 'block',
    marginBottom: '0.5rem',
  },
  resultsList: {
    listStyle: 'none',
    paddingLeft: 0,
  },
  resultItem: {
    color: '#F5F5F5',
    marginBottom: '0.5rem',
  },
  projectTech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    padding: '0.4rem 1rem',
    background: 'rgba(197, 215, 29, 0.1)',
    border: '1px solid #C5D71D',
    borderRadius: '20px',
    fontSize: '0.85rem',
    color: '#C5D71D',
  },
  skills: {
    padding: '6rem 5%',
    background: '#0a0a0a',
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  skillCard: {
    background: '#1a1a1a',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  skillCategory: {
    fontSize: '1.5rem',
  },
  skillLevel: {
    fontSize: '1.2rem',
    fontWeight: 700,
    color: '#E67B4C',
  },
  skillBar: {
    width: '100%',
    height: '8px',
    background: 'rgba(230, 123, 76, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    marginBottom: '1.5rem',
  },
  skillProgress: {
    height: '100%',
    background: 'linear-gradient(90deg, #E67B4C, #C5D71D)',
    borderRadius: '10px',
    transition: 'width 1s ease-out',
  },
  skillItems: {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
  },
  skillItem: {
    padding: '0.5rem 1rem',
    background: 'rgba(230, 123, 76, 0.1)',
    borderRadius: '10px',
    color: '#888',
    fontSize: '0.9rem',
  },
  contact: {
    padding: '6rem 5%',
    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
    textAlign: 'center',
  },
  contactSubtitle: {
    fontSize: '1.2rem',
    color: '#888',
    maxWidth: '800px',
    margin: '0 auto 4rem',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  contactCard: {
    background: '#0a0a0a',
    padding: '2.5rem',
    borderRadius: '20px',
    border: '1px solid rgba(230, 123, 76, 0.2)',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  contactIcon: {
    fontSize: '3rem',
  },
  contactLabel: {
    color: '#888',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
  },
  contactValue: {
    color: '#F5F5F5',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  footer: {
    padding: '2rem 5%',
    background: '#0a0a0a',
    borderTop: '1px solid rgba(230, 123, 76, 0.1)',
    textAlign: 'center',
    color: '#888',
  },
};