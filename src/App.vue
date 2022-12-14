<template>
  <TheHeader />
  <RouterView />
  <TheToolbar />
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheToolbar from "@/components/TheToolbar.vue";
import { onMounted } from "vue";
import { authService } from "@/services/FirebaseConfig";

onMounted(() => {
  authService.startChangeListener();
});
</script>

<style scoped></style>
