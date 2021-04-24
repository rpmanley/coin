<template>
  <div class="hello">
    <ul v-for="currency in currencyList" :key="currency.exchange_id">
      <li>
        <router-link :to="{ path: 'Currency/' + currency.exchange_id }">{{currency.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Crytpo',
  computed: mapState({
      currencyList: state => state.currencyList
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
