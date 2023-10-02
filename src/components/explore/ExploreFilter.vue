<template>
    <div class="md:hidden">
        <select v-model="selectCategory"
            class="p-2 dark:bg-[#FF7517] outline-none border-2 border-black dark:border-[#f9dab5] dark:text-[#f9dab5] rounded-md my-4">
            <option v-for="option in categories" :key="option" :value="option">{{ option}}</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const selectCategory = ref<string>("technology")
const route = useRoute()

//emits and props
const emit = defineEmits<{
    (e: "filterCategory", selectCategory: string): void
}>()

defineProps<{
    categories: Array<string>
}>()

//watcher
watch(selectCategory, (newCategory) => {
    emit("filterCategory", newCategory)
})


//hooks
onMounted(() => {
  selectCategory.value = route.query.explore || "technology";
});
</script>

<style scoped></style>