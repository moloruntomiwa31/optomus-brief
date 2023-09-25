<template>
  <div>
    <SideBar />
    <Toast  v-if="toast.showToast"/>
    <router-view v-slot="{ Component }">
      <transition name="theme-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import SideBar from './components/fixed/SideBar.vue';
import Toast from './components/fixed/Toast.vue';
import { useToast } from './stores/toast';
const toast = useToast()
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
</style>