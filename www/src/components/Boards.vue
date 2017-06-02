<template>
  <div class="boards">
    <div class="container">
      <!-- Modal -->
      <form @submit.prevent="createBoard">
        <!-- Modal -->
        <div class="modal fade" id="create-board" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
          v-if="!saved">
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

      <div class="row">
        <div v-for="board in boards" class="col-md-4">
          <router-link :to="'/boards/'+board._id">
            <br>
            <div class="background">
              <div class="container">
                <br>
                <span class="name">{{board.name.toUpperCase()}}</span> <span @click="removeBoard(board)"><i class="fa fa-trash" aria-hidden="true"></i></span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
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
      this.$store.dispatch('getBoards')
    },
    computed: {
      boards() {
        return this.$store.state.boards
      },
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      createBoard() {
        debugger
        this.$store.dispatch('createBoard', {
          name: this.boardName,
          description: this.boardDescription
        })
      },
      removeBoard(board) {
        this.$store.dispatch('removeBoard', board)
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

  .name {
    font-size: 20px;
    font-weight: 700;
  }

  .fa-trash {
    float: right;
    font-size: 24px;
  }

  .background {
    height: 100px;
    background-image: url(https://static.pexels.com/photos/413106/pexels-photo-413106.jpeg);
    background-size: cover;
    background-position: center;
  }
</style>