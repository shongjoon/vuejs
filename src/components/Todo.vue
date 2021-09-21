<template>
    <div class="mb-2 d-flex">
        <div>
            <input
                type="checkbox"
                :checked="todo.checked"
                @change="toggleCheckbox"
            />
            <span
                class="ml-3 flex-grow-1"
                :class="todo.checked ? 'text-muted' : ''"
                :style="todo.checked ? 'text-decoration: line-through' : ''"
            >
                {{ todo.text }}
            </span>
            <el-button type="primary" size="mini" @click="clickDelete"
                >Delete</el-button
            >
            {{ numberOfCompletedTodo }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    computed: {
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        },
    },
    methods: {
        toggleCheckbox(e) {
            this.$store.dispatch("todo/actToggleTodo", {
                id: this.todo.id,
                checked: e.target.checked,
            });
            // this.$store.commit('mutaToggleTodo', {
            //     id: this.todo.id,
            //     checked: e.target.checked,
            // })
            // this.$emit("toggle-checkbox", {
            // });
        },
        clickDelete() {
            this.$store.dispatch("todo/actDeleteTodo", this.todo.id);
            // this.$store.commit('mutaDeleteTodo', this.todo.id)
            // this.$emit("click-delete", this.todo.id);
        },
    },
};
</script>

<style>
</style>
© 2021 GitHub, Inc.