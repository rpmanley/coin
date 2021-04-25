<template>
  <div class="hello">
    <div v-if="isError">
      There was an error - please try again later
    </div>
    <div v-else>
        <ul v-for="currency in currencyList" :key="'a'+currency.exchange_id" class="currency-list">
          <li class="currency-list__item">        
              <dt class="currency-list__item-title">
                <router-link :to="{ path: 'Currency/' + currency.exchange_id }">
                  {{currency.name}}
                </router-link>
              </dt>
              <dd><span>Website:</span> <strong>{{currency.website}}</strong></dd>
              <dd><span>Exchange ID:</span> <strong>{{currency.exchange_id}}</strong></dd>
              <dd><span>Start date:</span> <strong>{{currency.data_start}}</strong></dd>
              <dd><span>Trade volume per month:</span> <strong>{{currency.volume_1mth_usd}}</strong></dd>
            <dd>
              <img :src="getIconById(currency.exchange_id)" />
            </dd>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Crytpo',
  computed: {
    ...mapState({currencyList: state => state.currencyList, isError: state => state.isError}),
    ...mapGetters(['getIconById'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.currency-list {

  list-style-type: none;
  padding: 0;
  
  &__item {
    display: flex;
    margin: 0 10px;
  }
}

a {
  color: #42b983;
}
</style>
