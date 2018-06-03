<template>
  <div>
    <md-card>
      <ul v-if="currency">
        <p>{{ currency.name }}</p>
        <p>{{ currency.price_usd }} USD</p>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error in errors" :key="error">
          {{error.message}}
        </li>
      </ul>
    </md-card>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "CurrencyDetail",
  computed: {
    currency() {
      return this.$store.getters.getCurrencyById(this.$route.params.currencyId)
    },
    ...mapState([
      'selectedCurrency',
      'errors'
    ])
  },
  created() {
    if (this.$store.state.currencies && this.$store.state.currencies.length) {
      this.$store.dispatch('getCurrency', { currencyId: this.$route.params.currencyId })
    } else {
      this.$store.dispatch('getCurrencies')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
