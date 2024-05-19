FROM node:21

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn

# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build

# Running the app
CMD "yarn" "next"
