FROM node:boron

RUN npm install -g pushstate-server

ADD build/ /src

EXPOSE  9000
CMD ["pushstate-server", "src"]
