<template>
    <div class="container">
        <BreadCrumb :breadcrumbItems="breadcrumbItems" class="bread_margin" />
        <Progress />
        <div class="opportunity" v-if="showUpProgress">
            <div class="opportunity__left-part opportunity__text">
                <p class="opportunity__text-title">
                    <img
                        src="./../../../assets/images/tooltip.svg"
                    />Открывается возможность
                </p>
                <p class="opportunity__text-desc">
                    заполнять резюме внутри профиля
                </p>
            </div>
            <div class="opportunity__right-part opportunity__text">
                <p><span class="procent">+25%</span> за заполнение</p>
                <p>личной информации в профиле</p>
            </div>
        </div>
        <div class="form">
            <h1 class="form__title">Личные данные</h1>
            <div>
                <p class="description popUp">
                    Добавить фото
                    <el-popover
                        placement="top-start"
                        title="Добавляй свое фото"
                        :width="300"
                        trigger="hover"
                        content="Это гарантирует лучшее запоминание твоего резюме среди других претендентов"
                    >
                        <template #reference>
                            <el-icon><InfoFilled /></el-icon>
                        </template>
                    </el-popover>
                </p>
                <ElUpload>
                    <div class="demo-image__error">
                        <div class="block">
                            <el-image>
                                <template #error>
                                    <div class="image-slot">
                                        <el-icon><icon-picture /></el-icon>
                                    </div>
                                </template>
                            </el-image>
                        </div>
                    </div>
                </ElUpload>
            </div>
            <div class="fio">
                <p class="description">Имя</p>
                <el-input
                    v-model="first_name"
                    style="width: 100%"
                    class="fio__input"
                    placeholder="Имя"
                />

                <p class="description">Фамилия</p>
                <el-input
                    v-model="last_name"
                    style="width: 100%"
                    class="fio__input"
                    placeholder="Фамилия"
                />

                <p class="description">Отчество</p>
                <el-input
                    v-model="middle_name"
                    style="width: 100%"
                    class="fio__input"
                    placeholder="Отчесво"
                />
            </div>
            <div class="dropdown-list">
                <div>
                    <p class="description">Город</p>
                    <el-select-v2
                        class="dropdown"
                        v-model="city"
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
                    <p class="description">Учебное заведение</p>
                    <el-select-v2
                        class="dropdown"
                        v-model="education"
                        :options="educationOptions"
                        placeholder="Выберите учебное заведение"
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
                <p class="description">Дата рождения</p>
                <el-date-picker
                    class="dropdown"
                    v-model="born_date"
                    type="date"
                    placeholder="ээ пупупууу"
                    :size="size"
                    style="width: 100%; margin-top: 8px"
                />
            </div>
            <ElButton type="primary" @click="sendForm" class="send_form"
                >Сохранить</ElButton
            >
        </div>
    </div>
</template>

<script setup>
import { Picture as IconPicture, InfoFilled } from "@element-plus/icons-vue";
import {
    ElUpload,
    ElImage,
    ElIcon,
    ElInput,
    ElSelectV2,
    ElDatePicker,
    ElButton,
    ElPopover,
} from "element-plus";
import { ref, computed } from "vue";
import { IP } from "~/components/UI/auth/Authentication";
import axios, { AxiosHeaders } from "axios";
import { ElNotification } from "element-plus";
import BreadCrumb from "~/components/UI/interface/bigEl/BreadCrumb.vue";
import Progress from "~/components/UI/interface/bigEl/Progress.vue";

