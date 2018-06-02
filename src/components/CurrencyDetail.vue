<template>
  <div>
    <ul v-if="currency">
      <p>{{ currency.name }}</p>
      <p>{{ currency.price_usd }}</p>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "CurrencyDetail",
  data() {
    return {
      currency: {},
      errors: []
    };
  },
  created() {
    axios
      .get(`https://api.coinmarketcap.com/v1/ticker/${this.$route.params.currencyId}/`)
      .then(response => {
        this.currency = response.data[0];
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
