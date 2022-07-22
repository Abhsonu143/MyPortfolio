import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              You can connect with me on different platforms.
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Patna - India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>abhayakasonu@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 8298879461</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/Abhsonu143">
                <i className="ri-github-line" style={{color:"black"}}></i>
              </Link>
              <Link href="https://www.facebook.com/asabhya123/">
                <i className="ri-facebook-line" style={{color:"blue"}}></i>
              </Link>
              <Link href="https://www.linkedin.com/in/abhay-kumar-poddar-3b3843190/">
                <i className="ri-linkedin-line" style={{color:"#449ee8"}}></i>
              </Link>
              <Link href="https://www.instagram.com/itsabhayy/">
                <i className="ri-instagram-line" style={{color:"#d20c79"}}></i>
              </Link>
              <i className="ri-love-line"></i>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
