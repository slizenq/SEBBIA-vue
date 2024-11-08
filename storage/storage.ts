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
                companyName: "Apple",
                firstName: "Max",
                lastName: "Smith",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 4,
                companyName: "Apple",
                firstName: "Max",
                lastName: "Smith",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 5,
                companyName: "Apple",
                firstName: "Max",
                lastName: "Smith",
                direction: "Frontend",
                status: "Одобрено",
            },
            {
                id: 5,
                companyName: "Apple",
                firstName: "Max",
                lastName: "Smith",
                direction: "Frontend",
                status: "Одобрено",
            }
        ],
    }),
    actions: {
        increment() {},
    },
}); 
