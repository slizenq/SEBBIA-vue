<template>
    <div>
      <div class="input-error" v-if="status === 'loading'">Проверка...</div>
      <div class="input-error input-success" v-if="status === 'valid'">Почта валидна</div>
      <div class="input-error" v-if="status === 'invalid'">Неверный формат почты</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, toRefs } from 'vue';
  import { checkEmailFormat } from '~/src/domain/auth';  
  
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
  .input-error {
    margin-top: -13px;
    color: red;
  }
  .input-success {
    color: #24a31d;
  }
  </style>
  