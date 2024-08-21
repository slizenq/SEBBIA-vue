import { defineStore } from "pinia";
import { ref, computed } from "vue";

// Определение типов для состояния
interface CounterState {
    count: number;
}

export const useCounterStore = defineStore("counter", () => {
    // Состояние
    const count = ref<CounterState["count"]>(0);

    // Геттеры
    const doubleCount = computed(() => count.value * 2);

    // Действия
    const increment = () => {
        count.value++;
    };

    return {
        count,
        doubleCount,
        increment,
    };
});
