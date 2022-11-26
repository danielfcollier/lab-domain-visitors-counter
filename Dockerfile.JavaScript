FROM node:16-alpine as dependencies
WORKDIR /app

COPY . .
RUN cd javascript-solution && npm ci

###
FROM node:16-alpine as runner
WORKDIR /app

COPY --from=dependencies /app/javascript-solution/node_modules ./javascript-solution/node_modules
COPY . .

RUN cd javascript-solution && npm start && cd .. && mkdir data && cp output.csv data
