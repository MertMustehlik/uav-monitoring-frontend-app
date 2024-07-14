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
      let res = await this.$store.dispatch('auth/logout')
      if (res?.success) {
        notification["success"]({
          message: 'Success',
          description: res?.message ?? "",
        });

        this.$router.push(`/auth/login`);
      } else {
        notification["error"]({
          message: 'Error',
          description: res?.message ?? "",
        });
      }
    }
  }
}
</script>

<style scoped>

</style>
