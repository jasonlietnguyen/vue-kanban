<template>
  <div id="app">
    <error></error>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  mounted(){
    this.$root.$data.store.actions.getAuth()
  },
  components:{
    Error
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
  background-color: #0079bf;
}
</style>
