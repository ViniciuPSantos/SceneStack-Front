# 🎬 SceneStack Front

Interface web do SceneStack — uma aplicação para buscar e explorar informações sobre filmes e séries, consumindo dados da [OMDB API](https://www.omdbapi.com/) através de uma API própria em Spring Boot.

## 🖥️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📁 Estrutura do projeto

```
src/
├── components/
│   ├── details/
│   │   ├── DetailsBanner.jsx
│   │   ├── DetailsHero.jsx
│   │   ├── DetailsRating.jsx
│   │   ├── DetailsInfo.jsx
│   │   └── DetailsActions.jsx
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── pages/
│   ├── Home.jsx
│   └── Details.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## ⚙️ Pré-requisitos

- Node.js 18+
- A [API do SceneStack](https://github.com/ViniciuPSantos) rodando em `http://localhost:8080`

## 🚀 Como rodar

```bash
# Clone o repositório
git clone https://github.com/ViniciuPSantos/SceneStack-Front.git
cd SceneStack-Front

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 🔗 Endpoints consumidos

A aplicação consome os seguintes endpoints da API backend:

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/api/scenestack/search` | Busca genérica por título e tipo |
| GET | `/api/scenestack/details` | Detalhes por título e tipo |
| GET | `/api/scenestack/movie/id/{imdbId}` | Detalhes de filme por ID |
| GET | `/api/scenestack/serie/id/{imdbId}` | Detalhes de série por ID |

## 📄 Licença

MIT
