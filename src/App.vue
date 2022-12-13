<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/TheHeader.vue";
import TheToolbar from "@/components/TheToolbar.vue";
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheToolbar />
</template>

<style scoped></style>
