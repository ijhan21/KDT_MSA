<template>
  <div>
<button @click="handleClick">Click!</button>
  </div>
</template>

<script>
export default {
  setup(){
    const handleClick=(event)=>{
      console.log("click",event);
      alert(`event:${event.target.innerText}`);
      console.log(`event:${event.target.textContent}`);
    }
    return{
      handleClick
    }
  }
}
</script>

<style>

</style>
