<template>
  <div>
    <h1 v-for="item of array" :key="item" :class="item">
      {{ item }}
    </h1>
  </div>
</template>

<script>
export default {
  setup(){
    const array=[1,2,3,4,5];
    return{
      array
    }
  }
}
</script>

<style>

</style>
