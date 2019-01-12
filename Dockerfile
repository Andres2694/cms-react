# base image
FROM node:latest

# set working directory
WORKDIR /sample-app/src

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /sample-app/node_modules/.bin:$PATH

# install and cache app dependencies
copy package.json /sample-app/package.json
RUN npm install --silent
RUN npm install react-script@latest -g --silent

# start app
CMD ["npm", "start"]
