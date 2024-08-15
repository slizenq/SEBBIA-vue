<template>
    <el-button @click="openDialog" type="primary">Войти</el-button>
    <el-dialog v-model="outerVisible" title="Тип заголовок окна" width="1200">
      <div v-for="index in 30" :key="index">
        <div>Содержимое модального окна</div>
      </div>
    </el-dialog>
  </template>
  
  <script>
  import { ElButton, ElDialog } from "element-plus";
  import { ref } from "vue";
  
  export default {
    components: {
      ElButton,
      ElDialog,
    },
    setup() {
      const outerVisible = ref(false);
  
      const openDialog = () => {
        outerVisible.value = true; 
      };
  
      return {
        outerVisible,
        openDialog,
      };
    },
  };
  </script>