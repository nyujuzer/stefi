import { Fragment } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Card from "../elements/card";
import { Button } from "@mui/material";
import "./contact.css"

function Contact() {
  return (
    <Fragment>
      <Container>
        <Col>
          <Row>
            <Card title="Kapcsolatfelvétel">
              <h3>
                Kapcsolat Kapcsolatfelvétel Töltse ki az alábbi mezőket és
                küldjön üzenetet a Stefimester részére. Kérjen tájékoztatást
                újdonságainkról, termékeinkről, szolgáltatásainkról, ossza meg
                észrevételeit! Üzenetét bizalmasan kezeljük, az itt megadott
                e-mail címe biztonságban van, azt harmadik félnek kizárólag az
                Ön hozzájárulásával, illetve kérésére adjuk át.
              </h3>
              <Form style={{textAlign:"center",}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Név</Form.Label>
        <Form.Control type="text" placeholder="Stefka Dániel" />
      </Form.Group>
      <Button variant="contained" className="btn-yimn" type="submit">
        Submit
      </Button>
    </Form>
            </Card>
          </Row>
          <Row>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.4744643148792!2d19.21701448811428!3d47.48066969686457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741c3f269690a53%3A0xabf6f357259c4e0c!2sStefimester%20Kft.%20-%20mechanic!5e0!3m2!1sen!2shu!4v1701687534459!5m2!1sen!2shu"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Térkép"
            ></iframe>
            <Card title="Elérhetőségeink">
              <Row>
                <p>1173 Budapest</p>
              </Row>
              <Row>
                <p>XVII. kerület, 516. u. 5.</p>
              </Row>
              <Row>
                <p>Telefon: 06 (1) 256 6068</p>
              </Row>
              <Row>
                <p>Mobil: 06 (30) 931 3596</p>
              </Row>
              <Row>
                <p>Nyitvatartás: H-P 08:00-17:00</p>
              </Row>
            </Card>
          </Row>
        </Col>
      </Container>
    </Fragment>
  );
}

export default Contact;
