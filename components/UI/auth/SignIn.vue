<template>
    <div>
        <div class="login-dialog__form">
            <Login v-model:email="loginForm.email"  />
            <Password  v-model:password="loginForm.password"/>
            <div class="login-dialog__form-item login-dialog__checkbox">
                <el-checkbox v-model="loginForm.rememberMe">
                    Запомнить пароль?
                </el-checkbox>
            </div>
            <div class="login-dialog__form-item login-dialog__submit">
                <el-button type="primary" @click="login">Войти</el-button>
            </div>
            <div class="login-dialog__register">
                <span>Нет аккаунта?</span>
                <el-button
                    @click="$emit('someEventLog')"
                    class="login-dialog__register-link"
                >
                
                    Зарегистрироваться
                </el-button>
            </div>
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
import { ElButton, ElCheckbox } from "element-plus";
import Login from "./personality/Login.vue";
import Password from "./personality/Password.vue";  
const emit = defineEmits(['login-success']);

const loginForm = ref({
    email: "",
    password: "",
    rememberMe: false,
});
const login = () => {
    console.log("Вход с данными:", loginForm.value);
    if (loginForm.value.email === 'admin' && loginForm.value.password === 'admin') {
        navigateTo('/account/company');
        emit('login-success');
    } else if (loginForm.value.email === 'viktor' && loginForm.value.password === 'viktor') {
        navigateTo('/account/student');
        emit('login-success');
    } else if (loginForm.value.email === 'sasha' && loginForm.value.password === 'sasha') {
        navigateTo('/account/student');
        emit('login-success');
    } else {
        alert('Аккаунта не существует');
    }
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
    max-width: 186px;
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
