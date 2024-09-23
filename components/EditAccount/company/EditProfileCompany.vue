<template>
    <div class="form__wrap">
        <div class="form">
            <div>
                <p class="description popUp">
                    Добавить фото
                    <el-popover
                        placement="top-start"
                        title="Добавляй свое фото"
                        :width="350"
                        trigger="hover"
                        content="Это гарантирует лучшее запоминание твоего резюме среди других претендентов"
                    >
                        <template #reference>
                            <el-icon><InfoFilled /></el-icon>
                        </template>
                    </el-popover>
                </p>
                <ElUpload>
                    <img src="./../../../assets/images/addPhoto.svg" class="img_margin">
                </ElUpload>
            </div>
            <div class="fio">
                <p class="description">Наименование компании</p>
                <el-input
                    v-model="company_name"
                    style="width: 100%"
                    class="company_name"
                    placeholder="Компания"
                />
            </div>
            <div class="dropdown-list">
                <div>
                    <p class="description">Город</p>
                    <el-select-v2 
                        class="dropdown"
                        v-model="city_company"
                        :options="cityOptions"
                        placeholder="Выберите город"
                        style="
                            width: 240px;
                            margin-right: 16px;
                            vertical-align: middle;
                        "
                        clearable
                    />
                </div>
                <div>
                    <p class="description">Тип компании</p>
                    <el-select-v2
                        class="dropdown"
                        v-model="type_company"
                        :options="educationOptions"
                        placeholder="ООО"
                        style="
                            width: 240px;
                            margin-right: 16px;
                            vertical-align: middle;
                        "
                        clearable
                    />
                </div>
            </div>
            <div>
                <p class="description">Дата основания</p>
                <el-date-picker
                    class="dropdown"
                    v-model="company_date"
                    type="date"
                    placeholder="ээ пупупууу"
                    :size="size"
                    style="width: 100%; margin-top: 8px"
                />
            </div>
            <div>
                <p class="description">Описание</p>
                <el-input
                    class="dropdown textarea_desc"
                    v-model="textarea2"
                    autosize
                    type="textarea"
                    placeholder="Описание"
                    show-word-limit
                    maxlength="300"
                    style="max-height: 300px;"
                />
            </div>
            <div>
                <p class="description">Партнеры</p>
                <div class="skills-input dropdown">
                    <el-button @click="addSkill" type="primary" plain>+ Добавить</el-button>
                    <el-input
                        v-model="partner"
                        placeholder="РКСИ"
                        class="partner"
                        style="width: 100%; margin-left: 10px"
                        @keyup.enter="addSkill"
                    />
                </div>
                <div class="skills-tags">
                    <el-tag
                        v-for="(tag, index) in skills"
                        :key="index"
                        closable
                        @close="removeTag(index)"
                        style="margin: 5px"
                        effect="plain"
                        round
                        class="skills"
                    >
                        {{ tag }}
                    </el-tag>
                </div>
            </div>
            <ElButton type="primary" @click="handleFormSubmit" class="send_form">Сохранить</ElButton>
        </div>   
    </div>
</template>

<script setup>
import { Picture as IconPicture, InfoFilled } from "@element-plus/icons-vue";
import { ElUpload, ElIcon, ElInput, ElSelectV2, ElDatePicker, ElButton, ElPopover, ElTag } from "element-plus";
import { ref, defineEmits } from "vue";
const photo = ref(null);
const company_name = ref(null)
const city_company = ref(null)
const type_company = ref(null)
const company_date = ref(null)
const textarea2 = ref(null)
const partner = ref(""); 
const skills = ref(["ЮФУ", "ДГТУ", "РКСИ", "МГУ", "СПбГУ    "]); 

const addSkill = () => {
    if (partner.value) {
        skills.value.push(partner.value);
        partner.value = ""; 
    }
};
const removeTag = (index) => {
    skills.value.splice(index, 1);
};
const emit = defineEmits(['profileUpdated']);

const cities = ["Москва", "Санкт-Петербург", "РКСИ"];
const cityOptions = cities.map((city, idx) => ({
    value: idx + 1,
    label: city,
    class: "custom-option",
}));
const educationInstit = ["МГУ", "СПбГУ", "РКСИ"];
const educationOptions = educationInstit.map((institution, idx) => ({
    value: idx + 1,
    label: institution,
    class: "custom-option",
}));
</script>

<style>
.img_margin {
    margin-top: 20px
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
    color: #409eff;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
}
</style>

<style scoped>
.skills {
    padding: 15px 10px;
    border-radius: 9px;
}
.skills-input {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
}
.form__wrap {
    display: flex;
    justify-content: center;
}
.popUp {
    display: flex;
    align-items: center;
    gap: 5px;
}
.send_form {
    width: 100%;
    height: 40px;
    margin-top: 32px;
}
.dropdown-list {
    display: flex;
    justify-content: space-between;
}
.dropdown {
    margin-top: 16px;
}
.company_name {
    margin-top: 16px;
}
.description {
    margin-top: 17px;
    font-size: 14px;
}
.demo-image__error .block[data-v-cde71935] {
    border-right: none;
}
.form {
    width: 550px;
    margin-bottom: 10px
}
.demo-image__error .block[data-v-13a429be][data-v-13a429be] {
    padding: 30px 0;
    text-align: center;
    border-right: none;
    display: inline-block;
    width: 250px;
    box-sizing: border-box;
    vertical-align: top;
}
.demo-image__error .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
.demo-image__error .el-image {
    max-width: 300px;
    max-height: 200px;
    width: 100%;
    height: 200px;
}

.demo-image__error .image-slot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: var(--el-fill-color-light);
    color: var(--el-text-color-secondary);
    font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
    font-size: 30px;
}
</style>