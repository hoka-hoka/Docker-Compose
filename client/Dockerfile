FROM node:16.12.0
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
RUN npm run build
FROM nginx
COPY /dist /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/
