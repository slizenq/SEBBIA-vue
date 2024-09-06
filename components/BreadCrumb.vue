<template>
    <el-breadcrumb separator="/" class="breadMargin">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
        <el-breadcrumb-item>Поиск компании</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';
</script>

<style>
.breadMargin {
    margin-top: 80px;
}
</style>