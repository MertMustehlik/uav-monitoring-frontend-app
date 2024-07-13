<template>
  <a-table :dataSource="dataSource" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button type="primary" @click="handleView(record.key)">View</a-button>
      </template>
    </template>
  </a-table>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Drone',
          dataIndex: 'drone',
          key: 'drone',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
      ],
    };
  },
  props: {
    dataSource: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleView(taskId) {
      this.$router.push(`/tasks/${taskId}`);
    },
  },
  mounted() {
    //
  }
};
</script>

