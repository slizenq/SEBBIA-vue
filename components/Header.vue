<template>
    <div class="container">
        <div class="header">
            <div class="header__wrap">
                <div class="left__part">
                    <img
                        src="./../assets/images/logo.svg"
                        alt="logo"
                        class="left__part-logo"
                    />
                    <p class="left__part-name">
                        Звали <span class="logo__text-color">эй</span>чара?
                    </p>
                </div>
                <div class="middle__part">
                    <div
                        :class="{ 'home-bottom': $route.path === '/' }"
                        class="even"
                    >
                        <NuxtLink
                            to="/"
                            :class="{ 'home-color': $route.path === '/' }"
                            class="element"
                            >Главная</NuxtLink
                        >
                    </div>
                    <div
                        :class="{ 'about-bottom': $route.path === '/about' }"
                        class="even"
                    >
                        <NuxtLink
                            to="/about"
                            :class="{ 'home-color': $route.path === '/about' }"
                            class="element"
                            >Компании</NuxtLink
                        >
                    </div>
                </div>
                <Auth class="right__part" @open-dialog="openDialog" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Auth from "./UI/auth/Auth.vue";
</script>

<style>
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
/* .even:hover {
	box-shadow: 0 5px 7px -5px #409EFF;
} */

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
</style>
