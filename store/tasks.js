export const state = () => ({
  tasks: [
    {
      title: 'Task 1',
      description: 'ini deskripsi',
      isDone: false,
    },
    {
      title: 'Task 2',
      description: 'ini deskripsi',
      isDone: false,
    },
    {
      title: 'Task 3',
      description: 'ini deskripsi',
      isDone: false,
    },
  ]
})

export const mutations ={
  ADD_TASK(state, task) {
    console.log("MUTATIONS", task)
    state.tasks.push(task);
  }
}

export const actions = {
  addTask(context, task) {
    console.log("ACTIONS", task)
    context.commit('ADD_TASK', task)
  }
}
export const getters ={

}
