<template>
  <div class="list">
    <form @submit.prevent="createTask">
      <!-- Modal -->
      <div class="modal fade" id="create-task" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Create a new List</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
              <input type="text" v-model="taskName" placeholder="Task name" required>
              <input type="text" v-model="taskDescription" placeholder="Task description" required>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </form>


    <div class="card text-center">
      <div class="card-header">
        {{listData.name}} <span class="trashcan" @click="removeList(listData)"><i class="fa fa-trash" aria-hidden="true"></i></span>
      </div>
      <div class="card-block">
        <div v-for="task in tasks">
          <h4 class="task-title">{{task.name}}</h4>
           <!--<task :taskData="task"> </task>  -->
        </div>
      </div>
      <div class="card-footer text-muted">
          2 days ago <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#create-task">Create A Task</button>
          <!--Change this to go off of our session so we can get actual time since post-->
        </div>
      </div>
    </div>
</template>


<script>
  import Task from './task'
  export default {
    name: 'list',
    props: ['list-data'],

    data() {
      return {
        taskName: '',
        taskDescription: ''

      }
    },
    mounted() {
      let tasksInfo = {
        boardId: this.listData.boardId,
        listId: this.listData._id
      }
      this.$store.dispatch('getTasks', tasksInfo)

    },
    computed: {
      tasks() {
        return this.$store.state.tasks
        console.log( this.$store.state.tasks)
      }
    },
    methods: {
      removeList(list) {
        this.$store.dispatch('removeList', list)
      },
      createTask() {
        this.$store.dispatch('createTask', {
          name: this.taskName,
          description: this.taskDescription,
          boardId: this.listData.boardId,
          listId: this.listData._id
        })
      }
    },
    components: {
      Task
    }
  }

</script>


<style scoped>
  .task-title {
    color: black;
  }

  p {
    color: #333;
    font-weight: 700;
    margin-bottom: 0;
  }

  i {
    color: red;
    cursor: pointer;
  }

  .trashcan {
    color: black;
    font-size: 20px;
    float: right;
    /*Move this trashcan to the right hand side of the card header please*/
  }
</style>


<task :taskData="task">{{task.name}}</task>