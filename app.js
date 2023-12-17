// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiig1Sqgp51FnoAqKCzGCg7AvBvqdBfd4",
    authDomain: "eksamen-15660.firebaseapp.com",
    projectId: "eksamen-15660",
    storageBucket: "eksamen-15660.appspot.com",
    messagingSenderId: "473303609492",
    appId: "1:473303609492:web:bef8130b64f7ad4f4a4481"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore()

const data = firestore.collection("bookLabel")

let buttonButton = document.querySelector(".button")
buttonButton.addEventListener("click", (e) => {
    e.preventDefault()
    let firstName = document.getElementById("fname").value
    let tlfNumber = document.getElementById("tlfnr").value
    let eMail = document.getElementById("email").value

    data.doc().set({
        fname: firstName,
        tlfnr: tlfNumber,
        email: eMail
    }).then(() => {
        console.log("Data saved")
        alert("Data saved successfully!");
    }).catch((error) => {
        console.log("error")
        alert("dessværre ikke, saved");

    })
});






