<template>
  <div id="app">
    <FinRep/>
  </div>
</template>

<script>
import FinRep from './components/FinRep.vue'

export default {
  name: 'App',
  components: {
    FinRep
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
