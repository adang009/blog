<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <footers></footers>
  </div>
</template>

<script>
  import Tab from './components/tab/tab'
  import MHeader from './components/m-header/m-header'
  import Footers from './components/footer/footer'

  export default {
    name: 'App',
    components: {
      Tab,
      MHeader,
      Footers
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
