FROM node:12-alpine

RUN apk add --no-cache --update \
  python \
  make \
  g++ \
  git \
  bash \
  curl

# Create app directory
WORKDIR /server

# Install app dependencies
COPY package*.json ./

# Bundle app source
COPY . .

# Build server
RUN npm install -g expo-cli
RUN yarn install
RUN yarn

# Expose listen port
EXPOSE 19006

ENTRYPOINT ["expo", "start", "--web"]
