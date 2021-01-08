FROM nginx
RUN mkdir /usr/share/nginx/dist
RUN rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./ /usr/share/nginx/dist
WORKDIR /usr/share/nginx/dist
EXPOSE 9000