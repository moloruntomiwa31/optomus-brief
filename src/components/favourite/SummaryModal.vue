<template>
    <div class="fixed top-0 min-h-[100vh] right-0 overlay w-full flexStyles z-50" @click="close">
        <div class="wrapper bg-gray-200 w-4/5 md:w-3/5 max-h-[fit] p-6 rounded-2xl space-y-8 text-black" @click.stop>
            <h1 class="font-bold text-3xl">Book Summary</h1>
            <p class="text-xl">{{ data.volumeInfo.description}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    data: any
}>()
const emit = defineEmits<{
    (e: "close"): void
}>()

const close = () => {
    emit("close")
}
</script>

<style scoped></style>