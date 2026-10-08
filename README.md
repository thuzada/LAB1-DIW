# Portfólio Profissional

Site de portfólio pessoal de Arthur Domingos, desenvolvido no Laboratório 01 da disciplina de Desenvolvimento e Integração de Aplicações Web (PUC Minas, Engenharia de Software).

**Site publicado:** https://portfolio-rho-blond-nuvcwsmpx2.vercel.app

## Sobre o projeto

O site apresenta formação, projetos, experiências e formas de contato. Tem quatro páginas acessadas por um menu de navegação:

- **Sobre mim:** apresentação em português e inglês, com habilidades.
- **Projetos:** linha do tempo do mais antigo ao mais recente, com descrição, tecnologias e link do repositório. Os projetos fixados no GitHub aparecem primeiro.
- **Experiências:** estágios e trabalho, com instituição, cargo, período e descrição.
- **Contato:** links para e-mail, WhatsApp, LinkedIn e GitHub, e um formulário (nome, e-mail e mensagem) que envia e-mail pelo EmailJS.

O botão PT/EN no menu troca o idioma de todo o site. O layout é responsivo, com menu recolhido no celular.

Todo o conteúdo (textos, projetos, experiências e links) fica em `src/data/content.js`, então dá para atualizar o portfólio sem mexer nos componentes.

## Tecnologias

- React 19 e JavaScript (JSX)
- Vite (build e servidor de desenvolvimento)
- React Router (HashRouter)
- React Hook Form (formulário e validação)
- EmailJS (envio de e-mail direto do front-end, sem servidor próprio)
- Framer Motion (animações)
- React Icons
- CSS puro com variáveis
- Oxlint
- Hospedagem na Vercel; Figma/wireframes para o protótipo

## Dependências

| Pacote | Para que serve |
|---|---|
| react, react-dom | Interface |
| react-router-dom | Navegação entre páginas |
| react-hook-form | Formulário e validações |
| @emailjs/browser | Envio de e-mail |
| framer-motion | Animações |
| react-icons | Ícones |
| vite, @vitejs/plugin-react | Build e dev server |
| oxlint | Lint |

## Como rodar localmente

Precisa de Node.js 20 ou superior.

```bash
git clone https://github.com/thuzada/LAB1-DIW.git
cd LAB1-DIW
npm install
cp .env.example .env
npm run dev
```

O site abre em http://localhost:5173. Outros comandos: `npm run build`, `npm run preview` e `npm run lint`.

### Configurando o envio de e-mail

O formulário usa o EmailJS. Crie uma conta gratuita em https://www.emailjs.com/, cadastre um serviço de e-mail e um template que use as variáveis `{{from_name}}`, `{{reply_to}}` e `{{message}}`. Depois preencha o `.env`:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

Sem essas variáveis o site funciona normalmente, mas o formulário avisa que o envio não está configurado.

## Deploy

O site está na Vercel. Para publicar o seu: importe o repositório, adicione as três variáveis `VITE_EMAILJS_*` em Settings > Environment Variables e faça o deploy. Como o roteamento usa HashRouter, não precisa de configuração extra de rotas.

## Estrutura de pastas

```
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      Header, Footer, Section, ScrollToTop
│   ├── context/         LanguageContext (PT/EN)
│   ├── data/content.js  conteúdo editável do portfólio
│   ├── pages/           About, Projects, Experience, Contact
│   ├── App.jsx          rotas e layout
│   ├── main.jsx         ponto de entrada
│   └── index.css        estilos
├── wireframes/          protótipos (PNG e SVG)
├── .env.example
├── index.html
└── package.json
```

## Protótipos

Wireframes de média fidelidade das quatro páginas, em desktop e mobile.

![Board completo](wireframes/00%20-%20Board%20completo%20(Desktop%20+%20Mobile).png)

### Desktop

**Sobre**

![Desktop - Sobre](wireframes/Desktop%20-%2001%20Sobre.png)

**Projetos**

![Desktop - Projetos](wireframes/Desktop%20-%2002%20Projetos.png)

**Experiências**

![Desktop - Experiências](wireframes/Desktop%20-%2003%20Experiencias.png)

**Contato**

![Desktop - Contato](wireframes/Desktop%20-%2004%20Contato.png)

### Mobile

**Sobre**

![Mobile - Sobre](wireframes/Mobile%20-%2001%20Sobre.png)

**Projetos**

![Mobile - Projetos](wireframes/Mobile%20-%2002%20Projetos.png)

**Experiências**

![Mobile - Experiências](wireframes/Mobile%20-%2003%20Experiencias.png)

**Contato**

![Mobile - Contato](wireframes/Mobile%20-%2004%20Contato.png)

**Menu aberto**

![Mobile - Menu aberto](wireframes/Mobile%20-%2005%20Menu%20aberto.png)

## Autor

Arthur Domingos: [GitHub](https://github.com/thuzada)
