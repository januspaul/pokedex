import React, { useRef } from "react";
import "../components/reusable/style.css";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Typist from 'react-typist';

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
    const [formSubmitted, setFormSubmitted] = useState(false);

    const userCollection = collection(db, "contactform-pokemon");

    const handleSubmit = async (event) => {
        event.preventDefault();
        await addDoc(userCollection, {
            FullName: name,
            Email: email,
            Contact: contactnum,
            Message: feedback,
        });
        setFormSubmitted(true);
    }
    const submitButtonRef = useRef(null);

    const handleSubmitButtonHover = () => {
        submitButtonRef.current.style.transform = "rotate(90deg)";
    }

    const handleSubmitButtonHoverOut = () => {
        submitButtonRef.current.style.transform = "rotate(0deg)";
    }

    return (
        <div>
            <div className="allBG">
                <div className="BG">
                    <div className="container contactMargin">
                        <div className="row contactCol1 d-flex align-items-center justify-content-center">
                            <div className="col-6 text-white">
                                {formSubmitted ? (
                                    <div className="text-center text-success pb-5">
                                        <h1 className="aboutUsHeader">Thank you for your message!</h1>
                                    </div>
                                ) : (
                                    <div className="text-center text-warning pb-5">
                                        <Typist cursor={{ show: false, blink: true }}>
                                            <h1 className="aboutUsHeader">Drop us a line</h1>
                                        </Typist>
                                    </div>
                                )}
<Form>
                                    <Form.Group className="mb-3" controlId="clickMe1">
                                        <Form.Label className="aboutUsHeader">Full name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Juan Dela Cruz"
                                            className="hero1SearchButton rounded-5"
                                            onChange={(event) => {
                                                setName(event.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe2">
                                        <Form.Label className="aboutUsHeader">Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="name@example.com"
                                            className="hero1SearchButton rounded-5"
                                            onChange={(event) => {
                                                setEmail(event.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe3">
                                        <Form.Label className="aboutUsHeader">Contact Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="+639XXXXXXXXXX"
                                            className="hero1SearchButton rounded-5"
                                            onChange={(event) => {
                                                setContact(event.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe4">
                                        <Form.Label className="aboutUsHeader">Your Feedback</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            placeholder="Your Feedback"
                                            className="hero1SearchButton rounded"
                                            onChange={(event) => {
                                                setFeedback(event.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                    <div>
                                        <Button className="rounded-pill" onMouseOver={handleSubmitButtonHover} onMouseOut={handleSubmitButtonHoverOut} onClick={handleSubmit}>
                                        <img ref={submitButtonRef}  className='hero1Pokeball' src="pokeball.png" alt=""
                />
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
