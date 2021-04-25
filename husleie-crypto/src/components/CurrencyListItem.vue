<template>
  <dl class="currency-list-item">
      <dt>
        <router-link :to="{ path: 'Currency/' + currency.exchange_id }">
          <span>{{currency.name}}</span>
        </router-link>
        <img :src="getIconById(currency.exchange_id)" />
      </dt>
      <dd><span>Website:</span> <strong>{{currency.website}}</strong></dd>
      <dd><span>Exchange ID:</span> <strong>{{currency.exchange_id}}</strong></dd>
      <dd><span>Start date:</span> <strong>{{currency.data_start}}</strong></dd>
      <dd><span>Trade volume per month:</span> <strong>{{currency.volume_1mth_usd}}</strong></dd>
  </dl>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['currency'],
    computed: {
    ...mapGetters(['getIconById'])
  },
  mounted() {
    console.log('state ', this.$store );
    console.log('hello world id -> ',this.currency.exchange_id);
    console.log('icon -> ', this.getIconById(this.currency.exchange_id) );
  }
}
</script>

<style scoped lang="scss">

.currency-list-item {
  border-bottom: 1px solid #42b983;
  margin-bottom: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;

  dd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  dt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    text-align: left;
    font-weight: bold;
    font-size: 18px;
  }

  dd,
  dt {
    margin: 0 0 5px;
    padding: 5px 0;
    width: 100%;

    &:nth-child(even) {
      background: #efefef;
    }
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
