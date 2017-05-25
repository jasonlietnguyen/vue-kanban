<template>
  <div>
    <h1>{{user.name}}</h1>
    <form>
      <button @click="createBoard">Add Board</button>
    </form>
    <ul>
      <li v-for="board in boards"><router-link :to="'/boards/'+board._id">{{board.name}}</router-link> <span @click="removeBoard(board)">x</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'boards',
  mounted(){
    this.$root.$data.store.actions.getBoards()
  },
  computed:{
    boards(){
      return this.$root.$data.store.state.boards
    },
    user(){
      return this.$root.$data.store.state.user
    }
  },
  methods:{
    createBoard(){
      this.$root.$data.store.actions.createBoard({
      })
    },
    removeBoard(board){
      this.$root.$data.store.actions.removeBoard(board)
    }
  }
}
</script>

<style scoped>

</style>
