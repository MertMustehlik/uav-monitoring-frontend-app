<template>
  <a-card title="Tasks">
    <template #extra>
      <a-button type="primary" @click="showModal">Create Task</a-button>
      <a-modal v-model:open="open" title="Create Task" :footer="null">
        <a-form layout="vertical" :model="formState" class="mt-4">
          <a-form-item label="Name">
            <a-input v-model:value="formState.name"/>
          </a-form-item>
          <a-form-item label="Description">
            <a-textarea :rows="2" v-model:value="formState.description"/>
          </a-form-item>
          <a-form-item label="Drone">
            <a-select
                v-model:value="formState.droneId"
                :options="droneOptions"
                placeholder="Please select"
                style="width: 100%"
            ></a-select>
          </a-form-item>
          <a-form-item class="text-center mt-2">
            <a-button @click="hideModal">Cancel</a-button>
            <a-button type="primary" class="ms-2" @click="onSubmit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </template>
    <TaskTable :dataSource="dataSource"/>
  </a-card>
</template>

<script>
import TaskTable from "@/components/tables/TaskTable.vue";
import { getDrones } from "@/api/droneApi.js";
import {createTask, getTasks} from "@/api/taskApi.js";
import {notification} from "ant-design-vue";

export default {
  components: {TaskTable},
  data() {
    return {
      open: false,
      droneOptions: [],
      dataSource: [],
      formState: {
        name: '',
        description: '',
        droneId: ''
      }
    };
  },
  methods: {
    async fetchTasks() {
      try {
        const tasks = await getTasks();
        let dataSource = []
        tasks?.payload?.map((item) => {
          dataSource.push({
            "key": item?.id,
            "id": item?.id,
            "name": item?.name,
            "description": item?.description,
            "drone": `${item?.drone?.id} | ${item?.drone?.name}`
          })
        })

        this.dataSource = dataSource
      } catch (error) {
        console.error("Error fetching drones:", error);
      }
    },
    showModal() {
      this.open = true;
    },
    hideModal() {
      this.open = false;
    },
    async fetchDrones() {
      try {
        const drones = await getDrones();
        let droneOptions = []
        drones?.payload?.map((item) => {
          droneOptions.push({
            "label": `${item?.id} | ${item?.name}`,
            "value": item?.id,
          })
        })

        this.droneOptions = droneOptions
      } catch (error) {
        console.error("Error fetching drones:", error);
      }
    },
    async onSubmit(){
      const createTaskRes = await createTask(this.formState.name, this.formState.description, this.formState.droneId)

      if (createTaskRes.success){
        this.dataSource.unshift({
          "key": createTaskRes?.payload?.id,
          "id": createTaskRes?.payload?.id,
          "name": createTaskRes?.payload?.name,
          "description": createTaskRes?.payload?.description,
          "drone": `${createTaskRes?.payload?.drone?.id} | ${createTaskRes?.payload?.drone?.name}`
        })

        this.formState.name = ""
        this.formState.description = ""
        this.formState.droneId = ""
        this.open = false;

        notification["success"]({
          message: 'Success',
          description: createTaskRes?.message ?? "",
        });
      } else {
        notification["error"]({
          message: 'Error',
          description: createTaskRes?.message ?? "",
        });
      }
    }
  },
  mounted() {
    this.fetchDrones()
    this.fetchTasks()
  }
};
</script>

<!--<script setup>-->
<!--import { createTask } from "@/api/taskApi.js";-->

<!--import {reactive, toRaw} from 'vue';-->
<!--import {notification} from "ant-design-vue";-->

<!--const tasks = reactive([]);-->
<!--const formState = reactive({-->
<!--  name: '',-->
<!--  description: '',-->
<!--  droneId: ''-->
<!--});-->
<!--const onSubmit = async () => {-->
<!--  const createTaskRes = await createTask(formState.name, formState.description, formState.droneId)-->

<!--  if (createTaskRes.success){-->
<!--    console.log('submit!', toRaw(formState));-->

<!--    this.dataSource.push({-->
<!--      "key": "item?.id",-->
<!--      "id": "item?.id",-->
<!--      "name": "item?.name",-->
<!--      "description": "item?.description",-->
<!--      "drone": "dasfas"-->
<!--    })-->

<!--    console.log(this.dataSource, "datatadata")-->
<!--    notification["success"]({-->
<!--      message: 'Success',-->
<!--      description: createTaskRes?.message ?? "",-->
<!--    });-->
<!--  } else {-->
<!--    notification["error"]({-->
<!--      message: 'Error',-->
<!--      description: createTaskRes?.message ?? "",-->
<!--    });-->
<!--  }-->
<!--};-->
<!--</script>-->