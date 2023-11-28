# Deployment

This project was created by Marshall

## Change dicretory

```sh
cd /opt/code/wedding/
```

## Create an image

```sh
docker build -f Dockerfile -t wedding .
```

## Create a container

```sh
docker run -it -d --name wedding --restart unless-stopped -e TZ=Asia/Ho_Chi_Minh -p 80:3000 wedding:latest
```
