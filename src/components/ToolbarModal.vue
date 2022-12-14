<template>
  <div class="toolbar-modal" v-if="UIStore.showToolbarModal">
    <div class="toolbar-modal-item" v-for="project in projectStore.getProjects" :key="project">
      <span @click="loadProject(project.firestoreID)">{{project.name}}</span>
    </div>
  </div>
</template>

<script>
import {useUIStore} from "@/stores/UIStore";
import {useProjectStore} from "@/stores/ProjectStore";
import {projectService} from "@/services/ProjectService";
import {firestoreService} from "@/services/FirebaseConfig";

export default {
  name: "ToolbarModal",
  mounted() {
    firestoreService.startChangeListener((docs) => {
      this.projectStore.projects = [];
      docs.forEach(doc => {
        let project = doc.data();
        project.firestoreID = doc.id;
        this.projectStore.projects.push(project);
      });
    });
  },

  setup() {
    const UIStore = useUIStore();
    const projectStore = useProjectStore();

    const loadProject = (firestoreID) => {
      projectService.loadProject(firestoreID);
      UIStore.showToolbarModal = false;
    }

    return {
      UIStore,
      projectStore,
      loadProject,
    }
  },
  watch:{
    $route (to, from){
      this.UIStore.showToolbarModal = false;
    }
  }
}
</script>

<style scoped>
.toolbar-modal {
  width: 100%;
  max-width: 680px;
  height: 50vh;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 14vh;
  transform: translateX(-50%);
  z-index: 2;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 12px;
  padding: 1rem;
}

.toolbar-modal-item {
  padding: 0.2rem 0;
  border-bottom: 2px solid #e0e0e0;
  cursor: pointer;
}
</style>