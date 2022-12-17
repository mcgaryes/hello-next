FROM node:alpine
WORKDIR /
COPY package*.json ./
COPY ./scripts/post-install.js ./scripts/post-install.js
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["npm","start"]
