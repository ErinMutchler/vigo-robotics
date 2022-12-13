import { createRouter, createWebHistory } from "vue-router";
import BlocklyEditorView from "@/views/BlocklyEditorView.vue";
import MonacoEditorView from "@/views/MonacoEditorView.vue";
import LoginView from "@/views/LoginView.vue";

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
      path: "/",
      redirect: "/blockly",
    },
  ],
});

export default router;
