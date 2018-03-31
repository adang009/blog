<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/">
      <span class="tab-link">首页</span>
    </router-link>
    <souter-link tag="div" class="tab-item" to="/">
      <span class="tab-link">关于</span>
    </souter-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 44px
    width: 100px
    line-height: 44px
    font-size: 16px
    .tab-item
      flex: 1
      height: 50px
      width: 50px;
      border-radius: 10px 10px 10px 10px
      .tab-link
        padding-bottom: 5px
        color: #cccc
      &.router-link-active
        .tab-link
          color: #8468cc
          border-bottom: 2px
</style>
