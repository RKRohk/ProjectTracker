FROM node:12

RUN mkdir -p /app/server
RUN mkdir -p /app/client

COPY ./client/package*.json /app/client/
COPY ./client/yarn* /app/client
RUN cd /app/client && yarn install


COPY ./server/package*.json /app/server/
RUN cd /app/server && yarn install

COPY ./server /app/server
COPY ./client /app/client
RUN cd /app/client && yarn run build
RUN mv /app/client/build/ /app/server/

WORKDIR /app/server
CMD ["yarn","start"]