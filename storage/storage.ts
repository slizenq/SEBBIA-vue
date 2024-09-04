import { createPinia } from "pinia";
import { defineStore } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

const pinia = createPinia().use(createPersistedState());

export const useStore = defineStore({
    id: "myStore",
    state: () => ({
        count: 0,
        name: "John Doe",
        rezumes: [
            { id: 1, name: "Google", status: "Не просмотрено" },
            { id: 2, name: "Apple", status: "Одобрено" },
            { id: 3, name: "Microsoft", status: "Просмотрено" },
            { id: 4, name: "Facebook", status: "Отказано" },
        ],
    }),
    actions: {
        increment() {
            this.count++;
        },
    },
});

// Инструкция по использованию Pinia State Storage

// import { useStore } from "./store.js";
// import { onMounted } from "vue";

// export default {
//     setup() {
//         const store = useStore();

//         onMounted(() => {
//             store.increment();
//         });

//         return {
//             count: store.count,
//         };
//     },
// };
