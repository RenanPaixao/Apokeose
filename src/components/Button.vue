<template>
  <button>{{title}}</button>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string,
  }>()
</script>

<style lang="scss" scoped>
button{
  padding: 0.5rem 1.2rem;

  background-color: $primary-blue;
  color: $white;
  border-radius: 10px;
}
</style>