<template>
  <div>
    <qd-header/>
    <nuxt/>
    <qd-footer/>
    <vue-back color="#41B883"></vue-back>
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

