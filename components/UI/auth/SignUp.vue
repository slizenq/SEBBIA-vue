<template>
    <div>
        <el-form
            ref="ruleFormRef"
            :model="loginForm"
            :rules="rules"
            size="default"
        >
            <Login v-model:email="loginForm.email" />
            <Password v-model:password="loginForm.password" />
            <ReturnPass v-model:passwordConfirm="loginForm.passwordConfirm" />

            <div class="login-dialog__form-item login-dialog__checkbox">
                <el-checkbox v-model="loginForm.rememberMe">
                    Запомнить пароль?
                </el-checkbox>
            </div>
            <div class="login-dialog__form-item login-dialog__submit">
                <el-button type="primary" @click="handleRegistration"
                    >Зарегистрироваться</el-button
                >
            </div>
            <div class="login-dialog__register">
                <span>Есть аккаунт?</span>
                <el-button
                    @click="$emit('someEventReg')"
                    class="login-dialog__register-link"
                    type="primary"
                    plain
                >
                    Войти
                </el-button>
            </div>
            <div class="login-dialog__privacy-policy">
                При регистрации и входе <br />вы соглашаетесь с
                <a class="login-dialog__link" href="">политикой конфиденциальности</a>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";
import { ElButton, ElCheckbox, ElForm, ElNotification } from "element-plus";
import Login from "./personality/Login.vue";
import Password from "./personality/Password.vue";
import ReturnPass from "./personality/ReturnPass.vue";
import { register } from "./Authentication";

const ruleFormRef = ref<InstanceType<typeof ElForm> | null>(null);
    const props = defineProps({
  whoUser: {
    type: Boolean,
    default: null, 
  },
});
const loginForm = ref({
    email: "",
    password: "",
    passwordConfirm: "",
    isCompany: props.whoUser ? true : false,
    rememberMe: false,
});

const rules = ref({
    email: [
        {
            required: true,
            message: "Введите адрес электронной почты",
            trigger: "blur",
        },
        {
            type: "email",
            message: "Введите корректный адрес электронной почты",
            trigger: ["blur", "change"],
        },
    ],
    password: [
        { required: true, message: "Введите пароль", trigger: "blur" },
        {
            min: 6,
            message: "Пароль должен содержать минимум 6 символов",
            trigger: ["blur", "change"],
        },
    ],
    passwordConfirm: [
        { required: true, message: "Подтвердите пароль", trigger: "blur" },
        {
            validator: (rule, value, callback) => {
                if (value !== loginForm.value.password) {
                    callback(new Error("Пароли не совпадают"));
                } else {
                    callback();
                }
            },
            trigger: ["blur", "change"],
        },
    ],
});

const handleRegistration = async () => {
    if (!ruleFormRef.value) return;

    try {
        await ruleFormRef.value.validate();
        const isRegisterSuccessful = await register(
            loginForm.value.email,
            loginForm.value.password,
            loginForm.value.isCompany
        );
        if (isRegisterSuccessful) {
            ElNotification({
                title: "Регистрация успешна",
                duration: 2000,
                type: "success",
                showClose: false,
            });
        } else {
            ElNotification({
                title: "Произошла ошибка при отправке",
                message: "Проверьте правильно ли вы заполнили данные",
                duration: 2000,
                type: "error",
                showClose: false,
            });
        }
    } catch (error) {
        console.error("Ошибка валидации", error);
    }
};
</script>

<style scoped>
/* Стили формы */
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
    margin-top: 30px;
    max-width: 82px;
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    padding: 8px 20px;
}
.login-dialog__privacy-policy {
    margin-top: 0;
    font-size: 12px;
    color: #999;
}
.login-dialog__link {
    color: #409eff;
    font-size: 12px;
}
</style>
