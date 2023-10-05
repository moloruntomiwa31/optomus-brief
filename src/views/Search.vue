<template>
    <SearchInput @get-book-title="getBookDetails" />
    <div v-if="searchArr.length > 0" class="text-white lg:w-[75%] absolute right-0 m-4">

        <div class="dark:bg-[#3e3939] bg-[#f9dab5] mt-4 rounded-xl">
            <div class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-10 my-4 w-full">
                <div v-for="data in searchArr" :key="data"
                    class="p-3 bg-[#ffecd4] dark:bg-[#6A5C55] cursor-pointer lg:shadow-md w-full lg:shadow-orange-300 lg:w-auto dark:shadow-none lg:min-h-[300px] rounded-t-xl">
                    <div class="flex items-center space-x-4 lg:block lg:bg-transparent p-3 lg:p-0">
                        <img :src="`https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h600&source=gbs_api`"
                            alt="book-cover-image"
                            class="lg:h-[400px] h-[13rem] lg:w-full object-cover lg:rounded-t-xl rounded-md">
                        <div class="flex flex-col items-start">
                            <h5 class="font-bold text-2xl lg:text-xl p-2 text-black dark:text-[#FFA559] w-full capitalize">
                                {{ data.volumeInfo.title }}</h5>
                            <div v-for="genre in data.volumeInfo.categories" :key="genre"
                                class="bg-[#0E918C] p-2 rounded-lg w-fit">
                                <p> {{ genre }}</p>
                            </div>
                            <div>
                                <h5 class="font-bold lg:text-md p-2 text-black dark:text-white w-full capitalize"
                                    v-if="data.volumeInfo.publishedDate">
                                    Published Date: {{ getFormattedDate(data.volumeInfo.publishedDate) }}</h5>
                                <h5 class="font-bold lg:text-md p-2 text-black w-full capitalize dark:text-white"
                                    v-if="data.volumeInfo.authors">
                                    Authors : {{ data.volumeInfo.authors.join(",") }}</h5>
                            </div>
                            <button @click="data.showSummary = true"
                                class="dark:bg-[#FFE6C7] dark:hover:bg-[#dfd8cf]  text-black bg-[#FFBF86] duration-150 p-2 ml-2 rounded-lg">Show
                                Summary</button>
                        </div>
                    </div>
                    <SummaryModal :data="data.volumeInfo.description" v-if="data.showSummary"
                        @close="data.showSummary = false" />
                </div>
            </div>
        </div>
    </div>
    <div v-else class="min-h-[ 80vh] scale absolute left-[50%] top-[50%] dark:text-white text-black text-center">
        <h1 class="text-4xl">No Search Details Yet.</h1>
    </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import { RouterLink, useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useSearchStore } from "../stores/search"
import { useDateFormatter } from "../composables/useDateFormatter.ts"
import SummaryModal from "@/components/favourite/SummaryModal.vue";

//data
const { searchArr } = storeToRefs(useSearchStore())
const isLoading = ref<boolean>(true)
const { getFormattedDate } = useDateFormatter()
//events

const getBookDetails = (searchTitle: string) => {
    useSearchStore().getSearchDetails(searchTitle)
    useRouter().push(`/search/${searchTitle}`)
}
//hooks
onMounted(() => {
    setTimeout(() => isLoading.value, 2000);
})
</script>

<style scoped>
.scale {
    transform: translate(-50%, -50%);
}
</style>