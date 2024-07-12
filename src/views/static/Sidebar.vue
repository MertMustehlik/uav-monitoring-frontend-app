<template>
  <a-layout-sider
      breakpoint="lg"
      collapsed-width="0"
  >
    <div class="d-flex flex-column justify-content-center align-items-center"
         style="height: 65px; border-bottom: 1px dashed #939393">
      <h4 class="text-white">Droneqube</h4>
    </div>
    <a-menu theme="dark" mode="inline" class="mt-4">
      <a-menu-item key="1">
        <RouterLink to="/drones" style="text-decoration: none">
          <span class="nav-text">Drones</span>
        </RouterLink>
      </a-menu-item>
      <a-menu-item key="2">
        <RouterLink to="/tasks" style="text-decoration: none">
          <span class="nav-text">Tasks</span>
        </RouterLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>

</style>
