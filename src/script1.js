	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
	
	import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
	

	// TODO: Add SDKs for Firebase products that you want to use
	// https://firebase.google.com/docs/web/setup#available-libraries
	  
	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyBA9V0Jy7n0xcaSfxuzBtfDlDrxFimcgYQ",
		authDomain: "login-page-3040b.firebaseapp.com",
		databaseURL: "https://login-page-3040b-default-rtdb.firebaseio.com",
		projectId: "login-page-3040b",
		storageBucket: "login-page-3040b.appspot.com",
		messagingSenderId: "417070243646",
		appId: "1:417070243646:web:126399b8a6ee348f4a566f"
	};
	  
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	const auth = getAuth();
	


let btn_sing_out =  document.getElementById('btn_sign_out');
btn_sing_out.addEventListener('click', function(){
	signOut(auth).then(() => {
		// Sign-out successful.
		alert('Log out success')
		window.location.replace("index.html");
	  }).catch((error) => {
		// An error happened.
	  });
})