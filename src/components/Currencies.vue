<template>
  <div>
    <md-list v-if="currencies && currencies.length">
      <md-list-item 
        v-for="currency in currencies" 
        :key="currency.id" 
        :to="{ name: 'currencyDetail', params: { currencyId: currency.id }}">
          {{ currency.name }}
      </md-list-item>
    </md-list>
    <ul v-if="errors && errors.length">
      <li v-for="error in errors" :key="error">
        {{error.message}}
      </li>
    </ul>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'Currencies',
  computed: mapState([
    'currencies',
    'errors'
  ]),
  created() {
    this.$store.dispatch('getCurrencies');
  }
};
</script>