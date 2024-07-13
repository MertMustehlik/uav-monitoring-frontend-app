<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <div class="text-end pe-5">
      <a-button type="primary" danger class="text-end" @click="logout">Logout</a-button>
    </div>
  </a-layout-header>
</template>

<script>
import {notification} from "ant-design-vue";

export default {
  name: 'Header',
  methods: {
    async logout() {
      localStorage.removeItem('jwtToken');

      notification["success"]({
        message: 'Success',
        description: "Exit made",
      });

      setTimeout(() => {
        window.location.href = "/auth/login"
      }, 100)
    }
  }
}
</script>

<style scoped>

</style>
