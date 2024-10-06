#!/bin/bash
# Basic instalation script

sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get install curl -y
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo zsh -
sudo apt-get install -y nodejs
npm install antd
npm install react-router-dom
npm install axios
