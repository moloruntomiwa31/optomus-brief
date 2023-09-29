<template>
    <div class="flex space-x-2">
        <label for="check" class="bg-[#EDCFA9] dark:bg-[#FF7517] cursor-pointer relative w-10 h-5 rounded-full">
            <input type="checkbox" id="check" class="sr-only peer" v-model="isDark">
            <span
                class="w-1/3 h-3/5 bg-[#D57149] absolute rounded-full left-1 top-1 peer-checked:bg-[#AA4A30] dark:peer-checked:bg-white peer-checked:left-6 transition-all duration-500"></span>
        </label>
        <p>{{ isDark ? "Dark" : "Light" }} Mode</p>
    </div>
</template>

<script setup lang="ts">
import { useDark } from "@vueuse/core"
const isDark = useDark()
</script>

<style scoped></style>