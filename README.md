# josetorronteras.github.io

My personal GitHub page

[![CodeFactor](https://www.codefactor.io/repository/github/josetorronteras/josetorronteras.github.io/badge)](https://www.codefactor.io/repository/github/josetorronteras/josetorronteras.github.io)

## 🥷 Usage

- You can modify all the information in the files in the `data` folder
  (presentation, social links, projects list, colors).
- You can write articles in `markdown` format in the `content/posts` folder.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Dockerfile

You can use the `Dockerfile` to build and run the project in a container.

```bash
docker build -t josetorronteras.github.io .
docker run -p 8080:8080 josetorronteras.github.io
```

or pull the image from
[Docker Hub](https://hub.docker.com/r/josetorronteras/josetorronteras.github.io)

```bash
docker pull josetorronteras/josetorronteras.github.io:latest
docker run -p 8080:8080 josetorronteras.github.io:latest
```

or from
[GitHub Container Registry](https://github.com/josetorronteras/josetorronteras.github.io/pkgs/container/josetorronteras.github.io)

```bash
docker pull ghcr.io/josetorronteras/josetorronteras.github.io:latest
docker run -p 8080:8080 josetorronteras.github.io:latest
```

## 🙏 Thanks

| Project                                                                  | Description                                                                                                                              |
| :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| [pwa-asset-generator](https://github.com/elegantapp/pwa-asset-generator) | Automates PWA asset generation and image declaration. Automatically generates icon and splash screen images, favicons and mstile images. |
