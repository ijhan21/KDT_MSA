<template>
  <div>
    <SiteHeader/>
    <button @click="counter++">{{ counter }}</button>
  </div>
</template>

<script setup>
  import SiteHeader from './components/SiteHeader.vue'
  import {ref} from 'vue'

  const counter =ref(0)
</script>

<style scoped>

</style>