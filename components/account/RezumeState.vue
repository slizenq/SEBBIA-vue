<template>
    <div class="rezume__state">
        <p class="rezume__state-title">{{ rezumeState.title }}</p>
        <div
            v-if="!storage.rezumes.length"
            class="rezume__state-void contain__margin"
        >
            <div class="current__state">
                <p class="current__state-title">{{ rezumeState.empty }}</p>
                <p class="current__state-desc">{{ rezumeState.description }}</p>
            </div>
        </div>
        <div v-else class="rezume__state">
            <div
                v-for="rezume in storage.rezumes.slice(0, 4)"
                :key="rezume.id"
                class="rezume__state-void contain__margin"
            >
                <div class="current__state">
                    <p
                        class="current__state-title"
                        :style="{ color: getStatusColor(rezume.name) }"
                    >
                        {{ rezume.firstName }} {{ rezume.lastName }}
                    </p>
                    <p
                        class="current__state-desc"
                        :style="{ color: getStatusColor(rezume.status) }"
                    >
                        <el-icon v-if="getStatusLabelIcon(rezume.status)">
                            <component
                                :is="getStatusLabelIcon(rezume.status)"
                                height="16"
                            />
                        </el-icon>
                        {{ rezume.status }}
                    </p>
                </div>
                <el-button
                    v-if="rezume.status === 'Отказано'"
                    type="default"
                    plain
                    @click="removeRezume(rezume.id)"
                    class="btn__delete"
                    >Удалить</el-button
                >
                <el-button
                    v-else-if="rezume.status !== 'Отменено'"
                    type="danger"
                    plain
                    class="btn__cancel"
                    @click="cancelRezume(rezume.id)"
                    >Отменить отправку</el-button
                >
                <transition name="fade">
                    <div
                        v-if="rezume.status === 'Отменено'"
                        class="cancel-button"
                    >
                        <el-button
                            type="primary"
                            plain
                            @click="returnRezume(rezume.id)"
                            class="btn__return"
                            >Вернуть ({{ rezume.countdown }} секунд)</el-button
                        >
                    </div>
                </transition>
            </div>
            <div v-if="storage.rezumes.length > 4" class="show-more-container">
                <el-button type="text" @click="showMoreRezumes"
                    >Показать больше</el-button
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElNotification } from "element-plus";
import { useStore } from "~/storage/storage";
import {
    Hide,
    CircleCheckFilled,
    CircleCloseFilled,
    View,
} from "@element-plus/icons-vue";

const storage = useStore();

const rezumeState = {
    title: "Статус отправки резюме",
    empty: "Вы еще не отправляли свое резюме",
    description: "Найдите компанию и попробуйте отправить свое резюме",
};

function removeRezume(id) {
    storage.rezumes = storage.rezumes.filter((rezume) => rezume.id !== id);
}

function cancelRezume(id) {
    const rezume = storage.rezumes.find((rezume) => rezume.id === id);
    if (rezume) {
        rezume.status = "Отменено";
        rezume.countdown = 10;
        storage.rezumes = storage.rezumes.map((r) => {
            if (r.id === id) {
                return rezume;
            }
            return r;
        });
        ElNotification({
            title: "Вы отменили отправку",
            message: `Резюме будет удалено  через 10 секунд, вы еще можете его восстановить`,
            type: "warning",
        });
        let intervalId = setInterval(() => {
            rezume.countdown--;
            if (rezume.countdown === 0) {
                clearInterval(intervalId);
                storage.rezumes = storage.rezumes.filter(
                    (rezume) => rezume.id !== id
                );
                ElNotification({
                    title: "Резюме удалено",
                    message: "Резюме удалено без возможности восстановления",
                    type: "error",
                });
            }
        }, 1000);
    }
}

function getStatusColor(status) {
    if (typeof status === "string" && status !== "") {
        switch (status) {
            case "Одобрено":
                return "#67c23a"; // green
            case "Отказано":
                return "#f56c6c"; // red
            case "Просмотрено":
                return "#303133"; // black
            case "Не просмотрено":
                return "#909399"; // gray
        }
    } else {
        return null;
    }
}

function getStatusLabelIcon(status) {
    switch (status) {
        case "Одобрено":
            return CircleCheckFilled; // green checkmark
        case "Отказано":
            return CircleCloseFilled; // red close
        case "Просмотрено":
            return View; // eye icon
        case "Не просмотрено":
            return Hide; // hide icon
        default:
            return null;
    }
}

function showMoreRezumes() {
    navigateTo("/groups/ResumeList");
}
</script>

<style>
.rezume__state {
    max-width: 552px;
}

.rezume__state-void {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 74px;
    max-width: 552px;
    background-color: rgba(115, 118, 122, 0.06);
    border-radius: 4px;
    padding-inline: 16px;
}

.current__state-title {
    color: #409eff;
    font-weight: 700;
    font-size: 18px;
    line-height: 28px;
    text-align: left;
}

.current__state-desc {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 4px;
    color: #909399;
    font-size: 15px;
    line-height: 26px;
    text-align: left;
}

.rezume-btn {
    width: 100%;
    height: 45px;
}

.btn__delete,
.btn__cancel {
    min-height: 24px;
    max-height: 40px;
    padding: 8px 20px;
}

.current__state {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    height: 74px;
    border-radius: 5px;
    padding: 16px;
}

.rezume__state-title {
    font-weight: 700;
    font-size: 24px;
}

.rezume__state {
    width: 600px;
    margin-top: 32px;
}

.show-more-container {
    margin-top: 16px;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
