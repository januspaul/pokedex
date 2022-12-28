
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const firebaseConfig = {
    apiKey: "AIzaSyA8wNjaBEvU9IE6igfsM8c7wbWd3TKBY6A",
    authDomain: "contactform-pokemon.firebaseapp.com",
    databaseURL: "https://contactform-pokemon-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contactform-pokemon",
    storageBucket: "contactform-pokemon.appspot.com",
    messagingSenderId: "367133485033",
    appId: "1:367133485033:web:e625c7c220cf92a5e74d78"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contactnum, setContact] = useState();
    const [feedback, setFeedback] = useState();

    const userCollection = collection(db, "contactform-pokemon")

    const handleSubmit = () => {
        addDoc(userCollection, {
            FullName: name,
            Email: email,
            Contact: contactnum,
            Message: feedback,
        })
    }

    return (
        <div className="contactContainer vw-100 vh-100">
            <div className="row contactCol1">
                <div className="text-center text-warning pb-5">
                    <h1>Drop us a line</h1>
                </div>
                <div className="col-6 text-white">
                    <Form>
                        <Form.Group className="mb-3" controlId="clickMe1">
                            <Form.Label>Full name</Form.Label>
                            <Form.Control type="text" placeholder="Juan Dela Cruz" className="rounded-5" onChange={(event) => {
                                setName(event.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="clickMe2">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="name@example.com" className="rounded-5" onChange={(event) => {
                                setEmail(event.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="clickMe3">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="number" placeholder="09123456789" className="rounded-5" onChange={(event) => {
                                setContact(event.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="clickMe4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} onChange={(event) => {
                                setFeedback(event.target.value)
                            }} />
                        </Form.Group>

                        <Button className='hero1SearchButton rounded-5 ' type="submit" onClick={handleSubmit}>
                            <img className='hero1Pokeball' src="pokeball.png" alt="" />
                            Submit
                        </Button>

                    </Form>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <img className='contactCol2' src="contactlogo.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;