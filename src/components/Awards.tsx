import Heading from "./Heading"
import AwardCard from "./AwardCard"
import { awards1,awards2,awards3 } from "../assets"

interface AwardCardProps {
    description: string;   
    image: string;
    imageAlt: string; 
    left:boolean;
    
}

const awardsitems  = [
    {
     description:"Prime Minister'S Office Policy Coordination Parliament Affairs",
     image:awards1,
     imageAlt:"Awards",
     left:false
    },
    {
     description:"Prime Minister'S Office Policy Coordination Parliament Affairs",
     image:awards2,
     imageAlt:"Awards",
     left:true
    },
    {
     description:"In a celebratory ceremony highlighting academic excellence, the Kibaha District Council officially presented a prestigious award to the director of Finest School in recognition of their outstanding contributions to the education sector",
     image:awards3,
     imageAlt:"Award",
     left:false
    },
]

const Awards =()=>{
    return(
        <section>
        <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl section-title"
          title="Awards"
        />
       <div className="flex flex-col row-gap-10">
        {
            [awardsitems[2]].map((item,index)=>{
                return(
                    <AwardCard  { ...item} key={index} left={item.left}/>
                )
            })
        }
        </div>
        </div>
        </section>
    )
}

export default Awards