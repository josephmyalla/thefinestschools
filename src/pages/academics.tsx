import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";


const Academics = ()=>{
    
    return(
      <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />

        <div className="m-10">
            <h2 className="text-5xl section-title">Academics</h2>
        </div>
        
        <Footer />
      </div>
        <ButtonGradient />
    </>
    )
}

export default Academics