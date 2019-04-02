FROM node:alpine
COPY ./build build 
RUN ["npm","install","-g","serve"] 
CMD ["serve", "-s", "build"]