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
            <div class="company__list">
                <div v-for="(post, index) in currentPost.slice(0, defaultPost)" :key="index">
                    <div class="trial">
                        Содержимое поста
                    </div>
                </div>
            <div class="show__more" @click="showMore">Посмотреть еще</div>
            <div class="show__more" @click="showLess">--------------</div>

            </div>
        </div>
    </div>
</template>

<script>
import { ElInput } from 'element-plus';
import Slider from '~/components/Slider.vue';
import DropdownList from '~/components/UI/DropdownList.vue';
import Search from '~/components/UI/Search.vue';
import { ref } from 'vue';
export default {
    components: {
        ElInput,
        Search,
        Slider,
        DropdownList,
    },
    setup() {
        const currentPost = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const defaultPost = ref(3);
        return {
            currentPost,
            defaultPost
        }
    },
    methods: {
        showMore() {
            this.defaultPost += 3;
            return
        },
        showLess(){
            this.defaultPost -= 3;
            return
        }
    }
}
</script>

<style>
.show__more {
    margin: 0 auto;
    padding: 8px 20px;
    border: 1px solid #4f4e4e;
    border-radius: 5px;
    cursor: pointer;
}
.company__list {
    margin: 50px auto 0;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px
}
.trial {
    width: 480px;
    height: 200px;
    border: 3px solid teal;
    display: flex;
    justify-content: center;
    align-items: center;
}
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