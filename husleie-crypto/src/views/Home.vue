<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <CurrencyHome msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import CurrencyHome from '@/components/CurrencyHome.vue'

export default {
  name: 'Home',
  components: {
    CurrencyHome
  }
}
</script>
