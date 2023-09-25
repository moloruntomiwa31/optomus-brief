import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios"

export const useExploreStore = defineStore('explore', () => {
  const apiKey = ref<string>("AIzaSyAKWTV6c3Ve16ojqAx-Wt_C9uHdbvEujKk")
  const exploreArr: Array<any>  = reactive([])
  const favouriteArr: Array<any> = reactive([])

  async function getCategory(category: string) {
    const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${category}&key=${apiKey.value}&maxResults=20`)    
    exploreArr.splice(0, exploreArr.length, ...res.data.items);
  }
  return { apiKey, getCategory, exploreArr }
})

