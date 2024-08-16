<!-- <template>
    <el-button @click="openDialog" type="primary">Войти</el-button>
    <el-dialog v-model="outerVisible" title="Тип заголовок окна" width="1200">
        <div v-for="index in 30" :key="index">
            <div>Содержимое модального окна</div>
        </div>
    </el-dialog>
</template>

<script setup>
import { ElButton, ElDialog } from "element-plus";
import { ref } from "vue";

const outerVisible = ref(false);
const openDialog = () => {
    outerVisible.value = true;
};
</script> -->

<template>
    <div>
        <el-button @click="openDialog" type="primary">Войти</el-button>

        <!-- Компонент Диалогового окна -->
        <el-dialog
            v-model="isDialogVisible"
            title="Вход"
            width="480px"
            size="large"
            height="488px"
            class="login-dialog"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
        >
            <!-- Форма входа -->
            <div class="login-dialog__form">
                <el-form :model="loginForm" class="login-dialog__form-content">
                    <!-- Поле для ввода Email -->
                    <el-form-item prop="email" class="login-dialog__form-item">
                        <p class="login">Логин</p>
                        <el-input
                            v-model="loginForm.email"
                            placeholder="Электронная почта"
                            class="login-dialog__input"
                        />
                    </el-form-item>

                    <!-- Поле для ввода пароля -->
                    <el-form-item
                        prop="password"
                        class="login-dialog__form-item"
                    >
                        <p class="password">Пароль</p>
                        <el-input
                            v-model="loginForm.password"
                            placeholder="Пароль"
                            type="password"
                            show-password
                            class="login-dialog__input"
                        />
                    </el-form-item>

                    <!-- Чекбокс "Запомнить меня" -->
                    <el-form-item class="login-dialog__form-item">
                        <el-checkbox v-model="loginForm.rememberMe"
                            >Запомнить пароль?</el-checkbox
                        >
                    </el-form-item>

                    <!-- Кнопка входа -->
                    <el-form-item class="login-dialog__form-item">
                        <el-button
                            type="primary"
                            @click="login"
                            class="login-dialog__submit-button"
                            >Войти</el-button
                        >
                    </el-form-item>

                    <!-- Ссылка на регистрацию -->
                    <div class="login-dialog__register">
                        <span>Нет аккаунта?</span>
                        <el-button
                            type="text"
                            @click="register"
                            class="login-dialog__register-link"
                            >Зарегистрироваться</el-button
                        >
                    </div>

                    <!-- Политика конфиденциальности -->
                    <div class="login-dialog__privacy-policy">
                        При регистрации и входе вы соглашаетесь с
                        <el-link
                            type="primary"
                            href="#"
                            class="login-dialog__link"
                            >политикой конфиденциальности</el-link
                        >
                    </div>
                </el-form>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import {
    ElButton,
    ElDialog,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
} from "element-plus";

const isDialogVisible = ref(false);

const loginForm = ref({
    email: "",
    password: "",
    rememberMe: false,
});

const openDialog = () => {
    isDialogVisible.value = true;
};

const login = () => {
    // Реализуйте свою логику входа здесь
    console.log("Вход с данными:", loginForm.value);
    isDialogVisible.value = false;
};

const register = () => {
    // Реализуйте логику регистрации или навигации здесь
    console.log("Переход на страницу регистрации");
};
</script>

<style scoped>
.el-dialog__header {
    font-size: 24px;
    font-weight: bold;
}

.login-dialog__form {
    padding: 20px;
}

.login-dialog__form-content {
    display: flex;
    flex-direction: column;
}

.login-dialog__form-item {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.login-dialog__input {
    flex-grow: 1;
}

.login-dialog__submit-button {
    display: flex;
    height: 40px;
    padding: 8px 20px;
    margin-bottom: 24px;
}

.login-dialog__register {
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
}

.login-dialog__register-link {
    margin-left: 5px;
    font-size: 14px;
}

.login-dialog__privacy-policy {
    text-align: center;
    margin-top: 20px;
    font-size: 12px;
}

.login-dialog__link {
    margin-left: 5px;
}
</style>
