<template>
  <footer class="footer">
    <div>服务热线：400-00-64314550</div>
    <div>企业邮箱：qdtec888.com</div>
    <div>微信：QDTEC</div>
    <div>地址：安徽合肥瑶海区长百科技园</div>
    <div>企点科技有限公司 皖ICP备120300123002号-1</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.footer {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    color: #666;
    font-size: 14px;
  }
}
</style>
