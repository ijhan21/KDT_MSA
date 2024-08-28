<template> 
  <SiteHeader/>
  <SiteMain/>       <!-- Use SiteMain component -->
  <SiteFooter/>     <!-- Use SiteFooter component -->
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
                name: 'App',
                components: {
                  SiteHeader,
                  SiteMain,    // Ensure this is used or remove if not needed
                  SiteFooter   // Ensure this is used or remove if not needed
                },
                setup(){
                  return {
                }
}}
</script>

<style>

</style>