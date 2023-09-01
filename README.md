### @chrome-safe-stream

🤟 Stream safely. Easily extensible. 💪

---

#### Motivation

This is a simple library that allows safely stream. It hides uwanted content from the stream. It is useful for streaming
content from untrusted sources or to prevent leaking sensitive information.

#### Technology used

| Name                                          | Description                                                                                 |
|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| [TypeScript](https://www.typescriptlang.org/) | TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.             |
| [Vite](https://vitejs.dev/)                   | Next generation frontend tooling. It's fast!                                                |
| [Svelte](https://svelte.dev/)                 | Cybernetically enhanced web apps.                                                           |
| [Turborepo](https://turbo.build/)             | Turborepo is an intelligent build system optimized for JavaScript and TypeScript codebases. |
| [Tailwind CSS](https://tailwindcss.com/)      | A utility-first CSS framework for rapidly building custom designs.                          |

#### Installation

```bash
git clone https://github.com/mvcewicz/chrome-safe-stream.git
```

#### Usage

```bash
pnpm install
pnpm manifest
```

Now you are ready to import it in Chrome extensions manager

### Packages

| Name                                        | Description                             |
|---------------------------------------------|-----------------------------------------|
| [manifest](./packages/manifest)             | Contains manifest file and build script |
| [popup](./packages/popup)                   | Popup page                              |
| [content-script](./packages/content-script) | Content script                          |

