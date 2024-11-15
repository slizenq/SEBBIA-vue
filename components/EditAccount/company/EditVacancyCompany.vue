<template>
    <div class="form_editCompany">
        <div class="header__company">
            <div>
                <p class="title">О практике</p>
                <p class="header__desc">Редактировать информацию о компании можно только в личном кабинете</p>
            </div>
        </div>
        <div>
            <p class="description">Партнеры</p>
            <div class="skills-input dropdown">
                <el-button @click="addItem(direction, skills)" type="primary" plain>+ Добавить</el-button>
                <el-input
                    v-model="direction"
                    placeholder="Фронтенд"
                    class="partner"
                    style="width: 100%; margin-left: 10px"
                    @keyup.enter="addItem(direction, skills)"
                />
            </div>
            <div class="skills-tags">
                <el-tag
                    v-for="(tag, index) in skills"
                    :key="index"
                    closable
                    @close="removeItem(index, skills)"
                    effect="plain"
                    round
                    class="skills"
                >
                    {{ tag }}
                </el-tag>
            </div>
        </div>
        <div class="left__element description">
            <p class="element__title">Чем предстоит заниматься</p>
            <ul>
                <li v-for="(task, index) in tasks" :key="index">
                    {{ task }}
                </li>
            </ul>
            <el-button type="primary" class="send_form" @click="addTask">Добавить пункт</el-button>
        </div>
        <div>
            <p class="description">Желаемые навыки</p>
            <div class="skills-input dropdown">
                <el-button @click="addItem(skills_requirements, skills_ofStudent)" type="primary" plain>+ Добавить</el-button>
                <el-input
                    v-model="skills_requirements"
                    placeholder="PostgreSQL"
                    class="partner"
                    style="width: 100%; margin-left: 10px"
                    @keyup.enter="addItem(skills_requirements, skills_ofStudent)"
                />
            </div>
            <div class="skills-tags">
                <el-tag
                    v-for="(tag, index) in skills_ofStudent"
                    :key="index"
                    closable
                    @close="removeItem(index, skills_ofStudent)"
                    effect="plain"
                    round
                    class="skills"
                >
                    {{ tag }}
                </el-tag>
            </div>
        </div>
        <div>
            <p class="description">Расскажи о себе</p>
            <el-input
                v-model="textarea1"
                autosize
                type="textarea"
                placeholder="Расскажи о себе"
                show-word-limit
                class="dropdown"
                maxlength="100"
            />
        </div>

        <el-button type="primary" @click="handleFormSubmit" class="send_form" plain>Сохранить</el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElButton, ElInput, ElTag } from 'element-plus';
import { createPractice } from '../EditCompany';

const direction = ref('');
const textarea1 = ref('');
const skills = ref(["Фронтенд", "Бекенд", "Мобильный разработчик", "Тестировщик"]);
const skills_requirements = ref('');
const skills_ofStudent = ref(["PostgreSQL", "Vuejs", "React", "Lavarel"]);
const tasks = ref(["Это команда профессионалов, стремящаяся к решению сложных задач", "Это команда профессионалов"]);

const addItem = (item, list) => {
    if (item && item.trim() && !list.includes(item)) {
        list.push(item);
        item = ""; 
    }
};
const removeItem = (index, list) => {
    list.splice(index, 1);
};
const addTask = () => {
    const newTask = prompt('Введите новый пункт');
    if (newTask) {
        tasks.value.push(newTask);
    }
};

const handleFormSubmit = async () => {
    const practiceData = {
        direction: skills.value, 
        skills_required: skills_ofStudent.value, 
        about_me: textarea1.value,  
        tasks: tasks.value  
    };
    console.log(practiceData);
    const success = await createPractice(practiceData)
    if (success) {
        console.log('Данные о практике успешно сохранены.');
    } else {
        console.log('Ошибка при сохранении данных о практике.');
    }
};

</script>

<style scoped>
.form_editCompany {
    padding: 5px 22px;
}
ul {
    list-style-type: none;
}
ul li::before {
    content: "—";
    margin-right: 5px;
}
ul > li {
    margin-top: 8px
}
.addli {
    width: 100%;
    height: 40px;
}
.send_form {
    width: 100%;
    height: 40px;
    margin-top: 32px;
}
.partner {
    margin-bottom: 10px;
}
.skills {
    padding: 15px 10px;
    border-radius: 9px;
}
.skills-tags {
    display: flex;
    gap: 7px;
    flex-wrap: wrap
}
.dropdown {
    margin-top: 8px;
}
.skills-input {
    display: flex;
}
.description { 
    margin-top: 30px
}
.header__desc {
    font-size: 14px;
    color: #909399;
    line-height: 145%;
    margin-top: 10px
}
.title {
    font-size: 23px;
    font-weight: 600;
}
.header__company {
    display: flex;
    justify-content: space-between;
    align-items: start;
}
</style>