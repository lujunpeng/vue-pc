<template>
  <div class="login">
    <div class="head"></div>
    <nuxt/>
    <qd-footer/>
    <vue-back color="#41B883"></vue-back>
  </div>
</template>

<script>
import QdFooter from './components/Footer'
export default {
  name: 'Default',
  components: {
    QdFooter
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.login {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image: linear-gradient(45deg, #7A88FF, #7AFFAF);
}
</style>

