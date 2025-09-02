import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="fees">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
         
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag="Join the finest Family"
          title="Friendly, affordable installments"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center items-center flex-col mt-10 gap-2">
       
            <p className='text-gray-400'>Questions?<span className='text-blue-400 cursor-pointer'>{" "} Chat with us.</span></p>
            <p className='text-gray-400'>or email at<span className='text-blue-400 cursor-pointer'>{" "} info@finestschool.ac.tz</span></p>
          
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
