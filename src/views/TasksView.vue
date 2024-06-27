<!-- <template>
    <div class="tasks_wrapper">
        <div class="tasks_group">
            <div v-for="task in tasks" :key="task.id" class="task">
                <div class="task-inner">
                    <div class="task-logo-wrapper">
                        <img :src="task.logo" class="task-logo" alt="Task Logo">
                    </div>
                    <div class="task-desc">
                        <div class="task-name">{{ task.name }}</div>
                        <div class="task-coin-logo-wrapper">
                            <img src="@/assets/image.png" class="task-coin-logo" alt="Coin Logo">
                            <div class="task-money">{{ task.reward }}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="material-symbols-outlined">arrow_forward_ios</span>
                </div>
            </div>
        </div>
    </div>
</template> -->

<template>
    <div style="padding-top: 100px">
        <h1>Soon 🚀</h1>
    </div>
</template>

<script setup>
const tasks = [
    {
        id: 1,
        name: 'Mine 1000 KTC',
        logo: 'https://dawnofwar.org.ru/_nw/9/95842217.jpg',
        reward: '+5000',
    },
    {
        id: 2,
        name: 'Mine 1000 KTC',
        logo: 'https://dawnofwar.org.ru/_nw/9/95842217.jpg',
        reward: '+5000',
    },
    // Add more tasks as needed
];
</script>

<style scoped>
.tasks_group {
    margin: 20px;
    margin-top: 0;
    border-radius: 15px;
}
.task {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #4d4d4d solid;
}
.task-logo-wrapper {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
}
.task-logo {
    width: 25px;
    height: 25px;
}
.task-inner {
    display: flex;
    align-items: center;
}
.task-coin-logo {
    border-radius: 50%;
    width: 20px;
    height: 20px;
}
.task-name {
    text-align: left;
}
.task-coin-logo-wrapper {
    text-align: left;
    margin-top: 5px;
    display: flex;
    align-items: center;
}
.task-desc {
    margin-left: 15px;
}
.task-money {
    margin-left: 5px;
    font-size: 14px;
}
</style>
