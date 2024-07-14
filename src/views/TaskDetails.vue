<template>
  <a-card title="Tasks">
    <template #extra>
      <a-button type="primary" @click="showConfirmExecute" v-if="showExecuteBtn">Execute</a-button>
    </template>
    <a-descriptions title="Task Information" class="mb-3">
      <a-descriptions-item label="Name">{{ task?.name }}</a-descriptions-item>
      <a-descriptions-item label="Description">{{ task?.description }}</a-descriptions-item>
      <a-descriptions-item label="Execute At">{{ task?.execute_at ? moment(task?.execute_at).format("DD-MM-YYYY HH:mm:ss") : "Not executed yet" }}</a-descriptions-item>
    </a-descriptions>
    <div class="mb-3"><DroneInformation :task="task"/></div>
    <div><TaskImageList :images="images"/></div>
  </a-card>
</template>

<script>
import {getTask, getImages, execute} from "@/api/taskApi.js";
import {notification} from "ant-design-vue";
import DroneInformation from "@/components/DroneInformation.vue";
import TaskImageList from "@/components/TaskImageList.vue";
import moment from "moment";
import { Modal } from 'ant-design-vue';
import {API_URL} from "../api/index.js";

export default {
  computed: {
    moment() {
      return moment
    }
  },
  data(){
    return {
      task: {},
      images: [],
      showExecuteBtn: false
    }
  },
  components: {TaskImageList, DroneInformation},
  props: {
    id: String
  },
  methods: {
    API_URL() {
      return API_URL
    },
    async fetchTask() {
      try {
        const taskRes = await getTask(this.id);
        if (taskRes.success){
          this.task = taskRes.payload;
          this.showExecuteBtn = !this.task.execute_at
        } else {
          this.$router.push(`/tasks`);
          notification["error"]({
            message: 'Error',
            description: taskRes?.message ?? "",
          });
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    },
    async fetchImages() {
      try {
        const imagesRes = await getImages(this.id);
        if (imagesRes.success){
          this.images = imagesRes.payload;
        } else {
          notification["error"]({
            message: 'Error',
            description: imagesRes?.message ?? "",
          });
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    },
    async fetchExecute() {
      try {
        const response = await execute(this.id);
        if (response.success){
          this.task.execute_at = response?.payload?.execute_at;
          this.showExecuteBtn = false;

          notification["success"]({
            message: 'Success',
            description: response?.message ?? "",
          });
        } else {
          notification["error"]({
            message: 'Error',
            description: response?.message ?? "",
          });
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    },
    showConfirmExecute(){
      Modal.confirm({
        title: 'Do you want to execute the task?',
        okText: "Yes",
        onOk: async () => {
          await this.fetchExecute();
          await this.fetchImages();
        },
        onCancel() {
          //
        }
      });
    }
  },
  mounted() {
    this.fetchTask()
    this.fetchImages()
  }
};
</script>