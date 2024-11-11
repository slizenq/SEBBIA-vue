<template>
    <div id="app" class="app">
        <Header class="header"></Header>
        <NuxtPage></NuxtPage>
        <div id="app">
            <div v-if="isLoaded"></div>
            <div v-else>
                <div class="preloader">
                    <div class="loader"></div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
const isLoaded = ref(false);
import Footer from "./components/Footer.vue";
onMounted(() => {
    setTimeout(() => {
        isLoaded.value = true;
    }, 1000);
});
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
    height: 100vh;
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

.app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
}

/* span {
  color: #737373;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: text 2s linear infinite;
}
@keyframes text {
  0% {
    color: #ffffff;
  }
  50% {
    color: #1109f1;
  }
  100% {
    color: #ff0000;
  }
} */
.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.loader {
    border: 8px solid #002bcf;
    border-top: 8px solid #f54925;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
