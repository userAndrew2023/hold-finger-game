<template>
    <div class="money">
        <img src="@/assets/image.png" class="mini-logo">
        <div>{{ money }}</div>
      </div>
      <div class="league">
        <div class="league-color" :style="{ backgroundColor: currentLevel.color }"></div>
        <div>{{ currentLevel.name }}</div>
        <span class="material-symbols-outlined league-forward">
          arrow_forward_ios
        </span>
      </div>
      <h2 class="tip">Hold Your Finger</h2>
      <div
        class="hold-area"
        @touchstart="startHold"
        @touchend="endHold"
      >
        <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': this.holding }">
      </div>
      <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
      <div class="ton-connect-wrapper">
        <div id="ton-connect"></div>
      </div>
</template>

<script>
import mockLevels from '@/data/mockLevels.ts';
import { TonConnectUI } from '@tonconnect/ui';

export default {
  data() {
    return {
      holdTime: 0,
      money: 0,
      holding: false,
      intervalId: null,
      currentLevel: { name: '', color: '#000000', coins_from: 0 },
      nextLevelPercentage: 0
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
            this.updateLevel();
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
      return number.toString().includes(".") ? number.toString() : number.toString() + ".0";
    },
    isMobile() {
      return true;
    },
    printAgent() {
      return navigator.userAgent;
    },
    testhandler(object) {
      if (!window.Telegram.WebApp.isExpanded) {
        this.endHold();
        window.Telegram.WebApp.expand();
      }
    },
    getLevel() {
      for (let i = mockLevels.length - 1; i >= 0; i--) {
        if (this.money >= mockLevels[i].coins_from) {
          return mockLevels[i];
        }
      }
      return { name: 'Bronze', color: '#cd7f32', coins_from: 1 };
    },
    updateLevel() {
      this.currentLevel = this.getLevel();
      const nextLevel = mockLevels.find(level => level.coins_from > this.money) || this.currentLevel;
      const previousLevel = mockLevels[mockLevels.indexOf(nextLevel) - 1] || { coins_from: 0 };
      const progressInCurrentLevel = this.money - previousLevel.coins_from;
      const levelRange = nextLevel.coins_from - previousLevel.coins_from;
      this.nextLevelPercentage = Math.min((progressInCurrentLevel / levelRange) * 100, 100).toFixed(0);
    }
  },
  mounted() {
    const tonConnectUI = new TonConnectUI({
        manifestUrl: 'https://firebasestorage.googleapis.com/v0/b/keepcoin-142a7.appspot.com/o/manifest.json?alt=media&token=07c6dcb3-0ed3-48f1-ab8e-c26495b8147c',
        buttonRootId: 'ton-connect'
    });
    this.updateLevel();
  }
};
</script>

<style scoped>
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
  opacity: 0.95;
}
.hold-button {
  width: 100%;
  border-radius: 50%;
  transition: .1s;
}
.hold-button-active {
  scale: 0.93;
}
.tip {
  margin-top: 50px;
}
@media (min-width: 768px) {
  .hold-area {
    width: 300px;
  }
}
.money {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  padding-top: 30px;
  font-weight: 700;
}
.leave-desktop {
  font-size: 72px;
  font-weight: 600;
}
.mini-logo {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 10px;
}
.league {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}
.league-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 7px;
}
.league-forward {
  margin-left: 5px;
}
.ton-connect-wrapper {
  margin-left: 15px;
  margin-top: 15px;
}
.ton-logo {
  width: 25px;
  height: 25px;
  margin-right: 3px;
}
.ton-connect {
  background-color: #248BDA;
  border-radius: 50px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 20px;
  font-size: 12px;
  display: flex;
  align-items: center
}
</style>