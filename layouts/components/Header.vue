<template>
  <header class="header">
    <div class="header-logo">
      <img src="../../assets/images/home/logo.png" />
      <span>企点网</span>
    </div>
    <nav class="header-nav">
      <a href="javascript:;">首页</a>
      <a href="javascript:;">产品</a>
      <a href="javascript:;">解决方案</a>
      <a href="javascript:;">服务支持</a>
      <a href="javascript:;">下载</a>
      <a href="javascript:;">关于我们</a>
      <a href="javascript:;">登录网页版</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.header {
  height: 80px;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  min-width: 1200px;
  z-index: 1;
  justify-content: space-around;
  .header-logo {
    display: flex;
    align-items: center;
    span {
      color: #28a6df;
      margin-left: 15px;
      font-size: 24px;
    }
  }
  .header-nav {
    width: 700px;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: #fff;
      font-size: 14px;
      flex-grow: 1;
      height: 100%;
      text-align: center;
      &:hover {
        color: #28a6df;
      }
    }
  }
}
</style>
