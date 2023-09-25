<template>
    <div v-if="toast.showToast" :class="toast.bgColor"
        class="slide toast-wrapper mt-3 md:mt-0 p-2 md:p-4 rounded-md fixed top-[4rem] z-50 right-8  text-center">
        <div class="toast text text-white flex items-center space-x-2">
            <font-awesome-icon icon="fa-regular fa-circle-check" v-if="toast.toastText === 'success'" size="xl" />
            <font-awesome-icon icon="fa-regular fa-circle-question" v-else-if="toast.toastText === 'info'" size="xl" />
            <img src="../../assets/bug.svg" alt="bug-image" v-else>
            <p>{{ toast.toastText }}</p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useToast } from '../../stores/toast';
const toast = useToast();
</script>
  
<style scoped>
.slide {
    animation: slide 0.3s linear;
}

@keyframes slide {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0px);
    }
}
</style>
  