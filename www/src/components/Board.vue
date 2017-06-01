<template>
  <div>
    <h6>
      Active Board: {{board}}
    </h6>
    Board Name: {{board.name}}
    Lists: {{lists}}
  </div>
</template>

<script>
export default {
  name: 'board',
  mounted(){
    this.$store.dispatch('getBoard', this.$route.params.id)
    this.$store.dispatch('getLists', this.$route.params.id)
  },

  computed:{
    board(){
      return this.$store.state.activeBoard
    },
    lists(){
      return this.$store.state.lists
    }
  }
}
</script>

<style scoped>

</style>
