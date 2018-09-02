<template>
<div>
    <table>
        <tr v-for="el in data">
            <td>{{ el }}</td>      
        </tr>
    </table>
</div>
</template>

<script>
export default {
    name: "FinRep",
    data () { return {
        data: [{"a": 1}, {"b": 2}, {"c": 3}],
    }}
} 
</script>