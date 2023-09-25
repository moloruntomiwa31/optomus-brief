<template>
    <main
        class="dark:bg-[#3E3939]  dark:text-white lg:w-[80%] absolute right-0 flex flex-col md:flex-row items-center md:justify-center min-h-[100vh] md:p-8 md:space-x-8 bg-[#FFBF86]">
        <div class="image lg:w-3/5 flex items-center">
            <img src="../assets/register/signUp.jpg" alt="library-image" class="h-[40vh] md:h-[30vh] object-fit lg:h-auto">
        </div>
        <div class="p-5 space-y-6 md:p-0">
            <h1 class="text-3xl font-bold">Create your account.</h1>
            <p>Enter your details to create your account and start using our library.</p>
            <Form button-text="sign up" @submitForm="submitForm" />
            <p class="mt-4">Got an account? <RouterLink to="/signin" class="text-orange-500 underline">Sign In</RouterLink>
            </p>
            <div v-if="error" class="text-red-600 dark:text-red-400 text-lg">{{ error }}</div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Form from '@/components/Form.vue';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';

const reader = useUserStore()
const router = useRouter()
const error = ref<string>("")

const submitForm = async (email: string, password: string) => {
    try {
        await reader.signUp(email, password)
        router.push("/explore")
    } catch (e: any) {
        error.value = e.message.split(":")[1]
    }
}
</script>

<style scoped></style>