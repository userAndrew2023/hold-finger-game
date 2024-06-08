vue
Копировать код
<template>
  <div id="app">
    <div v-if="isMobile()">
      <div class="money">{{ money }}</div>
      <h2 class="tip">Hold Your Finger</h2>
      <div
        class="hold-area"
        @touchstart="startHold"
        @touchend="endHold"
      >
        <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': this.holding }">
      </div>
      <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
      <div class="money">{{ money }}</div>
      <h2 class="tip">Hold Your Finger</h2>
      <div
        class="hold-area"
        @touchstart="startHold"
        @touchend="endHold"
      >
        <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': this.holding }">
      </div>
      <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
      <div class="money">{{ money }}</div>
      <h2 class="tip">Hold Your Finger</h2>
      <div
        class="hold-area"
        @touchstart="startHold"
        @touchend="endHold"
      >
        <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': this.holding }">
      </div>
      <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
      <div class="money">{{ money }}</div>
      <h2 class="tip">Hold Your Finger</h2>
      <div
        class="hold-area"
        @touchstart="startHold"
        @touchend="endHold"
      >
        <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': this.holding }">
      </div>
      <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
    </div>
    <div v-else class="leave-desktop">
      Play on the mobile
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
html {
  background: linear-gradient(#333333, #000);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}
#app {
  font-family: 'Lexend', sans-serif;  text-align: center;
  margin-top: 60px;
  color: white;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.hold-area {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: none;
}
.hold-button {
  width: 100%;
  border-radius: 50%;
  transition: .1s;
}
.hold-button-active {
  scale: 0.93;
}

@media (min-width: 768px) {
  .hold-area {
    width: 300px;
  }
}

.money {
  font-size: 48px;
  font-weight: 700;
}

.leave-desktop {
  font-size: 72px;
  font-weight: 600;
}
</style>

<script>
export default {
  data() {
    return {
      holdTime: 0,
      money: 0,
      holding: false,
      intervalId: null,
    };
  },
  methods: {
    startHold() {
      if (!this.holding) {
        event.preventDefault();
        this.holding = true;
        this.holdTime = 0;
        let oldHeight = window.Telegram.WebApp.viewportHeight;
        this.intervalId = setInterval(() => {
          if (oldHeight != window.Telegram.WebApp.viewportHeight) {
            this.endHold();
            return;
          }
          oldHeight = window.Telegram.WebApp.viewportHeight;
          this.holdTime += 0.1;
          this.holdTime = Number((this.holdTime).toFixed(1));
          if (Number.isInteger(this.holdTime)) {
            this.money += 1;
          } 
        }, 100);
      }
    },
    endHold() {
      if (this.holding) {
        this.holding = false;
        clearInterval(this.intervalId);
      }
    },
    formatSeconds(number) {
      return number.toString().includes(".") ? number.toString() : number.toString() + ".0"
    },
    isMobile() {
      return true;
    },
    printAgent() {
      return navigator.userAgent;
    },
    testhandler(object) {
      if (!window.Telegram.WebApp.isExpanded) {
        this.endHold()
        window.Telegram.WebApp.expand();
      }
    }
  },
  mounted() {
    window.Telegram.WebApp.expand();
    window.Telegram.WebApp.onEvent('viewportChanged', this.testhandler);
  }
};
</script>