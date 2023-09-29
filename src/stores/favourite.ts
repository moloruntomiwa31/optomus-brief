import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { collection, addDoc, getDocs, query, setDoc } from "firebase/firestore";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase/index";
import { onAuthStateChanged } from "firebase/auth";

export const useFavouriteStore = defineStore("favourite", () => {
  const favouriteArr: Array<any> = reactive([]);

  async function addToFavourites(data: any | null) {
    const user = auth.currentUser;
    if (user) {
      const favouriteBookRef = doc(
        collection(db, `users/${user.uid}/favourites`),
        data.id
      );
      await setDoc(favouriteBookRef, data);
    }
  }
  async function deleteItem(id: string) {
    const user = auth.currentUser;
    if (user) {
      const favouriteBookRef = collection(db, `users/${user.uid}/favourites`);
      await deleteDoc(doc(favouriteBookRef, id));
    }
  }
  return { favouriteArr, addToFavourites, deleteItem };
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    const favouriteBookRef = collection(db, `users/${user.uid}/favourites`);
    onSnapshot(favouriteBookRef, (querySnapshot) => {
      let favoritesList: Array<any> = [];
      querySnapshot.forEach((doc) => {
        favoritesList.unshift({
          ...doc.data(),
          id: doc.id,
          showTooltip: false,
          showSummary: false
        });
      });
      useFavouriteStore().favouriteArr = favoritesList;
    });
  } else {
    // If the user is not authenticated, clear the cart
    useFavouriteStore().favouriteArr = [];
  }
});
