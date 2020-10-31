<img width="240" src="public/header.png" />

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) ![Build](https://github.com/MuhammedBeraKoc/id-generator/workflows/docs/badge.svg?branch=main&event=push) ![Build](https://github.com/MuhammedBeraKoc/id-generator/workflows/test/badge.svg?branch=main&event=push) 

# `id-generator`
> `An id generator API written in NodeJS and deployed with Docker`

## `Quick Start`
Assuming you have [Docker](https://www.docker.com/) installed in your computer, the command below is enough to get started:
```sh
docker run -p <port>:5712 mberakoc/id-generation
```
It starts the server on the port that your choose. However if you want to name your container and run it in detached mode -which runs process on the background- the command becomes:
```sh
docker run -p <port>:5712 -d --name <container-name> mberakoc/id-generation
```
If you plan to use the image, you can pull the image from the DockerHub:
```sh
docker pull mberakoc/id-generation
```

## `Documentation`
Server app has an awesome landing page which gives you core knowledge about itself.

## `Contributing`
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Also you can help me to improve the library by adding new [issues](https://github.com/MuhammedBeraKoc/saber/issues).