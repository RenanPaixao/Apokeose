<template>
  <button>
	  <slot></slot>
  </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
button{
  padding: 0.5rem 1.2rem;

  background-color: $primary-blue;
  color: $white;
  border-radius: 10px;
	font-family: $roboto;
	
	cursor: pointer;
}
</style>