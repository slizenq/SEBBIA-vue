<template>
    <div class="main">
        <div class="container">
            <div class="hero">
                <h1 class="hero__title">
                    SebStudy: Найди идеальную<br />
                    стажировку с нами
                </h1>
                <p class="hero__desc">
                    Наша платформа соединяет студентов и компании для
                    эффективного поиска стажировок и практик. Найдите идеальную
                    стажировку или примите талантливых студентов для практики с
                    нашей помощью!
                </p>
            </div>
            <div class="index-search"> <Search /> </div>
            <Slider />
            <div class="index-dropdownlist"> <DropdownList /> </div>
            <div class="company__list">
                <div v-for="item in 9" :key="item">
                    <Card/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from "~/components/Slider.vue";
import DropdownList from "~/components/UI/DropdownList.vue";
import Search from "~/components/UI/Search.vue";
import Card from "~/components/card/Card.vue";
</script>

<style>
.index-dropdownlist {
    margin-top: 80px;
}
.company__list {
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}
.index-search {
    margin-top: 100px;
}
.hero {
    width: 48vw;
    margin: 0 auto;
}
.hero__title {
    font-size: 32px;
    color: #409EFF;
}

.hero__desc {
    margin-top: 30px;
    font-size: 18px;
}
.main {
    margin-top: 75px;
}
.hero {
    text-align: center;
}
</style>
