<template>
  <div class="container-spacing">
    <TeamItem v-for="item in temporary" class="item-spacing" :teamName="item"/>
  </div>
</template>

<script lang="ts" setup>
  import TeamItem from '../components/TeamItem.vue'

  const temporary: string[] = ['Team Super Aquatic', 'Team Galaxy', 'The Super Team']
</script>

<style lang="scss" scoped>
  .container-spacing{
    margin-top: 3rem;
  }
  .item-spacing{
    margin: 1rem 3.75rem;
  }

</style>