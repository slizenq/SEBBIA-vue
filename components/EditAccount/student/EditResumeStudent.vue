<template>
    <div class="edit-resume" v-if="showPreview">
        <div class="edit-resume__header">
            <p class="edit-resume__title">Резюме</p>
            <el-button class="edit-resume__btn" @click="showPreview = !showPreview">
                Предпросмотр <el-icon><TopRight /></el-icon>
            </el-button>
        </div>
        <div class="edit-resume__content">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item class="content__form-direction">
                    <p>Направление
                        <el-icon><InfoFilled color="rgba(64, 158, 255, 1)"/></el-icon>
                    </p>
                    <el-select v-model="selectedDirection" placeholder="ААА АШМТЛ" size="large" style="width: 240px"@change="handleDirectionChange">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                </el-form-item>
                <el-form-item class="content__form-about">
                    <p>Расскажи о себе</p>
                    <el-input v-model="about_me" style="" autosize type="textarea" placeholder="Проект тайлера блендера" show-word-limit maxlength="100"/>
                </el-form-item>
                <el-form-item class="content__form-about">
                    <p>О проектах</p>
                    <el-input v-model="about_projects" style="" autosize type="textarea" placeholder="Тайно пернул" show-word-limit maxlength="100"/>
                </el-form-item>
                <el-form-item class="content__form-skills">
                    <p>Навыки</p>
                    <div class="skills-input">
                        <el-button @click="addSkill($event)">+ Добавить</el-button>
                        <el-input v-model="newSkill" placeholder="Арбуз привет" style="width: 300px; margin-left: 10px" @keyup.enter="addSkill" clearable/>
                    </div>
                    <div class="skills-tags">
                        <el-tag v-for="(tag, index) in skills" :key="index" closable @close="removeTag(index)" style="margin: 5px">
                            {{ tag }}
                        </el-tag>
                    </div>
                </el-form-item>

                <el-form-item>
                    <div class="portfolio-phone_number">
                        <div class="portfolio contact">
                            <p>Ссылка на портфолио</p>
                            <el-input v-model="portfolio" placeholder="https://github/pespatron"/>
                        </div>
                        <div class="phone_number contact">
                            <p>Контакты</p>
                            <el-input v-maska="'+7 (###) ### ## ##'" v-model="phone_number" placeholder="+7 (938)"/>
                        </div>
                    </div>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" class="save-btn" @click="saveForm">Сохранить</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="preview" v-else>
        <div class="preview__header">
            <p class="preview__title">Предпросмотр</p>
            <div class="preview__btn">
                <el-button @click="showPreview = !showPreview">Вернуться <el-icon><TopRight /></el-icon></el-button>
                <el-button type="primary" class="edit-resume__btn" @click="showPreview = !showPreview">
                    Сохранить сейчас
                </el-button>
            </div>
        </div>
        <div class="preview__content">
            <h2 class="content__title">Резюме</h2>
            <div class="content__form">
                <div class="content__form-img-block">
                    <div class="content__form-img-block">
                        <el-image src="https://avatars.mds.yandex.net/i?id=8080454993d343ee2244082899de25363e197ae0-3577053-images-thumbs&n=13" fit="cover" style="width: 148px; height: 148px"/>
                    </div>
                    <div class="content__form-info">
                        <h2 class="content__form-info-title">{{ name }}</h2>
                        <div class="content__form-direction">
                            <h3 class="content__form-info-direction">Направление:</h3>
                            <p>{{ value }}</p>
                        </div>
                        <div class="">
                            <p class="content__form-info-date">Дата рождения:<span>{{ date }} ({{ age }} лет)</span></p>
                        </div>
                    </div>
                </div>
                <section class="content__form-section">
                    <div class="form-section">
                        <p class="form-section__title">Город</p>
                        <p>{{ city }}</p>
                    </div>
                    <div class="form-section">
                        <p class="form-section__title">Учебное заведение</p>
                        <p>{{ education }}</p>
                    </div>
                    <div class="form-section">
                        <p class="form-section__title">Контакты</p>
                        <p>{{ phone_number }}</p>
                    </div>
                </section>
                <section class="section-about section" v-if="about_me">
                    <p class="section-about__title">О себе</p>
                    <p class="section-about__text">{{ about_me }}</p>
                </section>

                <section class="section-project section" v-if="about_projects">
                    <p class="section-project__title">О проектах</p>
                    <p class="section-project__text">{{ about_projects }}</p>
                </section>

                <section class="section-skills section" v-if="skills.length > 0">
                    <p class="section-skills__title">Навыки</p>
                    <div class="skills-tags">
                        <el-tag v-for="(tag, index) in skills" :key="index" style="margin: 5px">{{ tag }}</el-tag>
                    </div>
                </section>

                <section class="section-links section" v-if="portfolio">
                    <p class="section-links__title">Ссылки</p>
                    <a href="{{ portfolio }}" target="_blank" class="links">{{ portfolio }}</a>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vMaska } from "maska/vue"; 
