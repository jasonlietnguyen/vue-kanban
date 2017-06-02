import axios from 'axios'
import router from '../router'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})
let auth = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  boards: [],
  lists: {},
  activeBoard: {},
  error: {},
  user: {},
  tasks: {},
  comments: {}
}

let handleError = (state, err) => {
  state.error = err
}

export default new Vuex.Store ({
  // ALL DATA LIVES IN THE STATE
  state,

  mutations: {
    setBoards(state, boards){
      state.boards = boards
    },
    setBoard(state, board){
      state.activeBoard = board
    },

    setLists(state, lists){
      state.lists = lists
    },

    setAuth(state, user){
      state.user = user || {}
      router.push('/dashboard')
    },
    setRegister(state, user){
      debugger
      state.user = user
      router.push('/dashboard')
    },
    setError(state){
      state.error = {}
    }


  },
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    getBoards({commit, dispatch}) {
      api('userboards')
        .then(res => {
          commit('setBoards', res.data.data)
        })
        .catch(handleError)
    },
    getBoard({commit, dispatch}, id) {
      api('boards/' + id)
        .then(res => {
          commit('setBoard', res.data.data)
        })
        .catch(handleError)
    },
    getLists({commit, dispatch}, id){
      api('boards/' + id + '/lists')
        .then(res =>{
          commit('setLists', res.data.data.lists)
        })
        .catch(handleError)
    },
    createList({commit, dispatch}, list){
      api.post('lists', list)
        .then(res =>{
          commit('setLists', list)
          dispatch('getLists', list.boardId)
        })

    },
    removeList({commit, dispatch}, list){
      api.delete('lists/' + list._id)
        .then(res =>{
          dispatch('getLists', list.boardId)
        })
        .catch(handleError)

    },
    createBoard({commit, dispatch} , board) {
      api.post('boards', board)
        .then(res => {
          commit('setBoards', board)
          dispatch('getBoards')
        })
        .catch(handleError)
    },
    removeBoard({commit, dispatch}, board) {
      api.delete('boards/' + board._id)
        .then(res => {
          dispatch('getBoards')
        })
        .catch(handleError)
    },
    getTasks(){

    },
    createTask({commit, dispatch}, task){
      api.post('tasks', task)
        .then(res => {
          dispatch('getTasks')
        })
    },
    login({commit, dispatch},user) {
      auth.post('login', user)
        .then(res => {
          console.log(res)
          state.user = res.data.data
          router.push('/dashboard')
        })
        .catch(handleError)
    },
    register({commit, dispatch}, user) {
     auth.post('register', user)
      .then(res =>{
        commit('setRegister', res.data)
        if(res.data.error){
          return handleError(res.data.error)
        }

        //LETS REDIRECT THE PAGE
      })
      .catch(handleError)
    },
    getAuth({commit, dispatch}){
      auth('authenticate')
        .then(res =>{
          commit('setAuth', res.data.data)

        }).catch((err =>{
        }))

    },
    clearError({commit, dispatch}){
      commit('setError')
    }
  }
})