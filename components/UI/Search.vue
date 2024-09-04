<template>
    <div class="wrap">
        <div class="flex gap-4 items-center">
            <el-input
                v-model="input"
                :placeholder="printedText"
                clearable
                :prefix-icon="Search"
                @input="handleInput"
                @keydown.enter="emitSearch"
            />
        </div>
        <Filter />
        <el-button type="primary" @click="emitSearch" class="paddNone">Найти компанию</el-button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
import Filter from "./Filter.vue";
import { Search } from "@element-plus/icons-vue";

const input = ref("");
const printedText = ref("Напиши место практики");

const emit = defineEmits(["search-input"]);

// Обработчик ввода
const handleInput = (value) => {
    // console.log("Input value: ", value);
    input.value = value;
};

// Эмитим событие при нажатии на кнопку поиска или Enter
const emitSearch = () => {
    emit("search-input", input.value);
    navigateTo('./about')
};
</script>

<style scoped>
.el-button {
    max-width: 154px;
    height: 40px;
    padding: 8px 20px;
}
.el-input {
    max-width: 1461px;
    width: 65vw;
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
    max-width: 1450px;
    margin: 0 auto;
}
.paddNone {
    margin: 0;
}
</style>
