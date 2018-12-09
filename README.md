# Prologue
We're going to read a .csv file and convert it to JSON. 
It's a financial report so let's keep it secret. 
Encrypt the JSON file, remove original csv and JSON, push to gh-pages. 
We'll be using `GnuPG` on our PC and `OpenGpG

Users will see a simple vuej.js based app, asking them for a password which is our symmetric encryption key. 
A correct key will successfully decrypt the financial data and display it. 

## What do we need?
Server ... ekhm home PC side: `$sudo apt-get install python3-csvkit openssl-util` installed. 
Get the .csv data file and do the following: 
```bash
# enter a symmetric encryption key
$ git add . --all
$ git commit -m "Refreshing report."
$ git push origin gh-pages
```

## Pushing to gh-pages
```
# get the .csv report file, put it in gitignored input_data
# create an encoded file for deployment
$ ./prepare.sh input_data/<file.csv>

$ npm run build
$ cd dist

# need to fix paths (github is trying to load static files from root (/) instead of /finrep)
$ sed -ie 's/\/static\//\/finrep\/static\//g' index.html

# push folder as root
$ cd ../..
$ git subtree push --prefix finrep/dist origin gh-pages
```
