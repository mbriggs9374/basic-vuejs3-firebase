import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwIZyXjX1SmBcRK4cddC5GXwSdApDYCU8",
  authDomain: "gnweb-hosting-sample.firebaseapp.com",
  projectId: "gnweb-hosting-sample",
  storageBucket: "gnweb-hosting-sample.appspot.com",
  messagingSenderId: "236191149724",
  appId: "1:236191149724:web:600ed1a4d5720e5ac64759"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).use(firebaseApp).mount("#app");
