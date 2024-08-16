<template>
        <div class="wrap">
            <div class="flex gap-4 items-center">
                <el-input v-model="input" :placeholder="printedText" />
            </div>
            <el-button type="primary">Найти компанию</el-button>
        </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";

const input = ref("");
const printedText = ref("Напиши место практики");

</script>

<style scoped>
.el-button {
    max-width: 154px;
    height: 40px;
    padding: 8px 20px;
}
.el-input {
    max-width: 1561px;
    width: 70vw;
    height: 40px;
}
.el-input__inner {
    height: 100px;
}
.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 90vw;
}
</style>
