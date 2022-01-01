import React from "react";

import iconBudgeting from "../../assets/svg/icon-budgeting.svg";
import iconOnline from "../../assets/svg/icon-online.svg";
import iconOnboarding from "../../assets/svg/icon-onboarding.svg";
import iconApi from "../../assets/svg/icon-api.svg";

import ServiceCard from "./ServiceCard";
import ContainerMain from "../../layouts/ContainerMain";
import ContainerFlexRowBreak from "../../layouts/ContainerFlexRowBreak";
import { BodyLg, TitleMd } from "../../styles/typography";
import { TextsContent } from "./styles";

function EasybankSection() {
  return (
    <ContainerMain>
      <TextsContent>
        <TitleMd>Why choose Easybank?</TitleMd>
        <BodyLg>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </BodyLg>
      </TextsContent>
      <ContainerFlexRowBreak>
        <ServiceCard
          img={iconOnline}
          title="Online Banking"
          text="Our modern web and mobile application allow you to keep track of your finances wherever you are in the world."
        />
        <ServiceCard
          img={iconBudgeting}
          title="Simple Budgeting"
          text="See exactly where your money goes each month. Receive notifications when  you're close to your hittin limits."
        />
        <ServiceCard
          img={iconOnboarding}
          title="Fast Onboarding"
          text="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
        />
        <ServiceCard
          img={iconApi}
          title="Open API"
          text="Manage your savings, investments, pension, and much frim one account. Tracking your money has never been easier."
        />
      </ContainerFlexRowBreak>
    </ContainerMain>
  );
}

export default EasybankSection;
