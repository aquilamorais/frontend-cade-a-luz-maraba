# Cadê a Luz, Marabá? - Frontend

##  Sobre o Projeto

**Cadê a Luz, Marabá?** é uma plataforma web interativa desenvolvida para facilitar o registro e acompanhamento de denúncias relacionadas a problemas de energia elétrica na cidade de Marabá, Pará. O sistema permite que cidadãos reportem problemas como falta de energia, oscilações, incêndios e necessidade de manutenção, além de visualizar todas as denúncias em um mapa interativo.

###  Propósito

O objetivo principal da aplicação é:
- **Facilitar a comunicação** entre cidadãos e autoridades sobre problemas de energia elétrica
- **Geolocalizar denúncias** permitindo visualização em mapa interativo
- **Acompanhar o status** de denúncias (Aberto, Em Andamento, Resolvido)
- **Gerar estatísticas** sobre tipos e status das denúncias
- **Gerenciar usuários e denúncias** através de painel administrativo

---

##  Tecnologias Utilizadas

### Core
- **[React](https://react.dev/) v19.2.0** - Biblioteca JavaScript para construção de interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/) v5.9.3** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/) v7.2.4** - Build tool e dev server de alta performance

### Roteamento
- **[React Router DOM](https://reactrouter.com/) v7.9.6** - Gerenciamento de rotas e navegação

### Estilização
- **[Tailwind CSS](https://tailwindcss.com/) v4.1.17** - Framework CSS utility-first
- **[@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite) v4.1.17** - Plugin Vite para Tailwind CSS

### Mapas e Geolocalização
- **[Leaflet](https://leafletjs.com/) v1.9.4** - Biblioteca JavaScript open-source para mapas interativos
- **[React Leaflet](https://react-leaflet.js.org/) v5.0.0** - Componentes React para Leaflet

### Formulários e Validação
- **[React Hook Form](https://react-hook-form.com/) v7.66.1** - Gerenciamento de formulários performático
- **[@hookform/resolvers](https://www.npmjs.com/package/@hookform/resolvers) v5.2.2** - Resolvers de validação para React Hook Form
- **[Zod](https://zod.dev/) v4.1.13** - Schema validation com TypeScript-first

### Requisições HTTP
- **[Axios](https://axios-http.com/) v1.13.2** - Cliente HTTP baseado em Promises

### Autenticação
- **[jwt-decode](https://www.npmjs.com/package/jwt-decode) v4.0.0** - Decodificação de JWT tokens

### Gráficos e Visualização
- **[Recharts](https://recharts.org/) v3.5.1** - Biblioteca de gráficos para React

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/) v9.39.1** - Linter para identificar e corrigir problemas no código
- **[@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react) v5.1.1** - Plugin Vite oficial para React

---

##  Estrutura do Projeto

```
src/
├── assets/              # Imagens, ícones e arquivos estáticos
├── components/          # Componentes React reutilizáveis
│   ├── Admin/          # Componentes do painel administrativo
│   ├── CreateReport/   # Componentes para criação de denúncias
│   ├── EditReport/     # Componentes para edição de denúncias
│   ├── Home/           # Componentes da página inicial
│   ├── Login/          # Componentes de autenticação
│   ├── Profile/        # Componentes de perfil de usuário
│   ├── Register/       # Componentes de registro
│   ├── ReportDetails/  # Componentes de detalhes da denúncia
│   └── Footer.tsx      # Rodapé da aplicação
├── hooks/              # Custom React Hooks
│   └── useUser.tsx     # Hook para gerenciamento de usuário
├── Pages/              # Páginas principais da aplicação
│   ├── Admin/          # Painel administrativo
│   ├── CreateReport/   # Página de criação de denúncia
│   ├── EditReport/     # Página de edição de denúncia
│   ├── Home/           # Página inicial
│   ├── Login/          # Página de login
│   ├── Profile/        # Página de perfil
│   ├── Register/       # Página de registro
│   └── ReportDetails/  # Página de detalhes da denúncia
├── services/           # Serviços e configurações externas
│   ├── api.tsx         # Configuração do cliente Axios
│   └── useContext.tsx  # Context API para estado global
├── types/              # Definições de tipos TypeScript
│   ├── images.d.ts     # Tipos para imagens
│   ├── userContextType.tsx  # Tipos do contexto de usuário
│   └── userType.tsx    # Tipos de usuário
├── utils/              # Utilitários e helpers
│   ├── auth.js         # Funções de autenticação
│   └── colors.ts       # Constantes de cores e labels
├── App.tsx             # Componente raiz com rotas
├── main.tsx            # Ponto de entrada da aplicação
├── index.css           # Estilos globais
└── vite-env.d.ts       # Tipos do Vite
```

---

##  Funcionalidades

###  Para Usuários Comuns

1. **Autenticação**
   - Registro de novos usuários
   - Login com email e senha
   - Autenticação JWT persistente

2. **Gerenciamento de Denúncias**
   - Criar denúncias com:
     - Título e descrição
     - Tipo (Falta de Energia, Oscilação, Incêndio, Manutenção)
     - Localização via mapa interativo ou GPS
     - Upload de imagens
   - Editar suas próprias denúncias
   - Visualizar detalhes completos de qualquer denúncia
   - Acompanhar status das denúncias

3. **Visualização**
   - Mapa interativo com todas as denúncias
   - Marcadores coloridos por tipo de denúncia
   - Estatísticas em tempo real
   - Lista de todas as denúncias
   - Lista das suas denúncias

4. **Perfil**
   - Visualizar e editar informações pessoais
   - Ver histórico de denúncias criadas

###  Para Administradores

1. **Gerenciamento de Usuários**
   - Visualizar lista completa de usuários
   - Editar informações e roles de usuários
   - Excluir usuários

2. **Gerenciamento de Denúncias**
   - Visualizar todas as denúncias
   - Atualizar status das denúncias
   - Excluir denúncias

3. **Dashboard**
   - Estatísticas consolidadas
   - Gráficos de distribuição de denúncias

---

##  Características de Design

- **Design Responsivo** - Adaptado para desktop, tablet e mobile
- **UI/UX Moderna** - Interface limpa e intuitiva
- **Tema Verde** - Paleta de cores baseada em verde (#16a34a)
- **Feedback Visual** - Estados de loading, erro e sucesso
- **Acessibilidade** - Elementos semânticos e navegação por teclado

---

##  Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd React-Cade-A-Luz_maraba
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```env
VITE_API_URL=http://localhost:3000
```

4. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em: `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run preview  # Preview do build de produção
npm run lint     # Executa o linter
```

---

##  Rotas da Aplicação

| Rota | Descrição | Acesso |
|------|-----------|--------|
| `/` | Redireciona para `/login` | Público |
| `/login` | Página de autenticação | Público |
| `/register` | Página de registro | Público |
| `/home` | Página inicial com mapa e denúncias | Autenticado |
| `/create-report` | Criar nova denúncia | Autenticado |
| `/report/:id` | Detalhes de uma denúncia | Autenticado |
| `/edit-report/:id` | Editar denúncia | Autenticado (Proprietário) |
| `/user` | Perfil do usuário logado | Autenticado |
| `/user/:userId` | Perfil de outro usuário | Autenticado |
| `/admin` | Painel administrativo | Admin |

---

##  Autenticação e Segurança

- JWT Tokens armazenados no localStorage
- Interceptors do Axios para adicionar tokens automaticamente
- Redirect automático em caso de token expirado (401)
- Verificação de role para rotas administrativas
- Proteção de rotas baseada em autenticação

---

##  Tipos de Denúncia

| Tipo | Cor | Descrição |
|------|-----|-----------|
| Falta de Energia | Azul | Ausência completa de energia |
| Oscilação | Roxo | Variações na voltagem |
| Incêndio | Amarelo | Problemas com fogo em postes/fiação |
| Manutenção | Laranja | Necessidade de manutenção preventiva |

### Status de Denúncia

- **Aberto** - Recém criada, aguardando análise
- **Em Andamento** - Sendo tratada pela equipe responsável
- **Resolvido** - Problema solucionado

---

##  Integração com Backend

A aplicação consome uma API REST desenvolvida com:
- Node.js
- Fastify
- Prisma ORM
- PostgreSQL

Principais endpoints utilizados:
- `POST /login` - Autenticação
- `POST /register` - Registro
- `GET /me` - Dados do usuário logado
- `GET /complaints` - Lista todas as denúncias
- `GET /complaints/my` - Denúncias do usuário
- `POST /complaints` - Criar denúncia
- `PATCH /complaints/:id` - Atualizar denúncia
- `DELETE /complaints/:id` - Excluir denúncia

---

##  Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

##  Equipe

Desenvolvido como projeto acadêmico/comunitário para melhorar a comunicação sobre problemas de energia elétrica em Marabá, PA.

---