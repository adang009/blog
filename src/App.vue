<template>
  <div id="app">
    <m-header></m-header>
    <logo></logo>
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
  import Logo from './components/logo/logo'

  export default {
    name: 'App',
    components: {
      Tab,
      Logo,
      MHeader,
      Footers
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
