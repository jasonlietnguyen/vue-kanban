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
i{
  color: white;
}
.logo{
  color: white;
  font-size: 40px;
}
h2{
  margin-top: 100px;
  color: white;
  font-weight: 900;
  text-align: left;
}
h5{
  margin-top: 20px;
  color: white;
  text-align: left;
}
p{
  text-align: left;
  color: white;
}
button{
  margin-left: 0
}
img{
  margin-top: -70px;
}
</style>