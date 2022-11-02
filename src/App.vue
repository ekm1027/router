<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <start/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import start from './components/start.vue'

export default {
  name: 'App',
  components: {
    start
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
