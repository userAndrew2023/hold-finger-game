<template>
  <div class="money">
    <img src="@/assets/image.png" class="mini-logo">  
    <div>{{ currentUser.balance }}</div>
  </div>
  <h2 class="tip">Hold Your Finger</h2>
  <div
    class="hold-area"
    @touchstart="startHold"
    @touchend="endHold"
  >
    <img src="@/assets/image.png" :class="{ 'hold-button': true, 'hold-button-active': holding }">
  </div>
  <p>Time: {{ formatSeconds(holdTime) }} seconds</p>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import mockLevels from '@/data/mockLevels';
import { TelegramUser } from "../models/TelegramUser";
import telegramUserService from "../services/TelegramUserService";

export default {
  setup() {
    const holdTime = ref(0);
    const holding = ref(false);
    let intervalId: number | null = null;
    const currentLevel = ref({ name: '', color: '#000000', coins_from: 0 });
    const nextLevelPercentage = ref("");
    const currentUser = ref<TelegramUser>({
      id: null,
      created_at: null,
      updated_at: null,
      balance: 0,
      telegram_id: "",
      telegram_username: "",
      referral_id: null      
    });

    const startHold = (event: TouchEvent) => {
      if (!holding.value) {
        event.preventDefault();
        holding.value = true;
        holdTime.value = 0;
        let oldHeight = (window as any).Telegram.WebApp.viewportHeight;
        intervalId = window.setInterval(() => {
          if (oldHeight != (window as any).Telegram.WebApp.viewportHeight) {
            endHold();
            return;
          }
          oldHeight = (window as any).Telegram.WebApp.viewportHeight;
          holdTime.value += 0.1;
          holdTime.value = Number(holdTime.value.toFixed(1));
          if (Number.isInteger(holdTime.value)) {
            currentUser.value.balance += 1;
          }
        }, 100);
      }
    };

    const endHold = () => {
      if (holding.value) {
        holding.value = false;
        if (intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
        telegramUserService.updateUser(currentUser.value)
        .then(updatedUser => {
          currentUser.value = updatedUser;
        });
      }
    };

    const formatSeconds = (number: number): string => {
      return number.toString().includes(".") ? number.toString() : number.toString() + ".0";
    };

    const getLevel = () => {
      for (let i = mockLevels.length - 1; i >= 0; i--) {
        if (currentUser.value.balance >= mockLevels[i].coins_from) {
          return mockLevels[i];
        }
      }
      return { name: 'Bronze', color: '#cd7f32', coins_from: 1 };
    };

    const fetchUser = async () => {
      const { id, username }= (window as any).Telegram.WebApp.initDataUnsafe.user;
      await telegramUserService.getUserByTelegramId(id).then(user => {
        if (!user) {
          const newUser: TelegramUser = {
            id: null,
            created_at: null,
            updated_at: null,
            balance: 0,
            telegram_id: id,
            telegram_username: username,
            referral_id: null
          };
          telegramUserService.createUser(newUser)
          .then(createdUser => {
            currentUser.value = createdUser;
          });
        } else {
          currentUser.value = user;
        }
      });
    }

    onMounted(async () => {
      await fetchUser();
    });

    return {
      holdTime,
      holding,
      currentLevel,
      nextLevelPercentage,
      startHold,
      endHold,
      formatSeconds,
      currentUser,
    };
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
    width: 200px;
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
</style>
