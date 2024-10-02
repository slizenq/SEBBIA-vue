<template>
    <el-button type="primary" :icon="Filter" plain @click="dad">Фильтр</el-button>
</template>

<script setup>
import { ElButton } from "element-plus";
import { Filter } from "@element-plus/icons-vue";
import { createVacancy } from "~/assets/proto/client";
const dad = function () {
    createVacancy()
}
</script>
