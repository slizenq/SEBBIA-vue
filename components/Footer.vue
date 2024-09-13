<template>
    <div class="footer">
        <div class="container">
            <div>
                <div class="footer__up">
                    <div class="wrap">
                        <div class="footer__up-left-part">
                            <img
                                src="@/assets/images/Footer/logoFooter.svg"
                                alt="logo"
                            />
                            <div class="footer__up-logo">
                                <div class="logo-desc">
                                    <p class="logo-desc-top">
                                        Звали <span class="accent">эй</span>
                                    </p>
                                    <p class="logo-desc-bottom">чара?</p>
                                </div>
                                <div class="logo-line">
                                    <p class="current-page active">Главная</p>
                                    <p class="current-page">Компания</p>
                                    <p class="current-page">Кейсы</p>
                                </div>
                            </div>
                        </div>
                        <div class="footer__up-right-part">
                            <div class="right-part-element">
                                <p class="part-element-title">
                                    Электронная почта
                                </p>
                                <a
                                    class="part-element-desc"
                                    href="mailto:yourhr@gmail.com"
                                    >yourhr@gmail.com</a
                                >
                            </div>
                            <div class="right-part-element">
                                <p class="part-element-title">
                                    Остались вопросы?
                                </p>
                                <el-button
                                    class="btn-call"
                                    type="primary"
                                    plain
                                    @click="toggleAudio"
                                >
                                    <el-icon><Phone height="16px" /></el-icon
                                    >Позвонить</el-button
                                >
                                <audio ref="audioPlayer">
                                    <source
                                        src="../59ffb9a2c698e21.mp3"
                                        type="audio/mpeg"
                                    />
                                    Your browser does not support the audio
                                    element.
                                </audio>
                            </div>
                        </div>
                    </div>
                    <div class="footer__up-line">
                        <a class="footer-up-security">
                            Политика конфиденциальности
                        </a>
                        <span
                            style="
                                display: inline-block;
                                font-size: 24px;
                                color: #79bbff;
                                border-radius: 6px;
                            "
                            >•</span
                        >
                        <a class="footer-up-security">
                            Защита персональных данных
                        </a>
                    </div>
                </div>
                <p class="footer-down">©2024 Team Practice</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton } from "element-plus";
import { Phone } from "@element-plus/icons-vue";
const audioPlayer = ref(null);

function toggleAudio() {
    const audio = audioPlayer.value;
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
</script>

<style scoped>
.footer__up-line {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #409eff;
    column-gap: 10px;
}

.footer__up-right-part {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.accent {
    color: #409eff;
}

.logo-desc-top {
    float: left;
}

.logo-desc-bottom {
    float: right;
}

.footer__up-logo {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
.active {
    color: #409eff;
}

.fot_margin {
    margin-top: 30px;
}
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
    color: #000;
    font-weight: 700;
    max-width: 100px;
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
    color: #303133;
    font-weight: 700;
    padding: 30px 0 60px;
}
.footer {
    margin-top: 42px;
    background-color: #d5e6f8;
    width: 100%;
}

.btn-call {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #f7f7f7;
    color: #409eff;
    font-weight: 700;
    padding: 4px 16px;
    width: 100%;
}
</style>
