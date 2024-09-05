<template>
    <div class="right__part-screen">
        <p class="right__part-title">{{ rightPartTitle[0] }}</p>
        <div class="right__part-user contain__margin">
            <p class="right__part-elem">
                <span>{{ combinedObject.Student.age.Age }}:</span>
                {{ combinedObject.Student.age.StudentAge }}
            </p>
            <p class="right__part-elem">
                <span>{{ combinedObject.Student.city.City }}:</span>
                {{ combinedObject.Student.city.StudentCity }}
            </p>
        </div>
        <div class="contain__margin">
            <ElButton type="primary" class="btn-edit right__part-btn"
                >Редактировать профиль</ElButton
            >
        </div>
        <ElButton plain class="btn-out right__part-btn">Выйти</ElButton>
    </div>
</template>

<script setup>
import { ElButton } from "element-plus";
const rightPartTitle = ["Фамилия Имя", "Наименование"];
const combinedObject = {
    Student: {
        age: {
            Age: "Возраст",
            StudentAge: "test",
        },
        city: {
            City: "Город",
            StudentCity: "test",
        },
    },
    Company: {
        form: {
            Form: "Форма организации",
            FormContent: "test",
        },
        city: {
            City: "Город",
            StudentCity: "test",
        },
    },
    notFilled: {
        notFilled: "не заполненно",
    },
};
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
