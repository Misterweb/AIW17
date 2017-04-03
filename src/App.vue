<template>
  <div id="app">
    <top-bar></top-bar>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";

export default {
  name: 'app',
  components: {TopBar}
}
</script>

<style lang="scss">
  @import "../static/scss/_config.scss";

  // Generate all colors according to theme
  @each $name, $color in $colors {
      .ark-#{$name} {
          background-color: $color !important;
      }
      .ark-#{$name}-text {
        color: $color !important;
      }
  }


  .no-margin {
    margin: 0 !important;
  }

  .no-padding {
    padding: 0 !important;
  }


  .dd-block {
    font-size: 16px;
    display: block;
    line-height: 22px;
    
    padding-top: 14px;
    padding-bottom: 14px;

    cursor: default;

    text-align: center !important;
  }

html, body {
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

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .1s ease-in-out;
  transition: padding-top .1s ease-in-out;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
  padding-top: 25px;
}



</style>
