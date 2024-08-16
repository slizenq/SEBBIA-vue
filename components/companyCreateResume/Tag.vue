<template>
    <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="light"
    >
        {{ item.label }}
    </el-tag>
</template>

<script setup>
import { ElTag } from "element-plus";
import { ref } from "vue";

const items = ref([{ type: "info", label: "Айти" }]);
</script>
