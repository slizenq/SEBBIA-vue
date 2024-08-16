<template>
    <div class="container">
        <div class="BreadCrumb">
            <BreadCrumb/>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue';


export default {
    components: {
        BreadCrumb,
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