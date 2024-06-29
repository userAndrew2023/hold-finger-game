<template>
  <div id="app" :key="$route.fullPath">
    <div>
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
html {
  background-color: #151719;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Lexend', sans-serif;
  text-align: center;
  color: white;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  height: 100%
}
</style>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  mounted() {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.onEvent('viewportChanged', this.testhandler);
    const AdController = window.Adsgram.init({
        blockId: "378"
    });
    AdController.show().then((result) => {
        console.log(result);
    }).catch((result) => {
      console.log(result);
    })
  },
  components: {
    NavBar,
  }
};
</script>
