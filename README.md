# Minhas Cartas Favoritas — Pokémon TCG

Checkpoint FIAP · Front-end Design Engineering

**Link da Vercel:** _cole aqui o link público_

## Integrantes

- NOME COMPLETO 1 - RM00000
- NOME COMPLETO 2 - RM00000
- NOME COMPLETO 3 - RM00000

## Estrutura

```
app/
├── api/login/route.ts   # valida a senha (APP_PASSWORD) no servidor
├── cards/
│   ├── layout.tsx       # header com logout
│   ├── page.tsx         # busca + lista de cartas
│   └── [id]/page.tsx    # detalhes da carta (extra)
├── layout.tsx           # rodapé com os integrantes
└── page.tsx             # login
components/
├── CardList.tsx         # busca na API (máx. 15 cartas)
├── FavoriteButton.tsx   # favoritar/desfavoritar (localStorage)
├── Header.tsx           # protege a página e faz logout
├── LoginForm.tsx
└── PokemonCard.tsx
types/
└── pokemon.type.ts      # tipagem da API
```

## Como rodar

```bash
npm install
```

Crie o arquivo `.env.local` na raiz com:

```
APP_PASSWORD=sua-senha
```

```bash
npm run dev
```

Acesse http://localhost:3000, use qualquer usuário e a senha do `.env.local`.

## Deploy

Na Vercel, importe o repositório e adicione a variável `APP_PASSWORD` em *Environment Variables*.
