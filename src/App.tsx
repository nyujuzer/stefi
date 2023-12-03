import React, { Fragment } from "react";
import "./App.css";
import Card from "./components/elements/card";

function App() {
  return (
    <Fragment>
      <div className="hero">
        <div className="hero-area">
          <h2>Welcome to ClipCrush - Where Connections Begin with a Click!</h2>
        </div>
      </div>
      <div className="col nth-select">
        <Card title="🎬 Welcome to ClipCrush - Where Love Finds Its Voice! 🎬">
          <h3>
            Embark on a revolutionary dating journey with ClipCrush, the dating
            app that goes beyond the swipe and brings your connections to life
            through the magic of video. We're rewriting the rules of online
            dating, catering to the vibrant spirits of young adults who crave
            more than just static profiles and generic bios. 🌟 A New Chapter in
            Dating: Say hello to a dating experience that's as dynamic as you
            are! At ClipCrush, we believe that a picture is worth a thousand
            words, and a video? Well, that's a story waiting to be told. Dive
            into a world where connections are forged through the art of
            self-expression, allowing you to truly showcase who you are and what
            makes your heart skip a beat. 🌈 Ephemeral Matches, Lasting
            Memories: Experience the thrill of ephemeral matches - a unique
            feature that adds an element of spontaneity to your journey. Connect
            with someone for a brief, exciting moment, and if the chemistry
            sizzles, transform that fleeting spark into a lasting flame. It's
            dating on your terms, with a dash of unpredictability. 📸 Beyond the
            Selfie: Unleash your creativity and share your story in vivid
            detail. Alongside videos, our platform lets you upload your favorite
            photos, providing a multi-dimensional view of your personality.
            Express yourself authentically, whether it's a snapshot of your
            latest adventure or a candid moment that perfectly captures your
            essence. 🔐 Privacy You Can Rely On: Your peace of mind matters.
            ClipCrush is committed to creating a secure environment where you
            can explore connections without compromising your privacy. Control
            who sees your content and when, ensuring that your dating journey
            unfolds at your own pace. 🎉 Events That Spark Connection: Elevate
            your dating game with ClipCrush events! From virtual gatherings to
            themed video chats, we're creating opportunities for you to connect
            in fun and meaningful ways. Because sometimes, the best connections
            happen when you're sharing an experience. 🌎 Connecting the World,
            One Click at a Time: Whether you're drawn to a global tapestry of
            connections or seeking someone in your neighborhood, ClipCrush
            connects you with like-minded individuals who share your vibe.
            Expand your horizons or keep it local - the choice is yours. Join us
            on this extraordinary adventure where real connections, real people,
            and real moments take center stage. ClipCrush - because your love
            story deserves to be told in moving pictures. Sign up today and let
            the journey begin! 🌟✨
          </h3>
        </Card>
        <div className="row">
          <Card title="Discover Love Through Videos:">
            <h3>
              Say goodbye to the static profiles of traditional dating apps!
              ClipCrush brings dating to life with dynamic video profiles. Swipe
              through captivating clips of potential matches, giving you a sneak
              peek into their world. Will a shared passion for travel or a love
              for pets ignite the spark? Find out in the blink of an eye!
            </h3>
          </Card>
          <Card title="Ephemeral Matches, Lasting Connections:">
            <h3>
              Experience the thrill of ephemeral matches! Connect with someone
              for a limited time, and if the chemistry ignites, turn that spark
              into a flame with a permanent connection. It's like speed dating
              for the digital age - exciting, spontaneous, and full of
              surprises!
            </h3>
          </Card>
        </div>
        <div className="row ">
          <Card title="Express Yourself with Photos:">
            <h3>
              Don't just tell your story, show it! In addition to videos, upload
              your favorite photos to give potential matches a comprehensive
              view of your personality. Whether it's a selfie from your latest
              adventure or a pic showcasing your culinary skills, let your
              visual story speak volumes.
            </h3>
          </Card>
          <Card title="Privacy You Can Trust:">
            <h3>
              At ClipCrush, your privacy is our priority. Enjoy a secure and
              safe space to explore connections without the worry. With our
              robust privacy features, you're in control of who sees your
              content and for how long.
            </h3>
          </Card>
        </div>
        <div className="row">
          <Card title="Real Connections, Real People:">
            <h3>
              ClipCrush is designed for young adults seeking genuine
              connections. No more swiping through endless profiles – just real
              people sharing real moments. Break the ice with a video, bond over
              shared interests, and let the conversations flow.
            </h3>
          </Card>
          <Card title="Date Night Made Simple">
            <h3>
              Planning your next rendezvous is a breeze with ClipCrush! From
              virtual coffee chats to in-person adventures, seamlessly propose
              and coordinate dates directly in the app. Enjoy the ease of
              connecting and planning, making your journey to love as enjoyable
              as the dates themselves. 💑✨
            </h3>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
