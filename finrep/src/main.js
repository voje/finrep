// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an aliaencMsgVue from 'vue'
import Vue from 'vue'
import App from './App'
import CryptoJS from "crypto-js"
import fs from "fs"

import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  methods: {
    decode: function (pass) {
      var json = []

      var dataEnc = fs.readFile("./assets/data.base64", "utf-8", function(err, contents) {
        var inCipher = CryptoJS.AES.decrypt(dataEnc, pass)
        var inStringified = inCipher.toString(CryptoJS.enc.Utf8)
        json = JSON.parse(inStringified)
        console.log(json)
        return json
      })
    },
  }
})
