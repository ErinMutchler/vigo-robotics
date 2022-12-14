<template>
  <div class="monacoEditor-container">
    <div class="monacoEditor" ref="monacoDiv"></div>
  </div>
</template>

<script>
import { useUIStore } from "@/stores/UIStore";
import { monacoService } from "@/services/MonacoService";
import { useProjectStore } from "@/stores/ProjectStore";

export default {
  name: "MonacoEditorView",
  mounted() {
    this.projectStore.resetCurrentProject();
    monacoService.inject(this.$refs.monacoDiv);
    monacoService.startChangeListener(() => {
      this.projectStore.currentProject.code = monacoService.getCode();
      this.projectStore.currentProject.unsavedChangesExist = true;
    });
    this.projectStore.currentProject.type = "monaco";
    this.UIStore.showMonacoEditor = true;
    this.UIStore.showBlocklyEditor = false;
  },
  setup() {
    const UIStore = useUIStore();
    const projectStore = useProjectStore();

    return {
      UIStore,
      projectStore,
    };
  },
};
</script>

<style scoped>
.monacoEditor-container {
  height: calc(100% - 8rem);
  width: 100%;

}

.monacoEditor {
  height: 99%;
  border: 2px solid #e0e0e0;
  padding: 1rem 0;
}
</style>
