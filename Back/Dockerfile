
FROM node:22-alpine

WORKDIR /app


COPY package*.json ./
COPY packages/infrastructure/package*.json ./packages/infrastructure/


RUN npm install


COPY . .


RUN npx prisma generate --schema=packages/infrastructure/prisma/schema.prisma


EXPOSE 3000


CMD ["npm", "run", "dev"]