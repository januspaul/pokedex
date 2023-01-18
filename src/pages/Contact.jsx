import { initializeApp } from "firebase/app";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Typist from 'react-typist';
import Card from 'react-bootstrap/Card';


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
    const [formSubmitted, setFormSubmitted] = useState(false); // added state variable to track if form has been submitted

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


    return (
        <div>
            <div className="allBG">
                <div className="BG">
                    <div className="container">
                        <div className="row contactCol1 d-flex align-items-center justify-content-center">
                            <div className="col-md-6 text-white">
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
                                            type="number"
                                            placeholder="+63XXXXXXXXXX"
                                            className="hero1SearchButton rounded-5"
                                            onChange={(event) => {
                                                setContact(event.target.value)
                                            }}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="clickMe4">
                                        <Form.Label className="aboutUsHeader">Message</Form.Label>
                                        <Form.Control
                                            className="hero1SearchButton"
                                            as="textarea"
                                            rows={5}
                                            onChange={(event) => {
                                                setFeedback(event.target.value)
                                            }}
                                            placeholder="Hi! Good Day, I would like to..."
                                        />
                                    </Form.Group>

                                    <Button className="hero1SearchButton rounded-pill" onClick={handleSubmit}>
                                        <img className='hero1Pokeball' src="pokeball.png" alt="" />
                                        Send
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <hr className="text-white" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-warning text-center pt-5 aboutUsHeader "> Our Team </h2>
                    </div>
                </div>
            </div>

                    <div className="container py-5">
                        <div className="row pb-5">
                            <div className="col-lg-6 col-sm-3 col-md-6 col-xl-3 pt-3" data-aos="flip-left" data-aos-duration="1000">
                                <Card style={{ width: '18rem' }} className="bg-warning">
                                    <Card.Img variant="top" src="janus.jpg" className="rounded img-fluid" />
                                    <Card.Body className="bg-warning">
                                        <Card.Title className="text-center">Janus Imus</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-6 col-xl-3 pt-3" data-aos="flip-left" data-aos-duration="1500">
                                <Card style={{ width: '18rem' }} className="bg-warning">
                                    <Card.Img variant="top" src="elmo.png" className="rounded" />
                                    <Card.Body className="bg-warning">
                                        <Card.Title className="text-center">Elmo Laplap</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-6 col-xl-3 pt-3" data-aos="flip-left" data-aos-duration="2000">
                                <Card style={{ width: '18rem' }} className="bg-warning">
                                    <Card.Img variant="top" src="charlie.jpg" className="rounded img-fluid" />
                                    <Card.Body className="bg-warning">
                                        <Card.Title className="text-center">Charlie Abrigo</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-6 col-xl-3 pt-3" data-aos="flip-left" data-aos-duration="2500">
                                <Card style={{ width: '18rem' }} className="bg-warning">
                                    <Card.Img variant="top" src="da.jpg" className="rounded img-fluid" />
                                    <Card.Body className="bg-warning">
                                        <Card.Title className="text-center">DA Sanga</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;