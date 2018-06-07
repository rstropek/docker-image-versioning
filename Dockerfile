FROM node:9-alpine
WORKDIR /app
COPY server.js ./server.js
ENV VERSION=3.0-rc
ENV MESSAGE=Unstable
ENV PORT=80
EXPOSE 80
CMD ["node", "./server.js"]
