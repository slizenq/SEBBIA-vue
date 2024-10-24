 <template>
    <el-button type="primary" :icon="Filter" plain @click="dad">Фильтр</el-button>
</template>

<script setup>
import { ElButton } from "element-plus";
import { Filter } from "@element-plus/icons-vue";

import "./../../../../assets/proto/vacancy/client"
// import "./../../../../assets/proto/auth/client"

const dad = function () {
    console.log('piece of shit');
}

</script>