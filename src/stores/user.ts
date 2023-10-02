import { defineStore, acceptHMRUpdate } from "pinia";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import type { UserCredential, User } from "firebase/auth";
import { auth } from "@/firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const user = ref<User | null>(null);
  const error = ref<string>("");

  async function signUp(email: string, password: string) {
    const res: UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (res) {
      user.value = res.user;
      console.log(user.value);
    }
  }

  async function signIn(email: string, password: string) {
    const res: UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (res) {
      user.value = res.user;
      console.log(user.value);
    }
  }

  async function logOut() {
    await signOut(auth);
    user.value = null;
  }
  return { signUp, user, signIn, error, logOut };
});

onAuthStateChanged(auth, (user) => {
  useUserStore().user = user;
  const router = useRouter()
  router.push("/explore")
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
