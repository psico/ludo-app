# LudoApp Frontend – Agent Instructions

## Project Overview

**LudoApp** is a React social network for board game enthusiasts. Users record matches, track player experience levels, connect with friends, earn achievements, and discover new games via BoardGameAtlas API integration.

- **Framework**: React 18 (Create React App)
- **Language**: JavaScript
- **State Management**: React Context + Apollo Client (GraphQL)
- **Styling**: Material-UI + styled-components
- **Routing**: React Router v5
- **Backend API**: GraphQL at `http://localhost:4000/graphql`
- **Authentication**: Firebase + OAuth (Google, Facebook, Twitter)
- **Database**: Firestore
- **Internationalization**: i18next (EN, PT-BR)

---

## Quick Start

### Development Environment

```bash
npm install
npm start                # Dev server on https://localhost:3000 with inspection enabled
npm test                 # Jest in watch mode
npm run build            # Production build
docker build -f Dockerfile -t ludo-app:latest .
```

**Required Environment Variables** (create `.env.local`):
```
REACT_APP_FIREBASE_API_KEY=...
REACT_APP_FIREBASE_AUTH_DOMAIN=...
REACT_APP_FIREBASE_DATABASE_URL=...
REACT_APP_FIREBASE_PROJECT_ID=...
REACT_APP_FIREBASE_STORAGE_BUCKET=...
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=...
REACT_APP_FIREBASE_APP_ID=...
REACT_APP_FIREBASE_MEASUREMENT_ID=...
REACT_APP_API_URL=http://localhost:4000  # Backend GraphQL endpoint
```

---

## Architecture & Key Patterns

### 1. **Routing & Authentication**

- **Public routes**: [src/routes.js](src/routes.js) – Login, Join pages
- **Protected routes**: [src/protectedRoutes.js](src/protectedRoutes.js) – Require authentication
- **Route guard**: [src/ProtectedRoutHoc.js](src/ProtectedRoutHoc.js) – HOC that redirects unauthenticated users to login
- **Auth flow**: Firebase credentials → Backend REST API (localhost:4000) → ID token stored in AuthContext

**Pattern for adding new protected route:**
1. Add route to [protectedRoutes.js](src/protectedRoutes.js)
2. Import page component
3. Route will automatically be wrapped with ProtectedRouteHoc

### 2. **Global State (AuthContext)**

Located in [src/App.js](src/App.js) (lines 20-28):

```javascript
const [currentUser, setCurrentUser] = useState(null);
const [currentUserToken, setCurrentUserToken] = useState("");
```

**Usage in components**:
```javascript
const { currentUser, currentUserToken } = useContext(AuthContext);
```

### 3. **Data Fetching (Apollo Client)**

- **Setup**: [src/App.js](src/App.js) lines 33-38
- **Endpoint**: `${REACT_APP_API_URL}/graphql`
- **Pattern**: Use `useQuery()` and `useMutation()` hooks in page components

**Example**:
```javascript
import { useQuery } from '@apollo/client';
const { data, loading, error } = useQuery(GET_MATCHES);
```

### 4. **Component Structure**

- **Functional components** with React Hooks
- **Directory pattern**: Each component in its own folder with `index.js` + `css.js`
- **Styling**: Material-UI's `makeStyles` hook + styled-components

**New component template** ([src/components/](src/components/)):
```javascript
// index.js
import { makeStyles } from '@material-ui/core/styles';
import styles from './css.js';

const useStyles = makeStyles(styles);

export default function MyComponent() {
  const classes = useStyles();
  return <div className={classes.root}>...</div>;
}

// css.js
export default {
  root: {
    padding: '16px',
    // ... styles
  }
};
```

### 5. **Pages vs Components**

- **Pages** ([src/page/](src/page/)): Smart components that fetch data and manage page-level state
  - AddMatch, Community, GameRegister, Join, Login, Profile, Search, ShowMatch
- **Components** ([src/components/](src/components/)): Reusable UI elements
  - Header, Footer, Avatar, Search, Comments, Likes, Match details

### 6. **Internationalization (i18n)**

- **Setup**: [src/i18n.js](src/i18n.js)
- **Translations**: [src/translations.json](src/translations.json)
- **Usage**: `const { t } = useTranslation();` then `t('key')`
- **Supported**: English (en), Portuguese-Brazil (pt-BR)

---

## Common Development Tasks

### Adding a New Page

