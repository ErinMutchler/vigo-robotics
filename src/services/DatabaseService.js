import {ref, onValue} from "firebase/database"

export class DatabaseService {
    constructor(database) {
        this.database = database;

    }

    startChangeListener(eventHandler) {
        const consoleRef = ref(this.database);
        onValue(consoleRef, (snapshot) => {
            const data = snapshot.val();
            eventHandler(data);
        });
    }
}