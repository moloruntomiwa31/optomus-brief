<template>
    <form class="flex flex-col space-y-6 mt-8" @submit.prevent="submitForm">
        <div class="flex flex-col space-y-2">
            <label for="email" class="text-lg">Email Address</label>
            <input type="email" class="signUp-login dark:text-black" placeholder="johndoe@gmail.com*" required
                v-model="email">
        </div>
        <div class="flex flex-col space-y-2 relative">
            <label for="password" class="text-lg">Password</label>
            <input :type="showPassword ? 'text' : 'password'" class="signUp-login dark:text-black" placeholder="Password*"
                required v-model="password">
            <div @click="toggleVisibilty" class="cursor-pointer absolute md:right-[6rem] right-3 top-9 outline-none">
                <img src="../assets/register/eye.svg" alt="eye-toggler">
        </div>
        </div>
        <button
            class="capitalize rounded-lg bg-[#f4efea] p-3 w-fit hover:bg-orange-300 hover:text-[#222121] duration-200 dark:hover:bg-[#FF7517] dark:hover:text-white dark:text-[#3E3939]">{{
                buttonText }}</button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    buttonText: string
}>()

const emit = defineEmits<{
    (e: "submitForm", email: string, password: string): void
}>()

const showPassword = ref<boolean>(false)
const email = ref("")
const password = ref("")

const toggleVisibilty = () => {
    showPassword.value = !showPassword.value
}
const submitForm = () => {
    emit("submitForm", email.value, password.value)
    email.value = ""
    password.value = ""
}
</script>

<style lang="scss" scoped></style>