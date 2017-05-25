<template>
  <div class="login">
    <div class="login-heading">
      <h1>Log in to Frello</h1>
    </div>
    <div class="input">
        <div class="input-group input-group-lg">
          <input type="text" v-model="email" class="form-control" placeholder="Email" aria-describedby="sizing-addon1">
          <input type="password" v-model="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon1">
          <button type="button" @click="login" class="btn btn-success btn-lg">Submit</button>
        </div>
        <div>
          <p>Don't have an account?<router-link to='/register'> Create an account</router-link></p>
        </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'login',
  data(){
    return{
      email: "",
      password: "",

    }
  },
  computed:{},
  methods:{
    login(){
      let user = {
        email: this.email,
        password: this.password
      }
      this.$root.$data.store.actions.login(user)
      // if(this.$root.$data.state.error){
      //   debugger
      //   this.loginError = this.$root.$data.state.error
      // }
      // else{

      // }

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