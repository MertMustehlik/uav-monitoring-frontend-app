<template>
  <a-card title="Drones">
    <template #extra>
      <a-button type="primary" @click="showModal">Create Drone</a-button>
      <a-modal v-model:open="open" title="Create Drone" :footer="null">
        <a-form layout="vertical" :model="formState" class="mt-4">
          <a-form-item label="Name">
            <a-input v-model:value="formState.name"/>
          </a-form-item>
          <a-form-item class="text-center mt-2">
            <a-button @click="hideModal">Cancel</a-button>
            <a-button type="primary" class="ms-2" @click="onSubmit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </template>
      <DroneTable :dataSource="dataSource"/>
  </a-card>
</template>

<script>
import DroneTable from "@/components/tables/DroneTable.vue";
import {createDrone, getDrones} from "@/api/droneApi.js";
import {notification} from "ant-design-vue";
import moment from "moment/moment.js";

export default {
  components: {DroneTable},
  data(){
    return {
      open: false,
      formState: {
        name: ""
      },
      dataSource: []
    }
  },
  methods: {
    async fetchDrones() {
      try {
        const drones = await getDrones();
        let dataSource = []
        drones?.payload.map((item) => {
          dataSource.push({
            "key": item?.id,
            "name": item?.name,
            "created_at": moment(item?.created_at).format('DD-MM-YYYY'),
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
    async onSubmit(){
      const response = await createDrone(this.formState.name)

      if (response.success){
        this.dataSource.unshift({
          "key": response?.payload?.id,
          "id": response?.payload?.id,
          "name": response?.payload?.name,
          "created_at": moment(response?.created_at).format('DD-MM-YYYY'),
        })

        this.formState.name = ""
        this.open = false;

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
    }
  },
  mounted() {
    this.fetchDrones();
  }
};
</script>