const photo = ref(null);
const first_name = ref(null);
const middle_name = ref(null);
const last_name = ref(null);
const city = ref(null);
const education = ref(null);
const born_date = ref(null);
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
const selectedCity = computed(() => {
    return cityOptions.find((option) => option.value === city.value) || null;
});
const selectedEducation = computed(() => {
    return (
        educationOptions.find((option) => option.value === education.value) ||
        null
    );
});
const showUpProgress = ref(false);
const breadcrumbItems = ref([
    { path: "x/xx/xxx", label: "Профиль" },
    { path: "x/xx/xxx", label: "Аккаунт" },
    { path: "x/xx/xxx", label: "Личные данные" },
]);
const sendForm = async function () {
    ElNotification({
        title: "Произошла ошибка при отправке",
        message: "Проверьте соединение к интернету",
        duration: 2000,
        type: "error",
        showClose: false,
    });
    const headers = {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
        accept: "application/json",
    };
    try {
        var studentEntity = {
            first_name: first_name.value,
            last_name: last_name.value,
            middle_name: middle_name.value,
            phone_number: "37505119",
            education: selectedEducation.value?.label || "",
            about_me: "string",
            born_date: 19,
            skills: [],
            photo: photo.value,
            directions: ["string"],
            about_projects: selectedCity.value?.label || "",
            portfolio: "http://example.com",
        };
        console.log("oke");
        let checkAccount = JSON.parse(
            localStorage.getItem("resume_id")
        )?.resume_id;
        if (checkAccount) {
            console.log("okeoke");
            let resumeData = studentEntity;
            try {
                const getResumeResponse = await axios.get(
                    `${IP}/resume/resumes/${checkAccount}`,
                    { headers: headers }
                );
                console.log("get запрос успешен:", getResumeResponse);
            } catch (error) {
                console.error(
                    "Ошибка при выполнении get запроса:",
                    error.response ? error.response.data : error.message
                );
            }
            var postData = {
                first_name: "daadsd",
                last_name: last_name.value || resumeData?.last_name || "",
                middle_name: middle_name.value || resumeData?.middle_name || "",
                phone_number: "37505119",
                education:
                    selectedEducation.value?.label ||
                    resumeData?.education ||
                    "",
                about_me: "string",
                born_date: 19,
                skills: [],
                photo: "",
                directions: ["string"],
                about_projects:
                    selectedCity.value?.label ||
                    resumeData?.about_projects ||
                    "",
                portfolio: "http://example.com",
            };
            try {
                const postResponse = await axios.put(
                    `${IP}/resume/resumes/${checkAccount}`,
                    postData,
                    { headers: headers }
                );
                console.log("PUT запрос успешен:", postResponse);
            } catch (error) {
                console.error(
                    "Ошибка при выполнении PUT запроса:",
                    error.response ? error.response.data : error.message
                );
            }
        } else {
            console.log("okeokeoke");
            const response = await axios.post(
                `${IP}/resume/resumes/`,
                studentEntity,
                { headers: headers }
            );
            let data = {
                resume_id: response.data?.resume_id,
                progress: 0,
            };
            localStorage.setItem("resume_id", JSON.stringify(data));
            let newProgress = JSON.parse(localStorage.getItem("resume_id"));
            if (newProgress) {
                newProgress.progress = 25;
                localStorage.setItem("resume_id", JSON.stringify(newProgress));
            }
            console.log(response);
            showUpProgress.value = true;
        }
    } catch (error) {
        console.error("Error submitting form:", error);
    } finally {
        showUpProgress.value = true;
    }
};
</script>

<style>
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
.popUp {
    display: flex;
    align-items: center;
    gap: 5px;
}
.opportunity__text-title {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #409eff;
}
.opportunity__text-desc {
    color: #409eff;
}
.procent {
    color: #409eff;
    font-size: 24px;
    font-weight: 700;
}
.opportunity__text {
    line-height: 155%;
}
.opportunity__right-part {
    text-align: right;
}
.opportunity__left-part {
    color: #79bbff;
}
.opportunity {
    display: flex;
    justify-content: space-between;
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
.fio__input {
    margin-top: 16px;
}
.description {
    margin-top: 17px;
    font-size: 14px;
}
.demo-image__error .block[data-v-cde71935] {
    border-right: none;
}
.form__title {
    font-size: 23px;
}
.form {
    width: 550px;
    margin-top: 50px;
}
.demo-image__error .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
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
