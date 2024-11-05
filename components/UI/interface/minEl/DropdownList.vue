<template>
<el-select-v2
    v-model="value"
    :options="options"
    placeholder="Выберите город"
    style="width: 240px; margin-right: 16px; vertical-align: middle"
    @change="onCityChange"
    clearable
/>
</template>

<script setup>
import { ElSelectV2 } from "element-plus";
import { ref } from "vue";
import emitter from "../../../../useCityStore";

const value = ref([]);
const cities = ["По всем городам", "Москва", "Санкт-Петербург", "Ростов-на-Дону", "Челябинск", "Новосибирск", "Нальчик", "Орёл", "Якутск", "Красонодар", "Зерноград"];
const options = cities.map((city, idx) => ({
    value: idx + 1,
    label: city,
    class: "custom-option",
}));
const onCityChange = (selectedIndex) => {
    const selectedCity = cities[selectedIndex - 1];  
    console.log("Selected city:", selectedCity);  
    emitter.emit('city-selected', selectedCity); 
};
    

</script>

<style scoped>
.el-select-v2__selected-item .custom-option {
  color: #409eff;
}
</style>
