FROM node:10
ADD . cc
WORKDIR /cc
RUN npm install 
RUN npm run build
EXPOSE 8888
