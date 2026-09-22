# Daniel Guardado — Portfolio

Personal portfolio for **Daniel Bianca Guardado Henríquez**, Full Stack Developer.

Repo: [github.com/topdev05/daniel-portfolio](https://github.com/topdev05/daniel-portfolio)

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4

## Run locally

Requires **Node.js 18+**.

```bash
cd daniel-portfolio
npm install
npm run dev
```

Open the URL Vite prints (usually http://127.0.0.1:5173/).

```bash
npm run build      # production → dist/
npm run preview    # preview built site
```

## Edit content

| Content | File |
|---------|------|
| Bio, email, GitHub, skills, projects, work, education | `src/data/portfolio.ts` |
| Avatar | `public/images/avatar.png` |
| Project card images | `public/images/projects/` |

After replacing an image, bump the `?v=` query on that path in `portfolio.ts` (cache bust).

## Sections

1. Hero / About  
2. Skills (filterable cards with proficiency)  
3. Projects (Planet Organic, UmamiCart, Bombas, Caraway, Lead4You, MASBIM Studio, Muchik Estudí)  
4. Work experience  
5. Education  
6. Contact  

## For AI assistants / new chats

Cursor chat history is **not** included when you clone or copy this folder.

Read **`AGENTS.md`** in this repo for full project context, conventions, and edit map.  
There is also `.cursor/rules/portfolio.mdc` for always-on agent guidance in Cursor.

## Deploy

`vercel.json` is included for Vercel static hosting of the Vite build.
