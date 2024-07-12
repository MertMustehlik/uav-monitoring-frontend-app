<template>
  <a-table :dataSource="dataSource" :columns="columns"/>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Created At',
          dataIndex: 'created_at',
          key: 'created_at',
        }
      ],
    };
  },
  props: ["dataSource"],
  methods: {

  },
  mounted() {

  }
};
</script>

