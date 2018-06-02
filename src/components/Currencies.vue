<template>
  <div>
    <ul v-if="currencies && currencies.length">
      <li v-for="currency in currencies" :key="currency.id">
        <div>
          <router-link :to="{ name: 'currencyDetail', params: { currencyId: currency.id }}">{{ currency.name }}</router-link>
        </div>
      </li>
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
  name: "Currencies",
  data() {
    return {
      currencies: [],
      errors: []  
    };
  },
  created() {
    axios
      .get("https://api.coinmarketcap.com/v1/ticker/")
      .then(response => {
        this.currencies = response.data;
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
