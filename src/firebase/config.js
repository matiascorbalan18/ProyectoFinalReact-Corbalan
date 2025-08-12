import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC09XDKt0b8Em6VssUQl11hm32ua8Z57OI",
    authDomain: "tiendamatias-db.firebaseapp.com",
    projectId: "tiendamatias-db",
    storageBucket: "tiendamatias-db.firebasestorage.app",
    messagingSenderId: "658103762093",
    appId: "1:658103762093:web:1b3e5ccbe50af5b53f5a24"
};

export const app = initializeApp(firebaseConfig);