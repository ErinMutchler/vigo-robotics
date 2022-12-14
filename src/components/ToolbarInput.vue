<template>
  <input
      v-model="projectStore.currentProject.name"
      :disabled="projectStore.currentProject.firestoreID"
      class="projectName-input"
      name="projectName"
      type="text"
      placeholder="Untitled"
  />
</template>

<script>
import {useProjectStore} from "@/stores/ProjectStore";

export default {
  name: "ToolbarInput",
  setup() {
    const projectStore = useProjectStore();

    return {
      projectStore,
    }
  }
}
</script>

<style scoped>
.projectName-input {
  outline: none;
  border: none;
  padding-left: 0.4rem;
  font-size: 1rem;
}
.projectName-input:disabled {
  background-color: white;
}
</style>