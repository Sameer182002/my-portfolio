FROM node:latest
WORKDIR /usr/src/application
COPY package.json /usr/src/application
COPY . /usr/src/application
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]