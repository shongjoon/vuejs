<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">home</router-link> || 
            <router-link to="/about">about</router-link> ||
            <router-link to="/second">second</router-link>
        </div>
        <router-view></router-view>
    </div>
    
</template>

<script>
export default {};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#nav {
    padding: 30px;
}
#nav a {
    font-weight: bold;
    color: #2c3e50;
}
#nav a.router-link-exact-active {
    color: #2c3e50;
}
</style>
