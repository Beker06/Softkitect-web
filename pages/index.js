import React from "react";
import Layout from "../Components/Layout";
import BannerHome from "../Components/Home/BannerHome";
import WhoWeAre from "../Components/Home/WhoWeAre";
import WhatYouGet from "../Components/Home/WhatYouGet";
import DedicatedTeam from "../Components/Home/DedicatedTeam";
import EndBannerHome from "../Components/Home/EndBannerHome";
import AdvantagesHome from "../Components/Home/AdvantagesHome"


export default function Home() {
  return (
    <>
      <Layout title="Home">
        <BannerHome />
        <WhoWeAre />
        <WhatYouGet />
        <AdvantagesHome />
        <DedicatedTeam/>
        <EndBannerHome/>
      </Layout>
    </>
  );
}
