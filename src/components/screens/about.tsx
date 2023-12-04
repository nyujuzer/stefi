import { Fragment } from "react";
import "./about.css";
import Card from "../elements/card";
function AboutUs() {
  return (
    <Fragment>
      <div>
        <div>
          <div className="intro">
            <div className="hero-area">
              <h2>Bemutatkozunk</h2>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <Card title={"A mítosz, az ember, a legenda"}>
                <h3>
                  Stefka László vagyok, vevőim Stefimesterként ismernek.
                  Mestervizsgával rendelkező autószerelő vagyok, saját
                  autószerelő műhelyemben alkalmazottaimmal végezzük a új és
                  visszatérő megrendelőink részére a gépjármű javítási,
                  szervizelési munkákat és gumiabroncs szerelést.
                </h3>
              </Card>
            </div>
            <div className="col">
              <div className="row">
                <Card title={"Szakterületem"}>
                  <h3>
                    Típusfüggetlen műhelyként működünk, rendelkezünk a modern
                    autók szervizeléséhez elengedhetetlen diagnosztikai
                    berendezésekkel. Segítségükkel mind a motor, mind pedig a
                    fékrendszer, sőt a járművek elektronikai és biztonsági
                    funkcióinak számítógépes bevizsgálását, a hibakódok
                    kiolvasását és kiértékelését is elvégezzük. Specialitásunk a
                    dízel injektorok elemeinek korszerű ultrahangos tisztítása
                    és bevizsgálása, szükség esetén pedig javítása.{" "}
                  </h3>
                </Card>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
