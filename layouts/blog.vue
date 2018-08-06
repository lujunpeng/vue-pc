<template>
  <div>
    <qd-header/>
    <div class="head"></div>
    <nuxt/>
    <qd-footer/>
  </div>
</template>

<script>
import QdHeader from './components/Header'
import QdFooter from './components/Footer'
export default {
  name: 'Default',
  components: {
    QdHeader,
    QdFooter
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.head {
  background: #333;
  height: 80px;
}
</style>

