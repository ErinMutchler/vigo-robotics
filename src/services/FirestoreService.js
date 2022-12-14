import {
  onSnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  deleteDoc,
  Timestamp,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useProjectStore } from "@/stores/ProjectStore";
export default class FirestoreService {
  constructor(firestore) {
    this.firestore = firestore;
    this.unsubscribe = {};
  }

  startChangeListener() {
    this.projecStore = useProjectStore();
    this.unsubscribe = onSnapshot(
      collection(this.firestore, "Projects"),
      (docs) => {
        this.projecStore.projects = [];
        docs.forEach((doc) => {
          let project = doc.data();
          project.firestoreID = doc.id;
          this.projecStore.projects.push(project);
        });
      }
    );
  }

  async createProject(name, type, author, workspace) {
    return await addDoc(collection(this.firestore, "Projects"), {
      name: name,
      type: type,
      author: author,
      workspace: workspace,
      lastTouched: Timestamp.now(),
    });
  }

  async updateProject(workspace, firestoreID) {
    return updateDoc(doc(this.firestore, "Projects", firestoreID), {
      workspace: workspace,
      lastTouched: Timestamp.now(),
    });
  }

  async readProject(firestoreID) {
    return getDoc(doc(this.firestore, "Projects", firestoreID));
  }

  async deleteProject(firestoreID) {
    return deleteDoc(doc(this.firestore, "Projects", firestoreID));
  }

  async readAllProjects(uid) {
    return getDocs(
      query(collection(this.firestore, "Projects"), where("author", "==", uid))
    );
  }

  async getAllWorkspaces() {}
}
