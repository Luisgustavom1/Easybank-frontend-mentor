import React from "react";
import ArticlesSection from "../../components/ArticlesSection";
import EasybankSection from "../../components/EasybankSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";

function Home() {
  return (
    <>
      <Header />
      <Introduction />
      <EasybankSection />
      <ArticlesSection />
      <Footer />
    </>
  );
}

export default Home;
