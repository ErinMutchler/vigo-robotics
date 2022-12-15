<template>
  <button class="auth-button" @click="handleAuthEvent">
    <span class="auth-button-text">
      {{ authStore.uid.length > 0 ? "Logout" : "Login" }}
    </span>
    <LogoutIcon v-if="authStore.uid.length > 0" class="auth-button-icon" />
    <LoginIcon v-if="!authStore.uid.length > 0" class="auth-button-icon" />
  </button>
</template>

<script>
import { useAuthStore } from "@/stores/AuthStore";
import LoginIcon from "@/components/icons/LoginIcon.vue";
import LogoutIcon from "@/components/icons/LogoutIcon.vue";
import { authService } from "@/services/FirebaseConfig";
import router from "@/router";

export default {
  name: "TheHeaderButtonAuth",
  components: { LogoutIcon, LoginIcon },
  setup() {
    const authStore = useAuthStore();
    const handleAuthEvent = () => {
      if (authStore.uid) {
        authService.logout();
      } else {
        authService.loginWithGoogle();
        router.push("")
      }
    }
    return {
      authStore,
      handleAuthEvent
    };
  },
};
</script>

<style scoped>
.auth-button {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  display: flex;
  font-size: 1.2rem;
  height: 3rem;
}

.auth-button-text {
  color: white;
  font-size: 1.2rem;
}

.auth-button-icon {
  height: 50%;
  margin: 0 0.8rem;
  filter: brightness(0) invert(1);
}

.auth-button:hover {
  transform: scale(1.2);
}
</style>