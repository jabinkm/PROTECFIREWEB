'use client'

import { useState } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bgImage: "/images/hero-bg.jpg",
      title: "MECHANICAL ELECTRICAL AND PLUMBING SERVICES",
      description: "Civil Defense approved Fire Protection System Installation and Maintenance Company involved in Supply, Installation, Testing,Commissioning and Maintenance of wide range of fire protection products and systems for Government Sector, Residential and Commercial Buildings, Educational Institutes, Hospitals and Clinics, Factories  Ware Houses and so on.",
      buttonText: "Explore Our Services",
      buttonLink: "/services"
    },
    {
      bgImage: "/images/hero-bg-2.jpg",
      title: "FIRE SYSTEM ANNUAL MAINTENANCE CONTRACT(AMC) SERVICES",
      description: "Our certified technicians deliver quarterly or annual inspections, including fire pump tests, smoke detector calibration, and system repairs, designed to maximize the lifespan of your equipments.",
      buttonText: "Contact Us",
      buttonLink: "/contact-us"
    },
    // {
    //   bgImage: "/images/tea.jpg",
    //   title: "EXPERT TEAM",
    //   description: "Our team of skilled professionals ensures the highest quality of work for every project we undertake.",
    //   buttonText: "Meet Our Team",
    //   buttonLink: "/about-us"
    // }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative h-[500px] md:h-[600px]">
      {/* Carousel */}
      <Slider {...settings} className="h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[500px] md:h-[600px]">
            {/* Background Image */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
              style={{
                backgroundImage: `url('${slide.bgImage}')`,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Content */}
            <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-white px-4 py-36 mt-24">
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p 
                className="text-l md:text-xl text-center mb-12 max-w-3xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slide.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link to={slide.buttonLink}>
                  <Button className="bg-orange-700 text-white px-8 py-3 text-lg rounded-full hover:bg-orange-900 transition duration-300">
                    {slide.buttonText}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Social Media Links */}
      <motion.div 
        className="absolute top-4 right-4 flex space-x-4 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <a href="https://www.facebook.com/protecgroup777">
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-blue-700 hover:border-red-500 hover:bg-white">
            <i className="fab fa-facebook-f" />
          </IconButton>
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a href="https://www.linkedin.com/company/protec-groups/posts/">
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-white hover:border-red-500 hover:bg-blue-600">
            <i className="fab fa-linkedin-in" />
          </IconButton>
        </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton color="white" variant="outlined" size="sm" className="hover:text-white hover:border-red-500 hover:bg-black">
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </IconButton>
        </motion.div>
      </motion.div>
    </div>
  )
}


