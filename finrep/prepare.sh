#!/bin/bash

if [[ $# != 1 ]]; then
    echo "Argument: path to csv file."
    exit 0
fi


# create a json
echo "JSON: "
datajson=$(mktemp)
csvjson "$1" > $datajson
cat $datajson
echo
echo

echo "aes-256-cbc with base64, pass:123 :"
dataenc=$(mktemp)
openssl enc -aes-256-cbc -salt -base64 -in $datajson -out $dataenc
cat $dataenc
echo
echo

# create another json, containing the encoded json represented in base64
# printf "[{\"encrypted\": \"$(cat $dataenc | base64)\"}]" > ./src/assets/data.enc.jso
# tr -d '\n'   to remove newlines from $dataenc cat
echo {\"data\": \"$(cat $dataenc | tr -d '\n')\"} > ./src/assets/data.json

# you could decrypt it with ... salt, base64
# $ openssl enc -d -aes-256-cbc -in file.end -out file.txt

