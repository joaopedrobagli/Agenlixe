# AgenLix — Agência de Marketing Digital

Site institucional da AgenLix, uma agência de marketing digital focada em resultados reais. Desenvolvido com React, Vite e Tailwind CSS.

## 🚀 Tecnologias

- [React](https://react.dev/) — biblioteca para construção de interfaces
- [Vite](https://vitejs.dev/) — bundler e servidor de desenvolvimento
- [Tailwind CSS](https://tailwindcss.com/) — estilização utilitária

## 📋 Seções

- **Header** — navegação fixa com menu responsivo (hambúrguer no mobile)
- **Hero** — banner principal com imagem de fundo e chamada para ação
- **Serviços** — cards com os 4 serviços oferecidos e resultados alcançados
- **Depoimentos** — feedbacks de clientes com foto e cargo
- **Contato** — formulário com validação de campos via useState
- **Footer** — links de navegação, redes sociais e copyright

## 💡 Conceitos aplicados

- Componentização — cada seção é um componente independente
- `useState` — controle de estado no menu mobile e validação do formulário
- Responsividade — layout adaptado para mobile, tablet e desktop
- Git Flow — desenvolvimento por branches com Pull Requests

## 🛠️ Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/joaopedrobagli/Agenlixe.git

# Entre na pasta
cd Agenlixe

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 📁 Estrutura de pastas

```
src/
  components/
    Header.jsx
    Hero.jsx
    Servicos.jsx
    Depoimentos.jsx
    Contato.jsx
    Footer.jsx
  App.jsx
public/
  logo-icone.png
  hero.png
  cliente1.jpg
  cliente2.jpg
  cliente3.jpg
```

## 👨‍💻 Autor

João Pedro Bagli — [LinkedIn](https://linkedin.com/in/joaopedrobagli) · [Portfólio](https://joaopedrobagli.netlify.app) · [GitHub](https://github.com/joaopedrobagli)