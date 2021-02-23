#base image
FROM node

# set working directory
RUN mkdir /usr/src/app

WORKDIR /usr/src/app

#copy all files from current directory to docker
COPY . /usr/src/app
COPY /src /app/src
COPY ["package.json", "package-lock.json*", "./"]

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH


# install and cache app dependencies
RUN yarn

# Expose PORT 2000 on our virtual machine so we can run our server
EXPOSE 3000

# start app
CMD ["npm", "start"]