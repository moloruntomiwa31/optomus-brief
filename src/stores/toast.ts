import { defineStore } from "pinia";
import { ref } from "vue";
import bug from "../assets/bug.svg"
import check from "../assets/fixed/check.svg"
import question from "../assets/fixed/question.svg"

export const useToast = defineStore("toast", () => {
  const showToast = ref<boolean>(false);
  const toastText = ref<string>("");
  const bgColor = ref<string>("");
  const icon = ref<string>("")

  const addToast = (text: string, toastStatus: string) => {
    showToast.value = true;
    toastText.value = text;
    if (toastStatus == "success") {
      bgColor.value = "bg-green-600";
      icon.value = check
    } else if (toastStatus == "info") {
      bgColor.value = "bg-blue-500";
      icon.value = question
    } else {
      bgColor.value = "bg-red-700";
      icon.value = bug
    }
    setTimeout(() => {
      showToast.value = false;
      toastText.value = "";
      bgColor.value = "";
      icon.value = ""
    }, 1500);
  };
  return { showToast, toastText, bgColor, icon, addToast };
});
