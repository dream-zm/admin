<template>
  <div class="hello">
    <p><i class="layui-icon">&#xe60c;</i> </p>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    /*this.localstorage()*/
  },
  methods: {
    localstorage () {
      // window.localStorage.name = 'dream'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
