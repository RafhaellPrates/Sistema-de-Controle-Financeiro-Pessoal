# 💰 Sistema de Controle Financeiro Pessoal

API REST de controle financeiro com **autenticação por JWT** e **isolamento de dados por usuário**: cada pessoa só enxerga as próprias movimentações. O back-end serve a API e um front em **React** consome essa API como SPA.

Projeto pessoal de estudo, em evolução de um CRUD simples para um **SaaS** completo.

---

## 🛠️ Stack

**Back-end**
- **Node.js** + **Express 5**
- **Sequelize 6** (ORM) sobre **MySQL** (`mysql2`)
- **JWT** (`jsonwebtoken`) guardado em **cookie httpOnly**
- **bcryptjs** (hash de senhas)
- `cookie-parser`, `cors`, `dotenv`

**Front-end**
- **React 19** + **Vite**
- **React Router 7**

---

## ✨ Funcionalidades

- **Cadastro e login** de usuários com senha protegida por hash (bcrypt).
- **Sessão via JWT em cookie httpOnly** — token não fica exposto ao JavaScript do navegador.
- **Isolamento por usuário:** toda movimentação é vinculada ao `user_id` do dono; cada query filtra pelo usuário autenticado, então ninguém vê dados de outro.
- **CRUD de movimentações** (entradas e saídas): criar, listar histórico, editar e excluir.
- **Dashboard** com o resumo financeiro do usuário.
- **Logout** que limpa a sessão.

---

## 🧱 Arquitetura

Organização em camadas (MVC), front e back como **dois programas separados**:

```
routes/        → definem as rotas e aplicam o middleware de autenticação
controllers/   → regra de negócio (user, movimentação, dashboard)
models/        → Sequelize: User, Transacoes e a associação entre eles
middleware/    → auth.js: valida o JWT do cookie e injeta req.id
frontend/      → SPA em React (Vite) que consome a API
```

- O middleware `auth` barra qualquer rota protegida sem token válido (`401`).
- A relação `User.hasMany(Transacoes)` (FK `user_id`) é o que garante o isolamento.

---

## 🔌 Endpoints da API

| Método | Rota                  | Protegida | O que faz                          |
|--------|-----------------------|:---------:|------------------------------------|
| POST   | `/register`           | —         | Cadastra usuário                   |
| POST   | `/login`              | —         | Autentica e seta o cookie JWT      |
| GET    | `/me`                 | ✅        | Dados do usuário logado            |
| GET    | `/dashboard`          | ✅        | Resumo financeiro                  |
| POST   | `/movimentacoes`      | ✅        | Cria movimentação                  |
| GET    | `/movimentacoes`      | ✅        | Lista o histórico do usuário       |
| GET    | `/movimentacoes/:id`  | ✅        | Busca uma movimentação             |
| PUT    | `/movimentacoes/:id`  | ✅        | Edita uma movimentação             |
| DELETE | `/movimentacoes/:id`  | ✅        | Exclui uma movimentação            |
| POST   | `/logout`             | ✅        | Encerra a sessão                   |

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+
- MySQL rodando, com um banco já criado

### 1. Back-end
```bash
# na raiz do projeto
npm install
```

Crie um arquivo **`.env`** na raiz com:
```env
DB_NAME=nome_do_banco
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_HOST=localhost
JWT_SECRET=uma_chave_secreta_qualquer
```

```bash
npm run dev   # nodemon (ou: npm start)
# API em http://localhost:8081
```

> **Schema do banco:** hoje as tabelas são criadas pelo Sequelize (`sync`). Migrations reais com `sequelize-cli` estão no roadmap (issue #1).

### 2. Front-end
```bash
cd frontend
npm install
npm run dev
# app em http://localhost:5173
```

O CORS do back já libera `http://localhost:5173` com credenciais (cookies).

---

## 🗺️ Roadmap

O projeto está virando um SaaS. Próximas frentes (issues abertas no repositório):

- **Dívida técnica:** migrations com sequelize-cli, `.env.example`, middleware central de erro, validação de payload.
- **Segurança:** rate-limit no login, proteção CSRF, `helmet`, cookie `secure` em produção.
- **Front (React):** telas de login/registro, dashboard e CRUD consumindo a API, rota protegida, estilização.
- **SaaS:** categorias, filtro por período, paginação, relatórios/gráficos, exportar CSV.
- **Billing:** planos e assinatura, integração com Stripe, página de upgrade.
- **Qualidade & deploy:** testes de API (Vitest/Jest + Supertest), CI no GitHub Actions, deploy (back, front e banco).

---

## 📌 Status

🚧 **Em desenvolvimento ativo** — migrando de um CRUD com renderização no servidor para uma arquitetura **API REST + SPA React**, a caminho de um SaaS multiusuário.
