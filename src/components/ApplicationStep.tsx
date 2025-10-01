import { check } from "../assets";
import { applicationsteps } from "../constants";


const ApplicationStep =()=>{
 
    return(
      <div className="flex gap-[1rem] items-center justify-center max-lg:flex-wrap">
        {
          applicationsteps.map((hatua)=>(
            
            <div
                  key={hatua.id}
                  className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border first:border-n-first even:border-n-second last:border-n-third rounded-[2rem] lg:w-1/3 even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-1 [&>h4]:even:text-color-2 [&>h4]:last:text-color-4 [&_#CC]:first:bg-n-first [&_#CC]:even:bg-n-second [&_#CC]:last:bg-n-third"
                >
                  <h4 className="h4 mb-4  text-center">{hatua.step}</h4>
        
                  <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
                    {hatua.title}
                  </p>
        
                 <ul>
                    {hatua.steps.map((step, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center py-5 border-t border-n-6"
                      >
                        
                           <div id="CC" className="p-2  rounded-full"></div>
                        <p className="body-2 ml-4 text-gray-300">{step}</p>
                      </li>
                    ))}
                  </ul>
                </div>
          ))
        }
    </div>
     
    )
}


export default ApplicationStep