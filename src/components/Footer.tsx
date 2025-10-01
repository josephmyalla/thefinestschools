import { Link } from "react-router-dom";
import Section from "./Section";
import Contacts from "./Contacts"
import { socials as items,quicklinks,partnerschools } from "../constants";
import Socials from './Socials'




const QuickLinks =({items,title})=>{
  return(
  <>
  <h3 className="text-lg font-semibold mb-4 text-gray-200">{title}</h3>
            <ul className="space-y-2">
             {
              items.map((item)=>
                (
                  
                  <li key={item.id} ><Link to={item.url} className="text-gray-300 hover:text-white transition-colors text-xs">{item.title}</Link></li>
             
                )
              )
             }
          </ul>
    </>)
}

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
             <p className="text-gray-300 mt-2 mb-4 max-w-md text-xs text-sm/5">
             Pre and Primary School Located in Mkuza, Kibaha. The school starts with Baby class, Middle, Pre and Primary School from 2.5yrs  old age and above.
            </p>
            <div className="flex space-x-4">
                <Socials items={items}/>  
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <QuickLinks items={quicklinks} title="Quick Links"/>
          </div>
          
          {/* Topics */}
          <div>
           
             <QuickLinks items={partnerschools} title="Partner Schools" />

          </div>
          
          {/* Contact */}
          <Contacts/>
        </div>
        
         <hr className="my-8 border-gray-700" />

        
        <div className="flex flex-col md:flex-row justify-between items-center mt-20">
          <div className="flex flex-col md:flex-row mx-auto items-center justify-center space-x-2">
              <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()}
          </p>
        
          
          <p className="text-gray-300 text-sm">
            The Finest Schools.
            All rights reserved.
          </p>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Footer;
