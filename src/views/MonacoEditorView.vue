<template>
  <div class="monacoEditor-container">
    <div class="monacoEditor" ref="monacoDiv" ></div>
  </div>
</template>

<script>

import {useUIStore} from "@/stores/UIStore";
import {monacoService} from "@/services/MonacoService";


export default {
  name: "MonacoEditorView",
  mounted() {
    this.UIStore.showMonacoEditor = true;
    this.UIStore.showBlocklyEditor = false;
    monacoService.inject(this.$refs.monacoDiv);
  },
  setup() {
    const UIStore = useUIStore();
    return {
      UIStore,
    };
  },
};
</script>

<style scoped>
.monacoEditor-container {
  height: calc(100% - 8rem);
  width: 100%;
  padding: 2rem;
}

.monacoEditor {
  height: 99%;
}
</style>