'use client'

import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";


export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-gray-100"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <div className="container mx-auto px-4 my-auto">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            variants={itemVariants}
          >
            <img
              src="/images/aboutHero.jpg"
              alt="About PROTEC FIRE"
              width={600}
              height={400}
              className="rounded-lg shadow-xl transition duration-300 hover:shadow-2xl"
            />
          </motion.div>
          <div className="md:w-1/2 md:pl-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              About PROTEC FIRE
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              PROTEC FIRE, established in 2004, is a trusted and leading fire protection company committed to delivering comprehensive fire safety solutions with the highest standards of quality, reliability, and compliance. With nearly two decades of industry expertise, we specialize in protecting lives, property, and businesses through advanced fire protection systems and professional services.
            </motion.p> 
            <motion.p
              className="text-lg text-gray-600 mb-6"
              variants={itemVariants}
            >
              We are fully authorized to design, install, test, commission, and certify a complete range of fire protection systems. Our services cover every stage of a project — from initial design and system selection to supply, installation, testing, commissioning, and Annual Maintenance Contracts (AMC).
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to={"/about-us"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-900 transition duration-300">
                    Learn More About Us
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

