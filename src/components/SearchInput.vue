<template>
    <div class="w-full flex items-center justify-center space-x-8 mt-3">
        <input type="text" placeholder="Search books via title..." v-model.trim="searchDetail" @keyup.enter="getBookTitle" @keyup.13="getBookTitle"
            class="placeholder:text-white dark:placeholder:text-[#3e3939] shadow-orange-500 shadow-sm p-3 outline-none rounded-lg w-2/5 bg-[#3e3939] text-white dark:bg-white dark:text-gray-600">
        <h2 class="dark:text-white text-[#3e3939] text-xl capitalize">Hi, {{ reader.user?.email?.split("@")[0] ||
            "bookworm" }}<font-awesome-icon icon="fa-regular fa-face-smile" bounce size="lg"></font-awesome-icon></h2>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
//data
const reader = useUserStore()
const searchDetail = ref<string>("")
//events
const emit = defineEmits<{
    (e: "getBookTitle", search: string): void
}>()
const getBookTitle = () => {
    emit("getBookTitle", searchDetail.value)
    searchDetail.value = ""
}
</script>

<style scoped></style>