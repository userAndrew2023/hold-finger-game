<template>
    <div>
        <div class="invite-label">40% from each fren</div>
        <div class="copy-link" @click="sendLink()">Invite a fren (+1000)</div>
        <div class="hr"></div>
        <ToastNotification ref="toastNotification"/>
    </div>
</template>

<script>
import ToastNotification from "@/components/ToastNotification.vue";

export default {
    components: {
        ToastNotification
    },
    methods: {
        sendLink() {
            window.location.href = 'https://t.me/share/url?url=https://ya.ru&text=Ох ебать!';
        }
    }
};
</script>

<style scoped>
.invite-label {
    padding-top: 20px;
    font-size: 24px;
}
.copy-link {
    margin-top: 30px;
    padding: 10px;
    padding-left: 30px;
    border-radius: 7px;
    padding-right: 30px;
    background-color: white;
    margin-right: 20px;
    margin-left: 20px;
    color: black
}
.hr {
    border-bottom: 1px solid #4d4d4d;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
}
</style>