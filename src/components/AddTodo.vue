<template>
    <div>
        <input
            type="text"
            class="border border-blue-500"
            @keyup.enter="addTodo"
            v-model="todoText"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            // this.$store.commit('mutaAddTodo', e.target.value) // mutations commit
            this.$store.dispatch('actAddTodo', e.target.value) // actions dispatch
            this.todoText = ''
            // console.log(e.target.value)
            // this.$emit('add-todo', e.target.value);
        }
    }
}
</script>