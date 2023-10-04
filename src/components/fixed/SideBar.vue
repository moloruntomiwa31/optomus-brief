<template>
    <!-- ----------------desktop -->
    <main
        class="z-[-1] dark:bg-[#2C2727] dark:text-[#F6F4F4] hidden lg:flex fixed left-0 top-0 flex-col justify-around items-center min-h-[100vh] bg-[#f4efea] md:w-[20%] shadow-orange-300 shadow-2xl dark:shadow-sm">
        <div>
            <h1 class="dark:text-[#FF7517] uppercase font-bold text-xl whitespace-nowrap text-[#E89F71]">Opto<span
                    class="text-[#AA4A30] dark:text-inherit">mus-Brief</span></h1>
        </div>
        <div class="flexStyles flex-col">
            <div @click="showAvatars = true"
                class="dark:bg-[#FF7517] relative rounded-full w-3/5 h-3/5 p-3 bg-[#FFBF86] cursor-pointer">
                <img :src="userImageSource" alt="user-avatar" class="rounded-full">
                <font-awesome-icon icon="fa-regular fa-pen-to-square" class="absolute right-0 bottom-0" />
            </div>
            <!-- //username -->
            <h2 class="text-xl capitalize">@{{ reader.user?.email?.split("@")[0] || "bookworm" }}</h2>
        </div>
        <PageRoutes :sideNav="sideNav" v-if="reader.user" />
        <PageRoutes :sideNav="sideNavForm" v-else />
        <div class="flex flex-col space-y-4">
            <Theme />
            <button @click="logOut" v-if="reader.user">Log Out</button>
        </div>
    </main>
    <!-- ----------------mobile -->
    <main class="lg:hidden space-y-3 py-4">
        <div class="flex items-center justify-between min-w-full p-3">
            <div @click="showAvatars = true"
                class="relative rounded-full w-[15%] md:w-[8%] p-2 bg-[#FFBF86] cursor-pointer dark:bg-[#FF7517]">
                <img :src="userImageSource" alt="user-avatar" class="rounded-full">
                <font-awesome-icon icon="fa-regular fa-pen-to-square" class="absolute right-0 bottom-1 dark:text-white" />
            </div>
            <div>
                <h1 class="uppercase font-bold text-xl md:text-4xl whitespace-nowrap text-[#E89F71] dark:text-[#FF7517] ">
                    Opto<span class="text-[#AA4A30] dark:text-inherit">mus-Brief</span></h1>
            </div>
            <button @click="showModal = true">
                <img src="../../assets/fixed/hamburger.svg" alt="hamburger-image">
            </button>
        </div>
        <div class="text-center tracking-wider">
            <p class="md:text-xl dark:text-[#DC5F00]"><span class="text-[#D57149] dark:text-inherit">Read,</span><span
                    class="text-[#E89F71] dark:text-inherit">Explore,</span><span
                    class="text-[#AA4A30] dark:text-inherit">Enjoy.</span></p>
        </div>
    </main>
    <!------------------avatar -->
    <AvatarModal v-if="showAvatars" @close-avatar="showAvatars = false" @saveAvatar="saveAvatar" />

    <!------------------mobileOverlay -->
    <main :class="showModal ? 'block slideIn' : 'hidden slideOut'"
        class="absolute top-0 left-0 min-w-full min-h-[100vh] z-20 tabOverlay text-white">
        <div class="w-3/5 min-h-[100vh] bg-[#AA4A30] dark:bg-[#2C2727] absolute right-0 p-6 space-y-14">
            <button @click="showModal = false">
                <img src="../../assets/fixed/cross.svg" alt="cross-img" class="absolute top-4 right-4">
            </button>
            <Theme />
            <!-- //username -->
            <div>
                <h2 class="text-2xl">Username</h2>
                <h3 class="text-xl dark:text-[#FF7517]">@{{ reader.user?.email?.split("@")[0] || "bookworm" }}</h3>
            </div>

            <PageRoutes :sideNav="sideNav" v-if="reader.user" />
            <PageRoutes :sideNav="sideNavForm" v-else />
            <button class="bg-[#E89F71] dark:bg-[#FF7517] p-3 rounded-lg" @click="logOut" v-if="reader.user">Log Out</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import AvatarModal from '../AvatarModal.vue';
import PageRoutes from '../PageRoutes.vue';
import Theme from "./Theme.vue"
import user from "../../assets/fixed/user.svg"
import { useUserStore } from "@/stores/user";
import { useToast } from "@/stores/toast";
import { useRouter } from "vue-router";

const reader = useUserStore()
const toast = useToast()
const router = useRouter()

//data
const sideNav = reactive([
    {
        name: "Explore",
        icon: "fa-regular fa-bookmark",
        link: "/explore"
    },
    {
        name: "Favourites",
        icon: "fa-regular fa-heart",
        link: "/favourites"
    },
])
const sideNavForm = reactive([
    {
        name: "SignIn",
        icon: "fa-regular fa-square",
        link: "/signin"
    },
    {
        name: "Sign Up",
        icon: "fa-regular fa-arrow-alt-circle-up",
        link: "/signup"
    },
])

const showAvatars = ref<boolean>(false)
const showModal = ref<boolean>(false)

const userImageSource = ref<string>(localStorage.getItem("imageSource") || user);


//events
const saveAvatar = (imagesrc: string) => {
    localStorage.setItem("imageSource", imagesrc);
    userImageSource.value = imagesrc;
    showAvatars.value = false;
}

const logOut = () => {
    reader.logOut()
    toast.addToast("Reader Logged Out!", "error")
    router.push("/")
    localStorage.clear()
}
</script>

<style scoped>
.active-page {
    padding: 1rem;
    border-radius: 1.2rem;
}

.slideIn {
    animation: slide 0.3s linear;
}

.slideOut {
    animation: slideout 0.3s linear;
}

@keyframes slide {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0px);
    }
}

@keyframes slideout {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>
