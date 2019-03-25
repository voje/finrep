<template>
<div class="content is-small">
    <div class="field has-addons" @keyup.enter="handleSubmit">
        <div class="control is-expanded">
            <input class="input is-warning" type="text" placeholder="geslo" v-model="passw"/>
        </div>
        <div class="control">
            <a class="button is-warning" @click="handleSubmit">
                Ok
            </a>
        </div>
    </div>
    <table class="table is-narrow is-fullwidth">
        <thead>
            <tr><th v-for="header in headers">{{header}}</th></tr>
        </thead>
        <tbody>
        <tr v-for="el in entries" v-bind:class="{
            'has-background-success': el.positive, 
            'has-background-warning': !el.positive 
        }">
            <td v-for="key in headers">
                {{ el[key] }}
            </td>      
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "FinRep",
    data () { return {
        entries: [],
        passw: "",
        headers: ["datum", "oznaka", "vsota", "skupaj"],
        tmpRunningSum: 0.0,
    }},
    created: function () {
        // this.passw = "123"
        // this.handleSubmit()
    },
    computed: {

    },
    methods: {
        handleSubmit: function () {
            var rawEntries = this.$root.decode(this.passw)
            this.tmpRunningSum = 0.0
            var tthis = this
            this.entries = rawEntries.map(function (el) {
                // console.log(el)
                var amount = 0.0 + el["Income amount"] - el["Expense amount"]
                tthis.tmpRunningSum += amount
                console.log(el)
                // var date = new Date(el["\ufeff\"Date\""])
                var date = new Date(el["Date"])
                // console.log(date)
                return {
                    "datum": date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear(),
                    "oznaka": el["Tags"],
                    "vsota": amount.toFixed(2),
                    "skupaj": tthis.tmpRunningSum.toFixed(2),
                    "positive": (amount >= 0),
                }
            })
        },
    },
} 
</script>
