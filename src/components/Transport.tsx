import Heading from "./Heading"
import { thefinestusafiri1,thefinestusafiri2,thefinestusafiri3 } from "../assets"
const Transport =()=>{
    return(
        <section>
           <div className="container relative z-2">
                   <Heading
                     className="md:max-w-md lg:max-w-2xl section-title"
                     title="Transport"
                   />
                <div className="flex flex-col md:flex space-y-8 space-x-8">
                  <div className="">
                    <img src={thefinestusafiri1} alt="The finest Transport"/>
                  </div>
                  <div className="">
                    <img src={thefinestusafiri2} alt="The finest Transport"/>
                  </div>
                  <div className="">
                    <img src={thefinestusafiri3} alt="The finest Transport"/>
                  </div>
                </div>
            </div>
        </section>
    )
}
export default Transport