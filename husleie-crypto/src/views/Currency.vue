<template>
  <div class="currency-list">
    <div v-if="getCurrencyById(pageId)">
      <dl>
        <div v-for="(detail, index) in getCurrencyById(pageId)" :key="index"  class="currency-list__item">
          <dt class="currency-list__item-title">{{index}}</dt>
          <dd>{{detail}}</dd>
        </div>
      </dl>
    </div>
    <div v-else>
      It seems the page you're looking for doesn't exist
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
        pageId: this.$route.params.id
    }
  },
  computed: {
    ...mapGetters ([
      'getCurrencyById'
    ])
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
