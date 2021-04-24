<template>
  <div class="hello">
    <ul v-for="currency in currencyList" :key="'a'+currency.exchange_id">
      <li>        
          <dt class="currency-list__item-title"><router-link :to="{ path: 'Currency/' + currency.exchange_id }">{{currency.name}}</router-link> {{currency.exchange_id}}</dt>
          <dd>{{currency.website}}</dd>
          <dd>{{currency.exchange_id}}
          <dd>{{currency.data_start}}</dd>
          <dd>{{currency.volume_1mth_usd}}</dd>
        <dd><img :src="getIconById(currency.exchange_id)" /></dd>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Crytpo',
  computed: {
    ...mapState({currencyList: state => state.currencyList}),
    ...mapGetters(['getIconById'])
  }
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
