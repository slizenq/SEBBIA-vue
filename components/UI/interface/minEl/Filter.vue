<template>
    <el-button type="primary" :icon="Filter" plain @click="signup">Фильтр</el-button>
</template>

<script setup>
import { ElButton } from "element-plus";
import { Filter } from "@element-plus/icons-vue";
import axios from "axios";

const signup = async () => {
  try {
    const response = await axios.post('http://localhost:3000/signup', {
      email: "viktor.rak101@gmail.com",
      password: "ShaddowFixend123!",
      isCompany: false
    });
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error during signUp:", error);
  }
};
</script>