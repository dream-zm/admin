<template>
  <div>
    <div class="top">
      <main-header></main-header>
    </div>
    <div class="clear">
      <div class="aside fl">2</div>
      <div class="main fl">3</div>
    </div> 
  </div>
</template>	
<script>
  import MainHeader from '../../components/head'
  export default {
    name: 'HomeIndex',
    components: {
      MainHeader
    }
  }
</script>
<style scoped lang="stylus">
  
</style>