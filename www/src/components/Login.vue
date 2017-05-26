<template>
  <div class="login">
    <div class="container">
      <div class="login-heading">
        <h1>Log in to Frello</h1>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <input type="text" v-model="email" class="form-control" placeholder="Email" aria-describedby="sizing-addon1">
        </div>
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" placeholder="Password" aria-describedby="sizing-addon1">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg">Submit</button>
        </div>
      </form>
      <p>Don't have an account?
        <router-link to='/register'> Create an account</router-link>
      </p>
    </div>
  </div>
  </div>
</template>


<script>
  export default {
    name: 'login',
    data() {
      return {
        email: "",
        password: "",
      }
    },
    computed: {},
    methods: {
      login() {
        this.$root.$data.store.actions.login({ email: this.email, password: this.password })
      }
    },
    components: {}
  }

</script>


<style scoped>
  .form-group {
    width: 50%;
  }
</style>