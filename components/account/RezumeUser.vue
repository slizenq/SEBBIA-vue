<template>
    <div class="right__part-screen">
        <p class="right__part-title">{{ rightPartTitle[0] }}</p>
        <div class="right__part-user contain__margin">
            <p class="right__part-elem"><span>{{ combinedObject.Student.age.Age }}:</span> {{ combinedObject.Student.age.StudentAge }}</p>
            <p class="right__part-elem"><span>{{ combinedObject.Student.city.City }}:</span> {{ combinedObject.Student.city.StudentCity }}</p>
        </div>
        <div class="contain__margin">
            <ElButton type="primary" class="btn-edit right__part-btn">Редактировать профиль</ElButton>
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

const rightPartTitle = ['Фамилия Имя', 'Наименование'];
const props = defineProps({
  updateAuthStatus: {
    type: Function,
    required: true,
  },
});
const logout = function() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    navigateTo('/')
}
  const combinedObject = ref({
    Student: {
        age: {
            Age: 'Возраст',
            StudentAge: 'test',
        },
        city: {
            City: 'Город',
            StudentCity: 'test',
        },
    },
    Company: {
        form: {
            Form: 'Форма организации',
            FormContent: 'test',
        },
        city: {
            City: 'Город',
            StudentCity: 'test',
        },
    },
    notFilled: {
        notFilled: 'не заполненно',
    },
});
  
const searchResumes = async () => {
    try {
        const resume_id = '5';
        const response = await axios.get(`${IP}/resumes/${resume_id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        combinedObject.value = {
            Student: {
                age: {
                    Age: 'Возраст',
                    StudentAge: response.data.about_me, 
                },
                city: {
                    City: 'Город',
                    StudentCity: response.data.about_me,  
                },
            },
            Company: {
                form: {
                    Form: 'Форма организации',
                    FormContent: response.data.about_me, 
                },
            city: {
                City: 'Город',
                StudentCity: response.data.about_me, 
            },
        },
            notFilled: {
                notFilled: 'не заполнено',
            },
        };
      return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Ошибка поиска:', error.response.data);
        } else {
            console.error('Ошибка сети или конфигурации запроса:', error.message);
        }
    }
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
