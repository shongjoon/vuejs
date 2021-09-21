<template>
    <div class="border-t-2 border-gray-500">
        user list
        <div v-for="user in users" :key="user.id">
            {{ user.name }}
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    // async created() {
    //     const user = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     console.log(user);
    //     console.log(222);
    // }
    data() {
        return {
        };
    },
    created() {
        this.getUsers();
    },
    computed: {
        ...mapState('user',{
            users: state => state.users
            //mapState
            //mapGetter
            // 'todos',
            // 'users'
        }),
        // users() {
        //     return this.$store.state.users
        // }
    },
    methods: {
        ...mapActions('user', ['getUsers']),
        //mapActions
        //mapMutations
        // getUsers() {
        //     this.$store.dispatch('getUsers')
        // },
    },
};
</script>

<style lang="scss" scoped>
</style>