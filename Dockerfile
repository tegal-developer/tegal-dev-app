FROM node:20-alpine

WORKDIR /app

ENV NEXT_PUBLIC_CMS_BASE_URL https://tegal-dev-cms-0693f57bf1a2.herokuapp.com

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
