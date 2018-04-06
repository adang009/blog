<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/index">
      <span class="tab-link">首页</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/about">
      <span class="tab-link">关于</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    height: 44px
    width: 100%
    line-height: 44px
    font-size: 16px
    margin-top: 45px
    justify-content: center
    flex-direction: row
    .tab-item
      height: 50px
      width: 50px;
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: #cccc
      &.router-link-active
        .tab-link
          color: #980d01
          border-bottom: 2px
</style>
