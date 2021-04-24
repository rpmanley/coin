<template>
  <div class="currency">
    This is the {{this.$route.params.id}} and..currencyId {{getCurrencyById(pageId)}}
    <h1>{{getCurrencyById(pageId).name}}</h1>
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