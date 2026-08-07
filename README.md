# Daniel Guardado — Portfolio

Personal portfolio for **Daniel Bianca Guardado Henríquez**, Full Stack Developer.

Structure mirrors a modern single-page developer portfolio (About, Skills, Projects, Work, Education, Contact).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4

## Run locally

From this folder:

```bash
# if node_modules is not linked yet
ln -s ../node_modules node_modules   # or: npm install

npx vite --host 127.0.0.1 --port 5174
```

Or from the parent repo tools path:

```bash
export PATH="../.tools/bin:$PATH"
export NODE_PATH="/usr/share/nodejs"
npx vite --host 127.0.0.1 --port 5174
```

Open http://127.0.0.1:5174

## Edit content

All copy lives in `src/data/portfolio.ts`.  
Avatar: `public/images/avatar.png`.
