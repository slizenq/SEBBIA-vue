<template>
    <el-card style="width: 480px">
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

        <div class="content">
            <div class="requirements">
                <div class="requirements__elem card__desc">
                    <span class="card__desc desc__bold">Вакансия:</span> Fronted
                </div>
                <div class="requirements__elem card__desc">
                    ?<span class="card__desc desc__bold"><!--<InfoTip/>-->Учебное заведение:</span> ДГТУ, РКСИ
                </div>
                <div class="requirements__elem card__desc">
                    <span class="card__desc desc__bold">Навыки:</span><div class="tags"><SkillsTag/></div>
                </div>
            </div>
            <div class="call__rezume">
                <div class="call__rezume-create"><el-button type="primary">Отправить резюме</el-button></div>
                <div class="call__rezume-link"><img src="assets\images\createResume\Icon-button.svg" alt="ic"></div>
            </div>
        </div>

    </el-card>
</template>
<script>
import { ElButton, ElCard } from 'element-plus';
import Tag from './companyCreateResume/Tag.vue';
import SkillsTag from './companyCreateResume/skillsTag/skillsTag.vue';
import InfoTip from './UI/InfoTip.vue';

export default {
    components: {
        ElCard,
        Tag,
        SkillsTag,
        InfoTip,
        ElButton
    }
}
</script>

<style scoped>
.call__rezume {
    display: flex;
    align-items: start;
    justify-content: end;
    gap: 10px;
}
.tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px
}
.requirements__elem {
    margin: 20px 0 20px 0;
    display: flex;
    gap: 7px;
}
.card__desc {
    color: #606266;
    font-size: 19px;
}
.desc__bold {
    font-weight: 500;
    display: block;
}
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