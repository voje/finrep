// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an aliaencMsgVue from 'vue'
import App from './App'
import CryptoJS from "crypto-js"

import './../node_modules/bulma/css/bulma.css'


// load encrypted data
// import dataEnc from "./assets/data.enc"
// import dataEnc from "./assets/data.enc.base64"
import dataEnc from "./assets/data.json"
var test = decode(dataEnc)
console.log(test)

function decode (data) {
    // var base64msg = "U2FsdGVkX19efhQraF5v1AvgngjvA12UhR18uSvUX2U="  // macaque
    var base64msg = data["data"]
    // var base64msg = "U2FsdGVkX1/mEmB6f89LfR6r0hghR4lqx4v0hQQMXi3MfVzzSUJYqrgKIiSltJn9nLOMEOX9MCDGcrhz3WkqZWhzOHqpQXCAGBWciSZ9yYfzmRX4MSFWkcA5oYuz8GnKxufXUcVorO/T6k1Z5JsXuPkwrDo4RQPd59llgWp4lQc="

    // var base64msg = dataEnc["data"]
    var pass = "123"

    var dec = CryptoJS.AES.decrypt(base64msg, pass)
    var plaintext = CryptoJS.enc.Utf8.stringify(dec)
    // console.log(plaintext)
    var json = JSON.parse(plaintext)
    // console.log(json)
    return json
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
