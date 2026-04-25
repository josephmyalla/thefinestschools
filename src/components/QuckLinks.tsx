import { Link } from "react-router-dom";

type QuickLinkProps = {
      id?: string,
      linktitle?: string,
      url?: any  
}

const QuickLinks =(link:QuickLinkProps)=>{
  const {id,linktitle,url} = link
  return(
  <>
  
            <ul className="space-y-2">
                  <li key={id} ><Link to={url} className="text-gray-300 hover:text-white transition-colors text-xs">{linktitle}</Link></li>
             
          </ul>
    </>)
}

export default QuickLinks