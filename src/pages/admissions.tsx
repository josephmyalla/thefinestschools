import ButtonGradient from "../assets/svg/ButtonGradient";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ApplicationStep from "../components/ApplicationStep";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Admissions = ()=>{

        
    return(
      <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8">
        <Header />

        <div className="m-10">
            <h2 className="text-5xl section-title">Admission</h2>
        </div>
        
        <div className="max-w-2xl mx-auto border-2 border-n-6 flex items-center flex-col gap-10 p-4 m-10">
             <h2 className="text-white">READY TO JOIN THE FINEST COMUNITY ?</h2>

        <a className="w-[120px] button relative cursor-pointer inline-flex items-center justify-center h-11 transition-colors text-n-1 hover:text-color-1" href="/applicationform">
          Join Now
          {ButtonSvg("")}
        </a>

        </div>

        <div className="container mx-auto m-10">
           <ApplicationStep />
        </div>

        <Footer />
      </div>
        <ButtonGradient />
    </>
    )
}

export default Admissions