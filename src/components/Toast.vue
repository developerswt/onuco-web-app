<!-- Toast.vue -->

<template>
    <teleport to="body">
      <div v-if="visible" class="toast-container">
        <div :class="['toast', type]">{{ message }}</div>
      </div>
    </teleport>
  </template>
  
  <script>
  import { ref, watch, onMounted } from 'vue';
  
  export default {
    props: {
      message: String,
      type: String,
    },
    setup(props) {
      const visible = ref(false);
  
      // Watch for changes in the message prop
      watch(() => props.message, () => {
        visible.value = true;
  
        setTimeout(() => {
          visible.value = false;
        }, 3000);
      });
  
      return {
        visible,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add your styling for toast here */
  .toast-container {
    position: fixed;
    top: 20px;
    right: 20px;
  }
  
  .toast {
    padding: 10px;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
    transition: opacity 0.5s;
  }
  
  .toast.success {
    background-color: #28a745;
  }
  
  .toast.error {
    background-color: #dc3545;
  }
  </style>
  