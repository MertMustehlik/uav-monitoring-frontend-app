<script setup>
import {RouterView} from 'vue-router'
import Sidebar from "@/views/static/Sidebar.vue";
import Header from "@/views/static/Header.vue";
</script>

<template>
  <div v-if="!isLoginPage">
    <a-layout>
      <Sidebar/>
      <a-layout>
        <Header/>
        <a-layout-content style="min-height: 83vh" :style="{ margin: '24px 16px 0' }">
          <router-view/>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Droneqube ©2024 Created by <a href="https://www.linkedin.com/in/mert-m%C3%BCstehlik-778233222/"
                                        target="_blank">Mert Mustehlik</a>
        </a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<style scoped>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

</style>

<script>
export default {
  mounted() {
    // if (JWT_TOKEN) {
    //   this.$router.push(`/`);
    // }
    //check login istek at bir kere

  },
  computed: {
    isLoginPage() {
      return this.$route.name === 'login';
    }
  }
};
</script>