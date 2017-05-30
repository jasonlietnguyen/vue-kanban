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
    this.$root.$data.store.actions.getBoard(this.$route.params.id)
    this.$root.$data.store.actions.getLists(this.$route.params.id)
  },

  computed:{
    board(){
      return this.$root.$data.store.state.activeBoard
    },
    lists(){
      debugger
      return this.$root.$data.store.state.lists
    }
  }
}
</script>

<style scoped>

</style>
