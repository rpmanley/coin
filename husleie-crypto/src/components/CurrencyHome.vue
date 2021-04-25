<template>
  <div class="currency-home">
        <ul class="currency-list">
          <li v-for="currencyInfo in currencyList" :key="'crypto-'+currencyInfo.exchange_id" class="currency-list__item">        
              <CurrencyListItem :currency="currencyInfo" />
          </li>
        </ul>
  </div>
</template>

<script>
import CurrencyListItem from '@/components/CurrencyListItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'Crytpo',
  components: {
    CurrencyListItem
  },
  computed: {
    ...mapState({currencyList: state => state.currencyList}),
  }
}
</script>

<style scoped lang="scss">

$large: 768px;

.currency-list {

  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $large) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 25px;
  }
}

</style>
