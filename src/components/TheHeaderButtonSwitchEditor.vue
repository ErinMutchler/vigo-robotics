<template>
  <div class="switchEditor-container">
    <button class="switchEditor-button" v-on="UIStore.showMonacoEditor ? { click: () => toggleSwitchEditor('/blockly') } : {}" :class="{isActive: UIStore.showBlocklyEditor}">
      Blockly
    </button>
    <button class="switchEditor-button" v-on="UIStore.showBlocklyEditor ? { click: () => toggleSwitchEditor('/circuitpython')} : {}" :class="{isActive: UIStore.showMonacoEditor}">
      Circuit Python
    </button>
  </div>
</template>

<script>
import {useUIStore} from "@/stores/UIStore";
import router from "@/router";

export default {
  name: "TheHeaderButtonSwitchEditor",
  setup() {
    const UIStore = useUIStore();
    const toggleSwitchEditor = route => {
      router.push(route);
    };
    return {
      UIStore,
      toggleSwitchEditor
    }
  }
}
</script>

<style scoped>
.switchEditor-container {
  overflow: hidden;
  border-radius: 24px;
  background-color: var(--vcpl-ternary);
  padding: 0;
  height: 3rem;
}

.switchEditor-button {
  border: none;
  background: transparent;
  height: 100%;
  width: 12rem;
  font-size: 1.4rem;
  color: white;
}

.switchEditor-text {

}

.isActive {
  background: var(--vcpl-secondary);
  border-radius: 24px;
  border: 2px solid white;

}
</style>