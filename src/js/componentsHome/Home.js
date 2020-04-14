import React, { Component } from "react";
import styles from './Home.scss';
import {Button, Container, Row, Modal, Jumbotron, Image, Col, Card, CardDeck} from "react-bootstrap";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import ImageGalleryView from "./ImageGalleryView";
//import { HeaderSmall } from "../Footer";

const initialFormState = {
}

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Privacy rating demo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{padding:"50px"}}>
        <iframe style={{display:'block', marginLeft:'auto', marginRight:'auto'}} src={"/ACABCBABCAAA"}
                                                top="0"
                                                left="0"
                                                width="430pt"
                                                height="430pt"
                                                border="0"
                                                overflow="hidden"
                                                margin="0"
                                                padding="0"
                                                border-radius="8pt"
                                                frameBorder="0"
                                                gesture="media"
                                                allow="encrypted-media"
                                                allowFullScreen/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant="dark">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

class Home extends Component {


    constructor() {
        super();

        this.state = {
          show: false
        }

        this.setModalShow = this.setModalShow.bind(this);

    }

    setModalShow(_showState) {
        this.setState({
            show:_showState
        })
    }

    render() {
    return (
        <div  className={styles.holder} >
            <Container>
                <Header/>

                <MyVerticallyCenteredModal
                    show={this.state.show}
                    onHide={() => this.setModalShow(false)}
                 />

                <Row className={styles.backgroundSlider}>
                    <div className={styles.label}>
                        <ImageGalleryView />
                        <br />    
                    </div>

                    <div className={styles.text}>
                        <div>
                            <p>
                                As online services handle increasing amounts of
                                data, it becomes difficult to inform users about
                                how their information is handled.</p>
                            <p>
                                Nevertheless, more and more regulations and
                                standards require transparency when handling
                                personal data.
                            </p>
                        </div>
                        <div >
                            <p>
                                Privacy policies describe how services handle
                                user data, but most users never read them.</p>
                            <p>
                                PrivacyRating.info creates an intuitive
                                visualization of your privacy policy that users
                                will actually look at. It shows the most relevant
                                privacy attributes to help obtain truly informed
                                consent.
                            </p>
                        </div>
                    </div>
                    <div className={styles.actions}>
                        <div>
                        <Link className={styles.button} to="/" onClick={() => this.setModalShow(true)} >
                           Demo
                        </Link>
                        </div>
                        <div>
                        <Link className={styles.button} to="/about">
                           About
                        </Link>
                        </div>
                        <div>
                        <Link className={styles.button} to="/form">
                            Generate your own label
                        </Link>
                        </div>
                    </div>
                </Row>
            <br />
            <Footer/>
            </Container>
            </div>
    );
    }
}

export default Home;