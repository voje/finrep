var csv = require("csvtojson")
var CryptoJS = require("crypto-js")

const csvFilePath = "../data.csv"
csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		var pass = process.argv[2]

		// Encrypt
		var stringified = JSON.stringify(jsonObj)
		var outCipher = CryptoJS.AES.encrypt(stringified, pass)
		var outStr = outCipher.toString()

		// Saving to fine in JS is a pain. 
		// Make a bash wrapper that outputs this to file. 
		console.log(outStr)

		/*
		var inStr = outStr
		var inCipher = CryptoJS.AES.decrypt(inStr, pass)
		var inStringified = inCipher.toString(CryptoJS.enc.Utf8)
		*/
	})


