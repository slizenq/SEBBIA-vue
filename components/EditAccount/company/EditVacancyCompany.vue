<template>
    <div class="form_editCompany">
        <div class="header__company">
            <div>
                <p class="title">О практике</p>
                <p class="header__desc">Редактировать информацию о компании<br> можно только в личном кабинете</p>
            </div>
            <ElButton>Редактировать профиль</ElButton>
        </div>
        <div>
            <p class="description">Партнеры</p>
            <div class="skills-input dropdown">
                <el-button @click="addDirection" type="primary" plain>+ Добавить</el-button>
                <el-input
                    v-model="direction"
                    placeholder="Фронтенд"
                    class="partner"
                    style="width: 100%; margin-left: 10px"
                    @keyup.enter="addDirection"
                />
            </div>
            <div class="skills-tags">
                <el-tag
                    v-for="(tag, index) in skills"
                        :key="index"
                        closable
                        @close="removeTag(index)"
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
                <li>Это команда профессионалов, стремящаяся к решению сложных задач</li>
                <li>Это команда профессионалов</li>
            </ul>
            <ElButton type="primary" class="send_form" @class="addli">Добавить пункт</ElButton>

        </div>

        <div>
            <p class="description">Желаемые навыки</p>
            <div class="skills-input dropdown">
                <el-button @click="addSkills" type="primary" plain>+ Добавить</el-button>
                <el-input
                    v-model="skills_requirements"
                    placeholder="PostgreSQL"
                    class="partner"
                    style="width: 100%; margin-left: 10px"
                    @keyup.enter="addSkills"
                />
            </div>
            <div class="skills-tags">
                <el-tag
                    v-for="(tag, index) in skills_ofStudent"
                        :key="index"
                        closable
                        @close="removeTag(index)"
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
        <ElButton type="primary" @click="handleFormSubmit" class="send_form" plain>Сохранить</ElButton>
    </div>
</template>

<script setup>
import { ElButton, ElInput, ElTag } from 'element-plus';
const direction = ref(null)
const textarea1 = ref(null)
const skills = ref(["Фронтенд", "Бекенд", "Мобильный разработчик", "Тестировщик"]); 
const addDirection = () => {
    if (skills.value) {
        skills.value.push(direction.value);
        direction.value = ""; 
    }
};
const skills_requirements = ref(null)
const skills_ofStudent = ref(["PostgreSQL", "Vuejs", "React", "Lavarel"]); 
const addSkills = () => {
    if (skills_ofStudent.value) {
        skills_ofStudent.value.push(skills_requirements.value);
        skills_requirements.value = ""; 
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