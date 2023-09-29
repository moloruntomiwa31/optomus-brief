<template>
  <div class="dark:bg-[#3e3939] lg:w-[80%] w-full absolute right-0">
    <SearchInput @get-book-title="getBookTitle" />

    <div class="dark:bg-[#3e3939] bg-[#f9dab5] mt-4 p-8 rounded-xl">
      <h1 class="text-3xl dark:text-[#FF7517] font-bold">Categories</h1>
      <ExploreFilter :categories="categories" @filter-category="filterCategory" />
      <div class="items-center justify-between my-4 hidden md:flex">
        <ExploreButtonInput :activeCategory="activeCategory" :categories="categories"
          @setActiveCategory="setActiveCategory" />
      </div>
      <div class="grid grid-cols-3 lg:grid-cols-4 gap-10 my-4">
        <ExploreSkeleton v-if="isLoading" v-for="i in 20" />
        <ExploreContent v-else />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useExploreStore } from '@/stores/explore';
import SearchInput from '@/components/SearchInput.vue';
import ExploreSkeleton from '@/components/ExploreSkeleton.vue';
import ExploreContent from "@/components/explore/ExploreContent.vue"
import ExploreFilter from "../components/explore/ExploreFilter.vue"
import ExploreButtonInput from "../components/explore/ExploreButtonInput.vue"
import { useSearchStore } from '@/stores/search';

//datas
const router = useRouter()
const route = useRoute()
const exploreStore = useExploreStore()
const searchStore = useSearchStore()

const categories: string[] = reactive(["technology", "romance", "fiction", "art", "fantasy", "drama", "science", "education", "Biography"])
const isLoading = ref<boolean>(true)
const activeCategory = ref<string>("technology")

//events
const setActiveCategory = async (category: string | any) => {
  activeCategory.value = category
  await exploreStore.getCategory(category)
  router.push({ query: { explore: category } })
}

const filterCategory = (newCategory: string) => {
  setActiveCategory(newCategory)
}

const getBookTitle = (searchTitle: string) => {
  searchStore.getSearchDetails(searchTitle)
  router.push(`/search/${searchTitle}`)
  localStorage.setItem("searchDetail", searchTitle)
}

//hooks
onMounted(async () => {
  setActiveCategory(route.query.explore || categories[0])
  setTimeout(() => isLoading.value = false, 2000)
})
</script>

<style scoped></style>