import { Fragment } from "react";
import "./about.css";
import Card from "../elements/card";
function AboutUs() {
  return (
    <Fragment>
      <div>
        <div>
          <div className="row">
            <div className="hero-team">
              <div className="title">
                <h1>About Us: Unveiling ClipCrush"</h1>
                <h4>
                  Welcome to the world of ClipCrush, where connections go beyond
                  the swipe of a photo. ClipCrush is not just another dating
                  app; it's a revolutionary platform that redefines the way
                  people meet and connect. Say goodbye to static profiles and
                  hello to dynamic, engaging video introductions.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            
          <div className="row">
            <Card title={"Our Journey"}>
              <h3>
                ClipCrush is the brainchild of Robi, our visionary founder and
                lead backend engineer. Inspired by the limitations of
                traditional dating profiles, Robi embarked on a mission to
                create a platform that allows users to convey their
                personalities authentically through videos. In the summer of
                2022, our small indie team, consisting of three passionate
                individuals, began turning this vision into reality.
              </h3>
            </Card>
          </div>
          <div className="col">
            <div className="row">
              <Card title={"Dominik"}>
                <h3>
                  Meet Dominik, our chaotic yet brilliant lead frontend
                  engineer. Known for his programming prowess, Dominik adds the
                  technical magic that makes ClipCrush a seamless and enjoyable
                  experience for users. His innovative approach ensures that
                  every interaction on ClipCrush is smooth, dynamic, and
                  delightful.
                </h3>
              </Card>
            </div>
            <div className="row">
              <Card title={"Ádám"}>
                <h3>
                  Then there's Ádám, our lead UI/UX designer, whose creativity
                  knows no bounds. Ádám's unique designs bring an aesthetic
                  appeal to ClipCrush, creating an immersive environment that
                  enhances the user experience. With an eye for detail and a
                  passion for aesthetics, Ádám ensures that every visual element
                  aligns with the spirit of ClipCrush.
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
