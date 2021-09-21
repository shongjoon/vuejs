import axios from "axios";
export default {
    namespaced: true,
    state: {
        users: []
    },

    mutations: {
        serUsers(state, users) {
            state.users = users
        },
    },

    actions: {
        getUsers({ commit }) {
            const test = axios
                .get("https://jsonplaceholder.typicode.com/users")
                .then((res) => {
                    console.log("111", res); // 3
                    commit('serUsers', res.data)
                });
            console.log("222", test); // 1 spending
            console.log(333); // 2
        },
    }
}