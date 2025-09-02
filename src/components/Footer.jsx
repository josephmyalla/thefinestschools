import Section from "./Section";
import { socials as items } from "../constants";
import Socials from './Socials'


const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex flex-col items-start justify-center gap-4">
        <p className="caption text-n-4 lg:block text-xs">Development and Customization by <span className="text-purple-500 text-lg">Joseph Myalla</span></p>
         <p className="caption text-n-4 lg:block text-xs">Phone/Whatsapp <span className="text-purple-500 text-lg">+255 715 680744</span></p>
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved. The Finest Schools
        </p>
        </div>

        <Socials items={items}/>
      </div>
    </Section>
  );
};

export default Footer;
