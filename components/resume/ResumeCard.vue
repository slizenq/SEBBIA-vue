<template>
    <div class="card">
        <div class="card__left">
            <p class="name">{{ rezume.firstName }} {{ rezume.lastName }}</p>
            <div class="direction">
                <p class="direction-title">{{ rezume.direction }}</p>
            </div>
        </div>
        <div class="card__right">
            <div
                v-if="
                    rezume.status === 'Отказано' || rezume.status === 'Одобрено'
                "
            >
                <div v-if="rezume.status === 'Одобрено'" class="resume-btn">
                    <el-tag size="large" type="success" effect="light"
                        ><el-icon><CircleCheckFilled height="16" /></el-icon
                        >Принято</el-tag
                    >
                    <el-button type="default" :icon="TopRight" class="link" />
                </div>
                <div
                    v-else-if="rezume.status === 'Отказано'"
                    class="resume-btn"
                >
                    <el-tag size="large" type="danger" effect="light"
                        ><el-icon><CircleCloseFilled height="16" /></el-icon
                        >Отказано</el-tag
                    >
                    <el-button type="default" :icon="TopRight" class="link" />
                </div>
            </div>
            <div v-else class="resume-btn">
                <el-button type="success" plain @click="acceptRezume"
                    >Принять</el-button
                >
                <el-button type="danger" plain @click="declineRezume"
                    >Отклонить</el-button
                >
                <el-button type="default" :icon="TopRight" class="link" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElTag } from "element-plus";
import { CircleCheckFilled, CircleCloseFilled } from "@element-plus/icons-vue";
import { TopRight } from "@element-plus/icons-vue";

const props = defineProps({
    rezume: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["accept", "decline"]);

function acceptRezume() {
    emit("accept", props.rezume);
    props.rezume.status = "Одобрено";
}

function declineRezume() {
    emit("decline", props.rezume);
    props.rezume.status = "Отказано";
}
</script>

<style scoped>
.card__left {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.resume-btn {
    display: flex;
    justify-content: end;
    gap: 8px;
}
.name {
    font-size: 18px;
    color: #409eff;
}

.direction {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
}

.direction-title {
    font-size: 14px;
    color: #909399;
}
.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    gap: 6px;
    max-width: 816px;
    /* max-height: 74px; */
    padding: 16px;
    background-color: #fafafa;
}

@media (min-width: 320px) and (max-width: 460px) {
    .card {
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 10px;
    }
    .resume-btn {
        gap: 2px;
    }
}
.link {
    margin-left: 12px;
}
</style>
