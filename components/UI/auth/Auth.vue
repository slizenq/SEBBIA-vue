<template>
    <div>
        <el-button @click="openDialog" type="primary">Войти</el-button>

        <el-dialog
            v-model="isDialogVisible"
            :title="title1"
            width="480px"
            :close-on-click-modal="true"
            :close-on-press-escape="true"
            class="login-dialog"
        >
            <el-collapse v-if="!showSteps" v-model="activeNames" @change="handleChange">
                <div class="select">
                    <div v-for="item in items" :key="item.name">
                        <el-collapse-item :title="item.title" :name="item.name" 
                        :style="{ border: item.isActive ? '1px solid #409EFF' : '1px solid transparent', borderRadius: '5px' }">
                        <div>
                            <p :style="{ fontSize: item.isActive ? '16px' : '' }">{{ item.content }}</p>
                        </div>
                        </el-collapse-item>
                    </div>
                </div>
                <div class="ss">
                    <el-button type="primary" @click="nextStep" :disabled="activeNames.length === 0">Далее</el-button>
                </div>
            </el-collapse>
            <SignIn v-if="showSteps && selectedStep === 'signIn'"/>
            <SignUp v-if="showSteps && selectedStep === 'signUp'"/>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ElButton, ElDialog, ElCollapseItem, ElCollapse } from "element-plus";
import SignIn from "./SignIn.vue";
import SignUp from "./SignUp.vue";
const title1 = ref('Зарегистрироваться, как');
const isDialogVisible = ref(false);
const openDialog = () => {
    isDialogVisible.value = true;
};
const activeNames = ref([]);
const items = [
    { name: '1', title: 'Студент', content: 'Наша компания ценит энтузиазм и стремление к профессиональному росту', isActive: false },
    { name: '2', title: 'Компания', content: 'Если вы хотите найти практикантов и вырастить из них специалистов', isActive: false }
];

const handleChange = (value) => {
    if (value.length > 1) {
        value.shift();
    }
    activeNames.value = value;
    items.forEach(item => {
        item.isActive = value.includes(item.name);
    });
};
const showSteps = ref(false);
const selectedStep = ref('');
const nextStep = () => {
    if (activeNames.value.length === 1) {
        const activeComponent = items.find(item => item.name === activeNames.value[0]);
        if (activeComponent.name === '1') {
            selectedStep.value = 'signIn';
        } else if (activeComponent.name === '2') {
            selectedStep.value = 'signIn';
        }
        (selectedStep.value = 'signIn') ? title1.value = 'Вход' :
        (selectedStep.value = 'signUp') ? title1.value = 'Регистрация' : ''
        showSteps.value = true;
    }
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
    border: 1px solid #DCDFE6;
    padding: 5px 10px;
}
.select {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>
