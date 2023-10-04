<template>
    <div class="w-full flex items-center justify-center space-x-8 mt-3">
        <div class="grid gap-4">
            <input type="text" placeholder="Search books via title..." v-model.trim="searchDetail"
                @keyup.enter="getBookTitle"
                class="placeholder:text-white dark:placeholder:text-[#3e3939] shadow-orange-500 shadow-sm p-3 outline-none rounded-lg bg-[#3e3939] text-white dark:bg-white dark:text-gray-600">
            <button @click="getBookTitle" class="lg:hidden dark:bg-orange-500 p-2 rounded-lg text-white w-fit">Search</button>
        </div>
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