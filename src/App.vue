<template>
  <div id="app">
      <router-view></router-view>
  </div>
  
  
</template>
<script>
export default {
    mounted(){
      // console.log(this.$http);
      // console.log(this.$apis);
    }
}
</script>

<style lang="scss" scoped>
#app{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  background:gray;
  
}

</style>