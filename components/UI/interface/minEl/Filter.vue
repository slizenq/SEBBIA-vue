<template>
    <el-button type="primary" :icon="Filter" plain @click="dad">Фильтр</el-button>
</template>

<script setup>
import { ElButton } from "element-plus";
import { Filter } from "@element-plus/icons-vue";
// import { createVacancy } from "~/assets/proto/client";
// import { getCompany } from "~/assets/proto/company";
// import { authh } from "~/assets/proto/authh";
// import main from "~/assets/proto/test/client.cjs";
const dad = function () {
    // getCompany('dasdasd')
    // createVacancy()
    // authh()
    // main()
}
</script>
