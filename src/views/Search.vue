<template>
    <div v-if="searchArr" class="text-white lg:w-[75%] absolute right-0 m-4">
        <p class="text-3xl text-black dark:text-white">Showing results for {{ searchResult }} </p>
        <div class="dark:bg-[#3e3939] bg-[#f9dab5] mt-4 rounded-xl">
            <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 my-4 min-w-full">
                <div v-for="data in searchArr" :key="data"
                    class="bg-[#E8AA8C] dark:bg-[#6A5C55] cursor-pointer lg:shadow-md w-full lg:shadow-orange-500 lg:w-auto dark:shadow-none lg:min-h-[300px] rounded-t-xl">
                    <div class="flex items-center space-x-4 lg:block shadow-sm lg:bg-transparent p-3 lg:p-0">
                        <img :src="`https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h600&source=gbs_api`"
                            alt="book-cover-image"
                            class="shadow-sm lg:h-[400px] h-[13rem] lg:w-full object-cover lg:rounded-t-xl rounded-md">
                        <div class="flex flex-col items-start">
                            <h5 class="font-bold text-2xl lg:text-xl p-2 text-black dark:text-[#ff6600] w-full capitalize">
                                {{ data.volumeInfo.title }}</h5>
                            <div v-for="genre in data.volumeInfo.categories" :key="genre"
                                class="bg-[#0E918C] p-2 rounded-lg w-fit">
                                <p> {{ genre }}</p>
                            </div>
                        </div>
                    </div>
                    <p v-if="data.volumeInfo.description"
                        class="md:text-xl p-4 dark:text-[#fff] w-full text-black">{{
                            data.volumeInfo.description.slice(0, 300) }}......</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useSearchStore } from "../stores/search"
let searchResult: string | null = ""

const { searchArr } = storeToRefs(useSearchStore())
const isLoading = ref<boolean>(true)
onMounted(() => {
    setTimeout(() => isLoading.value, 2000);
    searchResult = localStorage.getItem("searchDetail")
})
</script>

<style scoped></style>