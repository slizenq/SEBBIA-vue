<template>
    <el-col :sm="12" :lg="6">
      <el-result icon="info" title="Info Tip">
      </el-result>
    </el-col>
</template>

<script>
import { ElCol, ElResult } from 'element-plus';

export default {
    components: {
        ElCol,
        ElResult,
    }
}
</script>