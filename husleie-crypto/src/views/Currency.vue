<template>
  <div class="currency-list">
    <div v-if="getCurrencyById(pageId)">
    <p>Historical data</p>
      <dl>
        <div v-for="(detail, index) in getCurrencyById(pageId)" :key="index"  class="currency-list__item">
          <dt class="currency-list__item-title">{{index}}</dt>
          <dd>{{detail}}</dd>
        </div>

        <img :src="getIconById(pageId)" />
      </dl>
    </div>
    <div v-else>
      It seems the page you're looking for doesn't exist
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
        pageId: this.$route.params.id
    }
  },
  methods: {
    ...mapActions([
      'getSymbol'
    ]),
  },
  computed: {
    ...mapGetters ([
      'getCurrencyById',
      'getIconById'
    ])
  },
  mounted() {
    this.getSymbol({
        exchange_id: this.pageId
    })
  }
}
</script>

<style lang="scss">
  .currency-list {
      &__item {
          display: flex;
          margin-botton: 10px;
          &-title {
            font-weight: bold;
            flex-basis: 40%;
            text-align: left;
          }
      }
  }
</style>
