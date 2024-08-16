<template>
    <div class="footer">
        <div class="container">
            <div>
                <div class="footer__up">
                    <div class="wrap">
                        <div class="footer__up-left-part">
                            <img src="../assets/images/Footer/logoFooter.svg" alt="logo">
                            <div>
                                <div class="logo__desc">Звали эйчара?</div>
                                <p class="curent__page">Компания</p>
                                <p class="curent__page">Кейсы</p>
                            </div>
                        </div>
                        <div class="footer__up-right-part">
                            <div class="right__part-element" >
                                <p class="part-element__title">Электронная почта</p>
                                <p class="part-element__desc">yourhr@gmail.com</p>
                            </div>
                            <div class="right__part-element">
                                <p class="part-element__title">Остались вопросы?</p>
                                <el-button class="btn-call" type="primary">Позвонить</el-button>
                            </div>
                        </div>
                    </div>
                    <p class="footer__up-security">Политика конфиденциальности Защита персональных данных</p>
                </div>
                <p class="footer__down">©2024 Team Practice</p>
            </div>
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    components: {
        ElButton    
    }
}
</script>

<style scoped>
.el-button {
    padding: 20px 5px;
}
.part-element__desc {
    font-weight: 700;
    color: #303133;
}
.part-element__title {
    color: #A8ABB2;
    font-weight: 500;
    padding: 7px 0 7px 0;
}
.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.curent__page {
    font-weight: 700;
    padding: 7px 0 7px 0;
}
.logo__desc {
    margin-bottom: 20px;
}
.footer__up {
    border-bottom: 3px solid rgba(64, 158, 255, 0.10);
}
.footer__up-left-part {
    display: flex;
    padding: 60px 0 20px 0;
    gap: 40px;

}
.footer__up-security {
    color: #409EFF;
    padding: 30px 0 30px 0
}
.footer__down {
    color: #409EFF;
    padding: 30px 0 60px;
}
.footer {
    margin-top: 42px;
    background-color: #d5e6f8;
    width: 100%;
}
</style>