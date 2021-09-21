export default {
    namespaced: true,
    state: { //component 에 data
        todos: [
            { id: 1, text: "buy a car", checked: false },
            { id: 2, text: "play game", checked: false },
        ],
        users: []
    },
    mutations: { // 데이터변경 

        mutaAddTodo(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
            });
            state.todoText = "";
        },
        mutaToggleTodo(state, { id, checked }) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        mutaDeleteTodo(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {  //component 에 methods

        actAddTodo({ commit, state, getters }, value) {
            commit('mutaAddTodo', value)
            console.log(commit);
            console.log(state);
            console.log(getters);
            console.log(value);
        },
        actToggleTodo({ commit }, value) {
            commit('mutaToggleTodo', value)
        },
        actDeleteTodo({ commit }, todoId) {
            commit('mutaDeleteTodo', todoId)
        }
    },
    getters: { //component 에 computed
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    },
}