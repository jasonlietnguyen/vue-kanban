<template>
  <div id="app">
    <error></error>
    <!--<div class="container">-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  mounted(){
    this.$store.dispatch('getAuth')
      },
  components:{
    Error
  }
}
</script>

<style>
body{
  background-color: #0079bf;
  color: #fff;
  padding-top: 40px;
}
p,h1,h2,h3,h4,h5,h6,span,ul,li,div,a,a:hover{
  color: #fff;
}

</style>
