FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm i -g @nestjs/cli@7.4.1
COPY ./.docker/entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

USER node

WORKDIR /home/node/app
ADD . /home/node/app

CMD ["tail", "-f", "/dev/null"]