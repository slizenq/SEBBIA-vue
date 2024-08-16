<template>
    <el-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
        round
    >
        <div class="skill-tag">{{ item.label }}</div>
    </el-tag>
</template>
    
<script>
import { ElTag } from 'element-plus';
import { ref } from 'vue'
      
export default {
    components: {
       ElTag
    },
    setup() {
        const items = ref([
            { type: 'primary', label: 'CSS' },
            { type: 'primary', label: 'HTML' },
            { type: 'primary', label: 'Java' },
            { type: 'primary', label: 'Js' },
            { type: 'primary', label: 'agile' },
            { type: 'primary', label: 'SQL' },
            { type: 'primary', label: 'PostgrSQL' },
            { type: 'primary', label: 'Figma' },        
        ]);
        return {
            items
        };
    }
}
</script>

<style>
.skill-tag {
    margin: 5px;
}
.el-tag.is-round {
    border-radius: 7px;
}
</style>