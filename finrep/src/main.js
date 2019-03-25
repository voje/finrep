// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an aliaencMsgVue from 'vue'
import Vue from 'vue'
import App from './App'
import CryptoJS from "crypto-js"

import './../node_modules/bulma/css/bulma.css'

const encData = require("@/assets/data.json")

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  methods: {
    decode: function (pass) {
      var cipherStr = encData["data"]
      var inCipher = CryptoJS.AES.decrypt(cipherStr, pass)
      var inStringified = inCipher.toString(CryptoJS.enc.Utf8)
      console.log(inStringified)  // yay, works
      var json = null
      try {
        json = JSON.parse(inStringified)
      } catch (err) {
        console.log(err)
      }
      return json
    },
  }
})
