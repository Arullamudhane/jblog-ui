FROM node:18-alpine
WORKDIR /newfile/

COPY public/ /newfile/public
COPY src/ /newfile/src
COPY package.json /newfile/

RUN npm install

CMD ["npm", "start"]