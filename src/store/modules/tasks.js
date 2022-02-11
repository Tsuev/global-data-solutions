export default {
    state: {
      tasks: [],
      filterState: 'all'
    },
    mutations: {
      ADD_TASK(state, text){
        state.tasks.push({id: Symbol(), task: text, success: false})
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      },
      CHANGE_FILTER(state, value){
        if(state.tasks && state.tasks.length) state.filterState = value
      },
      CHANGE_TASK_STATE(state, taskId){
        if(state.tasks && state.tasks.length) state.tasks.forEach(item => item.id === taskId ? item.success = !item.success : null)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      },
      DELETE_SUCCESS_TASKS(state){
        if(state.tasks && state.tasks.length) state.tasks = state.tasks.filter(item => !item.success)
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      },
      TASKS_INIT(state){
        if(localStorage.getItem('tasks')) state.tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    },
    getters: {
      GET_ALL_TASKS(state){
        return state.tasks
      },
      GET_SUCCESS_TASKS(state){
        return state.tasks.filter(item => item.success)
      },
      GET_ACTIVE_TASKS(state){
        return state.tasks.filter(item => !item.success)
      },
      GET_FILTER_STATE(state){
        return state.filterState
      }
    },
};