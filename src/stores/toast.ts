import { defineStore } from "pinia";
import { ref } from "vue";
export const useToast = defineStore("toast", () => {
  const showToast = ref<boolean>(false);
  const toastText = ref<string>("");
  const bgColor = ref<string>("");

  const addToast = (text: string, toastStatus: string) => {
    showToast.value = true;
    toastText.value = text;
    if (toastStatus == "success") {
      bgColor.value = "bg-green-600";
    } else if (toastStatus == "info") {
      bgColor.value = "bg-blue-500";
    } else {
      bgColor.value = "bg-red-700";
    }
    setTimeout(() => {
      showToast.value = false;
      toastText.value = "";
      bgColor.value = "";
    }, 3000);
  };
  return { showToast, toastText, bgColor, addToast };
});
