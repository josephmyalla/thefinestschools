import { Link } from "react-router-dom";
import Section from "./Section";
import Contacts from "./Contacts"
import { socials as items,quicklinks,partnerschools } from "../constants";
import Socials from './Socials'
import QuickLinks from "./QuckLinks"

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
             <p className="text-gray-300 mt-2 mb-4 max-w-md text-sm/5">
             Pre and Primary School Located in Mkuza, Kibaha. The school starts with Baby class, Middle, Pre and Primary School from 2.5yrs  old age and above.
            </p>
            <div className="flex space-x-2">
                {
                  items.map((item,index)=>
                    (
                      <Socials {...item} key={index}/>  
                    )
                  )
                }
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
            

            <div className="flex flex-col items-left justify-center space-y-2 text-lg">
                {
                  quicklinks.map((qlink,index)=>
                    (
                      <QuickLinks {...qlink} key={index}/>  
                    )
                  )
                }
            </div>

          </div>
          
          {/* Topics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Partner Schools</h3>
            <div className="flex flex-col items-left justify-center space-y-2 text-lg">
                {
                  partnerschools.map((qlink,index)=>
                    (
                      <QuickLinks {...qlink} key={index}/>  
                    )
                  )
                }
            </div>

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
