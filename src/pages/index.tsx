import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Sports from "../components/Sports";
import Awards from "../components/Awards"
import Transport from "../components/Transport";

const Index = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />
        <Hero />
        <Awards/>
        <Benefits />
        <Collaboration />
        <Sports />
        <Pricing />
        <Transport/>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Index;
