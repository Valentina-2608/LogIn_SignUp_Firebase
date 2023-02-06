	// Import the functions you need from the SDKs you need
	import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
	
	import { getAuth, createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js"
	
	import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

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
	const db = getDatabase();
	


	let form_login = document.getElementById('form_login');
	form_login.addEventListener('submit', (e) => {
		e.preventDefault();
		var email = document.getElementById('user_email').value;
		var password =  document.getElementById('user_password').value;
		createUserWithEmailAndPassword(auth, email, password)
  			.then((userCredential) => {
		// Signed in 
    		const user = userCredential.user;
   		 // ...
			set(ref(db, 'users/' + user.uid), {
   				 email: email,
				password:password
 			 })
  			.then(() => {
  			// Data saved successfully!
			alert('User created successfully')
			window.location.replace("info.html");
			})
			.catch((error) => {
  			// The write failed...
		alert('Error')
});
  	})
 		 .catch((error) => {
    		const errorCode = error.code;
    		const errorMessage = error.message;
   		 // ..
		 alert(errorMessage);
  });


});



let btn_clear = document.getElementById('btn_clear');
btn_clear.addEventListener('click', function(){
	let email = document.getElementById('user_email');
	var password =  document.getElementById('user_password');
	email.value = '';
	password.value = ''
});

