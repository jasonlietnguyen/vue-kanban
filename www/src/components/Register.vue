<template>
  <div class="register">
    <div class="login-heading">
      <h1>Register in to Frello</h1>
    </div>
    <div class="input">
        <div class="input-group input-group-lg">
          <input type="text" v-model="name" class="form-control" placeholder="Name" aria-describedby="sizing-addon1">
          <input type="text" v-model="email" class="form-control" placeholder="Email" aria-describedby="sizing-addon1">
          <input type="password" v-model="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon1">
          <button type="button" @click="Register" class="btn btn-success btn-lg">Submit</button>
        </div>
        <div>
        </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'register',
  data(){
    return{
      name: "",
      email: "",
      password: ""

    }
  },
  computed:{},
  methods:{
    register(){
      let user = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      debugger
      this.$root.$data.store.actions.login(user)

    }
  },
  components:{}
}
</script>


<style scoped>
  .input-group{
    width: 50%;
  }

</style>