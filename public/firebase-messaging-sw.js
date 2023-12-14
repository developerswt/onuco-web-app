// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD4NRQ4QQHijRJYkMyHghh1tHFg0AI4ODw",
    authDomain: "onuco-app-notification.firebaseapp.com",
    projectId: "onuco-app-notification",
    storageBucket: "onuco-app-notification.appspot.com",
    messagingSenderId: "363907249",
    appId: "1:363907249:web:5cd689497860b6d14ffa90",
    measurementId: "G-X6WG62TK7K"
  });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/g2.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });