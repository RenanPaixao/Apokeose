<template>
  <div>
    <img class="back-arrow" src="../assets/back-arrow.png" alt="back">
    <h2> {{teamName}} <img src="../assets/edit.png" alt="edit team name"></h2>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    teamName: string,
  }>()
</script>

<style lang="scss" scoped>
  div{
    padding: 2rem 0;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    font-family: $russo;
    .back-arrow{
      position: absolute;
      left: 4rem;
    }
    img{
      cursor: pointer;
    }
    h2{
      img{
        margin-left: 1rem;
      }
    }

  }
</style>