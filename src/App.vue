<template>
  <div id="app">
    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
html {
  background: linear-gradient(#000, #1a1a1a, #808080);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Lexend', sans-serif;
  text-align: center;
  margin-top: 30px;
  color: white;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>

<script>
import mockLevels from './data/mockLevels.ts'

export default {
  mounted() {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.onEvent('viewportChanged', this.testhandler);
  },
  components: {
  }
};
</script>
