FROM node:16-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY index.js ./

RUN npm install

ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update && apt-get install -y curl \
    && curl -fsSL https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    | tar -C /usr/local/bin -xzv \
    && apt-get purge -y curl \
    && apt-get autoremove -y

EXPOSE 3000