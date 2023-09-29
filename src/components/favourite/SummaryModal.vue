<template>
    <div class="fixed top-0 min-h-[100vh] right-0 overlay w-full flexStyles z-50" @click="close">
        <div class="relative wrapper dark:bg-[#3e3939] dark:text-white bg-gray-200 w-4/5 md:w-3/5 max-h-[600px] md:max-h-[400px] overflow-y-auto p-6 rounded-2xl space-y-8 text-black"
            @click.stop>
            <h1 class="font-bold text-3xl">Book Summary</h1>
            <p class="text-xl">{{ data }}</p>
            <button @click="close" class="text-right bg-[#ff6600] p-2 rounded-lg text-white">Close</button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
defineProps<{
    data: string
}>()
const emit = defineEmits<{
    (e: "close"): void
}>()

const close = () => {
    emit("close")
}
</script>
  
<style scoped>
.wrapper::-webkit-scrollbar {
    width: 10px;
}

.wrapper::-webkit-scrollbar-thumb {
    background-color: #ff6600;
    border-radius: 1rem;
}

.wrapper::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 1rem;
}</style>
  