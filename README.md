# 🚀 Aplicação Frontend: LudoApp
Developed by João Gabriel - Github [psico](https://github.com/psico)
**Data:** 7 de maio de 2026

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white)](https://github.com/psico/ludo-app)
[![React Badge](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)]()
[![Material-UI Badge](https://img.shields.io/badge/-Material--UI-0081CB?style=flat-square&logo=material-ui&logoColor=white)]()
[![GraphQL Badge](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)]()
[![Firebase Badge](https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white)]()

![Image](public/ludo512.png)

**Propósito:** Interface web para uma rede social de jogos de tabuleiro. Permite que usuários registrem partidas, ganhem experiência, conectem com amigos, procurem jogos e acompanhem seu progresso através de um sistema de níveis e conquistas.

**Stack Principal:**
- React 17.0.2 (JavaScript)
- Material-UI 4.12.4 (componentes e tema)
- Apollo Client 3.7.0 (gerenciamento de estado GraphQL)
- React Router 5.3.4 (roteamento)
- Firebase 9.12.1 (autenticação)
- i18next + react-i18next (internacionalização EN/PT-BR)
- styled-components 5.3.6 (CSS-in-JS)

**Dependências Externas:**
| Dependência | Propósito |
|---|---|
| Backend LudoApp (GraphQL em localhost:4000) | Queries e mutations para matches, usuários, experiência |
| Firebase Authentication | Autenticação de usuários (email/senha + OAuth) |
| [TODO: Swagger/Documentação API] | Documentação de endpoints REST |

---

## 📖 1. Tutoriais (Onboarding)

### Configuração Inicial

#### Pré-requisitos
- Node.js v12+ e npm v6+
- Conta Firebase com Firestore habilitado
- Backend LudoApp rodando em `http://localhost:4000`

#### Passo 1: Clonar e Instalar Dependências

```bash
# Clonar repositório
git clone https://github.com/psico/ludo-app.git
cd ludo-app

# Instalar dependências
npm install
```

#### Passo 2: Configurar Variáveis de Ambiente

1. Copie `.env.sample` para `.env.local`:
   ```bash
   cp .env.sample .env.local
   ```

2. Preencha as credenciais do Firebase no arquivo `.env.local`:
   ```
   REACT_APP_API_URL=http://localhost:4000
   REACT_APP_FIREBASE_API_KEY=sua_chave_aqui
   REACT_APP_FIREBASE_AUTH_DOMAIN=ludoapp-b612.firebaseapp.com
   REACT_APP_FIREBASE_DATABASE_URL=https://ludoapp-b612.firebaseio.com
   REACT_APP_FIREBASE_PROJECT_ID=ludoapp-b612
   REACT_APP_FIREBASE_STORAGE_BUCKET=ludoapp-b612.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_id_aqui
   REACT_APP_FIREBASE_APP_ID=seu_app_id_aqui
   REACT_APP_FIREBASE_MEASUREMENT_ID=seu_measurement_id_aqui
   ```

3. Obtenha as credenciais no [Firebase Console](https://console.firebase.google.com/) → Configurações do Projeto

#### Passo 3: Rodar em Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento (HTTPS na porta 3000)
npm start

# Abrir navegador em
# https://localhost:3000

# O servidor recarrega automaticamente ao salvar arquivos
```

⚠️ **Nota:** O servidor roda em HTTPS. Pode haver avisos de certificado auto-assinado no navegador (ignorar para desenvolvimento local).

#### Passo 4: Build para Produção

```bash
# Compilar para produção
npm run build

# Gera pasta 'build/' pronta para deploy
```

#### Passo 5: Build e Deploy com Docker

```bash
# Compilar imagem Docker
docker build --rm -f Dockerfile -t ludo-app:latest .

# Executar container
docker run -p 80:80 ludo-app:latest
```

---

## 🛠 2. Guias de Como Fazer (Tarefas Comuns)

### Como Rodar os Testes

```bash
# Executar testes em modo watch
npm test

# Testes são executados automaticamente ao salvar
# Pressione 'a' para rodar todos os testes
# Pressione 'o' para rodar testes de arquivos modificados
```

**Arquivos de teste:**
- `src/App.test.js` – Testes da aplicação principal

### Como Criar um Novo Componente

1. **Crie a pasta** em `src/components/MeuComponente/`
2. **Crie `index.js`** com o componente React:
   ```javascript
   import { makeStyles } from '@material-ui/core/styles';
   import styles from './css';
   
   const useStyles = makeStyles(styles);
   
   export default function MeuComponente({ prop1, prop2 }) {
     const classes = useStyles();
     return <div className={classes.root}>{prop1}</div>;
   }
   ```

3. **Crie `css.js`** com estilos Material-UI:
   ```javascript
   export default {
     root: {
       padding: '16px',
       backgroundColor: '#f5f5f5',
     }
   };
   ```

4. **Importe no componente pai:**
   ```javascript
   import MeuComponente from './components/MeuComponente';
   ```

### Como Adicionar uma Nova Página

1. **Crie a pasta** em `src/page/MinhaPagina/`
2. **Crie `index.js`** com a página (pode usar `useQuery`, `useMutation` do Apollo)
3. **Importe em `src/protectedRoutes.js`** (se protegida) ou `src/routes.js` (se pública):
   ```javascript
   import MinhaPagina from './page/MinhaPagina';
   
   const protectedRoutes = [
     {
       name: 'Minha Página',
       path: '/minha-pagina',
       exact: true,
       main: props => <MinhaPagina {...props} />,
       public: false
     }
   ];
   ```

### Como Buscar Dados do Backend (GraphQL)

```javascript
import { gql, useQuery } from '@apollo/client';

const GET_MATCHES = gql`
  query {
    matches(uid: "abc123") {
      idDoc
      game { name }
      matchOwner { name }
    }
  }
`;

export default function MinhaComponente() {
  const { data, loading, error } = useQuery(GET_MATCHES);
  
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar</p>;
  
  return (
    <ul>
      {data.matches.map(match => (
        <li key={match.idDoc}>{match.game.name}</li>
      ))}
    </ul>
  );
}
```

### Como Adicionar Tradução (i18n)

1. **Edite `src/translations.json`** com novas chaves:
   ```json
   {
     "en": {
       "translation": {
         "minha-chave": "My key text"
       }
     },
     "pt-BR": {
       "translation": {
         "minha-chave": "Texto da minha chave"
       }
     }
   }
   ```

2. **Use em componentes:**
   ```javascript
   import { useTranslation } from 'react-i18next';
   
   export default function MeuComponente() {
     const { t } = useTranslation();
     return <p>{t('minha-chave')}</p>;
   }
   ```

3. **Idioma é detectado pelo navegador** ou pode ser alterado via seletor no Header

---

## 📚 3. Referência (Contratos e Dados)

### Rotas Principais (Frontend)

| Rota | Tipo | Descrição |
|---|---|---|
| `/` | Pública | Login com email/senha ou OAuth |
| `/join` | Pública | Cadastro de novo usuário |
| `/community` | Protegida | Feed de partidas da comunidade |
| `/addMatch` | Protegida | Registrar nova partida jogada |
| `/gameRegister` | Protegida | Buscar e adicionar jogos |
| `/showMatch/:id` | Protegida | Visualizar detalhes de partida + comentários |
| `/profile/:id` | Protegida | Perfil de usuário (nivel, amigos, histórico) |
| `/search/:search` | Protegida | Buscar usuários, jogos ou partidas |

### Componentes Principais

| Componente | Localização | Função |
|---|---|---|
| **Header** | `components/Header/` | Menu superior com busca e navegação |
| **Footer** | `components/Footer/` | Rodapé com links |
| **LoginGoogle, LoginFacebook, LoginTwitter** | `components/LoginXXX/` | OAuth buttons |
| **GameSearch** | `components/GameSearch/` | Busca de jogos (BoardGameAtlas) |
| **PlayerSearch** | `components/PlayerSearch/` | Seleção de jogadores para partida |
| **UsersSearch** | `components/UsersSearch/` | Busca de outros usuários |
| **Match** | `components/Match/` | Card de visualização de partida |
| **Comments** | `components/Comments/` | Lista de comentários em partida |
| **Likes** | `components/Likes/` | Sistema de curtidas |
| **ProfileInfo** | `components/ProfileInfo/` | Informações do perfil |
| **UserAvatar, PersonAvatar** | `components/UserXXXAvatar/` | Avatares e imagens |
| **LastMatches** | `components/LastMatches/` | Widget de últimas partidas |
| **MatchesSearch** | `components/MatchesSearch/` | Filtros de busca de partidas |

### Estrutura de Dados (Types GraphQL)

#### UserInfo
```graphql
type UserInfo {
  uid: ID
  name: String
  photoURL: String
  friends: [Friend]
  numberOfMatches: Int
  following: [Friend]
  followers: [Friend]
  logExperience: [LogExperience]
}
```

#### Match
```graphql
type Match {
  idDoc: String
  matchOwner: UserSummary
  gameMoment: String
  createdAt: Date
  game: Game
  comments: [Comment]
  players: [UserInfo]
  likes: [UserInfo]
}
```

#### Game
```graphql
type Game {
  name: String
  objectId: String
  yearPublished: String
  description: String
  imageUrl: String
}
```

---

## 🧠 4. Explicação e Arquitetura

### Estrutura de Pastas

```
src/
├── App.js                         # Root component + AuthContext provider
├── index.js                       # React DOM entry point
├── firebase.js                    # Firebase initialization
├── routes.js                      # Rotas públicas (Login, Join)
├── protectedRoutes.js             # Rotas protegidas (require auth)
├── ProtectedRoutHoc.js            # HOC para proteção de rotas
├── i18n.js / i18next.js           # Configuração i18next
├── CommonFunctions.js             # Funções auxiliares
├── translations.json              # Traduções (EN/PT-BR)
├── css.js                         # Estilos globais
│
├── components/                    # Componentes reutilizáveis
│   ├── Header/                    # Menu e navegação
│   ├── Footer/                    # Rodapé
│   ├── LoginGoogle/
│   ├── LoginFacebook/
│   ├── LoginTwitter/
│   ├── GameSearch/                # Busca de jogos
│   ├── PlayerSearch/              # Seleção de jogadores
│   ├── UsersSearch/               # Busca de outros usuários
│   ├── Match/                     # Card de partida
│   ├── Comments/                  # Comentários
│   ├── Likes/                     # Curtidas
│   ├── ProfileInfo/               # Info de perfil
│   ├── UserAvatar/ / PersonAvatar/
│   ├── LastMatches/               # Widget
│   ├── MatchesSearch/             # Filtros
│   └── ...
│
├── page/                          # Páginas "smart" (obtêm dados)
│   ├── Login/                     # Autenticação
│   ├── Join/                      # Cadastro
│   ├── Community/                 # Feed
│   ├── AddMatch/                  # Registrar partida
│   ├── GameRegister/              # Registrar jogo
│   ├── ShowMatch/                 # Detalhe de partida
│   ├── Profile/                   # Perfil do usuário
│   └── Search/                    # Busca global
│
└── temp-images/                   # Imagens temporárias
```

### Padrão Arquitetural

**Padrão: Component-based + Apollo Client + Context API**

- **Context API:** Armazena estado de autenticação global (`AuthContext`) com `currentUser` e `token`
- **Apollo Client:** Gerencia estado de dados GraphQL (caching automático, queries reativas)
- **Componentes:** Estrutura folder-per-component com `index.js` + `css.js`
- **Páginas:** Smart components que usam `useQuery` e `useMutation`
- **Componentes reutilizáveis:** Dumb components que recebem props
- **Roteamento:** React Router v5 com HOC de proteção (`ProtectedRouteHoc`)

### Fluxo de Autenticação

1. Usuário acessa `/` e faz login (email/password ou OAuth)
2. Credenciais enviadas para backend REST (`POST /login` ou `POST /loginCredential`)
3. Backend retorna `idToken` JWT (Firebase)
4. Token armazenado em `AuthContext`
5. Middleware `ProtectedRouteHoc` verifica se usuário está autenticado
6. Token incluído em header `Authorization: Bearer <token>` nas requests GraphQL
7. Apollo Client envia queries/mutations autenticadas

### Fluxo de Dados

```
Página (useQuery) → Apollo Client → Backend GraphQL → Firestore
                        ↓
                   Cache local
                        ↓
                   Re-render React
```

---

## 📝 5. Regras de Negócio

### R001 - Autenticação de Usuário
- **Descrição:** Usuários devem autenticar-se via email/senha ou OAuth antes de acessar funcionalidades.
- **Condições:**
  - Login via email requer cadastro prévio
  - OAuth (Google/Facebook/Twitter) permite criação automática de conta
  - Token deve ser válido (não expirado)
- **Exceções:** Rotas públicas (Login, Join) não requerem autenticação

### R002 - Acesso a Rotas Protegidas
- **Descrição:** Apenas usuários autenticados podem acessar páginas de comunidade, perfil e partidas.
- **Condições:**
  - Token armazenado em `AuthContext` deve estar presente
  - Middleware `ProtectedRouteHoc` verifica autenticação
- **Exceções:** Redirecionamento automático para `/` se não autenticado

### R003 - Registro de Partida
- **Descrição:** Usuário autenticado pode registrar uma partida de jogo.
- **Condições:**
  - Jogo deve ser selecionado (BoardGameAtlas)
  - Pelo menos 1 jogador deve estar selecionado
  - Tipo de partida deve ser selecionado (play-now, play-later, etc.)
- **Exceções:** Form não permite submit sem todos os campos preenchidos

### R004 - Comentários e Curtidas
- **Descrição:** Usuários podem comentar e curtir partidas.
- **Condições:**
  - Comentário não pode estar vazio
  - Apenas usuário autenticado pode comentar/curtir
- **Exceções:** Comentário é deletado se usuário for removido

### R005 - Busca de Usuários e Jogos
- **Descrição:** Sistema fornece busca em tempo real para usuários e jogos.
- **Condições:**
  - Busca é case-insensitive
  - Resultados vêm do backend (GraphQL)
- **Exceções:** Se backend indisponível, erro é exibido ao usuário

---

## ☁️ 6. APIs Expostas

### Endpoints REST (Autenticação)

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `http://localhost:4000/login` | Login com email/senha |
| `POST` | `http://localhost:4000/loginCredential` | Login com OAuth |

**Exemplo de request (email/password):**
```bash
curl -X POST http://localhost:4000/login \
  -H "Content-Type: application/json" \
  -d '{
    "user": {
      "email": "joao@example.com",
      "password": "senha123"
    }
  }'
```

**Resposta esperada:**
```json
{
  "user": {
    "displayName": "João",
    "email": "joao@example.com",
    "uid": "abc123",
    "photoURL": "https://...",
    "token": "eyJhbGciOiJSUzI1NiIs...",
    "refreshToken": "..."
  }
}
```

### Queries GraphQL Utilizadas

| Query | Página | Propósito |
|---|---|---|
| `usersInfo(textSearch)` | Search | Buscar usuários |
| `userInfo(uid)` | Profile | Carregar perfil de usuário |
| `userExperienceInfo(uid)` | Profile | Carregar nível e experiência |
| `games(name)` | AddMatch, GameRegister | Buscar jogos por nome |
| `matches(uid, textSearch)` | Community, Profile | Carregar partidas |
| `match(idDoc)` | ShowMatch | Carregar detalhes de partida |

### Mutations GraphQL Utilizadas

| Mutation | Página | Propósito |
|---|---|---|
| `createMatch(MatchInput)` | AddMatch | Registrar nova partida |
| `addComment(CommentInput)` | ShowMatch | Adicionar comentário |
| `likeIt(idDoc)` | ShowMatch | Curtir partida |
| `createUserInfo(uid, name)` | Join | Criar perfil novo |

---

## ⚠️ 7. Pontos de Atenção

### Riscos e Complexidades

| Risco | Impacto | Recomendação |
|---|---|---|
| **Backend indisponível** | Aplicação fica inutilizável | Implementar fallback/offline mode |
| **Token expirado** | Usuário precisa fazer login novamente | Implementar refresh token automático |
| **Sem validação de input** | Possibilidade de injections | Validar dados no frontend antes de enviar |
| **HTTPS com certificado auto-assinado** | Avisos no navegador | Gerar certificado válido para produção |
| **Sem paginação em listas** | Pode ficar lento com muitos dados | Implementar lazy loading/infinite scroll |
| **Apollo Cache pode ficar desincronizado** | Dados stale no frontend | Usar `refetchQueries` ou `cache.evict()` após mutations |
| **Sem tratamento de erro em mutations** | Erro silencioso para usuário | Adicionar error boundary ou toast de erro |

### Acoplamentos Técnicos

- **Dependência do backend GraphQL:** Frontend assume que backend está rodando em `REACT_APP_API_URL`
- **Firebase obrigatório:** Autenticação está 100% acoplada ao Firebase
- **Material-UI v4:** Versão antiga, considerar atualizar para v5+
- **React 17:** Considerar migrar para React 18 para melhor performance

### Melhorias Futuras

- [ ] Migrar para React 18+ com Suspense
- [ ] Implementar offline-first com service workers (PWA completo)
- [ ] Atualizar Material-UI para v5+
- [ ] Adicionar testes unitários com Jest + React Testing Library
- [ ] E2E tests com Cypress ou Playwright
- [ ] Implementar lazy loading de componentes com React.lazy()
- [ ] Adicionar analytics (Google Analytics, Mixpanel)
- [ ] Implementar refresh token automático
- [ ] Validação de formulários com Formik ou React Hook Form
- [ ] Storybook para documentar componentes

---

## 📞 Contato e Recursos

- **Repositório Frontend:** [github.com/psico/ludo-app](https://github.com/psico/ludo-app)
- **Repositório Backend:** [github.com/psico/ludo-app-backend](https://github.com/psico/ludo-app-backend)
- **Autor:** João Gabriel ([@psico](https://github.com/psico))
- **Licença:** MIT
- **Backend GraphQL:** `http://localhost:4000/graphql` (Playground)
- **Firebase:** [console.firebase.google.com](https://console.firebase.google.com)

---

**Última atualização:** 7 de maio de 2026

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Build Docker

docker build --rm -f Dockerfile -t ludo-app:latest .

docker pull nginx

*This article can also be read in [Brazilian Portuguese](README-pt-BR.md).*
