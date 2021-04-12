FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

COPY ./.docker/entrypoint.sh /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]

USER node

WORKDIR /home/node/app
ADD . /home/node/app

CMD ["tail", "-f", "/dev/null"]