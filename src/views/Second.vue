<template>
    <div>
        <link
            href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
            rel="stylesheet"
        />
        <link
            rel="stylesheet"
            href="https://unpkg.com/element-ui/lib/theme-chalk/index.css"
        />

        <div id="app" class="container">
            <h1 class="text-center">Todo App</h1>
            <CompletedTodo />
            <AddTodo />
            <hr />
            <TodoList/>
            <UserList/>
        </div>
    </div>
</template>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import CompletedTodo from "@/components/CompletedTodo";
import UserList from "@/components/UserList"
export default {
    components: {
        TodoList,
        AddTodo,
        CompletedTodo,
        UserList
    },
    data() {
        return {
            // todoText: "",
            // todos: [
            //     { id: 1, text: "buy a car", checked: false },
            //     { id: 2, text: "play game", checked: false },
            // ],
        };
    },
    methods: {
        // deleteTodo(id) {
        //     const index = this.todos.findIndex((todo) => {
        //         return todo.id === id;
        //     });
        //     this.todos.splice(index, 1);
        //     this.todos = this.todos.filter(todo => todo.id !== id);
        // },
        // addTodo(value) {
        //     this.todos.push({
        //         id: Math.random(),
        //         text: value,
        //         checked: false,
        //     });
        //     this.todoText = "";
        // },
        // toggleCheckbox({ id, checked }) {
        //     const index = this.todos.findIndex((todo) => {
        //         return todo.id === id;
        //     });
        //     this.todos[index].checked = checked;
        // },
    },
};
</script>