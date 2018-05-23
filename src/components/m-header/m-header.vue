<template>
  <div class="top">
    <div class="top_content">
      <ul>
        <li class="li"><a href="" class="link">联系我们</a></li>
        <li class="li"><a href="" class="link">加入收藏</a></li>
        <li class="li"><a href="" class="link">设为首页</a></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../.././common/stylus/reset"

  .top
    width: 100%
    height: 27px
    /*background: url(../../assets/logo.png) repeat-x*/
    background-color: #ccc
    .top_content
      width: 1000px
      margin: 0 auto
      font-size: 12px
      .li
        float: right
        width: 100px
        line-height: 27px
    .link
      text-decoration: none
      &:visited
        color: #ffffff
      &:hover
        color: #ffccff
</style>
