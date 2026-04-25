type SocialProps = {
  
      id?: string,
      title?: string,
      iconUrl?: any,
      url?: string
    
}


const  Socials =(item:SocialProps)=>{
   const {id,url,title,iconUrl} = item
   return(
    <ul className="flex gap-5 flex-wrap">
                
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <img src={iconUrl} width={16} height={16} alt={title} />
                </a>
              
        </ul>
   )
}

export default  Socials