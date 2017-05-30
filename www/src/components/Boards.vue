<template>
  <div class="boards">
    <div class="container">
      <!-- Modal -->
      <form @submit.prevent="createBoard">
        <!-- Modal -->
        <div class="modal fade" id="create-board" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" v-if="!saved">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create a new board</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" v-model="boardName" placeholder="Board name" required>
                <input type="text" v-model="boardDescription" placeholder="Board description" required>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 class="user-name">Welcome, {{user.name}}</h1>

      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#create-board">Create A Board</button>

      <ul>
        <li v-for="board in boards">
          <router-link :to="'/boards/'+board._id">{{board.name}}</router-link> <span @click="removeBoard(board)">x</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'boards',
    data() {
      return {
        boardName: "",
        boardDescription: "",
        saved: false


      }
    },

    mounted() {
      this.$root.$data.store.actions.getBoards()
    },
    computed: {
      boards() {
        return this.$root.$data.store.state.boards
      },
      user() {
        return this.$root.$data.store.state.user
      }
    },
    methods: {
      createBoard() {
        debugger
        this.$root.$data.store.actions.createBoard({
          name: this.boardName,
          description: this.boardDescription
        })
      },
      removeBoard(board) {
        this.$root.$data.store.actions.removeBoard(board)
      }
    }
  }

</script>

<style scoped>
  .user-name {
    text-align: center;
  }

  .modal-title {
    color: black;
  }

  .modal-text {
    color: black;
  }
</style>