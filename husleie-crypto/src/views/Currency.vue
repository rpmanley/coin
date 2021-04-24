<template>
  <div class="currency">
    <div v-if="getCurrencyById(pageId)">
      <dl>
        <div v-for="(detail, index) in getCurrencyById(pageId)" :key="index">
          <dt>{{index}}</dt><dd>{{detail}}</dd>
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