import { TopRight, InfoFilled } from "@element-plus/icons-vue";
import { ElButton, ElIcon, ElForm, ElInput, ElSelect, ElOption, ElTag, ElImage } from "element-plus";
import { ref } from "vue";
import { sendFormResume } from "../EditStudent";
import { defineEmits } from "vue"; 
import { ElNotification } from "element-plus";

const direction = ref("");
const selectedDirection = ref([]);
const options = [
    { value: "Backend Developer", label: "Backend Developer" },
    { value: "Software Development", label: "Software Development" },
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development ", label: "Mobile Development " },
    { value: "Data Science", label: "Data Science" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Cybersecurity ", label: "Cybersecurity " },
];
const handleDirectionChange = (value) => {
    selectedDirection.value = value;
};

const name = ref("Техник Павел Николаевич");
const date = ref("22.12.2001");
const age = ref(23);
const city = ref("Ростов-на-Дону");
const education = ref("РКСИ");

/**
 * @param {object} uploadFile
 * @param {array} uploadFiles
 */

const about_me = ref(null);
const about_projects = ref(null);
const portfolio = ref(null);
const phone_number = ref(null);
const showPreview = ref(true);
const skills = ref([]);
const newSkill = ref([]);

const addSkill = () => {
    if (newSkill.value) {
        skills.value.push(newSkill.value);
        newSkill.value = "";
    }
};

const removeTag = (index) => {
    skills.value.splice(index, 1);
};
const emit = defineEmits(["updateDialogg"]);
const dialogRedactor = ref(false);

const saveForm = async () => {
    try {
        const isSuccessful = await sendFormResume(
            about_me, 
            about_projects, 
            skills, 
            portfolio, 
            phone_number, 
            selectedDirection, 
            dialogRedactor
        );
        emit("updateDialogg", false);
        if (isSuccessful) {
            ElNotification({
                title: "Резюме успешно обновлено", 
                duration: 1500, 
                type: "success", 
                showClose: true
            });
        } else {
            ElNotification({
                title: "Произошла ошибка при отправке", 
                message: "Проверьте правильно ли вы заполнили все данные",
                duration: 1500,         
                type: "error", 
                showClose: true
            });
        }
    } catch (error) {
        console.error("Ошибка валидации", error);
    }
};
</script>

<style scoped>
.el-form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.contact {
    width: 45%;
}

.content__form-about {
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.content__form-skills {
    display: flex;
    flex-direction: column;
    gap: 9px;
}
.section {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.links {
    color: #409eff;
}
.content__form-direction {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.content__form-direction > p {
    font-size: 16px;
    line-height: 24px;
    color: #303133;
}
.content__form-info-title {
    font-size: 20px;
    line-height: 28px;
    color: #303133;
}
.content__form-info-direction {
    font-size: 18px;
    line-height: 26px;
    color: #303133;
}
.content__form-info-date {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #303133;
}
.content__form-info-date > span {
    font-size: 16px;
    line-height: 24px;
    color: #606266;
}
.form-section__title {
    font-size: 18px;
    line-height: 26px;
    color: #303133;
}
.content__form {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.content__form-section {
    display: flex;
    justify-content: space-between;
    gap: 42px;
}
.content__form-info {
    display: flex;
    flex-direction: column;
    gap: 18px;
}
.content__form-img-block {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 32px;
}
.content__title {
    font-size: 20px;
    color: #303133;
    text-align: left;
}
.preview__content {
    display: flex;
    flex-direction: column;
    gap: 32px;
    border: 1px solid rgba(235, 238, 245, 1);
    padding: 16px 24px;
}
.preview__title {
    font-size: 20px;
    font-weight: bold;
    color: #409eff;
    text-align: left;
}
.preview__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
}
.preview__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
}
.edit-resume__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26px;
}

.edit-resume__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.edit-resume {
    padding: 12px 24px;
}

.skills-input {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.skills-input .el-input {
    flex-grow: 1;
    margin-left: 10px;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
}

.portfolio-phone_number {
    display: flex;
    justify-content: space-between;
}

.portfolio,
.phone_number {
    display: flex;
    flex-direction: column;
    gap: 9px;
}

.save-btn {
    width: 100%;
    background-color: #f0f8ff;
    color: #409eff;
}
</style>
