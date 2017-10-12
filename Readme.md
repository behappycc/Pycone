# trading-web

## Install
``` bash
# Clone the repository
$ git clone https://github.com/Jerryg6j3/trading_web_standalone.git

# Go into the repository
$ cd trading_web_standalone

# Install dependencies
$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ npm install -g webpack
$ npm insall -g yarn
$ npm install -g json-server
$ yarn install
```

# Install Docker for Mac
https://docs.docker.com/docker-for-mac/

# Install Docker for Ubuntu 16.04
```
$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] $ https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
$ sudo apt-get update
$ apt-cache policy docker-ce
$ sudo apt-get install -y docker-ce

$ sudo groupadd docker
$ sudo gpasswd -a $USER docker

$ pip install docker-compose
```
## Usage
```
# Webpack builds once and watches for changes to apply
$ webpack -w

# Start trading-web
$ yarn start

# Testing api server

# Docker
$ docker build -t trading-web .
$ docker run -it -p 8888:8888 trading-web


#Pycone
Pycone [link](www.pycone.com)

## Installation
*Python3
* mongoDB ([install on Ubuntu 14.04](https://www.liquidweb.com/kb/how-to-install-mongodb-on-ubuntu-14-04/), [GUI](http://edgytech.com/umongo/))
* pip install -r requirement.txt

## Coding Style
Google Python Style Guide [link](https://google.github.io/styleguide/pyguide.html).

##Usage
###Web Server
```
$git clone https://github.com/behappycc/pycone.git
$cd pycone/website
$ python3 web_server.py -p 8000
```
