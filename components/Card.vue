<template>
    <el-card style="width: 530px">
    <template #header>
        <div class="header_box">
            <div class="header__left-part">
                <p class="card__title">Компании</p>
                <img src="../assets/images/createResume/check.svg" alt="status">
            </div>
            <div>
                <Tag/>
            </div>
        </div>
    </template>

        <div>
            <div>
                <div>vacanc</div>
                <div>education</div>
                <div>skills</div>
            </div>
            <div>
                <div>call rezume</div>
                <div>link</div>
            </div>
        </div>

    </el-card>
</template>

<script>
import { ElCard } from 'element-plus';
import Tag from './companyCreateResume/Tag.vue';

export default {
    components: {
        ElCard,
        Tag,
    }
}
</script>

<style scoped>
.header_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.card__title {
    font-weight: 700;
}
.header__left-part {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>