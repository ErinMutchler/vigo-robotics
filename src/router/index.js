import { createRouter, createWebHistory } from "vue-router";
import BlocklyEditorView from "@/views/BlocklyEditorView.vue";
import MonacoEditorView from "@/views/MonacoEditorView.vue";
import LoginView from "@/views/LoginView.vue";
import DocsView from "@/views/DocsView.vue";
import { useProjectStore } from "@/stores/ProjectStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/blockly",
      name: "blockly",
      component: BlocklyEditorView,
    },
    {
      path: "/circuitpython",
      name: "circuitpython",
      component: MonacoEditorView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/docs",
      name: "docs",
      component: DocsView,
    },
    {
      path: "/",
      redirect: "/blockly",
    },
  ],
});

router.beforeEach((to, from) => {
  const projectStore = useProjectStore();
  if (from.name === "blockly" || from.name === "circuitpython") {
    if (projectStore.currentProject.unsavedChangesExist) {
      if (
        !confirm("Unsaved changes exist.\nAre you sure you want to continue?")
      ) {
        return false;
      }
    }
  }
});

export default router;
