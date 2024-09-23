<template>
    <div class="edit-resume">
        <div class="edit-resume__header">
            <p class="edit-resume__title">Резюме</p>
            <el-button class="edit-resume__btn">
                Предпросмотр <el-icon><TopRight /></el-icon>
            </el-button>
        </div>
        <div class="edit-resume__content">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item>
                    <p>
                        Направление
                        <el-icon
                            ><InfoFilled color="rgba(64, 158, 255, 1)"
                        /></el-icon>
                    </p>
                    <el-select
                        v-model="value"
                        placeholder="Select"
                        size="large"
                        style="width: 240px"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <p>Расскажи о себе</p>
                    <el-input
                        v-model="textarea1"
                        style=""
                        autosize
                        type="textarea"
                        placeholder="Please input"
                        show-word-limit
                        maxlength="100"
                    />
                </el-form-item>
                <el-form-item>
                    <p>О проектах</p>
                    <el-input
                        v-model="textarea1"
                        style=""
                        autosize
                        type="textarea"
                        placeholder="Please input"
                        show-word-limit
                        maxlength="100"
                    />
                </el-form-item>
                <el-form-item>
                    <p>Навыки</p>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { TopRight, InfoFilled } from "@element-plus/icons-vue";
import {
    ElButton,
    ElIcon,
    ElForm,
    ElInput,
    ElSelect,
    ElOption,
} from "element-plus";

import { ref } from "vue";
const textarea1 = ref("");

const value = ref("");

const options = [
    {
        value: "Курское",
        label: "Курское",
    },
    {
        value: "Донецкое",
        label: "Донецкое",
    },
    {
        value: "Луганское",
        label: "Луганское",
    },
];
</script>

<style scoped>
.edit-resume__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit-resume__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.edit-resume {
    padding: 12px 24px;
}
</style>
