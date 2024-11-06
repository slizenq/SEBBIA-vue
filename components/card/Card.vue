<template>
    <el-card class="card">
        <template #header>
            <div class="header_box" @click="openVacancy">
                <div class="header__left-part">
                    <p class="card__title">{{ title }}</p>
                    <img
                        src="./../../assets/images/createResume/check.svg"
                        alt="status"
                    />
                </div>
                <div><Tag /></div>
            </div>
        </template>

        <div class="card-info" @click="openVacancy">
            <div class="card-info__vacancy">
                <p class="vacancy-title">
                    Вакансия:<span class="vacancy-title__span">{{
                        description
                    }}</span>
                </p>
            </div>
            <div class="card-info__education">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                >
                    <g clip-path="url(#clip0_134_422)">
                        <path
                            d="M7 0.875C8.73192 0.9205 10.1744 1.51973 11.3273 2.67269C12.4803 3.82565 13.0795 5.26808 13.125 7C13.0795 8.73192 12.4803 10.1744 11.3273 11.3273C10.1744 12.4803 8.73192 13.0795 7 13.125C5.26808 13.0795 3.82565 12.4803 2.67269 11.3273C1.51973 10.1744 0.9205 8.73192 0.875 7C0.9205 5.26808 1.51973 3.82565 2.67269 2.67269C3.82565 1.51973 5.26808 0.9205 7 0.875ZM7 10.5C7.20067 10.491 7.36706 10.4226 7.49919 10.2948C7.63131 10.1671 7.69737 10.003 7.69737 9.80262C7.69737 9.60225 7.63131 9.43585 7.49919 9.30344C7.36706 9.17102 7.20067 9.10496 7 9.10525C6.79933 9.10554 6.63294 9.1716 6.50081 9.30344C6.36869 9.43527 6.30263 9.60167 6.30263 9.80262C6.30263 10.0036 6.36869 10.1676 6.50081 10.2948C6.63294 10.422 6.79933 10.4904 7 10.5ZM7 6.82237C6.85417 6.83142 6.73108 6.88377 6.63075 6.97944C6.53042 7.0751 6.48025 7.19819 6.48025 7.34869C6.48025 7.49919 6.53042 7.62446 6.63075 7.7245C6.73108 7.82454 6.85417 7.87471 7 7.875C7.60171 7.86596 8.12131 7.67448 8.55881 7.30056C8.99631 6.92665 9.26975 6.4435 9.37912 5.85112C9.46108 5.25875 9.35404 4.7164 9.058 4.22406C8.76196 3.73173 8.32679 3.38538 7.7525 3.185C7.17821 3.00271 6.62681 3.0186 6.09831 3.23269C5.56981 3.44677 5.15958 3.81821 4.86763 4.347L5.75619 4.90744C5.91106 4.5974 6.13667 4.37413 6.433 4.23762C6.72933 4.10113 7.04375 4.08056 7.37625 4.17594C7.70875 4.27131 7.96396 4.45594 8.14188 4.72981C8.31979 5.00369 8.38367 5.31125 8.3335 5.6525C8.28333 5.99375 8.13517 6.27171 7.889 6.48637C7.64283 6.70104 7.34665 6.81275 7.00044 6.8215L7 6.82237Z"
                            fill="#A8ABB2"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_134_422">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p class="education-title">
                    Учебное заведение:<span class="education-title__span">{{
                        location
                    }}</span>
                </p>
            </div>
            <div class="card-info__skils">
                <span class="skils-title">Партнеры:</span>
                <div class="skils__item">
                    <el-tag
                        v-for="item in items"
                        :key="item.label"
                        :type="item.type"
                        effect="plain"
                        round
                        class="skills"
                    >
                        <div class="skill-tag">{{ item.label }}</div>
                    </el-tag>
                </div>
            </div>
        </div>

        <div class="send">
            <el-button type="primary" class="primary" @click="sendResume">
                Отправить резюме
            </el-button>
            <el-button
                type="default"
                :icon="TopRight"
                class="link"
                @click="openVacancy"
            />
        </div>
    </el-card>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import { ElCard, ElButton, ElTag, ElNotification } from "element-plus";
import Tag from "~/components/companyCreateResume/Tag.vue";
import { TopRight } from "@element-plus/icons-vue";

const token = localStorage.getItem("access_token");
const resumeId = localStorage.getItem("resumeId");
const vacancyId = localStorage.getItem("vacancyId");

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    requirements: {
        type: Array,
        required: true,
    },
    vacancy_id: {
        type: Number,
        required: true,
    },
});

const items = ref([]);

props.requirements.forEach((item) => {
    items.value.push({ type: "primary", label: item });
});

const openVacancy = async function () {
    localStorage.setItem("vacancy", props.vacancy_id);
    navigateTo("/vacancy");
};

const sendResume = async function () {
    const notification = ElNotification({
        title: "Вы не можете откликнуться на данную вакансию!",
        message: "Ваше направление не совпадает с навыками вакансии",
        type: "warning",
    });
    setTimeout(() => {
        notification.close();
    }, 8000);
};
</script>

<style scoped>
.skils__item {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
.skills {
    padding: 10px 5px;
    border-radius: 9px;
}
.vacancy-title__span {
    margin-left: 7px;
}
.skill-tag {
    margin: 5px;
}
.link {
    padding: 4px 16px;
}

.primary {
    padding: 4px 16px;
}

.card {
    width: 100%;
    cursor: pointer;
    position: relative;
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
}

.header_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header__left-part {
    display: flex;
    align-items: center;
    gap: 8px;
}

.vacancy-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding: 6px;
}

.card-info__education {
    display: flex;
    align-items: center;
    align-items: baseline;
}

.education-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    padding: 6px;
}

.education-title__span {
    padding-inline: 8px;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 22px;
}

.card-info__skils {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
    padding: 6px;
}

.send {
    display: flex;
    align-items: end;
    justify-content: end;
    margin-top: 10px;
}

.el-card__header {
    padding: 8px 20px !important;
}

.card__title {
    font-size: 18px;
}

@media (max-width: 768px) {
    .card__title {
        font-size: 16px;
    }
    .vacancy-title,
    .education-title {
        font-size: 14px;
    }

    .education-title__span,
    .vacancy-title__span {
        font-size: 12px;
    }
}
</style>
