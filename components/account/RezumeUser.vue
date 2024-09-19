<template>
    <div class="right__part-screen">
        <p class="right__part-title">{{ isCompany ? titlePage.company.companyTitle : titlePage.student.studentTitle  }}</p>
        <div class="right__part-user contain__margin">
            <p class="right__part-elem"><span>{{ isCompany ? companyData.form.Form : studentData.age.Age }}:</span> {{ isCompany ? companyData.form.FormContent : studentData.age.StudentAge }}</p>
            <p class="right__part-elem"><span>{{ isCompany ? companyData.city.City : studentData.city.City }}:</span> {{ isCompany ? companyData.city.StudentCity : studentData.city.StudentCity }}</p>
        </div>
        <div class="contain__margin">
            <ElButton type="primary" class="btn-edit right__part-btn" @click="nextStap">Редактировать профиль</ElButton>
        </div>
        <ElButton plain class="btn-out right__part-btn" @click="logout">Выйти</ElButton>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { ElButton } from 'element-plus';
import { defineProps } from 'vue';
import axios from 'axios';
import { IP } from '../UI/auth/Authentication';

const props = defineProps({
    updateAuthStatus: {
        type: Function,
        required: true,
    },
});
const nextStap = function() {
    navigateTo('/account/resume/ResumeStudent')
}
const logout = function() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    localStorage.removeItem('resume_id')
    navigateTo('/')
}
const titlePage = ref({
    student: { studentTitle: 'Фамилия имя' },
    company: { companyTitle: 'Наименование' }
})
const studentData = ref({
    age: { Age: 'Возраст', StudentAge: 'Не заполнено' },
    city: { City: 'Город', StudentCity: 'Не заполнено' }
});

const companyData = ref({
    form: { Form: 'Форма организации', FormContent: 'Не заполнено' },
    city: { City: 'Город', StudentCity: 'Не заполнено'  }
});
const isCompany = ref(null);
isCompany.value = true
const searchResumes = async () => {
    const resume_id = JSON.parse(localStorage.getItem('resume_id'))?.resume_id
    const response = await axios.get(`${IP}/resumes/${resume_id || 6}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const user = JSON.parse(localStorage.getItem('user')).is_company;
    isCompany.value = user
    if (isCompany.value) {
        companyData.value.form.FormContent = response.data?.test || 'Не заполнено';
        companyData.value.city.StudentCity = response.data?.test || 'Не заполнено';
        titlePage.value.company.companyTitle = response.data?.test || 'Наименование';
    } else {
        studentData.value.age.StudentAge = response.data?.born_date || 'Не заполнено';
        studentData.value.city.StudentCity = response.data?.about_projects || 'Не заполнено';
        titlePage.value.student.studentTitle = response.data?.last_name + ' ' + response.data?.first_name || 'Фамилия Имя'
    }
    return response.data;
};
onMounted(() => {
    searchResumes();
});
</script>

<style>
.btn-out {
    margin-top: 16px;
}
.right__part-screen {
    width: 600px;
}
.right__part-btn {
    width: 100%;
    height: 45px;
}
.right__part-title {
    font-size: 24px;
    font-weight: 700;
}
</style>
