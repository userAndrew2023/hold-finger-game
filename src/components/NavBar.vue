<template>
  <div class="navbar">
    <div @click="$router.push(item.route)" class="navbar-item" v-for="(item, index) in routes" :key="index">
      <span class="material-symbols-outlined">
        {{ item.logo }}
      </span>
      <div>
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  margin-bottom: 15px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 10%;
}
.navbar-item {
  text-align: center;
}
</style>

<script setup>

const routes = [
  {
    name: 'Home',
    route: '/',
    logo: 'home'
  },
  {
    name: 'Tasks',
    route: '/tasks',
    logo: 'assignment'
  },
  {
    name: 'Boost',
    route: '/boosts',
    logo: 'rocket_launch'
  },
  {
    name: 'Frens',
    route: '/frens',
    logo: 'group'
  }
]

</script>