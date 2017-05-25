<template>
  <div class="navbar">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <ul class="list-inline">
            <li class="">
              <router-link class="btn" to="/register">Register</router-link>
            </li>
            <li class="">
              <router-link class="btn" to="/login">Log In</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'homepage',
    computed: {},
    methods: {},
    components: {}
  }

</script>


<style scoped>
  .list-inline li{
    display: inline-block;
    margin: 0 3px;
  }
</style>