<template>
  <div class="wrap">
    <div class="logo">
      <div class="logo_left">
        <img src="../../assets/logo.png" height="50" width="50" alt="酷范儿"/></div>
      <div class="logo_right">
        <img src="../../assets/tel.png" class="tel" height="16" width="16"/>酷范儿：<span class="text">Fr.cool</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap
    width: 1000px
    margin: 0 auto
    .logo
      height: 80px
      .logo_left
        width: 200px
        height: 50px
        margin-top: 15px
        float: left
      .logo_right
        width: 300px
        height: 30px
        float: right
        margin-top: 25px
        .tel
          vertical-align: middle
          margin-right: 10px
        .text
          font-family: "微软雅黑"
          color: red
</style>
