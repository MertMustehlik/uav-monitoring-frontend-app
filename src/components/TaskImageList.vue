<template>
  <a-descriptions title="Captured Images"></a-descriptions>
  <div class="d-flex flex-wrap gap-5">
    <div v-for="image in images" :key="image.id">
      <img :src="`${API_URL()}/uploads/${image.path}`" :alt="`Image ${image.id}`"
           style="width: 300px; height: auto;"/>
    </div>
  </div>
</template>
<script>

import {API_URL} from "@/api/index.js";

export default {
  props: ["images"],
  methods: {
    API_URL() {
      return API_URL
    }

  },
};
</script>