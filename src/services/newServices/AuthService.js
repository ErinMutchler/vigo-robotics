import {
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthStore } from "@/stores/AuthStore";

export default class AuthService {
  constructor(auth) {
    this.auth = auth;
    this.googleProvider = new GoogleAuthProvider();
  }

  startChangeListener() {
    this.authStore = useAuthStore();
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.authStore.uid = user.uid;
      } else {
        this.authStore.uid = null;
      }
    });
  }

  async signup(email, password) {
    return createUserWithEmailAndPassword(this.auth, email, password).then(
      () => {
        this.loginWithPassword(email, password);
      }
    );
  }

  async loginWithGoogle() {
    return signInWithPopup(this.auth, this.googleProvider);
  }

  async loginWithPassword(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return this.auth.signOut();
  }
}
