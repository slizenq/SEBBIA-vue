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
    <InputError :email="email" :status="status"/>
</template>

<script setup lang="ts">
import { ElInput } from "element-plus";
import { toRefs } from "vue";
import InputError from "./../../InputError.vue"
import { checkEmailFormat } from "~/src/domain/auth";

const props = defineProps({
    email: String,
});
const { email } = toRefs(props);
const status = ref<'loading' | 'valid' | 'invalid' | null>(null);
  
  watch(email, async (newEmail) => {
    if (!newEmail) {
      status.value = null;
      return;
    }
  
    status.value = 'loading'; 
  
    const isValid = await checkEmailFormat(newEmail);
    status.value = isValid ? 'valid' : 'invalid'; 
  });
</script>

<style scoped>
.validation-status {
  display: flex;
  flex-direction: column;
}
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
