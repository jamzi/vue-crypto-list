<template>
  <div>
    <h4>Select currency</h4>
    <md-radio v-model="selectedCurrency" value="USD">USD</md-radio>
    <md-radio v-model="selectedCurrency" value="EUR">EUR</md-radio>
    <md-radio v-model="selectedCurrency" value="CNY">CNY</md-radio>
  </div>
</template>

<script>

export default {
  name: 'Settings',
  computed: {
    selectedCurrency: {
      get () {
        return this.$store.state.selectedCurrency;
      },
      set (currency) {
        this.$store.commit({
          type: 'setSelectedCurrency',
          currency
        });
      }
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
