<template>
    <div class="container">
        <div class="header" style="z-index: 1000">
            <div class="header__wrap">
                <div class="left__part">
                    <img src="./../assets/images/logo.svg" alt="logo" class="left__part-logo"/>
                    <p class="left__part-name">Звали <span class="logo__text-color">эй</span>чара?</p>
                </div>
                <div class="middle__part">
                    <div :class="{ 'home-bottom': $route.path === '/' }" class="even">
                        <NuxtLink to="/" :class="{ 'home-color': $route.path === '/' }" class="element">Главная</NuxtLink>
                    </div>
                    <div :class="{ 'about-bottom': $route.path === '/about' }" class="even">
                        <NuxtLink to="/about" :class="{ 'home-color': $route.path === '/about' }" class="element">Компании</NuxtLink>
                    </div>
                </div>
                <div
                    :class="{
                        'home-color':
                            $route.path === '/account/student' ||
                            $route.path === '/account/company',
                    }"
                    class="account-element"
                    v-if="!isAuthenticated"
                    :isAuthenticated="isAuthenticated"
                    @click="AccountClick"
                >
                    <img v-if="logo_Account" src="./../assets/images/companyAccount.svg" alt="Company"/>
                    <img v-else src="./../assets/images/studentAccount.svg" alt="Student"/>Аккаунт
                </div>
                <Auth class="right__part" @open-dialog="openDialog" v-if="isAuthenticated" :isAuthenticated="isAuthenticated" :updateAuthStatus="updateAuthStatus"/>
                <div class="burger" @click="toggleBurger" v-if="isMobile">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <el-drawer v-model="isBurgerActive" direction="rtl" :with-header="false" class="drawer" show-close="true" size="100%">
                <div class="mobile-menu">
                    <div :class="{ 'home-bottom': $route.path === '/' }" class="even">
                        <NuxtLink to="/" :class="{ 'home-color': $route.path === '/' }" class="element">Главная</NuxtLink>
                    </div>
                    <div :class="{ 'about-bottom': $route.path === '/about' }" class="even">
                        <NuxtLink to="/about" :class="{ 'home-color': $route.path === '/about' }" class="element">Компании</NuxtLink>
                    </div>
                    <Auth class="right__part" @open-dialog="openDialog" v-if="isAuthenticated" :isAuthenticated="isAuthenticated" :updateAuthStatus="updateAuthStatus"/>
                    <div
                        :class="{
                            'home-color':
                                $route.path === '/account/student' ||
                                $route.path === '/account/company',
                        }"
                        class="account-element"
                        v-if="!isAuthenticated"
                        :isAuthenticated="isAuthenticated"
                        @click="AccountClick"
                    >
                        <img v-if="logo_Account" src="./../assets/images/companyAccount.svg" alt="Company"/>
                        <img v-else src="./../assets/images/studentAccount.svg" alt="Student"/>Аккаунт
                    </div>
                    <div
                        :class="{
                            'home-color':
                                $route.path === '/account/student' ||
                                $route.path === '/account/company',
                        }"
                        class="account-element"
                        v-if="isAuthenticated"
                    >
                        <img v-if="logo_Account" src="./../assets/images/companyAccount.svg" alt="Company"/>
                        <img v-else src="./../assets/images/studentAccount.svg" alt="Student"/>Аккаунт
                    </div>
                    <div class="close-button" @click="isBurgerActive = false">
                        <el-icon><Close /></el-icon>
                    </div>
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import Auth from "./UI/auth/Auth.vue";
import { ElDrawer, ElIcon } from "element-plus";
import { Close } from "@element-plus/icons-vue";

const logo_Account = ref();

const isAuthenticated = ref(false);
const isBurgerActive = ref(false);
const isMobile = ref(false);

const checkToken = () => {
    const token = localStorage.getItem("access_token");
    const logo = JSON.parse(localStorage.getItem("user"));
    if (logo) {
        /////
        logo_Account.value = logo.isCompany;
    }

    if (token != null) {
        isAuthenticated.value = false;
    } else {
        isAuthenticated.value = true;
    }
};

onMounted(() => {
    checkToken();
    window.addEventListener("storage", (event) => {
        if (event.key === "access_token" || event.key === "access_token") {
            checkToken();
        }
    });
    const tokenWatcher = setInterval(checkToken, 500);
    onUnmounted(() => {
        clearInterval(tokenWatcher);
        window.removeEventListener("storage", checkToken);
    });

    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        isMobile.value = true;
    }

    window.addEventListener("resize", () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            isMobile.value = true;
        } else {
            isMobile.value = false;
            isBurgerActive.value = false;
        }
    });
});

const updateAuthStatus = (status) => {
    isAuthenticated.value = status;
};

const AccountClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isCompany) {
        navigateTo("/account/company");
    } else {
        navigateTo("/account/student");
    }
};

const toggleBurger = () => {
    isBurgerActive.value = !isBurgerActive.value;
    const burger = document.querySelector(".burger");
    burger.classList.toggle("active");
};
</script>
<style>
.account-element {
    cursor: pointer;
    display: flex;
    gap: 5px;
    align-items: center;
}
.logo__text-color {
    color: #409eff;
}
.home-color {
    color: #409eff;
}
.about-color {
    color: #409eff;
}
.about-bottom {
    border-bottom: 2px solid #409eff;
}
.home-bottom {
    border-bottom: 2px solid #409eff;
}
.even {
    width: 100px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.middle__part {
    display: flex;
    gap: 40px;
}
.left__part-logo {
    cursor: pointer;
}
.middle__part .element {
    margin-right: 35px;
}
.middle__part .element:last-of-type {
    margin-right: 0;
}

.header {
    height: 50px;
    box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin-bottom: 10px;
    z-index: 1000;
}

.header__wrap {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    height: 100%;
}
.left__part {
    display: flex;
    align-items: center;
    gap: 15px;
}

.burger {
    display: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
}
.burger span {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #333;
    margin-bottom: 5px;
}

.close-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    font-size: 44px;
    color: #333;
}

@media (max-width: 768px) {
    .burger {
        display: block;
    }
    .right__part {
        display: none;
    }
    .middle__part {
        display: none;
    }
    .account-element {
        display: none;
    }
    .drawer .account-element,
    .drawer .right__part {
        display: block;
    }
    .mobile-menu {
        padding: 20px;
        display: flex;
        gap: 20px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .drawer {
        width: 35%;
    }
    .el-drawer__body {
        padding-inline: 10px;
    }
}
</style>
