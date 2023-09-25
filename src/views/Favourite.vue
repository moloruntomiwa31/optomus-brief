<template>
  <div class="text-white">
    <div v-for="data in favouriteStore.favouriteArr">
      {{ data.volumeInfo.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavouriteStore } from "../stores/favourite"
const favouriteStore = useFavouriteStore()
</script>

<style scoped></style>