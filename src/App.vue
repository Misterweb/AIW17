<template>
  <div id="app">
    <top-bar></top-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: 'app',
  components: {TopBar}
}
</script>

<style>
html,body {
  background-color: black;
  color: white;

  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  position: relative;
  height: 100%;
}
</style>
