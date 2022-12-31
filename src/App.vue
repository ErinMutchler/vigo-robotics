<template>
  <TheHeader />
  <RouterView />
  <TheToolbar />
<!--  <TheConsole />-->
</template>

<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheToolbar from "@/components/TheToolbar.vue";
import { onMounted } from "vue";
import { authService } from "@/services/FirebaseConfig";
// import TheConsole from "@/components/TheConsole.vue";

onMounted(() => {
  authService.startChangeListener();
});
</script>

<style scoped></style>
