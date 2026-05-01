
import { Link } from "react-router-dom";
import { Typography, IconButton } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/images/B.png"
              alt="PROTEC FIRE Logo"
              width={150}
              height={50}
              className="mb-4"
            />
            <Typography className="font-normal text-blue-gray-400">
              PROTECFIRE is a leading provider of Fire fighting equipments and services in United Arab Emirates.
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Quick Links
            </Typography>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/"} >Home</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/about-us"}>About Us</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/services"}>Services</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/projects"}>Projects</Link></li>
              <li className="text-gray-400 hover:text-white transition duration-300"><Link to={"/contact-us"}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Contact Info
            </Typography>
            <Typography className="font-normal mb-2 text-blue-gray-400">
              563, Al Muntasir street, Al Mamourah <br/>Ras-Al-Khaimah - PO BOX-5611, United Arab Emirates.
            </Typography>
            <Typography color="gray" className="font-normal mb-2">
            <p className="text-gray-600 hover:text-orange-500"><a href="tel:+971 7 202 3777">+971 7 202 3777</a></p>
            <p className="text-gray-600 hover:text-orange-500"><a href="tel:+971 56 118 4428">+971 56 118 4428</a></p>
            </Typography>
            <Typography color="gray" className="font-normal">
            <p className="text-gray-600 hover:text-orange-500"><a href="mailto:info@protecuae.com">info@protecuae.com</a></p>
            <p className="text-gray-600 hover:text-orange-500"><a href="mailto:ajesh@protecuae.com">ajesh@protecuae.com</a></p>
            </Typography>
          </div>
          <div>
            <Typography variant="h6" color="white" className="mb-4">
              Follow Us
            </Typography>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/protecgroup777">
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-facebook-f" />
              </IconButton>
              </a>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-twitter" />
              </IconButton>
              <a href="https://www.linkedin.com/company/protec-group/posts/">
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-linkedin-in" />
              </IconButton>
              </a>
              <IconButton color="white" className="rounded-full">
                <i className="fab fa-instagram" />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-5 pt-5 text-center">
          <Typography color="orange" className="font-normal">
            &copy; {new Date().getFullYear()} PROTEC FIRE All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  )
}
