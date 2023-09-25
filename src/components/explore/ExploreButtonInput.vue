<template>
    <button class="bg-[#FFE6C7] shadow p-2 rounded-lg capitalize duration-200 hover:bg-[#ff6600] hover:text-white" :class="{ active: category === activeCategory }"
        @click="setActiveCategory(category)" v-for="category in categories" :key="category">
        {{ category }}
    </button>
</template>

<script setup lang="ts">
//events
const emit = defineEmits<{
    (e: "setActiveCategory", category: string): void
}>()

defineProps<{
    activeCategory: string,
    categories: Array<string>
}>()

//methods
const setActiveCategory = (category: string) => {
    emit("setActiveCategory", category)
}
</script>

<style scoped>
.active {
    background-color: #ff6600;
    color: #FFE6C7;
}
</style>