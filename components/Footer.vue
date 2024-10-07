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
                                    @click="taptap"
                                >
                                    <el-icon><Phone height="16px" /></el-icon>
                                    Позвонить
                                </el-button>
                                <el-dialog
                                    v-model="hamster"
                                    style="background-color: #1c1f24"
                                    class="hamster-color"
                                    width="500px"
                                    top="1%"
                                >
                                    <div class="hamster">
                                        <p class="warn">
                                            СКОРО ЛИСТИНГ!!! УСПЕЙ ПОБОЛЬШЕ
                                            НАТАПАТЬ.<br />
                                            {{ timer }}
                                        </p>
                                        <div class="hamster__header">
                                            <div
                                                class="hamster__header-tap hamster__header-elem"
                                            >
                                                Прибыли за тап:<br />
                                                +{{ tap }}
                                            </div>
                                            <div
                                                class="hamster__header-up hamster__header-elem"
                                            >
                                                Монет для апа:<br />
                                                {{ lvl }}
                                            </div>
                                            <div
                                                class="hamster__header-coin hamster__header-elem"
                                            >
                                                Прибыль в мин:<br />
                                                {{ n }}0
                                            </div>
                                        </div>
                                        <div class="current__money">
                                            <img
                                                src="./../moneta.png"
                                                width="70px"
                                                alt=""
                                            />
                                            <p
                                                class="mymoney"
                                                style="color: #fff"
                                            >
                                                {{ currentTap }}
                                            </p>
                                        </div>
                                        <el-progress
                                            style="margin-left: 20px"
                                            :percentage="Math.round(progress)"
                                            :format="format"
                                        />
                                        <div
                                            class="hamster_rod"
                                            @click="upMoney"
                                        >
                                            <img
                                                src="./../hamster.jpg"
                                                class="hamster_per"
                                            />
                                        </div>
                                        <p
                                            style="
                                                margin-top: 10px;
                                                color: #fff;
                                                font-weight: 700;
                                            "
                                        >
                                            MyHealth: {{ mybatary }}/{{
                                                batary
                                            }}
                                        </p>
                                    </div>
                                </el-dialog>
                            </div>
                        </div>
                    </div>
                    <div class="footer__up-line">
                        <a class="footer-up-security"
                            >Политика конфиденциальности</a
                        >
                        <span
                            style="
                                display: block;
                                font-size: 24px;
                                color: #79bbff;
                                border-radius: 6px;
                            "
                            class="span-decor"
                            >•</span
                        >
                        <a class="footer-up-security"
                            >Защита персональных данных</a
                        >
                    </div>
                </div>
                <p class="footer-down">©2024 Team Practice</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ElButton, ElIcon, ElDialog, ElProgress } from "element-plus";
import { Phone } from "@element-plus/icons-vue";
const hamster = ref(null);
const tap = ref(2);
const currentTap = ref(0);
const lvl = ref(500);
const batary = ref(1500);
const mybatary = ref(batary.value);

const hour = ref(23);
const minute = ref(59);
const second = ref(59);

const timer = computed(() => {
    return `${hour.value}:${minute.value}:${second.value}`;
});

const letsgo = function () {
    if (second.value == 0) {
        second.value = 59;
        minute.value = minute.value - 1;
    } else if (minute.value == 0) {
        minute.value = 59;
        hour.value = hour.value - 1;
    }
    second.value = second.value - 1;
    if (mybatary.value < batary.value) {
        mybatary.value = mybatary.value + 4;
    }
};
onMounted(() => {
    let timerId = setInterval(() => letsgo(), 1000);
    setTimeout(() => {
        clearInterval(timerId);
        alert("stop");
    }, 9999999);
});

const progress = ref(0);
const upMoney = function () {
    currentTap.value = currentTap.value + tap.value;
    mybatary.value = mybatary.value - tap.value;
    progress.value = (100 * currentTap.value) / lvl.value;
    console.log(currentTap.value + " " + lvl.value);
    console.log(progress.value);
};
const taptap = function () {
    hamster.value = true;
};
const format = (percentage) => (percentage === 100 ? "Full" : `${percentage}%`);
</script>

<style scoped>
.el-dialog {
    background-color: #1c1f24;
}
.hamster-color {
    background-color: #1c1f24;
}
.warn {
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    color: red;
}
.hamster_per {
    width: 80%;
    border-radius: 50%;
    border: 11px solid teal;
    cursor: pointer;
    user-select: none;
}
.hamster_rod {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    user-select: none;
}
.mymoney {
    font-size: 35px;
    font-weight: 700;
}
.current__money {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
}
.hamster__header {
    display: flex;
    gap: 10px;
}
.hamster__header-elem {
    width: 33%;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 5px;
    border-radius: 7px;
    text-align: center;
    color: #fff;
    background-color: #2a2c30;
}
.hamster_rod {
    position: relative;
}

.hamster_per {
    transition: transform 0.1s;
}

.hamster_per:active {
    transform: scale(0.9);
}
.warn {
    animation: text 2s linear infinite;
}
.hamster {
    background-color: #1c1f24;
}
@keyframes text {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.footer__up-line {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #409eff;
    column-gap: 10px;
}

@media (max-width: 500px) {
    .footer__up-line {
        flex-direction: column;
        row-gap: 10px;
    }
    .span-decor {
        display: none;
        opacity: 0;
    }
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

@media (max-width: 500px) {
    .wrap {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
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
@media (max-width: 500px) {
    .footer-down {
        text-align: center;
    }
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

@media (max-width: 500px) {
    .footer-up-security {
        padding: 15px 0;
    }
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
