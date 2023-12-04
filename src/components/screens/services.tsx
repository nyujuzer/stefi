import { Fragment } from "react";
import Card from "../elements/card";
import "./download.css";
import { Row } from "react-bootstrap";

function Services() {
  return (
    <Fragment>
      <div>
        <div className="car">
          <div className="hero-area">
            <h2>Renault gépkocsik javítása</h2>
          </div>
        </div>
        <Row>
          <Card title={"Önnek a szolgálatára"}>
            <h3>
              Ha rendszeresen autóval közlekedik, nagyon bosszantó lehet, ha a
              gépjármű meghibásodik, ezért napokig nem tudja használni. Ezért
              olyan szervizt érdemes keresni, ahol egyrészt garantálják a rövid
              javítási határidőt, másrészt biztos lehet benne, hogy valóban
              értenek az adott típushoz, így a szervizből kigurulva az első
              kilométer megtétele után nem jön elő ugyanaz a hiba. A legjobb
              megoldás természetesen a megelőzés: időről időre vigyük el a
              járművet egy szervizbe és nézessük át, hogy ne a legrosszabb
              pillanatban, például egy vidéki üzleti út kellős közepén hagyjon
              cserben.
            </h3>
          </Card>
          <Card title={"Renault Megane Klub-tagoknak kedvezmény"}>
            <h3>
              Budapest XVII. kerületében található szervizünk nagy
              tapasztalattal vállalja személyautók javítását. A
              Renault-tulajdonosoknak megéri hozzánk fordulniuk, ugyanis a
              Renault Megane Klub tagjainak kedvezményt adunk szolgáltatásaink
              árából. Erősségünk a motordiagnosztika, az injektorok és
              porlasztók javítása és tisztítása. A motordiagnosztika egy
              viszonylag drága művelet, hiszen a korszerű, profi diagnosztikai
              berendezések ára elég magas. Ezért célszerű olyan műhelyben
              elvégeztetnünk, ahol valóban megéri az árát. Ha egy szerviz azt
              állítja magáról, mindenben ő a legjobb, hiteltelenné válik;
              ráadásul ezt egy ügyfél sem várja el. Csupán azt, hogy amiben
              igazi tapasztaltnak vallja magát, azt valóban profin művelje, és
              az autós biztos lehessen benne, hogy valóban hosszú távon búcsút
              inthessen a felmerült problémának.
            </h3>
          </Card>
        </Row>
        <Row>
          <Card title="Profi motordiagnosztika">
            <h3>
              A komplex motordiagnosztikához az ügyfél panaszai, illetve a
              próbaút tapasztalatai alapján kezdünk hozzá. Vizsgálatok hosszú
              sorát végezzük el minden alkalommal, hogy aztán az eredmények
              értékelésével megbízható következtetést vonhassunk le az autó
              hibáiról. Az alapvizsgálatok, mint a kipufogógáz-elemzés, a
              hengerteljesítményveszteség-mérés, az üzemanyagnyomás-mérés vagy
              az élőadatblokk-ellenőrzés után, ha hibát talál a rendszer,
              leellenőrizzük az adatok valódiságát. Ha nincs eredmény, célzottan
              folytatjuk a vizsgálatot. A diagnosztika akár több órán át is
              eltarthat; de ennek köszönhetően az autótulajdonos biztos lehet
              benne, hogy megtaláljuk és elhárítjuk a hibát. Ha Renault
              gépkocsija van, és budapesti szervizt keres, hozza el az autót
              most rákoskeresztúri műhelyünkbe, és javíttassa meg kedvezményes
              áron! Mi javítottuk Meg vagyok elégedve a szolgáltatással! —
              József
            </h3>
          </Card>
        </Row>
      </div>
    </Fragment>
  );
}

export default Services;
