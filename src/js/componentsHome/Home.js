import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";


const initialFormState = {
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render() {
        return(

        <div  className={styles.holder} >
            <Container>

            <Header/>

            <div className={styles.backgroundWhite}>

                <div className={styles.text}>
                    The Web 2.0 provides many possibilities such as almost unlimited access
                    to information and "round-the-clock" connectivity.
                    Online services range from social media (e.g. Facebook or lnstagram) and entertainment
                    (e.g. Netflix or Spotify) to shopping (e.g. Amazon or eBay) and banking (e.g. PayPal and e-banking).
                </div>

                <div className={styles.text}>
                    All of these services handle personal data.
                    Privacy policies describe how services handle user data but most users never
                    read them. Users often call for support in managing their online security and privacy.
                    To empower end- users in making informed decisions about which service to use and what data to share,
                    we developed a privacy rating, similar to the EU energy label.
                </div>

            </div>

            <div className={styles.backgroundWhite}>

                <Button className={styles.button} variant="dark" href="form">Create a new label</Button>

            </div>

            <div className={styles.backgroundGray}>

                <div className={styles.text}>
                    !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices.
                    Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY
                </div>

                <div className={styles.text}>
                    !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices.
                    Privacy Rating specializes in helping enterprises comply
                    with client-side privacy and data leakage
                    regulations by protecting the customers' private data.
                    The company's qprivacy is a solution that allows businesses
                    that operate within highly regulated environments, such as financial services institutions,
                    to scrutinize and enforce their own data privacy policy and prevent the flow
                    of unauthorized communication from customers' devices. !!!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY
                </div>

            </div>

            <div className={styles.backgroundWhite}>

                <div className={styles.text}>
                    Together, the 12 attributes determine the privacy class (A-to-G) of the online service.

                    <div className={styles.label}>
                        <iframe src="http://0.0.0.0:3000/AAAAAAAAAAAA/google" top="0" left="0" width="430pt" height="430pt" border="0" overflow="hidden" margin="0" padding="0" border-radius="8pt" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>
                    </div>

                </div>
            </div>

                <div className={styles.backgroundGray}>

                    <div className={styles.text}>
                        !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! To read more about the this project click here for the ToS and a Whitepaper.
                        <br/>
                        <br/>

                        <div className={styles.text}>
                            <Button className={styles.pdfButton} variant="dark" href="form">ToS</Button>
                            <Button className={styles.pdfButton} variant="dark" href="form">Whitepaper</Button>
                        </div>
                    </div>

                </div>


                <div className={styles.backgroundWhite}>

                    <div className={styles.text}>
                        !!!!!!!!!!!!!!!!!!!!!!! THIS A DUMMY TEXT !!!!!!!!!!!!!!!!!!!!!!!! I you have trouble with the label or want to contact us send your message here.
                    </div>

                    <div className={styles.contactForm}>
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>

                </div>

            <Footer/>

            </Container>
        </div>
    );
}

        onNameChange(event) {
            this.setState({name: event.target.value})
        }

        onEmailChange(event) {
            this.setState({email: event.target.value})
        }

        onMessageChange(event) {
            this.setState({message: event.target.value})
        }

        handleSubmit(event) {
        }
    }

export default Home;