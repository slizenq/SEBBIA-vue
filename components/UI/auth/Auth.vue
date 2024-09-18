<template>
    <div>
        <el-button @click="openDialog" type="primary">Войти</el-button>

        <el-dialog
            v-model="isDialogVisible"
            :title="titleModal"
            width="480px"
            :close-on-click-modal="true"
            :close-on-press-escape="true"
            @close="resetDialog"
            class="login-dialog"
        >
            <el-collapse
                v-if="showModal"
                v-model="activeNames"
                @change="handleChange"
            >
                <div class="select">
                    <div v-for="item in items" :key="item.name">
                        <el-collapse-item
                            :title="item.title"
                            :name="item.name"
                            :style="{
                                border: item.isActive
                                    ? '1px solid #409EFF'
                                    : '1px solid #dcdfe6',
                                borderRadius: '5px',
                            }"
                        >
                            <div>
                                <p
                                    :style="{
                                        fontSize: item.isActive ? '16px' : '',
                                    }"
                                >
                                    {{ item.content }}
                                </p>
                            </div>
                        </el-collapse-item>
                    </div>
                </div>
                <div class="ss">
                    <el-button
                        type="primary"
                        @click="nextStep"
                        :disabled="activeNames.length === 0"
                        >Далее</el-button
                    >
                </div>
            </el-collapse>
            <SignIn
                v-if="!showSteps"
                :whoUser="whoUser"
                @login-success="handleLoginSuccess"
                @some-event-log="closeModalLogin"
            />
            <SignUp
                v-if="showSteps && selectedStep === 'signUp'"
                :whoUser="whoUser"
                @some-event-reg="closeModalReg"
            />
        </el-dialog>
    </div>
</template>
<script setup>
import { ref, provide } from "vue";
import { ElButton, ElDialog, ElCollapseItem, ElCollapse } from "element-plus";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";

const isDialogVisible = ref(false);
const openDialog = () => {
    isDialogVisible.value = true;
    titleModal.value = "Вход";
};
const activeNames = ref([]);
const items = [
    {
        name: "1",
        title: "Студент",
        content:
            "Наша компания ценит энтузиазм и стремление к профессиональному росту",
        isActive: false,
    },
    {
        name: "2",
        title: "Компания",
        content:
            "Если вы хотите найти практикантов и вырастить из них специалистов",
        isActive: false,
    },
];
const showSteps = ref(false);
const showModal = ref(false);
const selectedStep = ref("");
const titleModal = ref("Зарегистрироваться, как");
const whoUser = ref(null);

const nextStep = () => {
    if (activeNames.value.length === 1) {
        const activeComponent = items.find(
            (item) => item.name === activeNames.value[0]
        );
        if (activeComponent && activeComponent.name === "1") {
            whoUser.value = false;
        } else if (activeComponent && activeComponent.name === "2") {
            whoUser.value = true;
        } else {
            whoUser.value = null;
        }
        if (activeComponent.name === "1" || activeComponent.name === "2") {
            titleModal.value = "Регистрация";
            activeComponent.value = true;
            showModal.value = false;
            selectedStep.value = "signUp";
        }
    }
};

const closeModalLogin = () => {
    showModal.value = true;
    showSteps.value = true;
    titleModal.value = "Зарегистрироваться, как";
};
const closeModalReg = () => {
    titleModal.value = "Вход";
    showSteps.value = false;
    selectedStep.value = "";
};
const resetDialog = () => {
    activeNames.value = [];
    showSteps.value = false;
    showModal.value = false;
    selectedStep.value = "";
};
const handleLoginSuccess = () => {
    isDialogVisible.value = false;
};
const handleChange = (value) => {
    if (value.length > 1) {
        value.shift();
    }
    activeNames.value = value;
    items.forEach((item) => {
        item.isActive = value.includes(item.name);
    });
};
</script>
<style scoped>
.ss {
    margin-top: 20px;
    display: flex;
    justify-content: right;
}
.el-collapse {
    border: none;
}
.el-collapse-item {
    width: 200px;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
}
::v-deep .el-collapse-item__header {
    border: none;
    font-size: 14px;
    color: inherit;
}
::v-deep .el-collapse-item__header:focus {
    color: #409eff;
}
.select {
    display: flex;
    justify-content: center;
    gap: 20px;
}
.login-dialog__form {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.login-dialog__label {
    width: 80px;
    font-size: 14px;
    color: #333;
}
.login-dialog__input {
    flex-grow: 1;
    max-width: 230px;
}
.login-dialog__checkbox {
    margin-top: 8px;
}
.login-dialog__submit {
    justify-content: flex-start;
}
.login-dialog__submit button {
    padding: 8px 20px;
    height: 40px;
}
.login-dialog__register {
    text-align: center;
    font-size: 14px;
}
.login-dialog__register-link {
    margin-left: 5px;
    color: #409eff;
}
.login-dialog__privacy-policy {
    text-align: center;
    margin-top: 16px;
    font-size: 12px;
    color: #999;
}
.login-dialog__link {
    color: #409eff;
}
</style>
