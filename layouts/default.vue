<template>
  <div>
    <qd-header/>
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
</style>

