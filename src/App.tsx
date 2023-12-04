import React, { Fragment } from "react";
import "./App.css";
import Card from "./components/elements/card";
import { Row, Col, Image } from "react-bootstrap";

function App() {
  return (
    <Fragment>
      <div className="hero">
        <div className="hero-area">
          <h2>Üdvözlünk Stefimester autószerelő műhelyében!</h2>
        </div>
      </div>
      <Col>
        <Card title="Autószerelő pályakezdési és szakmai továbbfejlődési lehetőség egy igazi Profinál!">
          <h3>
            Munkalehetőség Stefi Mester műhelyében! Frissen végzett szakképzett
            autószerelő vagy? Széleskörű szerelői és diagnosztikai
            tapasztalatokat szeretnél gyűjteni? Igényes vagy a munkádban és
            motivál a jó minőségben és időben elvégzett munkateljesítményeddel
            arányosan növekvő kereset? Stefi Mester Műhelye a Renault csoport
            Motrio szervízhálózatának hivatalos tagja, és heti 40 órás rugalmas
            munkaidőben a XVII. kerületben, versenyképes fizetéssel biztosítja
            számodra a fenti szakmai céljaid elérését. Fényképes önéletrajzodat
            várjuk a stefimester.allas@gmail.com email-cimre.
          </h3>
        </Card>

        <Row>
          <Col xs={6} md={4}>
          
          <Card title="Tisztességes Vállalkozás Tanúsítvány 2020&2021">
            <h3>
              Kiérdemeltük tavaly is, és az idei évben is a Tisztességes
              Vállalkozás tanúsítványát, melyet Ügyfeleink visszajelzéséből
              állapítottak meg. Köszönjük Nektek Új akciónk keretében továbbá
              kedvezményeket biztosítunk a Renault Group Hungary, a Renault
              Megane Klub és a Twingo Klub Hungary klubok tagjai számára.
              Érdeklődni telefonon kérünk Titeket a +36-30-931-3596
              telefonszámon.
            </h3>
            <Image src="https://stefimester.hu/wp-content/uploads/20210323_142016-768x1024.jpg" thumbnail width={"100%"}></Image>
          </Card>
          </Col>
          <Col xs={6} md={4}>
          
          <Card title="Motrio Renault Group">
            <h3>
               Örömmel
              jelenthetjük be, hogy 2020.01.01-től Szervizünk csatlakozott a
              MOTRIO Groupe Renault hálózatához, mellyel gyári minőségű
              színvonalat tudunk biztosítani ügyfeleink számára.Ez azt jelenti,
              hogy lehetőség adódott a MOTRIO Groupe Renault termékek és gyári
              Renault alkatrészek kedvező áron történő beszerzésére és
              beszerelésére.Reméljük, hogy Ügyfeleink is maximálisan elégedettek
              lesznek a különböző szervizelések során.
            </h3>
            <Image width={"100%"} style={{display:"inline"}} src={"https://stefimester.hu/wp-content/uploads/84569813_1852637678206523_6139575352139186176_o-1536x842.jpg"} alt="plakett" thumbnail />
            {/* <img src=></img> */}
          </Card>
          </Col>
        </Row>
        
      </Col>
    </Fragment>
  );
}

export default App;
