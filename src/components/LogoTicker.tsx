import { companyLogos } from "../constants";
import {motion} from "framer-motion"

const tickers =[
 ...companyLogos,...companyLogos
]

export const LogoTicker=()=>{
  
  return(
    <div className='py-8 md:py-12'>
      <div className='contaner'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
           <motion.div
           
            className='flex gap-14 flex-none pr-14'
              animate={{
                translateX:"-50%"
              }}
              transition={{
                duration:200,
                repeat:Infinity,
                ease:"linear",
                repeatType:"loop"
              }}
            >
              {

                [...tickers,...tickers,...tickers].map((logo,index)=>{
                  return(
                   <h2 className="text-3xl">{logo}</h2>
                  )
                })
              }
           </motion.div>
        </div>

      </div>

    </div>
  )
}

const TickerCard = ({ 
  imgSrc, 
  title, 
}: {
  imgSrc: string;
  title: string;
}) => {
  return (
    <div className={`rounded-2xl overflow-hidden relative group h-20 w-20 md:h-20 flex items-center justify-center`}>
      <img 
        src={imgSrc} 
        alt={title} 
        className='h-20 w-20'
      />
    </div>
  );
};