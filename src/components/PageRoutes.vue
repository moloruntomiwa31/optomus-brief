<template>
    <div>
        <RouterLink active-class="rounded-[1.2rem] bg-[#FFBF86] dark:bg-[#FF7517] text-black dark:text-white" v-for="pages in sideNav" :key="pages.link"
            :to="pages.link"
            class="dark:hover:text-black dark:hover:bg-[#FF7517] flex items-center space-x-20 mt-8 p-4 duration-200 hover:bg-orange-200 rounded-[1.2rem]">
            <font-awesome-icon :icon="getFontAwesomeIcon(pages.icon)" size="xl" />
            <p class="whitespace-nowrap">{{ pages.name }}</p>
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type SideNav from "../types/sideNav"

defineProps<{
    sideNav: SideNav[]
}>()

const getFontAwesomeIcon = (iconClass: string) => {
    return ['fa', iconClass].join(' ');
};
</script>

<style scoped></style>