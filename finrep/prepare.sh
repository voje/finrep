#!/bin/bash

echo "password:"
read pass

node prepare_data.js $pass > ./src/assets/data.base64
