<template>
  <table id="blocklyTable">
    <tr>
      <td ref="blocklyArea" id="blocklyArea"></td>
    </tr>
  </table>

  <div ref="blocklyDiv" id="blocklyDiv"></div>
</template>

<script>
import {useUIStore} from "@/stores/UIStore";
import {useProjectStore} from "@/stores/ProjectStore";
import {BlocklyWorkspace} from "../services/BlocklyWorkspace";

export default {
  name: "BlocklyEditorView",
  mounted() {
    this.UIStore.showMonacoEditor = false;
    this.UIStore.showBlocklyEditor = true;
    this.projectStore.currentProject.type = "blockly";
    blocklyService.inject(this.$refs.blocklyDiv, this.$refs.blocklyArea);
  },
  setup() {
    const UIStore = useUIStore();
    const projectStore = useProjectStore();
    return {
      UIStore,
      projectStore,
    };
  },
}
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