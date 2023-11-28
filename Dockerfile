FROM node:18.16.0-bullseye
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
EXPOSE 3000
RUN npm i
CMD ["npm", "run", "start"]