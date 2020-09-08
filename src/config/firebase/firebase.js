import app from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const readConfig = key => {
    return process.env["REACT_APP_FIREBASE_" + key]
}

const config = {
    apiKey: readConfig("API_KEY"),
    authDomain: readConfig("AUTH_DOMAIN"),
    databaseURL: readConfig("DATABASE_URL"),
    projectId: readConfig("PROJECT_ID"),
    storageBucket: readConfig("STORAGE_BUCKET")
}

class Firebase {
    constructor() {
        app.initializeApp(config) // Initialize firebase config
        this.auth = app.auth() // Initialize firebase auth

        // For Firestore
        this.fieldValue = app.firestore.FieldValue;
        this.db = app.firestore();
    }

    // Create user with email and password
    createFirebaseUser = (user) => {
        return this.auth.createUserWithEmailAndPassword(user.email, user.password)
    }
    // Users cloud firestore for crud
    usersDb = () => this.db.collection("users")

    // Login with email and password
    loginFirebaseUser = (user) => {
        return this.auth.signInWithEmailAndPassword(user.email, user.password)
    }



    // // User API
    // user = uid => this.db.doc(`users/${uid}`);
    // users = () => this.db.collection('users');
}

export default Firebase