<template>
    <el-form-item prop="email" class="login-dialog__form-item">
        <label class="login-dialog__label">Логин</label>
        <el-input
            :model-value="email"
            placeholder="Электронная почта"
            class="login-dialog__input"
            @input="updateEmail"
            clearable
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { ElInput, ElFormItem } from "element-plus";
import { toRefs } from "vue";

const props = defineProps({
    email: String,
});

const emit = defineEmits(["update:email"]);

const { email } = toRefs(props);

const updateEmail = (value: string) => {
    emit("update:email", value);
};
</script>

<style scoped>
.validation-status {
    display: flex;
    flex-direction: column;
}
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.login-dialog__label {
    width: 70px;
    font-size: 14px;
    color: #333;
}
.login-dialog__input {
    flex-grow: 1;
    max-width: 350px;
}
</style>
