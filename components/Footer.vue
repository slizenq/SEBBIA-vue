<template>
    <div class="footer">
        <div class="container">
            <div>
                <div class="footer__up">
                    <div class="wrap">
                    <div class="footer__up-left-part">
                        <img src="@/assets/images/Footer/logoFooter.svg" alt="logo" />
                        <div>
                        <div class="logo-desc">Звали эйчара?</div>
                        <p class="current-page">Компания</p>
                        <p class="current-page">Кейсы</p>
                        </div>
                    </div>
                    <div class="footer__up-right-part">
                        <div class="right-part-element">
                        <p class="part-element-title">Электронная почта</p>
                        <p class="part-element-desc">yourhr@gmail.com</p>
                    </div>
                        <div class="right-part-element">
                            <p class="part-element-title">Остались вопросы?</p>
                            <el-button class="btn-call" type="primary">Позвонить</el-button>
                        </div>
                    </div>
                </div>
                <p class="footer-up-security">
                    Политика конфиденциальности Защита персональных данных
                </p>
            </div>
            <p class="footer-down">©2024 Team Practice</p>
            </div>
        </div>
    </div>
</template>
   
<script setup>
import { ElButton } from "element-plus";
</script>
   
<style scoped>
.el-button {
    padding: 20px 5px;
}
.part-element-desc {
    font-weight: 700;
    color: #303133;
}
.part-element-title {
    color: #a8abb2;
    font-weight: 500;
    padding: 7px 0 7px 0;
}
.wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.current-page {
    font-weight: 700;
    padding: 7px 0 7px 0;
}
.logo-desc {
    margin-bottom: 20px;
   }
.footer__up {
    border-bottom: 3px solid rgba(64, 158, 255, 0.1);
}
.footer__up-left-part {
    display: flex;
    padding: 60px 0 20px 0;
    gap: 40px;
}
.footer-up-security {
    color: #409eff;
    padding: 30px 0;
}
.footer-down {
    color: #409eff;
    padding: 30px 0 60px;
}
.footer {
    margin-top: 42px;
    background-color: #d5e6f8;
    width: 100%;
}
</style>
   