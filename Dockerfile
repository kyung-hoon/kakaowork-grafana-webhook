FROM node:14


COPY . /root/kakaowork-grafana-webhook

RUN  chmod 777 -R /root/kakaowork-grafana-webhook

EXPOSE 9000

ENTRYPOINT [ "/root/kakaowork-grafana-webhook/entrypoint.sh" ]