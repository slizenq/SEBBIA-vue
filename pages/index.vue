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
            <div class="find__practice">
                <Search />
            </div>
            <Slider />
            <DropdownList />
            <div class="company__list">
                <div v-for="item in 9" :key="item">
                    <Card/>
                </div>
            </div>
            <div class="button-container">
                <button class="more">Посмотреть еще</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ElInput } from "element-plus";
import Slider from "~/components/Slider.vue";
import DropdownList from "~/components/UI/DropdownList.vue";
import Search from "~/components/UI/Search.vue";
import Card from "~/components/Card.vue";
export default {
    components: {
        ElInput,
        Search,
        Slider,
        DropdownList,
        Card,
    },
};
</script>

<style>
.button-container {
    display: flex;
    justify-content: center;
    margin-top: 30px
}
.company__list {
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}
.find__practice {
    display: flex;
    align-items: center;
    justify-content: center;
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
