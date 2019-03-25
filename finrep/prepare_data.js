var csv = require("csvtojson")
var CryptoJS = require("crypto-js")
var fs = require("fs")

const csvFilePath = "../data.csv"
const encDataFile = "./src/assets/data.json"
csv()
	.fromFile(csvFilePath)
	.then((jsonObj)=>{
		var pass = process.argv[2]

		// Encrypt
		var stringified = JSON.stringify(jsonObj)
		var outCipher = CryptoJS.AES.encrypt(stringified, pass)
		var outJson = { data: outCipher.toString() }
		var outStr = JSON.stringify(outJson)

		fs.writeFile(encDataFile, outStr, "utf-8", function(err){
			if (err) {
				console.log("Failed writing to file: " + err)
			}
			console.log("Written to file: " + encDataFile)

			// Test Decrypt
	      	fs.readFile(encDataFile, "utf-8", function(err, jsonStr) {
	      		cipherJson = JSON.parse(jsonStr)
	      		cipherStr = cipherJson["data"]
				var inCipher = CryptoJS.AES.decrypt(cipherStr, pass)
				var inStringified = inCipher.toString(CryptoJS.enc.Utf8)
				// console.log(inStringified)  // yay, works
	      	})
		})

	})


