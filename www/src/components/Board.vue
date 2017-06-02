<template>
  <div class="board">
    <div class="container">
      <form @submit.prevent="createList">
        <!-- Modal -->
        <div class="modal fade" id="create-list" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Create a new list</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input type="text" v-model="listName" placeholder="List name" required>
                <input type="text" v-model="listDescription" placeholder="List description" required>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#create-list">Create A List</button>
      <h6>Active Board: {{board}}</h6>
      <h1 class="board-name">{{board.name}}</h1>
      <!--Jason please fix this so that both cards  show up side by side, instead of ontop of each other! I can't figure it out-->
      <div class="row">
      <div v-for="list in lists" class="col">
          <list :listData="list"></list>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
  import List from './list'
  export default {
    name: 'board',
    data() {
      return {
        listName: '',
        listDescription: ''
      }
    },
    mounted() {
      this.$store.dispatch('getBoard', this.$route.params.id)
      this.$store.dispatch('getLists', this.$route.params.id)
    },

    computed: {
      board() {
        return this.$store.state.activeBoard
      },
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {
      createList() {
        this.$store.dispatch('createList', {
          name: this.listName,
          description: this.listDescription,
          boardId: this.board._id
        })
      }
    },
    components: {
      List
    }
  }

</script>

<style scoped>
  .board-name {
    text-align: center;
  }
</style>