1. Create folder in [src/page/](src/page/YourPageName/)
2. Create `index.js` component
3. Add route to [src/protectedRoutes.js](src/protectedRoutes.js) (if protected) or [src/routes.js](src/routes.js)
4. Use `useContext(AuthContext)` for auth data
5. Use Apollo `useQuery()` for GraphQL data

### Adding a Reusable Component

1. Create folder in [src/components/](src/components/YourComponent/)
2. Create `index.js` with functional component
3. Create `css.js` with Material-UI styles
4. Export from index.js, import where needed

### Fetching Data from Backend

- **GraphQL queries/mutations**: Check backend schema at `http://localhost:4000/graphql`
- **Define queries** in component or import from shared location
- **Use Apollo hooks**: `useQuery()`, `useMutation()`, `useSubscription()`

### Firebase Integration

- **Client setup**: [src/firebase.js](src/firebase.js)
- **Auth**: Email/password and OAuth handled via REST API backend (localhost:4000)
- **Pattern**: Don't call Firebase directly from frontend – go through backend REST API

### Testing

- **Framework**: Jest via Create React App
- **Test files**: `src/**/*.test.js`
- **Pattern**: `@testing-library/react` for component testing
- **Run**: `npm test` (watch mode) or `npm test -- --coverage`

---

## Key Files Reference

| File | Purpose |
|------|---------|
| [src/App.js](src/App.js) | Root component, AuthContext provider, Apollo Client setup, routing logic |
| [src/index.js](src/index.js) | React DOM entry point |
| [src/firebase.js](src/firebase.js) | Firebase client initialization |
| [src/routes.js](src/routes.js) | Public routes (Login, Join) |
| [src/protectedRoutes.js](src/protectedRoutes.js) | Protected routes (require auth) |
| [src/ProtectedRoutHoc.js](src/ProtectedRoutHoc.js) | Route guard HOC |
| [src/i18n.js](src/i18n.js) | i18next configuration |
| [src/translations.json](src/translations.json) | Translations (EN/PT-BR) |
| [src/css.js](src/css.js) | Global app styles |
| [src/page/](src/page/) | Smart page components |
| [src/components/](src/components/) | Reusable UI components |

---

## Important Dependencies

| Package | Role |
|---------|------|
| `@apollo/client@3.7.0` | GraphQL client |
| `react-router-dom@5.3.4` | Client-side routing |
| `@material-ui/core@4.12.4` | UI components and theming |
| `firebase@9.12.1` | Firebase client (auth, Firestore) |
| `react-i18next@11.18.6` | i18n framework |
| `styled-components@5.3.6` | CSS-in-JS for complex styles |
| `moment@2.29.4` | Date/time utilities |
| `axios@0.27.2` | HTTP client |

---

## Backend Integration

- **GraphQL Endpoint**: `http://localhost:4000/graphql`
- **REST Auth Endpoints**: `http://localhost:4000/login`, `/loginCredential`, `/verifyToken`, `/currentUser`
- **Expected backend running**: `npm dev` from ludo-app-backend folder
- **See also**: [../ludo-app-backend/AGENTS.md](../ludo-app-backend/AGENTS.md)

---

## Debugging Tips

- **React DevTools**: Installed and enabled in package.json
- **Apollo DevTools**: Browser extension for GraphQL debugging
- **Dev mode**: `npm start` runs with `--inspect` flag for Chrome DevTools
- **HTTPS**: Dev server uses HTTPS (may see security warnings in browser)
- **Browser console**: Check for Apollo client errors and authentication issues

---

## Conventions & Best Practices

1. **Naming**: Use PascalCase for components, camelCase for functions/variables
2. **File structure**: One component per folder with index.js + css.js
3. **Imports**: Import Material-UI components individually to reduce bundle size
4. **Styles**: Prefer makeStyles for theme integration, styled-components for component-specific complex styles
5. **Translation keys**: Use dot notation (e.g., "menu.home", "button.submit")
6. **Error handling**: Wrap Apollo queries with error boundaries or check `error` field
7. **Loading states**: Show spinners or skeletons while `loading` is true

---

## Related Documentation

- [README.md](README.md) – Project overview and features
- [../ludo-app-backend/AGENTS.md](../ludo-app-backend/AGENTS.md) – Backend architecture
- [package.json](package.json) – Full dependency list
- [public/manifest.json](public/manifest.json) – PWA manifest
