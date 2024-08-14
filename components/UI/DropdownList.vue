<template>
    <div class="DropDownList">
      <el-select-v2
        v-model="value"
        :options="options"
        placeholder="Выберите город"
        style="width: 240px; margin-right: 16px; vertical-align: middle"
        multiple
        clearable
      />
    </div>
  </template>
  
  <script>
  import { ElSelectV2 } from "element-plus";
  import { ref } from "vue";
  export default {
    components: {
      ElSelectV2,
    },
    setup() {
      const value = ref([]);
      const cities = [
        'Москва',
        'Санкт-Петербург',
        'Ростов-на-Дону'
      ];
      const options = cities.map((city, idx) => ({
        value: idx + 1,
        label: city,
        class: 'custom-option'
      }));
  
      return {
        value,
        options
      }
    }
  }
  </script>
  
  <style scoped>
  .el-select-v2__selected-item .custom-option {
    color: #409EFF;
  }
  .DropDownList {
      margin-top: 80px;
  }
  </style>
  