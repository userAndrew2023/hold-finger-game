<template>
  <div v-if="visible" class="toast">
    {{ message }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const visible = ref(false);
    const message = ref('');
    let timeout = null;

    const showToast = (msg, duration = 1000) => {
      console.log("Showing toast with message:", msg);
      message.value = msg;
      visible.value = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        visible.value = false;
      }, duration);
    };

    return {
      visible,
      message,
      showToast,
    };
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 90px;
  color: #fff;
  padding: 10px 20px;
}

.toast.show {
  opacity: 1;
}
</style>
