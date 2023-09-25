<template>
    <div class="border-orange-600 border-2 p-4 rounded-lg mt-4 text-lg" v-if="bookData">
        <p v-if="!showFullText">{{ bookData.volumeInfo.description.slice(0, trimLength) }}</p>
        <p v-else>{{ bookData.volumeInfo.description }}</p>
        <button @click="toggleReadMore" class="text-[#FF7517]">{{ buttonText }}</button>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
defineProps<{
    bookData: any | null
}>()

const showFullText = ref<boolean>(false)
const trimLength = 200

const buttonText = computed(() => {
    return showFullText.value ? "Read Less" : "Read More";
})

const toggleReadMore = () => showFullText.value = !showFullText.value
</script>

<style scoped></style>