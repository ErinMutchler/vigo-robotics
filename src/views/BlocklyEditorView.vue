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
import {blocklyService} from "@/services/BlocklyService";

export default {
  name: "BlocklyEditorView",
  mounted() {
    this.UIStore.showMonacoEditor = false;
    this.UIStore.showBlocklyEditor = true;
    blocklyService.inject(this.$refs.blocklyDiv, this.$refs.blocklyArea);
  },
  setup() {
    const UIStore = useUIStore();
    return {
      UIStore,
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