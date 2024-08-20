<!-- // Регистрация // -->
<template>
    <div>
        <div class="login-dialog__form">
            <!-- Логин -->
            <Login />

            <!-- Пароль -->
            <Password />

            <!-- Повторить пароль -->
            <ReturnPass />

            <!-- Запомнить пароль -->
            <div class="login-dialog__form-item login-dialog__checkbox">
                <el-checkbox v-model="loginForm.rememberMe">
                    Запомнить пароль?
                </el-checkbox>
            </div>

            <!-- Ссылка на регистрацию -->
            <div class="login-dialog__register">
                <el-button type="primary" @click="register">
                    Зарегистрироваться
                </el-button>
            </div>

            <!-- Кнопка Войти -->
            <div class="login-dialog__form-item login-dialog__submit">
                <span>Есть аккаунт?</span>
                <el-button @click="login" class="login-dialog__register-link"
                    >Войти</el-button
                >
            </div>

            <!-- Политика конфиденциальности -->
            <div class="login-dialog__privacy-policy">
                При регистрации и входе <br />вы соглашаетесь с
                <a class="login-dialog__link" href=""
                    >политикой конфиденциальности</a
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElButton, ElDialog, ElInput, ElCheckbox, ElLink } from "element-plus";
import Login from "./Login";
import Password from "./Password";
import ReturnPass from "./ReturnPass.vue";

const loginForm = ref({
    email: "",
    password: "",
    rememberMe: false,
});

const login = () => {
    console.log("Вход с данными:", loginForm.value);
};

const register = () => {
    console.log("Переход на страницу регистрации");
};
</script>

<style scoped>
/* Общие стили для формы */
.login-dialog__form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* Чекбокс */
.login-dialog__checkbox {
    margin-top: 8px;
}

/* Кнопка Войти */
.login-dialog__submit {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
}

.login-dialog__submit button {
    padding: 8px 20px;
    height: 40px;
}

/* Стили для ссылки на регистрацию */
.login-dialog__register {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    gap: 12px;
}

.login-dialog__register-link {
    /* color: #409eff; */
    max-width: 82px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    padding: 8px 20px;
}

/* Политика конфиденциальности */
.login-dialog__privacy-policy {
    margin-top: 16px;
    font-size: 12px;
    color: #999;
}

.login-dialog__link {
    color: #409eff;
    font-size: 12px;
}
</style>
