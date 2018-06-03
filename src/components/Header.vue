<template>
    <md-toolbar class="md-accent" md-elevation="1">
      <h3 class="md-title" style="flex: 1; margin-left: 80px">CryptoList</h3>
      <span>{{ selectedCurrency }}</span>
      <md-button class="md-icon-button" :to="{ name: 'settings'}">
        <md-icon>settings</md-icon>
      </md-button>
    </md-toolbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Header",
  computed: mapState([
    'selectedCurrency'
  ])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>