<!-- Логин -->
<template>
    <div class="login-dialog__form-item">
        <label class="login-dialog__label">Логин</label>
        <el-input
            :model-value="email"
            placeholder="Электронная почта"
            class="login-dialog__input"
            @input="$emit('update:email', $event)"
        />
    </div>
</template>

<script setup>
import { ElInput } from "element-plus";
import { toRefs } from "vue";

const props = defineProps({
    email: String,
});
const { email } = toRefs(props);
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
