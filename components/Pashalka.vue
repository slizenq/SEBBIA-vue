<template>
    <div v-if="showPashalka">
        <el-dialog v-model="visible" width="50%" :before-close="handleClose">
            <img
                :src="imageUrl"
                alt="Image"
                style="width: 100%; height: 100%"
            />
            <audio :src="audioUrl" autoplay loop></audio>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ElDialog } from "element-plus";

const visible = ref(false);
const imageUrl = ref(
    "https://avatars.mds.yandex.net/get-entity_search/1531579/979794478/S600xU_2x"
);
const audioUrl = ref(
    "https://vk.com/audio705051477_456239025_bffd5cdc4d5f5ae8ce.mp3"
);

const showPashalka = ref(false);

const handleClose = () => {
    visible.value = false;
};

const show = () => {
    visible.value = true;
    showPashalka.value = true;
    console.log("1488 pressed!");
};

const sequence = ref([]);
const targetSequence = [1, 4, 8, 8];

onMounted(() => {
    window.addEventListener("keydown", (e) => {
        const digit = e.keyCode - 48; // subtract 48 to get the numeric value
        if (digit >= 0 && digit <= 9) {
            sequence.value.push(digit);
            if (sequence.value.length === targetSequence.length) {
                if (
                    sequence.value.every(
                        (value, index) => value === targetSequence[index]
                    )
                ) {
                    show();
                    sequence.value = [];
                } else {
                    sequence.value = [];
                }
            }
        }
    });
});

onBeforeUnmount(() => {
    window.removeEventListener("keydown", (e) => {
        const digit = e.keyCode - 48; // subtract 48 to get the numeric value
        if (digit >= 0 && digit <= 9) {
            sequence.value.push(digit);
            if (sequence.value.length === targetSequence.length) {
                if (
                    sequence.value.every(
                        (value, index) => value === targetSequence[index]
                    )
                ) {
                    show();
                    sequence.value = [];
                } else {
                    sequence.value = [];
                }
            }
        }
    });
});
</script>
