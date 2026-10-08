# 💼 Portfólio Profissional 👨‍💻

> [!NOTE]
> Website de portfólio profissional com seções **Sobre Mim (PT/EN)**, **Projetos (timeline)**, **Experiências** e **Contato (formulário com envio por e-mail)**. Laboratório 01 — DIAW, PUC Minas.

---

## 🚧 Status do Projeto

![React](https://img.shields.io/badge/React-19-007ec6?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![Status](https://img.shields.io/badge/Status-Em_desenvolvimento-yellow?style=for-the-badge)

## 📚 Índice
- [Links Úteis](#-links-úteis)
- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades-principais)
- [Tecnologias](#-tecnologias-utilizadas)
- [Dependências](#-dependências)
- [Instalação e Execução](#-instalação-e-execução)
- [Deploy](#-deploy)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Protótipos](#-protótipos-figma)
- [Demonstração](#-demonstração)
- [Autor](#-autor)

---

## 🔗 Links Úteis
* 🌐 **Site publicado:** _(preencher após o deploy — ex.: https://seu-portfolio.vercel.app)_
* 🎨 **Protótipo Figma:** _(preencher com o link do Figma)_

---

## 📝 Sobre o Projeto
Portfólio criado para apresentar trajetória, habilidades, projetos e formas de contato de maneira moderna, responsiva e acessível. Identidade visual escura com destaque em verde-água (teal), pensada para um perfil de desenvolvedor.

## ✨ Funcionalidades Principais
- 🧭 **Menu de navegação** com 4 páginas (rotas) e menu "hambúrguer" no mobile.
- 🌐 **Sobre Mim em português e inglês** + botão PT/EN que traduz todo o site (preferência salva no navegador).
- 🕒 **Timeline dinâmica de projetos**, ordenada automaticamente do mais antigo ao mais recente a partir de `src/data/content.js`.
- 💼 **Experiências** organizadas (instituição, cargo, período, descrição).
- ✉️ **Contato**: ícones clicáveis (e-mail, WhatsApp, LinkedIn, GitHub) e formulário (nome, e-mail, mensagem) com validação e envio por e-mail via EmailJS.
- 📱 **Design responsivo** e respeito a `prefers-reduced-motion`.

---

## 🛠 Tecnologias Utilizadas
### 💻 Front-end
* **Biblioteca:** React 19
* **Linguagem:** JavaScript (ES6+) / JSX
* **Roteamento:** React Router (HashRouter)
* **Formulários:** React Hook Form
* **Animações:** Framer Motion
* **Ícones:** React Icons
* **Estilização:** CSS puro com variáveis (design tokens)
* **Build Tool:** Vite
* **Lint:** Oxlint

### 🖥️ Back-end / Serviços
* **Envio de e-mail:** [EmailJS](https://www.emailjs.com/) (direto do front-end, sem servidor próprio)

### ⚙️ Infraestrutura
* **Hospedagem:** Vercel (ou GitHub Pages / Render)
* **Versionamento:** Git + GitHub
* **Design:** Figma

## 📦 Dependências
| Pacote | Uso |
|---|---|
| `react`, `react-dom` | Interface |
| `react-router-dom` | Navegação entre páginas |
| `react-hook-form` | Formulário e validações |
| `@emailjs/browser` | Envio de e-mail |
| `framer-motion` | Animações |
| `react-icons` | Ícones |
| `vite`, `@vitejs/plugin-react` | Build/dev server |
| `oxlint` | Lint |

---

## 🚀 Instalação e Execução

**Pré-requisitos:** Node.js 20+ e npm.

```bash
git clone https://github.com/thuzada/seu-repositorio.git
cd LAB1-DIW
npm install
cp .env.example .env     # preencha as chaves do EmailJS
npm run dev              # http://localhost:5173
```

Outros comandos: `npm run build` (gera `dist/`), `npm run preview`, `npm run lint`.

### 🔐 Variáveis de Ambiente (EmailJS)
1. Crie uma conta gratuita em [emailjs.com](https://www.emailjs.com/), adicione um **Email Service** e um **Email Template**.
2. No template use as variáveis `{{from_name}}`, `{{reply_to}}` e `{{message}}`.
3. Preencha o `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

### ✏️ Personalizando o conteúdo
Todos os textos, projetos, experiências e links ficam em [`src/data/content.js`](src/data/content.js). Coloque os prints/GIFs dos projetos em `public/projects/` e referencie em `image`.

---

## ☁️ Deploy
**Vercel:** importe o repositório → framework *Vite* (detectado) → adicione as 3 variáveis `VITE_EMAILJS_*` em *Settings → Environment Variables* → *Deploy*. Como o roteamento usa `HashRouter`, não é necessário configurar rewrites (também funciona em GitHub Pages).

---

## 📁 Estrutura de Pastas
```
portfolio/
├── public/
│   ├── favicon.svg
│   └── projects/            # imagens/GIFs dos projetos
├── src/
│   ├── components/          # Header, Footer, Section, ScrollToTop
│   ├── context/             # LanguageContext (PT/EN)
│   ├── data/content.js      # todo o conteúdo editável
│   ├── pages/               # About, Projects, Experience, Contact
│   ├── App.jsx              # rotas e layout
│   ├── main.jsx             # entrada (Router + providers)
│   └── index.css            # estilos globais e responsivos
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Protótipos (Wireframes)
Wireframes de média fidelidade das quatro páginas, em desktop e mobile (arquivos em [`wireframes/`](wireframes/), em PNG e SVG).

### Visão geral
![Board completo](wireframes/00%20-%20Board%20completo%20(Desktop%20+%20Mobile).png)

### Desktop
**Desktop — Sobre**

![Desktop — Sobre](wireframes/Desktop%20-%2001%20Sobre.png)

**Desktop — Projetos**

![Desktop — Projetos](wireframes/Desktop%20-%2002%20Projetos.png)

**Desktop — Experiências**

![Desktop — Experiências](wireframes/Desktop%20-%2003%20Experiencias.png)

**Desktop — Contato**

![Desktop — Contato](wireframes/Desktop%20-%2004%20Contato.png)

### Mobile
**Mobile — Sobre**

![Mobile — Sobre](wireframes/Mobile%20-%2001%20Sobre.png)

**Mobile — Projetos**

![Mobile — Projetos](wireframes/Mobile%20-%2002%20Projetos.png)

**Mobile — Experiências**

![Mobile — Experiências](wireframes/Mobile%20-%2003%20Experiencias.png)

**Mobile — Contato**

![Mobile — Contato](wireframes/Mobile%20-%2004%20Contato.png)

**Mobile — Menu aberto**

![Mobile — Menu aberto](wireframes/Mobile%20-%2005%20Menu%20aberto.png)

## 🎬 Demonstração
_Insira prints/GIFs do site em funcionamento (navegação, troca de idioma, formulário)._

## 👤 Autor
**Arthur Domingos** — [GitHub](https://github.com/thuzada) · [LinkedIn](https://www.linkedin.com/in/seu-usuario)
