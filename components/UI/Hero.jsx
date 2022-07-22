import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/hero.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Abhay Kumar Poddar</h2>
              <h5 className="mb-4" style={{color:"#005499"}}>Fullstack Software Developer</h5>
              <p>
                I&apos;m a software engineer who enjoys learing new skills and applying them to solve real world problems. I&apos;m fascinated and always looking for opportunities to increase team performance by acting as a force multiplier.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#" style={{fontWeight:"900"}}>Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://drive.google.com/file/d/1Ili0LDza8fVp8XISNoWwV7ail7EgC0Jw/view?usp=sharing">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="450" />

              <div className={`${classes.hero__skills}`} style={{cursor:"pointer"}}>
                <h6><Link href="/skills" passHref><span style={{textDecoration:"none"}}>Skills</span></Link></h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
