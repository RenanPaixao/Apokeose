<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const title = ref('My Poke Team')
</script>

<style lang="scss" scoped>
  div{
    padding: 0.9rem 0;

    text-align: center;
    font-size: 1rem;
    font-weight: lighter;

    color: $white;
    font-family: $russo;
    background-color: $primary;
  }
</style>