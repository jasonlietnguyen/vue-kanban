<template>
  <div class="login">
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
        this.$root.$data.store.actions.login({email: this.email, password: this.password})
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>