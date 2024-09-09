import { createPinia } from "pinia";
import { defineStore } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

interface Rezume {
    id: number;
    firstName: string;
    lastName: string;
    companyName: string;
    direction: string;
    status: string;
}

interface State {
    count: number;
    name: string;
    rezumes: Rezume[];
}

const pinia = createPinia().use(createPersistedState());

export const useStore = defineStore({
    id: "myStore",
    state: () => ({
        count: 0,
        name: "John Doe",
        rezumes: [
            {
                id: 1,
                name: "Google",
                direction: "Backend",
                status: "Не просмотрено",
            },
            { id: 2, name: "Apple", direction: "Frontend", status: "Одобрено" },
            {
                id: 3,
                name: "Microsoft",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 4,
                name: "Facebook",
                direction: "Frontend",
                status: "Отказано",
            },
            {
                id: 5,
                name: "Amazon",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 6,
                name: "Accenture",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 7,
                name: "Baidu",
                direction: "Backend",
                status: "Отказано",
            },
            {
                id: 8,
                name: "IBM",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 9,
                name: "Intel",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 10,
                name: "Oracle",
                direction: "Frontend",
                status: "Отказано",
            },
            {
                id: 11,
                name: "Samsung",
                direction: "Backend",
                status: "Одобрено",
            },
            {
                id: 12,
                name: "Sony",
                direction: "Frontend",
                status: "Просмотрено",
            },
            {
                id: 13,
                name: "Toshiba",
                direction: "Backend",
                status: "Отказано",
            },
            {
                id: 14,
                name: "Uber",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 15,
                name: "Xiaomi",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 16,
                name: "Microsoft",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 17,
                name: "Nintendo",
                status: "Отказано",
                direction: "Backend",
            },
            {
                id: 18,
                name: "Hewlett-Packard",
                direction: "Backend",
                status: "Одобрено",
            },
            {
                id: 19,
                name: "Canon",
                direction: "Frontend",
                status: "Просмотрено",
            },
            {
                id: 20,
                name: "Dell",
                direction: "Backend",
                status: "Отказано",
            },
        ],
    }),
    actions: {
        increment() {},
    },
});

// Инструкция по использованию Pinia State Storage

// import { useStore } from "~/storage/storage";
// export default {
//     setup() {
//         const store = useStore();
//         return {
//             count: store.count,
//         };
//     },
// };
