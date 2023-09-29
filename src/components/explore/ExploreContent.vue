<template>
    <div v-for="data in exploreStore.exploreArr" :key="data" @click="router.push(`/category/${data.id}`)"
        class="cursor-pointer w-[100px] md:w-auto md:min-h-[300px] rounded-t-xl">
        <img :src="`https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h600&source=gbs_api`"
            alt="book-cover-image" class="md:h-[300px] w-full h-[150px] object-cover md:rounded-t-xl">
        <h5 class="font-bold md:text-xl p-4 text-center dark:text-[#ff6600] w-full capitalize">
            {{ structureBookTitle(data.volumeInfo.title) }}</h5>
    </div>
</template>

<script setup lang="ts">
import { useExploreStore } from "../../stores/explore"
import { useRouter } from "vue-router"
//store
const exploreStore = useExploreStore()
const router = useRouter()
//events
const structureBookTitle = (title: string) => {
    if (title.length <= 15) return title
    else {
        return title.substring(0, 20) + "..."
    }
}
</script>

<style scoped></style>