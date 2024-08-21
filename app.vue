<template>
    <div id="app">
        <Header></Header>
        <NuxtPage></NuxtPage>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Footer from "./components/Footer.vue";
</script>

<style>
@import url("https://unpkg.com/element-plus/dist/index.css");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    text-decoration: none;
}
body {
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    /* padding-inline: clamp(10px, 4vw, 92px); */
}
h1,
p,
a {
    color: #303133;
}
.container {
    width: 90vw;
    margin: 0 auto;
}
</style>
