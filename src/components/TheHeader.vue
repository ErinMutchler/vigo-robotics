<template>
  <header class="theHeader">
    <TheHeaderLogo />
    <TheHeaderButtonSwitchEditor />
    <TheHeaderButtonAuth />
  </header>
</template>

<script>
import TheHeaderLogo from "@/components/TheHeaderLogo.vue";
import TheHeaderButtonAuth from "@/components/TheHeaderButtonAuth.vue";
import TheHeaderButtonSwitchEditor from "@/components/TheHeaderButtonSwitchEditor.vue";
export default {
  name: "TheHeader",
  components: {TheHeaderButtonSwitchEditor, TheHeaderButtonAuth, TheHeaderLogo}
}
</script>

<style scoped>
.theHeader {
  align-items: center;
  background-color: var(--vcpl-primary);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1.4rem;
}
</style>