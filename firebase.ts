import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const requiredEnv = (value: string | undefined, name: string) => {
    if (!value) {
        throw new Error(`Missing required Firebase environment variable: ${name}`);
    }

    return value;
};

const firebaseOptions: FirebaseOptions = {
    apiKey: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
        "EXPO_PUBLIC_FIREBASE_API_KEY"
    ),
    authDomain: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
        "EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN"
    ),
    projectId: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
        "EXPO_PUBLIC_FIREBASE_PROJECT_ID"
    ),
    storageBucket: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
        "EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET"
    ),
    messagingSenderId: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        "EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"
    ),
    appId: requiredEnv(
        process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
        "EXPO_PUBLIC_FIREBASE_APP_ID"
    ),
    measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseOptions);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

