const Contacts =()=>(
       <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contacts</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="block text-md">Email:</span>
                <a href="mailto:info@finestschool.ac.tz" className="hover:text-white transition-colors text-xs text-gray-500">info@finestschool.ac.tz</a>
              </li>
              <li className="text-gray-300">
                <span className="block text-md">Phone:</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors text-xs text-gray-500">+255 (718) 469-019 </a>
              </li>
              <li className="text-gray-300">
                <span className="block text-md">Whatsapp:</span>
                <a href="tel:+1234567890" className="hover:text-white transition-colors text-xs text-gray-500">+255 (754) 594-329</a>
              </li>
              <li className="text-gray-300">
                <span className="block text-md">Address:</span>
                <span className="text-xs text-gray-500">Mkuza, Kibaha</span>
              </li>
               <li className="text-gray-300">
                 <span className="text-xs text-gray-500">Pwani</span>
              </li>
            </ul>
          </div>
)

export default Contacts