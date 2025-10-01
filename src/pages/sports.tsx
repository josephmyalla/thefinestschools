import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sports from "../components/Sports";

const Sport = ()=>{
    
    return(
      <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />
        <Sports/>
        <Footer />
      </div>
        <ButtonGradient />
    </>
    )
}

export default Sport