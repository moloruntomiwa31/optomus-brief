<template>
    <main
        class="dark:bg-[#3E3939]  dark:text-white lg:w-[80%] absolute right-0 flex flex-col md:flex-row md:items-center justify-center md:justify-start min-h-[100vh] mx-auto md:p-8 md:space-x-8 bg-[#FFBF86]">
        <div class="w-full">
            <img src="../assets/hero-library.png" alt="hero-library-image">
        </div>
        <div class="md:w-[45%] lg:w-1/2 p-6 text-center space-y-10">
            <p class="text-lg">
                Welcome to our online book library, your literary sanctuary in the digital age. Dive into a treasure trove
                of books spanning genres, authors, and eras. Whether you seek timeless classics, thrilling mysteries, or
                thought-provoking non-fiction, we've curated a collection to satisfy every reader's appetite. Explore our
                virtual shelves, embark on literary journeys, and ignite your imagination. Join our community of avid
                readers and embark on a limitless adventure through the written word.
            </p>
            <div class="flex items-center justify-center border-black space-x-8 border-2 py-2 px-8 rounded-[2rem]">
                <button @click="router.push('/signin')"
                class="whitespace-nowrap bg-black rounded-[2rem] text-white px-8 py-2">Sign In</button>
                <button @click="router.push('/signup')"
                class="whitespace-nowrap rounded-[2rem] px-8 py-2 hover:bg-black hover:text-white duration-300">Sign Up</button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped></style>