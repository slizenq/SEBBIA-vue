<!-- Пароль -->
<template>
    <div class="login-dialog__form-item">
        <label class="login-dialog__label">Пароль</label>
        <el-input
            v-model="password"
            placeholder="Пароль"
            type="password"
            class="login-dialog__input"
            show-password
            @input="$emit('update:password', $event)"
        />
    </div>
</template>

<script setup>
import { toRefs } from "vue";
import { ElInput } from "element-plus";

const props = defineProps({
    password: String
})
const { password } = toRefs(props);
</script>

<style scoped>
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.login-dialog__label {
    width: 70px;
    font-size: 14px;
    color: #333;
}
.login-dialog__input {
    flex-grow: 1;
    max-width: 350px;
}
</style>
