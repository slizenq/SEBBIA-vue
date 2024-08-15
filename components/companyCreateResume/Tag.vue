<template>
    <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="light"
    >
        {{ item.label }}
    </el-tag>
</template>
  
<script>
import { ElTag } from 'element-plus';
import { ref } from 'vue'
  
export default {
    components: {
       ElTag,
    },
    setup() {
        const items = ref([
            { type: 'info', label: 'Айти' }
        ]);
        return {
            items
        };
    }
}
</script>
  