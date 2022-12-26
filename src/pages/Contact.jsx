// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState } from "react";
import {addDoc,collection, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8wNjaBEvU9IE6igfsM8c7wbWd3TKBY6A",
  authDomain: "contactform-pokemon.firebaseapp.com",
  databaseURL: "https://contactform-pokemon-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "contactform-pokemon",
  storageBucket: "contactform-pokemon.appspot.com",
  messagingSenderId: "367133485033",
  appId: "1:367133485033:web:e625c7c220cf92a5e74d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Contact = () => {
    
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [contactnum,setContact] = useState();
    const [feedback,setFeedback] = useState(); 

    const userCollection = collection(db,"contactform-pokemon")

    const handleSubmit =()=>{
        addDoc(userCollection,{
            FullName:name,
            Email:email,
            Contact:contactnum,
            Message:feedback,
        })
    }

    return(
        <div className="m-5 p-5">
            <form>
                <label>Name</label>
                <input type='text' placeholder="Enter your name" 
                    onChange={(event)=>{
                    setName(event.target.value)
                }} />

                <label>Email</label>
                <input type='text' placeholder="Enter your email" 
                    onChange={(event)=>{
                    setEmail(event.target.value)
                }}
                />

                <label>Contact</label>
                <input type='number' placeholder="Enter your contact number" 
                    onChange={(event)=>{
                    setContact(event.target.value)
                }}
                />

                <label>Message:</label>
                <textarea type='text' placeholder="Enter your message" 
                    onChange={(event)=>{
                    setFeedback(event.target.value)
                }}
                />
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Contact;