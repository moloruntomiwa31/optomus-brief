import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import type { Ref } from "vue";
import axios from "axios";

export const useSearchStore = defineStore("search", () => {
  const apiKey = ref<string>("AIzaSyAKWTV6c3Ve16ojqAx-Wt_C9uHdbvEujKk");
  const localStorageItem = localStorage.getItem("searchResult");
  const searchArr = reactive(
    localStorageItem ? JSON.parse(localStorageItem) : []
  );

  async function getSearchDetails(bookTitle: string | Ref<string>) {
    const res = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${apiKey.value}`
    );
    searchArr.splice(0, searchArr.length, ...res.data.items);

    localStorage.setItem("searchResult", JSON.stringify(searchArr));
  }

  return { apiKey, searchArr, getSearchDetails };
});
