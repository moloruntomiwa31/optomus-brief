<template>
    <div class="dark:bg-[#3e3939] dark:text-white lg:w-[80%] w-full absolute right-0 min-h-full p-8 flexStyles flex-col"
        v-if="bookData">
        <button @click="router.back()"
            class="bg-[#FF7517] duration-100 absolute my-3 md:my-0 left-2 lg:left-[10%] top-[-2rem] md:top-[10%] p-2 rounded-full hover:text-white hover:dark:text-[#3e3939]">
            <font-awesome-icon icon="fa-regular fa-circle-left" size="2xl" />
        </button>
        <!-- {{ bookData }} -->
        <div
            class="space-y-4 text-center bg-[#fcf1e3] md:shadow-md md:shadow-orange-500 dark:shadow-none p-6 rounded-lg dark:bg-[#544e4e]">
            <div class="flex justify-center">
                <img :src="`https://books.google.com/books/publisher/content/images/frontcover/${bookData.id}?fife=w400-h600&source=gbs_api`"
                    alt="book-cover-image" class="w-[15rem] md:w-[75%] lg:w-1/3">
            </div>
            <h1 class="text-4xl font-bold" v-if="bookData.volumeInfo.title">{{ bookData.volumeInfo.title }}</h1>
            <h3 class="text-xl dark:text-[#FF7517]" v-if="bookData.volumeInfo.categories">{{
                bookData.volumeInfo.categories.join(",") }}</h3>
            <h3 class="text-2xl" v-if="bookData.volumeInfo.authors">Authors : {{ bookData.volumeInfo.authors.join(",") }}
            </h3>
            <div>
                <h3 class="text-2xl" v-if="bookData.volumeInfo.publishedDate">Published Date : {{
                    getFormattedDate(bookData.volumeInfo.publishedDate) }}</h3>
                <h3 class="text-2xl" v-else>Published Date : Null</h3>
            </div>
            <div class="space-x-4">
                <button class="bg-[#FF7517] p-2 rounded-lg hover:text-white duration-200 hover:bg-[#3e3939]"
                    @click="addToFavourite">
                    <font-awesome-icon icon="fa-regular fa-square-plus" size="sm" />
                    Add to Favourites
                </button>
            </div>
        </div>
        <ReadMore :bookData="bookData" />
    </div>
    <div v-else>
        <h1>No Data Available.</h1>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useExploreStore } from '@/stores/explore';
import { useFavouriteStore } from '@/stores/favourite';
import { useToast } from '@/stores/toast';
import { useDateFormatter } from '@/composables/useDateFormatter';
import { onMounted, ref } from 'vue';
import ReadMore from '@/components/fixed/ReadMore.vue';

const route = useRoute()
const router = useRouter()
const exploreStore = useExploreStore()
const favouriteStore = useFavouriteStore()
const toast = useToast()

//data
const bookData = ref<any | null>(null)
const { id } = route.params
const { getFormattedDate } = useDateFormatter()

//events
const addToFavourite = async () => {
    try {
        await favouriteStore.addToFavourites(bookData.value)
        console.log(favouriteStore.favouriteArr);
        toast.addToast("Book Added To Favorites!", "success")
    } catch (e) {
        console.log(e);
    }
}


//hooks
onMounted(() => {
    bookData.value = exploreStore.exploreArr.find((data) => data.id == id)
})
</script>

<style scoped></style>