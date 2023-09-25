<template>
    <main
        class="dark:bg-[#3E3939] dark:text-white lg:w-[80%] w-full absolute right-0 flex flex-col md:flex-row items-center md:justify-center min-h-[100vh] md:p-8 md:space-x-8 bg-[#FFBF86]">
        <div class="image md:w-3/5 flex items-center">
            <img src="../assets/register/login.jpg" alt="library-image" class="h-[40vh] object-fit md:h-auto">
        </div>
        <div class="p-5 space-y-8 md:p-0 lg:space-y-0">
            <h1 class="text-3xl font-bold">Welcome Back!</h1>
            <p>Log in to your account to access your dashboard.</p>
            <Form button-text="sign In" @submitForm="submitForm" />
            <p class="mt-4">No account? <RouterLink to="/signup" class="text-orange-500 underline">Sign Up</RouterLink>
            </p>
            <div v-if="error" class="text-red-600 dark:text-red-400 text-lg">{{ error }}</div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Form from '@/components/Form.vue';
import { useUserStore } from '@/stores/user';
import { useToast } from '@/stores/toast';
import { ref } from 'vue';

const reader = useUserStore()
const router = useRouter()
const toast = useToast()
const error = ref<string>("")

const submitForm = async (email: string, password: string) => {
    try {
        await reader.signIn(email, password)
        router.push("/explore")
        toast.addToast("Reader Logged In!", "success")
    }catch (e: any) {
        error.value = e.message.split(":")[1]
    }
}
</script>
  
<style scoped></style>