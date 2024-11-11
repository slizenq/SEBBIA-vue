<!-- Пароль -->
<template>
    <el-form-item prop="password" class="login-dialog__form-item">
        <label class="login-dialog__label">Пароль</label>
        <el-input
            :model-value="password"
            placeholder="Пароль"
            type="password"
            class="login-dialog__input"
            show-password
            @input="updatePassword"
            clearable
        />
    </el-form-item>
</template>

<script setup lang="ts">
import { ElInput, ElFormItem } from "element-plus";
import { toRefs } from "vue";

const props = defineProps({
    password: String,
});

const emit = defineEmits(["update:password"]);

const { password } = toRefs(props);

const updatePassword = (value: string) => {
    emit("update:password", value);
};
</script>

<style scoped>
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
