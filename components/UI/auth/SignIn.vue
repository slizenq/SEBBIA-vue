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

            <div class="login-dialog__form-item login-dialog__checkbox">
                <el-checkbox v-model="loginForm.rememberMe">
                    Запомнить пароль?
                </el-checkbox>
            </div>
            <div class="login-dialog__form-item login-dialog__submit">
                <el-button type="primary" @click="handleSubmit"
                    >Войти</el-button
                >
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
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElButton, ElCheckbox, ElForm } from "element-plus";
import Login from "./personality/Login.vue";
import { requestAccessToken } from "./Authentication";
import Password from "./personality/Password.vue";
import { ElNotification } from "element-plus";

const emit = defineEmits(["login-success"]);

const ruleFormRef = ref<InstanceType<typeof ElForm> | null>(null);

const loginForm = ref({
    email: "",
    password: "",
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
});

const handleSubmit = async () => {
    if (!ruleFormRef.value) return;

    try {
        await ruleFormRef.value.validate();
        const isLoginSuccessful = await requestAccessToken(
            loginForm.value.email,
            loginForm.value.password
        );

        if (isLoginSuccessful) {
            emit("login-success", false);
            ElNotification({
                title: "Вы вошли в аккаунт",
                duration: 1000,
                type: "success",
                showClose: false,
            });
        } else {
            ElNotification({
                title: "Произошла ошибка при авторизации",
                message: "Проверьте правильно ли вы заполнили данные",
                duration: 1000,
                type: "error",
                showClose: false,
            });
        }
    } catch (error) {
        console.error("Ошибка валидации", error);
    }
};
</script>
<style>
.img_margin {
    margin-top: 20px;
}
.el-notification {
    width: 484px;
    height: auto;
    background-color: rgba(236, 245, 255, 1);
    color: #409eff;
}

.el-notification__title {
    color: #409eff;
}

.el-notification__content p {
    color: #729078;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}
</style>
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
