<script setup>
import { notification } from 'ant-design-vue';
import { ref } from 'vue';

const message = ref('Notification Title');
const description = ref('description');
const openNotification = () => {
  notification.open({
    message: () => message.value,
    description: () => description.value,
  });
};

openNotification()
</script>