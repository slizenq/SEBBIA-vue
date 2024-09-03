<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" />
        <Progress/>
    </div>
</template>
  
<script setup>
import BreadCrumb from "~/components/BreadCrumb.vue";
import { ref } from "vue";
import Progress from "../../components/UI/Progress.vue"
  
const breadcrumbItems = ref(
        [
            { path: "x/xx/xxx", label: "Профиль" },
            { path: "x/xx/xxx", label: "Аккаунт" },
        ]
    );
</script>
  