import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { ENV } from "../constant";

const firebaseConfig = {
  apiKey: ENV.firebaseApiKey,
  authDomain: ENV.firebaseAuthDomain,
  projectId: ENV.firebaseProjectId,
  storageBucket: ENV.firebaseStorageBucket,
  messagingSenderId: ENV.firebaseMessagingSenderId,
  appId: ENV.firebaseAppId,
  measurementId: ENV.firebaseMeasurementId
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

if (typeof window !== "undefined") {
  getAnalytics(app);
}

export { app, firestore };
