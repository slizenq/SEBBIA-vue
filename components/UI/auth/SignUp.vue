<template>
    <div>
        <div class="login-dialog__form">
            <Login  v-model:email="loginForm.email"/>
            <Password v-model:password="loginForm.password"/>
            <ReturnPass v-model:passwordConfirm="loginForm.passwordConfirm"/>
            <div class="login-dialog__form-item login-dialog__checkbox">
                <el-checkbox v-model="loginForm.rememberMe">
                    Запомнить пароль?
                </el-checkbox>
            </div>
            <div class="login-dialog__form-item login-dialog__submit">
                <el-button type="primary" 
                    @click="registration"
                    >Зарегистрироваться</el-button
                >
            </div>
            <div class="login-dialog__register">
                <span>Есть аккаунт?</span>
                <el-button
                    @click="$emit('someEventReg')"
                    class="login-dialog__register-link"
                >
                    Войти
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
import { ref, defineProps } from "vue";
import { ElButton, ElCheckbox } from "element-plus";
import Login from "./personality/Login.vue";
import Password from "./personality/Password.vue";
import ReturnPass from "./personality/ReturnPass.vue";
import { register } from "./Authentication";

const props = defineProps({
  whoUser: {
    type: Boolean,
    default: null, 
  },
});

const loginForm = ref({
  email: "",
  password: "",
  is_company: props.whoUser ? true : false,
  rememberMe: false,
});

const registration = async () => {
  const isRegisterSuccessful = await register(loginForm.value.email, loginForm.value.password, loginForm.value.is_company);
  if (isRegisterSuccessful) {
        alert("Регистрация успешна")
    } else {
        alert("Ошибка при регистрации");
    }
};
</script>

<style scoped>
.login-dialog__form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.login-dialog__checkbox {
    margin-top: 8px;
}
.login-dialog__submit {
    display: flex;
    font-size: 14px;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    max-width: 186px;
}
.login-dialog__submit button {
    padding: 8px 20px;
    height: 40px;
}
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
