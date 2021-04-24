<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    
    <ul v-for="currency in currencyList" :key="currency.exchange_id">
      <li style="border: 2px dotted lime">{{currency.name}} {{currency}}</li>
    </ul>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Crytpo',
  props: {
    msg: String
  },
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
