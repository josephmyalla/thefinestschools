import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import ChatWidget from "./components/ChatWidget";
import Sports from "./components/Sports";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Sports />
        <Pricing />
        <Footer />
      </div>
      <ChatWidget />
      <ButtonGradient />
    </>
  );
};

export default App;
