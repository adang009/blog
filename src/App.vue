<template>
  <div id="app">
    <img src="./assets/logo.png" width="100" height="100">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'

  export default {
    name: 'App',
    components: {
      Tab
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
