<template>
  <div>
    <div class="custom-error" v-if="error.message" @click="clearError">
      Error: {{error.message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  computed:{
    error(){
      return this.$store.state.error
    }
  },
  methods:{
    clearError(){
      this.$root.$data.store.actions.clearError()
    }
  }
}
</script>

<style scoped>
  .custom-error{
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    background: red;
    color: white;
  }
</style>
