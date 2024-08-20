<!-- Пароль -->
<template>
    <div class="login-dialog__form-item">
        <label class="login-dialog__label">Подтверждение</label>
        <el-input
            v-model="loginForm.password"
            placeholder="Повторите пароль"
            type="password"
            class="login-dialog__input"
            :suffix-icon="Hide"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput } from "element-plus";
import { Hide } from "@element-plus/icons-vue";

const loginForm = ref({
    password: "",
});
</script>

<style scoped>
/* Элементы формы (Логин и Пароль) */
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}

/* Лейблы */
.login-dialog__label {
    white-space: nowrap;
    width: 114px;
    font-size: 14px;
    color: #333;
}

/* Поля ввода */
.login-dialog__input {
    flex-grow: 1;
    max-width: 306px;
}
</style>
