<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Главная</el-breadcrumb-item>
        <el-breadcrumb-item>Поиск компании</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus';

export default {
    components: {
        ElBreadcrumb,
        ElBreadcrumbItem
    }
}
</script>
