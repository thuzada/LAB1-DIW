// =====================================================================
// CONTEÚDO DO PORTFÓLIO — edite aqui seus dados reais.
// =====================================================================

export const profile = {
  name: 'Arthur Domingos',
  email: 'ar7huraugusto@gmail.com',
  whatsapp: '5531993097625', // DDI + DDD + número, só dígitos
  linkedin: 'https://www.linkedin.com/in/arthuraugust0/',
  github: 'https://github.com/thuzada',
}

export const skills = [
  'Vue.js (2 e 3)', 'Vuetify', 'TypeScript', 'JavaScript', 'HTML', 'CSS',
  'Node.js', 'REST APIs', 'PostgreSQL', 'Java',
  'RAG', 'OpenAI API', 'LangChain', 'Qdrant', 'Git', 'Docker',
]

export const about = {
  pt: {
    title: 'Sobre mim',
    role: 'Desenvolvedor Fullstack · Estudante de Engenharia de Software',
    text: [
      'Sou desenvolvedor fullstack e estudante de Engenharia de Software na PUC Minas. Atuo principalmente com Vue.js, TypeScript e Node.js, e já participei da migração de componentes de framework de Vue 2 para Vue 3 e do desenvolvimento de uma plataforma No-Code.',
      'Tenho interesse em inteligência artificial aplicada (RAG, LLMs, LangChain e bancos vetoriais), arquitetura de software e qualidade de código. Meu objetivo é crescer como engenheiro de software em times de produto, construindo soluções escaláveis e de impacto.',
    ],
    education: 'Formação: Bacharelado em Engenharia de Software — PUC Minas (2024–2028)',
    skillsTitle: 'Habilidades',
  },
  en: {
    title: 'About me',
    role: 'Fullstack Developer · Software Engineering student',
    text: [
      "I'm a fullstack developer and Software Engineering student at PUC Minas. I mainly work with Vue.js, TypeScript and Node.js, and I have taken part in migrating framework components from Vue 2 to Vue 3 and in building a No-Code platform.",
      'I am interested in applied AI (RAG, LLMs, LangChain and vector databases), software architecture and code quality. My goal is to grow as a software engineer in product teams, building scalable, high-impact solutions.',
    ],
    education: "Education: Bachelor's Degree in Software Engineering — PUC Minas (2024–2028)",
    skillsTitle: 'Skills',
  },
}

// pinned: true = recebe o selo "Destaque" (repositórios fixados no GitHub).
// A timeline é ordenada pela data (AAAA-MM), do mais antigo ao mais recente.
// image (opcional): caminho de um GIF/print em public/projetos/, ex.: '/projetos/dayup.gif'.
export const projects = [
  {
    id: 1,
    pinned: true,
    date: '2024-04',
    name: { pt: 'Descontrole Financeiro', en: 'Descontrole Financeiro' },
    description: {
      pt: 'Aplicação web de controle financeiro desenvolvida em equipe (GitHub Classroom).',
      en: 'Team-built personal finance web app (GitHub Classroom).',
    },
    tech: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/thuzada/ti-1-pmg-cc-m-20241-g3-descontrole-financeiro',
    image: '/projetos/descontrole-financeiro.gif',
  },
  {
    id: 2,
    pinned: true,
    date: '2025-01',
    name: { pt: 'Sistema de Banco em C', en: 'Banking System in C' },
    description: {
      pt: 'Sistema bancário em linguagem C.',
      en: 'Banking system written in C.',
    },
    tech: ['C'],
    repo: 'https://github.com/thuzada/Sistema-de-banco-em-C',
    image: '/projetos/banco-c.gif',
  },
  {
    id: 3,
    pinned: true,
    date: '2025-01',
    name: { pt: 'CRUD em Java', en: 'Java CRUD' },
    description: {
      pt: 'Operações de cadastro, consulta, atualização e remoção em Java.',
      en: 'Create, read, update and delete operations in Java.',
    },
    tech: ['Java'],
    repo: 'https://github.com/thuzada/CRUD-em-java',
    image: '/projetos/crud-java.gif',
  },
  {
    id: 4,
    pinned: true,
    date: '2025-02',
    name: { pt: 'Integração Java e PostgreSQL', en: 'Java and PostgreSQL Integration' },
    description: {
      pt: 'Integração de uma aplicação Java com banco de dados PostgreSQL.',
      en: 'Integration of a Java application with a PostgreSQL database.',
    },
    tech: ['Java', 'PostgreSQL'],
    repo: 'https://github.com/thuzada/Integracao-JAVA-e-PostegreSQL',
  },
  {
    id: 5,
    pinned: true,
    date: '2025-02',
    name: { pt: 'Integração Spark e Eclipse', en: 'Spark and Eclipse Integration' },
    description: {
      pt: 'Configuração e uso do framework Spark no Eclipse.',
      en: 'Setting up and using the Spark framework in Eclipse.',
    },
    tech: ['Java', 'Spark', 'HTML'],
    repo: 'https://github.com/thuzada/Integracao-Spark-e-Eclipse',
  },
  {
    id: 6,
    pinned: true,
    date: '2025-06',
    name: { pt: 'DayUp', en: 'DayUp' },
    description: {
      pt: 'Sistema de gerenciamento de tarefas pessoais para organizar atividades, priorizar compromissos e analisar o desempenho.',
      en: 'Personal task management system to organize activities, prioritize commitments and analyze performance.',
    },
    tech: ['TypeScript'],
    repo: 'https://github.com/thuzada/Dayup',
  },
  {
    id: 7,
    pinned: false,
    date: '2024-12',
    name: { pt: 'Calculadora Simples', en: 'Simple Calculator' },
    description: {
      pt: 'Calculadora desenvolvida em Python.',
      en: 'Calculator built in Python.',
    },
    tech: ['Python'],
    repo: 'https://github.com/thuzada/Calculadora-Simples',
    image: '/projetos/calculadora.gif',
  },
  {
    id: 8,
    pinned: false,
    date: '2025-04',
    name: { pt: 'Site de Dashboards com APIs', en: 'API Dashboards Website' },
    description: {
      pt: 'Site com dashboards que consomem APIs externas.',
      en: 'Website with dashboards consuming external APIs.',
    },
    tech: ['JavaScript', 'APIs'],
    repo: 'https://github.com/thuzada/Site-de-Dashboards-com-API-s',
  },
  {
    id: 9,
    pinned: false,
    date: '2026-08',
    name: { pt: 'Clima API', en: 'Weather API' },
    description: {
      pt: 'Aplicação em Java que consome uma API de clima.',
      en: 'Java application consuming a weather API.',
    },
    tech: ['Java', 'API REST'],
    repo: 'https://github.com/thuzada/ClimaApi',
  },
]

