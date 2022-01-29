<template>
  <div class="container">
    <Header/>
    <Menu/>
    <div class="list">
      <PokemonCard/>
      <PokemonCard/>
      <PokemonCard/>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue'
  import PokemonCard from './components/PokemonCard.vue'
  import Menu from './components/Menu.vue'
</script>

<style lang="scss" scoped>
  .container{
    min-height: 100vh;
    background-color: $background-gray;
    .list{
      margin-top: 5rem;
      display: flex;
      justify-content: space-evenly;

    }
  }
</style>
