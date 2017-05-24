import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  boards: [{name: 'This is total rubbish'}],
  activeBoard: {},
  error: {}
}

let handleError = (err) => {
  debugger
  state.error = err
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getBoards() {
      api('boards')
        .then(res => {
          state.boards = res.data.data
        })
        .catch(handleError)
    },
    getBoard(id) {
      api('boards/' + id)
        .then(res => {
          state.activeBoard = res.data.data
        })
        .catch(handleError)
    },
    createBoard(board) {
      api.post('boards/',board)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    removeBoard(board) {
      api.delete('boards/'+board._id)
        .then(res => {
          this.getBoards()
        })
        .catch(handleError)
    },
    login(user){
      api.post('login', user)
        .then(res => {
          // if(res.request.response == '{"error":{},"message":"Invalid Email or Password"}' ){
          //   debugger

          // }
        })
        .catch(handleError)
        debugger
    }

  }

}

