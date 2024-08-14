<template>
    <div class="search">
      <div class="wrap">
        <div class="flex gap-4 items-center">
          <el-input
            v-model="input"
            :placeholder="printedText"
            :prefix-icon="SearchIco"
          />
        </div>
        <el-button type="primary">Найти компанию</el-button>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import { ElInput, ElButton } from 'element-plus';
  
  export default {
    components: {
      ElInput,
      ElButton
    },
    setup(){
      const input = ref('');
      const printedText = ref('');
  
      const typeWriter = (text, index) => {
        if (index < text.length) {
          printedText.value += text.charAt(index);
          index++;
          setTimeout(() => typeWriter(text, index), 100); 
        } else {
          setTimeout(() => {
            printedText.value = '';
            typeWriter("Напиши место практики", 0);
          }, 1000); 
        }
      };
  
      onMounted(() => {
        typeWriter("Напиши место практики", 0);
      });
  
      return {
        input,
        printedText
      }
    }
  }
  </script>
  
  <style scoped>
  .el-button {
    height: 40px;
  }
  .el-input {
    width: 1350px;
    height: 40px;
  }
  .el-input__inner {
    height: 100px;
  }
  
  .search {
    margin-top: 100px;
  }
  .wrap {
    display: flex;
    align-items: center;
    gap: 10px
  }
  </style>
  