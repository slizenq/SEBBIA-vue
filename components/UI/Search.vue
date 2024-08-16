<template>
    <div class="search">
        <div class="wrap">
            <div class="flex gap-4 items-center">
                <el-input v-model="input" :placeholder="printedText" />
            </div>
            <Filter />
            <el-button type="primary">Найти компанию</el-button>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { ElInput, ElButton } from "element-plus";
import Filter from "./Filter.vue";

export default {
    components: {
        ElInput,
        ElButton,
    },
    setup() {
        const input = ref("");
        const printedText = ref("");

        const typeWriter = (text, index) => {
            if (index < text.length) {
                printedText.value += text.charAt(index);
                index++;
                setTimeout(() => typeWriter(text, index), 100);
            } else {
                setTimeout(() => {
                    printedText.value = "";
                    typeWriter("Напиши место практики", 0);
                }, 1000);
            }
        };

        onMounted(() => {
            typeWriter("Напиши место практики", 0);
        });

        return {
            input,
            printedText,
        };
    },
};
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

.search {
    margin-top: 100px;
}
.wrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    width: 90vw;
}
</style>
