<template>
  <div class="theToolbar-container">
    <div class="theToolbar">
      <ToolbarInput />
      <ToolbarButton @click="saveProject" :src="saveIcon" tooltip-text="Save Project" />
      <ToolbarButton @click="createProject" :src="createIcon" tooltip-text="Create Project" />
      <ToolbarButton @click="loadProject" :src="loadIcon" tooltip-text="Load Project" />
      <ToolbarButton @click="deleteProject" :src="deleteIcon" tooltip-text="Delete Project" />
      <ToolbarButton @click="downloadProject" :src="downloadIcon" tooltip-text="Download Project" />
    </div>
  </div>
</template>

<script>
import ToolbarButton from "@/components/ToolbarButton.vue";
import ToolbarInput from "@/components/ToolbarInput.vue";
import saveIcon from "@/assets/icons/save.svg";
import createIcon from "@/assets/icons/create.svg";
import loadIcon from "@/assets/icons/load.svg";
import deleteIcon from "@/assets/icons/delete.svg";
import downloadIcon from "@/assets/icons/download.svg";
import {projectService} from "@/services/ProjectService.js";
export default {
  name: "TheToolbar",
  components: {ToolbarInput, ToolbarButton},
  setup() {
    const saveProject = () => {
      projectService.saveProject();
    };
    const createProject = () => {
      projectService.createProject();
    }
    const loadProject = () => {
      projectService.loadProject();
    };
    const deleteProject = () => {
      projectService.deleteProject();
    };
    const downloadProject = () => {
      projectService.downloadProject();
    };
    return {
      saveIcon,
      createIcon,
      loadIcon,
      deleteIcon,
      downloadIcon,
      saveProject,
      createProject,
      loadProject,
      deleteProject,
      downloadProject
    }
  }
}
</script>

<style scoped>
.theToolbar-container {
  align-items: center;
  justify-content: center;
  display: flex;
  height: 4rem;
}

.theToolbar {
  border: 2px solid var(--vcpl-secondary);
  background-color: var(--vcpl-secondary);
  /*border-radius: 6px;*/
  height: 70%;
  display: flex;
  margin: 0 1rem;
}
</style>