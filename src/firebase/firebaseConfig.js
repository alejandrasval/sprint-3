import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCvsL1-RBThnX2d7fawZyGVdciPFPFTzRQ",
  authDomain: "as-api-eba87.firebaseapp.com",
  projectId: "as-api-eba87",
  storageBucket: "as-api-eba87.appspot.com",
  messagingSenderId: "808932378744",
  appId: "1:808932378744:web:b1fe65963e4ebb3538058d"
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);

