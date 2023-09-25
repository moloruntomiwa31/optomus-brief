<template>
    <div v-for="data in exploreStore.exploreArr" :key="data" @click="router.push(`/category/${data.id}`)"
        class="cursor-pointer md:shadow-md md:shadow-orange-500 w-[100px] md:w-auto dark:shadow-none md:min-h-[300px] rounded-t-xl">
        <img :src="`https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h600&source=gbs_api`"
            alt="book-cover-image" class="md:h-[300px] w-full h-[150px] object-cover md:rounded-t-xl">
        <div class="bg-[#ff6600] w-10 md:h-2 h-[0.3rem]"></div>
        <h5 class="font-bold md:text-xl p-4 text-center dark:text-[#ff6600] w-full capitalize">{{ data.volumeInfo.title
        }}</h5>
    </div>
</template>

<script setup lang="ts">
import { useExploreStore } from "../../stores/explore"
import { useRouter } from "vue-router"

const exploreStore = useExploreStore()
const router = useRouter()
</script>

<style scoped></style>