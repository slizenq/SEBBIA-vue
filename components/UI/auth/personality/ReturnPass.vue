<!-- Пароль -->
<template>
    <div class="login-dialog__form-item">
        <label class="login-dialog__label">Подтверждение</label>
        <el-input
            v-model="passwordConfirm"
            placeholder="Повторите пароль"
            type="password"
            class="login-dialog__input"
            show-password
            @input="$emit('update:passwordConfirm', $event)"
        />
    </div>
</template>

<script setup>
import { toRefs } from "vue";
import { ElInput } from "element-plus";

const props = defineProps({
    passwordConfirm: String
})
const { passwordConfirm } = toRefs(props);
</script>

<style scoped>
.login-dialog__form-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
}
.login-dialog__label {
    white-space: nowrap;
    width: 114px;
    font-size: 14px;
    color: #333;
}
.login-dialog__input {
    flex-grow: 1;
    max-width: 306px;
}
</style>
