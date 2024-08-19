<!-- Логин -->
<template>
    <div class="login-dialog__form-item">
        <label class="login-dialog__label">Логин</label>
        <el-input
            v-model="loginForm.email"
            placeholder="Электронная почта"
            class="login-dialog__input"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput } from "element-plus";

const loginForm = ref({
    email: "",
});
</script>

<style scoped>
/* Элементы формы (Логин и Пароль) */
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Лейблы */
.login-dialog__label {
    width: 80px;
    font-size: 14px;
    color: #333;
}

/* Поля ввода */
.login-dialog__input {
    flex-grow: 1;
    max-width: 230px;
}
</style>
