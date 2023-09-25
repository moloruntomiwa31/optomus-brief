<template>
    <div class="md:hidden">
        <select v-model="selectCategory"
            class="p-2 dark:bg-[#FF7517]  dark:outline-[#f9dab5] dark:text-[#f9dab5] rounded-md my-4">
            <option v-for="option in categories" :key="option" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
const selectCategory = ref<string>("technology")

const emit = defineEmits<{
    (e: "filterCategory", selectCategory: string): void
}>()

watch(selectCategory, (newCategory) => {
    emit("filterCategory", newCategory)
})

defineProps<{
    categories: Array<string>
}>()
</script>

<style scoped></style>