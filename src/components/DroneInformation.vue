<template>
  <a-descriptions title="Drone Information">
    <a-descriptions-item label="Name">{{ task?.drone?.name }}</a-descriptions-item>
    <a-descriptions-item label="Created At">{{ moment(task?.drone?.created_at).format("DD-MM-YYYY") }}</a-descriptions-item>
  </a-descriptions>
</template>
<script>
import moment from "moment";

export default {
  computed: {
    moment() {
      return moment
    }
  },
  props: ["task"],
  methods: {

  },
  mounted() {
    console.log(this.task, "task")
  }
};
</script>