<template>
  <table id="blocklyTable">
    <tr>
      <td ref="blocklyArea" id="blocklyArea"></td>
    </tr>
  </table>
  <div ref="blocklyDiv" id="blocklyDiv"></div>
</template>

<script>
import { useUIStore } from "@/stores/UIStore";
import { useProjectStore } from "@/stores/ProjectStore";
import { blocklyService } from "@/services/BlocklyService";

export default {
  name: "BlocklyEditorView",
  mounted() {
    this.projectStore.resetCurrentProject();
    blocklyService.inject(this.$refs.blocklyDiv, this.$refs.blocklyArea);
    blocklyService.startResizeListener();
    blocklyService.startChangeListener(() => {
      this.projectStore.currentProject.code = blocklyService.getPythonCode();
      this.projectStore.currentProject.unsavedChangesExist = true;
      this.projectStore.currentProject.workspace =
        blocklyService.getWorkspaceAsString();
    });
    this.projectStore.currentProject.type = "blockly";
    this.UIStore.showMonacoEditor = false;
    this.UIStore.showBlocklyEditor = true;
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
#blocklyDiv {
  position: absolute;
}

#blocklyTable {
  height: calc(100% - 8rem);
  width: 100%;
}

#blocklyArea {
  height: 99%;
}
</style>
