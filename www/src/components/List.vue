<template>
  <div class="list">
      <div class="card text-center">
        <div class="card-header">
          {{listData.name}} <span class="trashcan" @click="removeBoard(board)"><i class="fa fa-trash" aria-hidden="true"></i></span>
           </div>
        <div class="card-block">
          <h4 class="task-title" v-for="task in tasks">
              <task :taskData="task"></task>
          </h4>
          <!--Just needs a trashcan icon so we can delete lists, function is already created-->
        </div>
        <div class="card-footer text-muted">
          2 days ago
          <!--Change this to go off of our session so we can get actual time since post-->
        </div>
      </div>
      <!--If You want all the listdata just {{listData}}-->
    </div>
</template>


<script>
  import Task from './task'
  export default {
    name: 'list',
    props: ['list-data'],
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch('getTasks', this.listData.boardId, this.listData._id)

    },
    computed: {
      tasks(){
        this.$store.state.tasks
      }
    },
    methods: {
      removeTask(list){
        this.$store.dispatch('removeTask', list)
      }
    },
    components: {
      Task
    }
  }

</script>


<style scoped>
  .task-title{
    color: black;
  }
  .card-header{
    color: black;
  }

  .trashcan{
    color: black;
    font-size: 20px;
    /*Move this trashcan to the right hand side of the card header please*/
  }

</style>