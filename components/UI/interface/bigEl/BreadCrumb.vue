<template>
    <el-breadcrumb separator="/" class="breadMargin">
        <el-breadcrumb-item
            v-for="(item, index) in breadcrumbItems"
            :key="index"
            :to="{ path: item.path }"
        >
            {{ item.label }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
import { defineProps } from 'vue';

const props = defineProps({
    breadcrumbItems: {
        type: Array,
        required: true
    }
});
</script>

<style>
.breadMargin {
    margin-top: 80px;
}
</style>