# Frontend Desktop Application for openrlm
Frontend Desktop Application for openrlm

## Project Structure

 ```bash
.
├── components.json
├── electron
│   ├── electron-env.d.ts
│   ├── main.ts
│   └── preload.ts
├── electron-builder.json5
├── forge.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── src
│   ├── components
│   │   ├── chat
│   │   │   ├── conversation.tsx
│   │   │   ├── input.tsx
│   │   │   └── message.tsx
│   │   ├── forms
│   │   │   └── login-form.tsx
│   │   └── sidebar
│   │       ├── nav-header.tsx
│   │       ├── nav-main.tsx
│   │       ├── nav-user.tsx
│   │       └── sidebar.tsx
│   ├── hooks
│   │   ├── api.ts
│   │   └── use-mobile.ts
│   ├── libs
│   │   ├── config.ts
│   │   ├── index.ts
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   ├── conversation.tsx
│   │   ├── conversationCreate.tsx
│   │   ├── conversationList.tsx
│   │   ├── login.tsx
│   │   └── main.tsx
│   ├── styles
│   │   └── index.css
│   ├── types
│   │   └── types.ts
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
 ```



## Development

### Prerequisite
- Node.js

### Setup Environment

- Create a local.env file:
```bash
cp .env.example .env
```
You can find the required environment variables in `.env.example`.



### Setup and run application locally
- Install Dependencies
```bash
npm i
```

- Start Application
```bash
npm run dev
```

- Application will be running on:
```bash
http://localhost:5173
```

