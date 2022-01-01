import React from "react";

import imageCurrency from "../../assets/images/image-currency.jpg";
import imageRestaurant from "../../assets/images/image-restaurant.jpg";
import imagePlane from "../../assets/images/image-plane.jpg";
import imageConfetti from "../../assets/images/image-confetti.jpg";

import ContainerFlexRowBreak from "../../layouts/ContainerFlexRowBreak";
import ContainerMain from "../../layouts/ContainerMain";
import ArticlesCard from "./ArticlesCard";
import { NewTtitleMd } from "./styles";

function ArticlesSection() {
  return (
    <ContainerMain backgroundColor="Secondary">
      <NewTtitleMd>Latest Articles</NewTtitleMd>
      <ContainerFlexRowBreak>
        <ArticlesCard
          img={imageCurrency}
          author="Claire Robinson"
          title="Receive money in any currency with no fees"
          text="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single reticências"
        />
        <ArticlesCard
          img={imageRestaurant}
          author="Wilson Hutton"
          title="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you reticências"
        />
        <ArticlesCard
          img={imagePlane}
          author="Wilson Hutton"
          title="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you reticências"
        />
        <ArticlesCard
          img={imageConfetti}
          author="Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site reticências"
        />
      </ContainerFlexRowBreak>
    </ContainerMain>
  );
}

export default ArticlesSection;
