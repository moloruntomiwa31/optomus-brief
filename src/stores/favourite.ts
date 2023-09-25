import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavouriteStore = defineStore('favourite', () => {
  const favouriteArr: Array<any> = reactive([])

  return { favouriteArr }
})

