FROM node:16-alpine as builder
WORKDIR /app
COPY web/package.json web/package-lock.json /app/
RUN npm ci
COPY /web/ /app/
RUN npm run build

FROM nginx:1.21-alpine
COPY --from=builder /app/build/ /usr/share/nginx/html/
