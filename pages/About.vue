<template>
    <div class="container">
        <div class="BreadCrumb"><BreadCrumb/></div>
        <div class="Search"><Search/></div>
        <div class="DropdownList"><DropdownList/></div>
        <div class="company__list">
            <div v-for="item in 9" :key="item">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';
import Card from '~/components/Card.vue';
import DropdownList from '~/components/UI/DropdownList.vue';
import Search from '~/components/UI/Search.vue';


export default {
    components: {
        BreadCrumb,
        Search,
        DropdownList,
        Card,
    },
};
</script>

<style>
.BreadCrumb {
    margin-top: 80px;
}
</style>






































<!-- <template>
    <div class="container">
        <div class="company__list">
            <div v-for="item in 9" :key="item">
                <Card/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '~/components/Card.vue';

export default {
    components: {
        Card,
    },
};
</script> -->