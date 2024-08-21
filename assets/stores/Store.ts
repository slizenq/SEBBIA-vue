import { defineStore } from "pinia";

// Определяем новое хранилище с именем "store" с помощью Pinia
export const store = defineStore("store", {
    // Определяем состояние хранилища (state), которое возвращает объект с начальными значениями
    state: () => ({
        count: 0, // Начальное значение счетчика (count)
        name: "Sebbia", // Начальное значение строки (name)
    }),

    // Определяем действия (actions) для изменения состояния
    actions: {
        // Действие для увеличения значения счетчика (increment)
        increment() {
            this.count++; // Увеличиваем значение count на 1
        },

        // Действие для изменения имени (updateName)
        updateName(newName: string) {
            this.name = newName; // Устанавливаем новое значение для name
        },
    },
});

// Документация по использованию хранилища
// Описание
// store — это хранилище (store), созданное с использованием библиотеки Pinia. Оно используется для управления состоянием в приложении, обеспечивая централизованное место для хранения и изменения данных.

// Состояние (State)
// count (number): Числовое состояние, представляющее счетчик. Изначальное значение — 0.
// name (string): Строковое состояние, представляющее имя. Изначальное значение — "Sebbia".
// Действия (Actions)
// increment(): Увеличивает значение count на 1.
// updateName(newName: string): Обновляет значение name на новое значение, переданное в параметре newName.

// Как использовать хранилище

// Импортируйте хранилище в компонент:
// import { store } from '~/assets/stores/Store';

// Получите доступ к хранилищу в компоненте:
// const store = store();

// Доступ к состоянию:
// Вы можете получить текущее значение состояния, обращаясь к его свойствам:

// console.log(store.count); // Выводит текущее значение count
// console.log(store.name);  // Выводит текущее значение name

// Вызов действий:
// Для изменения состояния используйте действия:
// store.increment(); // Увеличивает count на 1
// store.updateName('NewName'); // Изменяет name на 'NewName'

// Пример использования в Vue компоненте:

// <template>
//   <div>
//     <p>Count: {{ store.count }}</p>
//     <button @click="store.increment">Increment</button>

//     <p>Name: {{ store.name }}</p>
//     <input v-model="newName" placeholder="Update Name" />
//     <button @click="store.updateName(newName)">Update Name</button>
//   </div>
// </template>

// <script setup lang="ts">
// import { ref } from 'vue';
// import { store } from '~/assets/stores/Store';

// const store = store();
// const newName = ref('');
// </script>
