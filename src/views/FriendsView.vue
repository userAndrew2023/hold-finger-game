<template>
    <div v-if="false">
      <div class="invite-label">40% from each fren!</div>
      <div class="copy-link" @click="sendLink">Invite a fren (+1000 KTC)</div>
      <div class="hr"></div>
      <div class="frens-wrapper">
        <div class="frens-label">Your frens</div>
        <div class="frens-list">
          <div class="fren-item" style="display: flex" @click="forwardToFren" v-for="fren in frens" :key="fren.id">
            <div class="fren-image-wrapper">
              <img class="fren-image" :src="fren.image">
            </div>
            <div class="fren-info">
              <div>
                <div class="fren-name-wrapper">
                  <div class="fren-name">{{ fren.name }}</div>
                  <div class="fren-earn">
                    <img src="@/assets/image.png" class="task-coin-logo">
                    <div class="money">{{ fren.money }}</div>
                  </div>
                </div>
              </div>
              <div>
                <span class="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastNotification ref="toastNotification" />
    </div>
    <div v-else>
      <div style="padding-top: 100px">
        <h1>Soon 🚀</h1>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import ToastNotification from '@/components/ToastNotification.vue';
  
  interface Fren {
    id: number;
    name: string;
    image: string;
    money: number;
  }
  
  export default defineComponent({
    components: {
      ToastNotification,
    },
    setup() {
      const frens = ref<Fren[]>([
        { id: 1, name: 'Joooe Biden', image: 'https://www.film.ru/sites/default/files/people/_tmdb/mfmyYf8w80ESsAoOF8IN9DSjQtz.jpg', money: 5000 },
        // add more frens here
      ]);
  
      const sendLink = () => {
        const userId = (window as any).WebApp.initDataUnsafe.user.id;
        window.location.href = `https://t.me/share/url?url=https://t.me/keepcoin_bot/start?startapp=${userId}`;
      };
  
      const forwardToFren = () => {
        window.location.href = 'https://t.me/V_Zelenskiy_official/5182';
      };
  
      return {
        frens,
        sendLink,
        forwardToFren,
      };
    },
  });
  </script>
  
  <style scoped>
  .fren-item {
    margin-top: 10px;
  }
  .invite-label {
    padding-top: 20px;
    font-size: 24px;
    font-weight: 700;
  }
  .copy-link {
    margin-top: 20px;
    padding: 10px;
    padding-left: 30px;
    border-radius: 7px;
    padding-right: 30px;
    background-color: white;
    margin-right: 20px;
    margin-left: 20px;
    color: black;
  }
  .hr {
    border-bottom: 1px solid #4d4d4d;
    margin-top: 25px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 25px;
  }
  .frens-wrapper {
    margin-right: 20px;
    margin-left: 20px;
  }
  .frens-label {
    font-weight: 500;
    font-size: 20px;
    text-align: left;
  }
  .frens-list {
    margin-top: 20px;
    padding-bottom: 15px;
  }
  .fren-image-wrapper {
    margin-right: 10px;
    width: 45px;
    height: 45px;
  }
  .fren-image {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .fren-info {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #4d4d4d;
    width: 100%;
  }
  .fren-name-wrapper {
    text-align: left;
    padding-bottom: 10px;
  }
  .fren-earn {
    display: flex;
    margin-top: 5px;
  }
  .money {
    margin-left: 5px;
    font-size: 14px;
  }
  .task-coin-logo {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
  </style>
  