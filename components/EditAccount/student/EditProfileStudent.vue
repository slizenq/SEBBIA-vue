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
                        <template #reference
                            ><el-icon><InfoFilled /></el-icon
                        ></template>
                    </el-popover>
                </p>
                <!-- <ElUpload :on-change="handlePhotoChange"
                    ><img
                        src="./../../../assets/images/addPhoto.svg"
                        class="img_margin"
                /></ElUpload> -->

                <el-upload
                    action="#"
                    list-type="picture-card"
                    :auto-upload="false"
                    :on-change="handlePhotoChange"
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
            <ElButton type="primary" @click="handleFormSubmit" class="send_form"
                >Сохранить</ElButton
            >
        </div>
    </div>
</template>

<script setup>
import {
    Picture as IconPicture,
    InfoFilled,
    Plus,
} from "@element-plus/icons-vue";
import {
    ElUpload,
    ElIcon,
    ElInput,
    ElSelectV2,
    ElDatePicker,
    ElButton,
    ElPopover,
} from "element-plus";
import { ref, computed, defineEmits } from "vue";
import { sendForm as sendFormHandler } from "../EditStudent";

import { ElNotification } from "element-plus";

const photo = ref([]);
const photoName = ref("");
const first_name = ref(null);
const middle_name = ref(null);
const last_name = ref(null);
const city = ref(null);
const education = ref(null);
const born_date = ref(null);
const showUpProgress = ref(false);
const emit = defineEmits(["profileUpdated", "updateDialogRedactor"]);
const cities = [
    "Москва",
    "Санкт-Петербург",
    "Ростов-на-Дону",
    "Челябинск",
    "Новосибирск",
    "Нальчик",
    "Орёл",
    "Якутск",
    "Красонодар",
    "Зерноград",
];

const dialogImageUrl = ref("");
const dialogVisible = ref(false);
const disabled = ref(false);

// Обработчик изменения фото
const handlePhotoChange = async (file) => {
    const reader = new FileReader();

    reader.onload = () => {
        const arrayBuffer = reader.result;
        const byteArray = new Uint8Array(arrayBuffer);

        // Конкатенируем массив байтов
        photo.value = photo.value.concat(Array.from(byteArray));
        photoName.value = file.name;

        console.log("Название файла:", photoName.value); // Вывод имени файла
        console.log("Массив байтов:", photo.value); // Вывод массива байтов
    };

    reader.onerror = () => {
        console.error("Ошибка чтения файла");
    };

    reader.readAsArrayBuffer(file.raw);
};

const dialogRedactor = ref(false);
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
const selectedCity = computed(
    () => cityOptions.find((option) => option.value === city.value) || null
);
const selectedEducation = computed(
    () =>
        educationOptions.find((option) => option.value === education.value) ||
        null
);

function formatBornDate(date) {
    if (date instanceof Date) {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
    } else if (typeof date === "string") {
        const [year, month, day] = date.split("-");
        return `${day}.${month}.${year}`;
    } else {
        throw new TypeError("Invalid date format");
    }
}

const handleFormSubmit = async () => {
    const formattedBornDate = formatBornDate(born_date.value);
    const isSuccessful = await sendFormHandler(
        first_name,
        last_name,
        middle_name,
        selectedEducation,
        selectedCity,
        photo,
        photoName,
        formattedBornDate,
        showUpProgress,
        dialogRedactor
    );
    emit("updateDialogRedactor", false);
    if (isSuccessful) {
        ElNotification({
            title: "Успешно отправлено",
            duration: 1500,
            type: "success",
            showClose: true,
        });
    } else {
        ElNotification({
            title: "Произошла ошибка при отправке",
            message: "Проверьте правильно ли вы заполнили все данные",
            duration: 1500,
            type: "error",
            showClose: true,
        });
    }
    emit("profileUpdated", {
        first_name: first_name.value,
        last_name: last_name.value,
        middle_name: middle_name.value,
        city: selectedCity.value?.label,
        education: selectedEducation.value?.label,
        born_date: formattedBornDate,
        photo: photo.value,
        photoName: photoName.value, 
    });
};
</script>

<style>
.img_margin {
    margin-top: 20px;
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
.form {
    width: 550px;
    margin-bottom: 10px;
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
