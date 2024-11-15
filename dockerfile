FROM node:18-alpine

ENV NODE_ENV production

WORKDIR /api

COPY ./package*.json ./

RUN npm install pm2 -g
RUN npm install -g @nestjs/cli
RUN npm install

COPY . .

RUN npm run build 

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "start", "npm", "--", "run", "start:prod"]