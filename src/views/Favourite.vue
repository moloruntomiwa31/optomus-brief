<template>
  <div
    class="dark:bg-[#3e3939] dark:text-white lg:w-[80%] w-full absolute right-0 min-h-[200px] p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
    v-if="favouriteStore.favouriteArr.length > 0">
    <div v-for="data in favouriteStore.favouriteArr" :key="data"
      class="relative md:shadow-md md:shadow-orange-500 h-auto w-[150px] md:w-auto dark:shadow-none md:max-h-[500px] rounded-t-xl">
      <img @click="data.showSummary = true"
        :src="`https://books.google.com/books/publisher/content/images/frontcover/${data.id}?fife=w400-h600&source=gbs_api`"
        alt="book-cover-image" class="cursor-pointer  md:h-[300px] w-full h-auto object-cover md:rounded-t-xl">
      <div class="bg-[#ff6600] w-10 md:h-2 h-[0.3rem]"></div>
      <div class="flex items-center justify-between w-full">
        <h5 class="font-bold md:text-xl p-4 text-center dark:text-[#ff6600] w-full capitalize">{{ data.volumeInfo.title
        }}</h5>
        <button @click="data.showTooltip = !data.showTooltip">
          <img src="../assets/fixed/ellipsis.svg" alt="ellipsis-image">
        </button>
        <Transition name="scale">
          <div v-if="data.showTooltip"
            class="dark:bg-[#FFE6C7] bg-[#3e3939] dark:text-black text-white p-2 rounded-lg absolute right-1 bottom-[10%]">
            <button @click="deleteItem(data.id)">Delete</button>
          </div>
        </Transition>
      </div>
      <SummaryModal v-if="data.showSummary" :data="data.volumeInfo.description" @close="data.showSummary = false" />
    </div>
  </div>
  <div v-else class="min-h-[ 80vh] scale absolute left-[50%] top-[50%] dark:text-white text-black text-center">
    <h1 class="text-4xl">No Favourites Available Yet.</h1>
  </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from "../stores/favourite"
import { useToast } from "@/stores/toast";
import SummaryModal from "../components/favourite/SummaryModal.vue"

//stores
const favouriteStore = useFavouriteStore()
const toast = useToast()

//events
const deleteItem = async (id: string) => {
  try {
    await favouriteStore.deleteItem(id)
    toast.addToast("Book deleted!", "info")
  } catch (e: any) {
    toast.addToast(e.message, "error")
  }
}

</script>

<style scoped>
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.5);
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease-in;
}

.scale {
  transform: translate(-50%, -50%);
}
</style>
