<template>
  <div>
    <SideBar />
    <Toast v-if="toast.showToast" />
    <RouterView />
    <button
      class="btn z-50 bg-[#FFBF86] dark:bg-orange-500 p-3 rounded-lg fixed bottom-2 right-8 dark:text-white shadow text-black"
      @click="scrollToTop">
    </button>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBar from './components/fixed/SideBar.vue';
import Toast from './components/fixed/Toast.vue';
import { useToast } from './stores/toast';
const toast = useToast()
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>

<style scoped>
.theme-fade-enter-active,
.theme-fade-leave-active {
  transition: opacity 0.5s;
}

.theme-fade-enter,
.theme-fade-leave-to {
  opacity: 0;
}

.btn {
  background-image: url('./assets/fixed/smile.png');
  width: 50px;
  height: 50px;
  background-position: bottom left;
  background-size: 100% 100%;
  outline: none;
}
</style>