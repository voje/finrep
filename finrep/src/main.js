// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an aliaencMsgVue from 'vue'
import Vue from 'vue'
import App from './App'
import CryptoJS from "crypto-js"

import './../node_modules/bulma/css/bulma.css'


// load encrypted data
// import dataEnc from "./assets/data.enc"
// import dataEnc from "./assets/data.enc.base64"
import dataEnc from "./assets/data.json"
/*
var test = decode(dataEnc)
console.log(test)
*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  methods: {
    decode: function (pass) {
      // var base64msg = "U2FsdGVkX19efhQraF5v1AvgngjvA12UhR18uSvUX2U="  // macaque
      // var pass = "123"
      var base64msg = dataEnc["data"]

      // var base64msg = dataEnc["data"]

      var json = []

      try {
        var dec = CryptoJS.AES.decrypt(base64msg, pass)
        var plaintext = CryptoJS.enc.Utf8.stringify(dec)
        // console.log(plaintext)
        json = JSON.parse(plaintext)
        // console.log(json)
      } catch (e) {
        //
      }
      return json
    },
  }
})
