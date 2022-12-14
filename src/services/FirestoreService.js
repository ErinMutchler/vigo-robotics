import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  Timestamp,
  updateDoc,
  where,
} from "firebase/firestore";

export default class FirestoreService {
  constructor(firestore) {
    this.firestore = firestore;
    this.unsubscribe = {};
  }

  startChangeListener(eventHandler) {
    this.unsubscribe = onSnapshot(
      collection(this.firestore, "Projects"),
      (docs) => {
        eventHandler(docs);
      }
    );
  }

  stopChangeListener() {
    this.unsubscribe.unsubscribe();
  }

  async createProject(name, type, author, workspace, code) {
    return await addDoc(collection(this.firestore, "Projects"), {
      name: name,
      type: type,
      author: author,
      workspace: workspace,
      code: code,
      lastTouched: Timestamp.now(),
    });
  }

  async updateProject(workspace, code, firestoreID) {
    return updateDoc(doc(this.firestore, "Projects", firestoreID), {
      workspace: workspace,
      code: code,
      lastTouched: Timestamp.now(),
    });
  }

  async loadProject(firestoreID) {
    return getDoc(doc(this.firestore, "Projects", firestoreID));
  }

  loadAllProjects(uid) {
    return getDocs(
      query(collection(this.firestore, "Projects"), where("author", "==", uid))
    );
  }

  async deleteProject(firestoreID) {
    return deleteDoc(doc(this.firestore, "Projects", firestoreID));
  }
}
