<template>
    <div class="edit-resume" v-if="showPreview">
        <div class="edit-resume__header">
            <p class="edit-resume__title">Резюме</p>
            <el-button
                class="edit-resume__btn"
                @click="showPreview = !showPreview"
            >
                Предпросмотр <el-icon><TopRight /></el-icon>
            </el-button>
        </div>
        <div class="edit-resume__content">
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item>
                    <p>
                        Направление
                        <el-icon
                            ><InfoFilled color="rgba(64, 158, 255, 1)"
                        /></el-icon>
                    </p>
                    <el-select
                        v-model="value"
                        placeholder="Select"
                        size="large"
                        style="width: 240px"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <p>Расскажи о себе</p>
                    <el-input
                        v-model="textarea1"
                        style=""
                        autosize
                        type="textarea"
                        placeholder="Please input"
                        show-word-limit
                        maxlength="100"
                    />
                </el-form-item>
                <el-form-item>
                    <p>О проектах</p>
                    <el-input
                        v-model="textarea2"
                        style=""
                        autosize
                        type="textarea"
                        placeholder="Please input"
                        show-word-limit
                        maxlength="100"
                    />
                </el-form-item>
                <el-form-item>
                    <p>Навыки</p>
                    <div class="skills-input">
                        <el-button @click="addSkill">+ Добавить</el-button>
                        <el-input
                            v-model="newSkill"
                            placeholder="Please input"
                            style="width: 300px; margin-left: 10px"
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
                        >
                            {{ tag }}
                        </el-tag>
                    </div>
                </el-form-item>

                <!-- Новые поля Ссылка на портфолио и Контакты -->
                <el-form-item>
                    <div class="portfolio-contacts">
                        <div class="portfolio">
                            <p>Ссылка на портфолио</p>
                            <el-input
                                v-model="portfolioLink"
                                placeholder="Please input"
                            />
                        </div>
                        <div class="contacts">
                            <p>Контакты</p>
                            <el-input
                                v-maska="'+7 ### ### ## ##'"
                                v-model="contacts"
                                placeholder="+7 (000)"
                            />
                        </div>
                    </div>
                </el-form-item>

                <!-- Кнопка "Сохранить" -->
                <el-form-item>
                    <el-button type="primary" class="save-btn" @click="saveForm"
                        >Сохранить</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="preview" v-else>
        <div class="preview__header">
            <p class="preview__title">Предпросмотр</p>
            <div class="preview__btn">
                <el-button @click="showPreview = !showPreview"
                    >Вернуться <el-icon><TopRight /></el-icon
                ></el-button>
                <el-button
                    type="primary"
                    class="edit-resume__btn"
                    @click="showPreview = !showPreview"
                >
                    Сохранить сейчас
                </el-button>
            </div>
        </div>
        <div class="preview__content">
            <h2 class="content__title">Резюме</h2>
            <div class="content__form">
                <div class="content__form-img-block">
                    <el-upload
                        ref="uploadRef"
                        action="#"
                        list-type="picture-card"
                        :auto-upload="false"
                        limit="1"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                    >
                        <el-icon><Plus /></el-icon>

                        <template #file="{ file }">
                            <div>
                                <img
                                    class="el-upload-list__item-thumbnail"
                                    :src="file.url"
                                    alt=""
                                />
                                <span class="el-upload-list__item-actions">
                                    <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                    >
                                        <el-icon><zoom-in /></el-icon>
                                    </span>
                                    <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                    >
                                        <el-icon><Download /></el-icon>
                                    </span>
                                    <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                    >
                                        <el-icon><Delete /></el-icon>
                                    </span>
                                </span>
                            </div>
                        </template>
                    </el-upload>
                    <el-dialog v-model="dialogVisible">
                        <img
                            width="100%"
                            :src="dialogImageUrl"
                            alt="Preview Image"
                        />
                    </el-dialog>
                    <div class="content__form-info">
                        <h2>Аранова Варвара Алексеевна</h2>
                        <div class="">
                            <h3>Направление</h3>
                            <p>Фронтенд</p>
                        </div>
                        <div class="">
                            <p>
                                Дата рождения: <span>26.02.2006 (18 лет)</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { vMaska } from "maska/vue";
import {
    TopRight,
    InfoFilled,
    Delete,
    Download,
    Plus,
    ZoomIn,
} from "@element-plus/icons-vue";
import {
    ElButton,
    ElIcon,
    ElForm,
    ElInput,
    ElSelect,
    ElOption,
    ElTag,
    ElUpload,
    ElDialog,
} from "element-plus";

import { ref } from "vue";

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);
const uploadRef = ref(null);

/**
 * @param {object} uploadFile
 * @param {array} uploadFiles
 */
const handleRemove = (uploadFile, uploadFiles) => {
    uploadRef.value.handleRemove(uploadFile);
};

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url;
    dialogVisible.value = true;
};

const handleDownload = (file) => {
    const url = URL.createObjectURL(file.raw);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    console.log(file);
};

// Поля ввода для текста
const textarea1 = ref("");
const textarea2 = ref("");
const portfolioLink = ref("");
const contacts = ref("");
const value = ref("");
const phone = ref("");

const showPreview = ref(true);

// Опции для селекта "Направление"
const options = [
    {
        value: "Курское",
        label: "Курское",
    },
    {
        value: "Донецкое",
        label: "Донецкое",
    },
    {
        value: "Луганское",
        label: "Луганское",
    },
];

// Управление навыками (тегами)
const newSkill = ref(""); // новое значение навыка
const skills = ref(["Tag", "Tag", "Tag", "Tag"]); // начальные теги

// Функция добавления нового навыка
const addSkill = () => {
    if (newSkill.value) {
        skills.value.push(newSkill.value);
        newSkill.value = ""; // Очистка поля ввода после добавления
    }
};

// Функция удаления навыка (тега)
const removeTag = (index) => {
    skills.value.splice(index, 1); // Удаление тега по индексу
};

// Функция сохранения формы
const saveForm = () => {
    console.log("Форма сохранена", {
        textarea1: textarea1.value,
        textarea2: textarea2.value,
        skills: skills.value,
        portfolioLink: portfolioLink.value,
        contacts: contacts.value,
    });
};
</script>

<style scoped>
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

.skills-tags {
    display: flex;
    flex-wrap: wrap;
}

.portfolio-contacts {
    display: flex;
    justify-content: space-between;
}

.portfolio,
.contacts {
    width: 48%;
}

.save-btn {
    width: 100%;
    background-color: #f0f8ff;
    color: #409eff;
}
</style>
