FROM oven/bun:1 as base
WORKDIR /usr/src/app

FROM base AS install
RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
RUN cd /temp/prod && bun install && bun install --frozen-lockfile --production

FROM install AS build
COPY --from=install /temp/prod/node_modules node_modules
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
LABEL org.opencontainers.image.source https://github.com/josetorronteras/josetorronteras.github.io
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 8080