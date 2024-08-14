<template>
    <div class="main">
        <div class="container">
            <div class="hero">
                <h1 class="hero__title">SebStudy: Найди идеальную<br> стажировку с нами</h1>
                <p class="hero__desc">Наша платформа соединяет студентов и компании для эффективного поиска стажировок и практик. Найдите идеальную стажировку или примите талантливых студентов для практики с нашей помощью!</p>
            </div>
            <div class="find__practice">
                <Search/>
            </div>
            <Slider/>
            <DropdownList/>
        </div>
    </div>
</template>

<script>
import { ElInput } from 'element-plus';
import Slider from '~/components/Slider.vue';
import DropdownList from '~/components/UI/DropdownList.vue';
import Search from '~/components/UI/Search.vue';
export default {
    components: {
        ElInput,
        Search,
        Slider,
        DropdownList,
    }
}
</script>

<style>
.find__practice {
    display: flex;
    align-items: center;
    justify-content: center;
}
.hero {
    width: 920px;
    margin: 0 auto;
}
.hero__title {
    font-size: 32px;
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