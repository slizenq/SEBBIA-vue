<template>
    <div class="main">
        <div class="container">
            <div class="hero">
                <h1 class="hero__title">
                    SebStudy: Найди идеальную<br />стажировку с нами
                </h1>
                <p class="hero__desc">
                    Наша платформа соединяет студентов и компании для
                    эффективного поиска стажировок и практик. Найдите идеальную
                    стажировку или примите талантливых студентов для практики с
                    нашей помощью!
                </p>
            </div>
            <div class="index-search"><Search :page="'index'" /></div>
            <Slider />
            <div class="index-dropdownlist"><DropdownList /></div>
            <div class="company__list">
                <CardList :searchInput="searchText" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Slider from "~/components/Slider.vue";
import Search from "~/components/UI/interface/bigEl/Search.vue";
import DropdownList from "~/components/UI/interface/minEl/DropdownList.vue";
import CardList from "~/components/card/CardList.vue";

const searchText = ref("");
const handleSearchInput = (input) => {
    searchText.value = input;
};
</script>

<style scoped>
.index-dropdownlist {
    margin-top: 80px;
}
.company__list {
    margin: 50px auto 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
}
.index-search {
    margin-top: 100px;
}
.hero {
    width: 88vw;
    margin: 0 auto;
}
.hero__title {
    font-size: 32px;
    color: #409eff;
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
