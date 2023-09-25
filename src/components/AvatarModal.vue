<template>
    <div class="overlay fixed top-0 left-0 min-w-full min-h-[100vh] z-10 flexStyles">
        <div class="wrapper bg-gray-200 w-4/5 md:w-3/5 max-h-[fit] p-6 rounded-2xl space-y-8">
            <div class="flex items-center space-x-1">
                <img src="../assets/fixed/dashboard.svg" alt="dashboard">
                <h1 class="capitalize font-bold text-xl text-center">Choose an Avatar</h1>
            </div>
            <div class="grid place-items-center grid-cols-4 gap-8">
                <img v-for="(image, index) in avatars" @click="toggleImageSelection(index)"
                    :class="{ selected: isSelected(index) }" :key="image" :src="image" ref="avatarImages" alt="user-profile"
                    class="border-2 border-[#E89F71] rounded-full cursor-pointer md:w-30">
            </div>
            <div class="uppercase text-white space-x-4 md:space-x-8 flex justify-end items-center">
                <button class="bg-[#AA4A30] p-2 rounded-lg hover:bg-[#E89F71] duration-200"
                    @click="saveAvatar">Save</button>
                <button class="bg-black rounded-lg p-2 duration-200" @click="closeAvatar">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import avatar2 from "../assets/avatars/avatar-2.png"
import avatar3 from "../assets/avatars/avatar-3.png"
import avatar4 from "../assets/avatars/avatar-4.png"
import avatar6 from "../assets/avatars/avatar-6.avif"
import avatar7 from "../assets/avatars/avatar-7.avif"
import avatar8 from "../assets/avatars/avatar-8.png"
import avatar9 from "../assets/avatars/avatar-9.avif"
import avatar10 from "../assets/avatars/avatar-10.jpg"

//datas
const avatars = reactive([avatar7, avatar2, avatar4, avatar6, avatar8, avatar9, avatar3, avatar10])
const selectedImageIndex = ref<number>(-1);
const avatarImages = ref<(HTMLImageElement | null)[]>([])

//events
const emit = defineEmits<{
    (e: "closeAvatar"): void
    (e: "saveAvatar", imageSrc: string): void
}>()


//methods
const closeAvatar = () => emit("closeAvatar")

const toggleImageSelection = (index: number) => {
    selectedImageIndex.value = selectedImageIndex.value === index ? -1 : index
}

const isSelected = (index: number): boolean => {
    return selectedImageIndex.value === index
}

const saveAvatar = () => {
    const selectedAvatar = avatarImages.value[selectedImageIndex.value];
    if (selectedAvatar) {
        emit("saveAvatar", selectedAvatar.src);
    }
}
</script>

<style scoped>
.selected {
    transition: border 0.2s ease-in;
    border: 0.3rem dashed rgb(248, 70, 0);
    border-image-slice: 1;
}
</style>