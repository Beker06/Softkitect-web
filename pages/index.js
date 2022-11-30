import Image from "next/image";
import React from "react";
import Layout from "../Components/Layout";
import BannerHome from "../Components/Home/BannerHome";
import WeAddress from "../public/img/shutterstock1.jpg";
import AdvantagesHome from "../Components/Home/AdvantagesHome";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <BannerHome />
        <div className="who-we-are">
          <div className="wwa-photo"></div>
          <div className="wwa-info">
            <div className="wwa-title">WHO WE ARE</div>
            <div className="wwa-text">
              We are a trusted technology partner to leading enterprises, SMBs
              and technology innovators. <br />
              <br />
              We are here to help you solve your business´s challenges with
              innovative technology solutions, product design, DevOps, quality
              assurance, testing, and IT consulting services.
            </div>
          </div>
        </div>
        <div className="what-you-get">
          <div className="wyg-text">what you get</div>
        </div>
          <div className="we-address-text">
            <div>
              We address your software development project in a personalized way.
              We will tailor solutions to your business’ needs, as well as
              integrate it into your ongoing project. Plus, we will guide you
              through the entire development lifecycle.<br/> <br/>You can request our
              services at any stage of the project: analysis, design, development,
              testing, implementation or support. At <label>Sofkitect</label>, custom software
              development means that you are in charge of your project; and we
              make sure you are successful.
            </div>
          </div>
          <Image className="we-address-photo" src={WeAddress} alt="we-address" />
        <AdvantagesHome/>
      </Layout>
    </>
  );
}
