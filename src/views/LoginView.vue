<template>
  <div class="d-flex justify-content-center align-items-center">
    <div class="card" style="margin-top: 12rem">
      <div class="card-body">
        <h5 class="mx-5 mt-2">UAV Monitoring - Login</h5>
        <a-form layout="vertical" :model="formState" class="mt-4 mx-3">
          <a-form-item label="E-mail">
            <a-input v-model:value="formState.email"/>
          </a-form-item>
          <a-form-item label="Password">
            <a-input v-model:value="formState.password" type="password"/>
          </a-form-item>
          <a-form-item class="text-center mt-2">
            <a-button type="primary" class="ms-2" @click="onSubmit">Login</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>
<script>
import {notification} from "ant-design-vue";

export default {
  data() {
    return {
      token: "",
      formState: {
        email: "admin@admin.com",
        password: "123123"
      },
    }
  },
  methods: {
    async onSubmit() {
      let res = await this.$store.dispatch('auth/login', this.formState)
      if (res?.success) {
        notification["success"]({
          message: 'Success',
          description: res?.message ?? "",
        });

        this.$router.push(`/`);
      } else {
        notification["error"]({
          message: 'Error',
          description: res?.message ?? "",
        });
      }
    }
  }
};
</script>