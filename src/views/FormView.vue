<template>
  <div>
    <form @submit.prevent="createUserForm">
      <div>
        <label for="name">Adınız:</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div>
        <label for="email">E-posta Adresiniz:</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div>
        <label for="message">Mesajınız:</label>
        <textarea id="message" v-model="formData.message" rows="4" required></textarea>
      </div>
      <button type="submit">Gönder</button>
    </form>

    <div class="row">
      <div class="col-6 bg-danger">123</div>
      <div class="col-6 bg-primary">3456</div>
    </div>
    <div>Göstermelik</div>
    <div v-for="(value, key) in formData" :key="key">
      <p>{{key}} ==> {{value}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: 'mert',
        email: 'mert@gmail.co',
        message: 'test'
      }
    };
  },
  methods: {
    createUserForm() {
      console.log('Form verileri:', this.formData);
    }
  }
};
</script>

<style scoped>
/* İsteğe bağlı CSS kuralları buraya gelebilir */
</style>
