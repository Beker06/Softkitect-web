import Image from "next/image";
import React from "react";
import Layout from "../Components/Layout";
import surfeando from "../public/img/wave-banner.jpg";
import wwaPhoto from "../public/img/shutterstock11.jpg";

export default function Home() {
  return (
    <>
      <Layout title="Home">
        <div className="home-banner">
          <Image src={surfeando} alt="gente-surfeando" />
        </div>
        <div className="who-we-are">
          <div className="wwa-photo">
            <Image src={wwaPhoto} alt="gente-surfeando" />
          </div>
          <div className="wwa-info">
            <div className="wwa-title">WHO WE ARE</div>
            <div className="wwa-text">We are a trusted technology partner to leading enterprises, SMBs and technology innovators. <br /><br />
              We are here to help you solve your business´s challenges with innovative technology solutions, product design, 
              DevOps, quality assurance, testing, and IT consulting services.
            </div>            
          </div>
        </div>
      </Layout>
    </>
  );
}
