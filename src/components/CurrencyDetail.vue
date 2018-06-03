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

import { mapState } from 'vuex';

export default {
  name: 'CurrencyDetail',
  computed: {
    currency() {
      const currencyId = this.$route.params.currencyId;
      return this.$store.getters.getCurrencyById(currencyId);
    },
    ...mapState([
      'selectedCurrency',
      'errors'
    ])
  },
  created() {
    const currencies = this.$store.state.currencies;
    const currencyId = this.$route.params.currencyId;
    if (currencies && currencies.length) {
      this.$store.dispatch('getCurrency', { currencyId });
    } else {
      this.$store.dispatch('getCurrencies');
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
