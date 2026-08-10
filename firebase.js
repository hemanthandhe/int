const firebaseConfig = {
  apiKey: "AIzaSyAEfYK5nWz7NKkUlyJYmLUMrZ1gki30Wao",
  authDomain: "speechtodo-62326.firebaseapp.com",
  databaseURL: "https://speechtodo-62326-default-rtdb.firebaseio.com",
  projectId: "speechtodo-62326",
  storageBucket: "speechtodo-62326.firebasestorage.app",
  messagingSenderId: "198151845686",
  appId: "1:198151845686:web:27528bedcd12b0755c6597"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
