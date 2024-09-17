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

const pinia = createPinia().use(createPersistedState());

export const useStore = defineStore({
    id: "myStore",
    state: () => ({
        count: 0,
        name: "John Doe",
        rezumes: [
            {
                id: 1,
                companyName: "Google",
                firstName: "John",
                lastName: "Doe",
                direction: "Backend",
                status: "Не просмотрено",
            },
            {
                id: 2,
                companyName: "Apple",
                firstName: "Max",
                lastName: "Smith",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 3,
                companyName: "Microsoft",
                firstName: "John",
                lastName: "Doe",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 4,
                companyName: "Facebook",
                firstName: "Bill",
                lastName: "Gates",
                direction: "Frontend",
                status: "Отказано",
            },
            {
                id: 5,
                companyName: "Amazon",
                firstName: "Jeff",
                lastName: "Bezos",
                direction: "Backend",
                status: "Одобрено",
            },
            {
                id: 6,
                companyName: "Accenture",
                firstName: "John",
                lastName: "Doe",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 7,
                companyName: "Baidu",
                firstName: "Robin",
                lastName: "Li",
                direction: "Frontend",
                status: "Отказано",
            },
            {
                id: 8,
                companyName: "IBM",
                firstName: "Virginia",
                lastName: "Rometty",
                direction: "Backend",
                status: "Одобрено",
            },
            {
                id: 9,
                companyName: "Intel",
                firstName: "Bob",
                lastName: "Swan",
                direction: "Backend",
                status: "Просмотрено",
            },
            {
                id: 10,
                companyName: "Oracle",
                firstName: "Safra",
                lastName: "Catz",
                direction: "Frontend",
                status: "Отказано",
            },
            {
                id: 11,
                companyName: "Samsung",
                firstName: "Lee",
                lastName: "Jae-yong",
                direction: "Backend",
                status: "Одобрено",
            },
            {
                id: 12,
                companyName: "Sony",
                firstName: "Kenichiro",
                lastName: "Yoshida",
                direction: "Frontend",
                status: "Просмотрено",
            },
            {
                id: 13,
                companyName: "Toshiba",
                firstName: "Nobuaki",
                lastName: "Kurumatani",
                direction: "Backend",
                status: "Отказано",
            },
            {
                id: 14,
                companyName: "Uber",
                firstName: "Dara",
                lastName: "Khosrowshahi",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 15,
                companyName: "Xiaomi",
                firstName: "Lei",
                lastName: "Jun",
                direction: "Backend",
                status: "Просмотрено",
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
