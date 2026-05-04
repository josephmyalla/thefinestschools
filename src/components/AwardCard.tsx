interface AwardCardProps {
    description: string;   
    image: string;
    imageAlt: string; 
    left:boolean;
    
}
const AwardCard=({description,left,image,imageAlt}:AwardCardProps)=>{
    return(
            <div 
             className={`flex flex-col m-5 ${
                  left ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-4 lg:space-y-6">
              
                  <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                    {description}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img 
                      src={image} 
                      alt={imageAlt}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
    )
}

export default AwardCard