export const experiences = [
  {
    id: 1,
    org: 'Polícia Rodoviária Federal',
    role: { pt: 'Estagiário de TI', en: 'IT Intern' },
    period: { pt: '2024 – 2025', en: '2024 – 2025' },
    description: {
      pt: 'Suporte técnico de hardware e software, diagnóstico de rede, atualização de sistemas e atendimento a usuários, aplicando boas práticas de TI para manter a confiabilidade dos sistemas.',
      en: 'Hardware and software technical support, network troubleshooting, system updates and user assistance, applying IT best practices to keep systems reliable.',
    },
  },
  {
    id: 2,
    org: 'Teknisa',
    role: { pt: 'Estagiário Fullstack', en: 'Fullstack Developer Intern' },
    period: { pt: '2025', en: '2025' },
    description: {
      pt: 'Apoio na migração de componentes do framework interno de Vue 2 para Vue 3; desenvolvimento de componentes front-end com Vue.js, Vuetify e TypeScript; apoio no desenvolvimento de APIs e na integração front-back.',
      en: 'Helped migrate internal framework components from Vue 2 to Vue 3; built front-end components with Vue.js, Vuetify and TypeScript; supported API development and front-to-back integration.',
    },
  },
  {
    id: 3,
    org: 'Teknisa',
    role: { pt: 'Desenvolvedor Fullstack Júnior', en: 'Fullstack Developer Junior' },
    period: { pt: '2025 – 2026', en: '2025 – 2026' },
    description: {
      pt: 'Migração de componentes Vue 2 → Vue 3; componentes reutilizáveis com Vue 3, Vuetify e TypeScript; plataforma No-Code Zeedhi; assistente de IA com arquitetura RAG usando OpenAI API, LangChain e Qdrant; APIs REST com Node.js; Git e Docker.',
      en: 'Vue 2 → Vue 3 component migration; reusable components with Vue 3, Vuetify and TypeScript; Zeedhi No-Code platform; AI assistant with RAG architecture using OpenAI API, LangChain and Qdrant; REST APIs with Node.js; Git and Docker.',
    },
  },
]

// Textos de interface
export const ui = {
  pt: {
    nav: { about: 'Sobre', projects: 'Projetos', experience: 'Experiências', contact: 'Contato' },
    projects: { title: 'Projetos', subtitle: 'Linha do tempo, do mais antigo ao mais recente.', repo: 'Ver repositório', pinned: 'Destaque' },
    experience: { title: 'Experiências', subtitle: 'Trabalho, estágios, open source e eventos.' },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos conversar? Use os links ou envie uma mensagem.',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando...',
      ok: 'Mensagem enviada com sucesso!',
      fail: 'Não foi possível enviar. Tente novamente ou use o e-mail direto.',
      notConfigured: 'Envio não configurado: defina as variáveis do EmailJS no arquivo .env.',
      required: 'Campo obrigatório',
      invalidEmail: 'E-mail inválido',
      minMessage: 'A mensagem deve ter ao menos 10 caracteres',
    },
    footer: 'Todos os direitos reservados.',
    hello: 'Olá, eu sou',
    seeProjects: 'Ver projetos',
    contactMe: 'Fale comigo',
  },
  en: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    projects: { title: 'Projects', subtitle: 'Timeline, from oldest to newest.', repo: 'View repository', pinned: 'Featured' },
    experience: { title: 'Experience', subtitle: 'Work, internships, open source and events.' },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk! Use the links or send a message.",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      ok: 'Message sent successfully!',
      fail: 'Could not send. Try again or email me directly.',
      notConfigured: 'Sending not configured: set the EmailJS variables in the .env file.',
      required: 'Required field',
      invalidEmail: 'Invalid email',
      minMessage: 'Message must have at least 10 characters',
    },
    footer: 'All rights reserved.',
    hello: "Hi, I'm",
    seeProjects: 'See projects',
    contactMe: 'Get in touch',
  },
}
