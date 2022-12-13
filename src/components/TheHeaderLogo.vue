<template>
  <router-link to="/">
    <img src="@/assets/images/logo.svg" class="theHeaderLogo" alt="Home" />
  </router-link>
</template>

<script>
export default {
  name: "TheHeaderLogo"
}
</script>

<style scoped>
.theHeaderLogo {
  filter: brightness(0) invert(1);
  height: 3rem;
}
</style>