// import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
// import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Snowflake, Box, Wind, Layers } from "lucide-react"


const services = [
  {
    title: "CHILLERS",
    sublink: "/hvac/chillers",
    description:
      "We provide comprehensive chiller system installations including air-cooled and water-cooled chillers for commercial and industrial applications. Our expert team handles complete chiller plant design, installation, piping connections, and commissioning to deliver efficient cooling solutions for buildings of all sizes.",
    image: "/images/HVAC1.jpg",
    icon: Snowflake,
    features: [
      "Air-Cooled Chiller Installation",
      "Water-Cooled Chiller Installation",
      "Chiller Plant Room Setup",
      "Cooling Tower Installation",
      "Chiller Control Panel Integration",
      "Performance Testing & Commissioning",
    ],
  },
  {
    title: "PACKAGE UNITS",
    sublink: "/hvac/package-units",
    description:
      "Our specialized team handles the complete installation of packaged air conditioning units for commercial and industrial facilities. We provide rooftop package units, floor-mounted units, and custom configurations designed to meet specific cooling and ventilation requirements with energy-efficient operation.",
    image: "/images/HVAC2.webp",
    icon: Box,
    features: [
      "Rooftop Package Unit Installation",
      "Floor-Mounted Package Unit Setup",
      "Ductwork Connection & Integration",
      "Electrical & Control Wiring",
      "Refrigerant Charging & Testing",
      "Air Balancing & Commissioning",
    ],
  },
  {
    title: "DECORATIVE & DUCTED SPLIT UNITS",
    sublink: "/hvac/split-units",
    description:
      "We specialize in decorative and ducted split air conditioning installations for residential, commercial, and office spaces. Our experienced technicians ensure proper sizing, installation, and commissioning of wall-mounted, ceiling cassette, and concealed ducted units for optimal comfort and aesthetics.",
    image: "/images/HVAC3.webp",
    icon: Wind,
    features: [
      "Wall-Mounted Split Unit Installation",
      "Ceiling Cassette Unit Installation",
      "Concealed Ducted Unit Setup",
      "Refrigerant Piping & Insulation",
      "Condensate Drainage Installation",
      "Thermostat & Control Integration",
    ],
  },
  {
    title: "MULTI SPLIT UNITS",
    sublink: "/hvac/multi-split",
    description:
      "We provide expert installation of multi-split air conditioning systems that connect multiple indoor units to a single outdoor unit. Our team designs and installs VRF/VRV systems for commercial buildings, offering flexible zoning, individual temperature control, and energy-efficient operation.",
    image: "/images/HVAC4.png",
    icon: Layers,
    features: [
      "VRF/VRV System Installation",
      "Multiple Indoor Unit Configuration",
      "Branch Selector Box Installation",
      "Refrigerant Piping Network",
      "Centralized Controller Setup",
      "Zone-based Climate Control",
    ],
  },
  {
    title: "DUCT WORKS & CHILLED WATER PIPE WORKS",
    sublink: "/hvac/ductwork-piping",
    description:
      "Our comprehensive ductwork and chilled water piping services cover the complete HVAC distribution network. We handle fabrication and installation of supply/return ducts, chilled water pipes, insulation, and all associated fittings to ensure efficient air and water distribution throughout the facility.",
    image: "/images/HVAC5.png",
    icon: Layers,
    features: [
      "GI & Pre-insulated Duct Fabrication",
      "Supply & Return Duct Installation",
      "Chilled Water Pipe Installation",
      "Pipe Insulation & Cladding",
      "Air Diffuser & Grille Installation",
      "Duct Leakage Testing & Balancing",
    ],
  },
];

function AnimatedSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function HVACSystemPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] bg-slate-900"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
                "url('/images/CommercialHVAC.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
              HVAC SYSTEM
            </h1>
            <p className="text-cyan-500 text-xl md:text-2xl font-semibold mt-2">
              HEATING, VENTILATION & AIR CONDITIONING SOLUTIONS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering professional HVAC system installations with expert design,
              quality equipment, and reliable performance for complete climate control solutions.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR HVAC SERVICES
          </h2>
        </AnimatedSection>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <AnimatedSection key={index}>
                <div
                  className={`grid md:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-cyan-500/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-cyan-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: 0.1 * featureIndex,
                            duration: 0.5,
                          }}
                        >
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      
                    </motion.div>
                  </div>
                  <motion.div
                    className={index % 2 === 0 ? "" : "md:order-first"}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >

                    <div className="relative w-full h-[300px] rounded-lg shadow-lg overflow-hidden bg-slate-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-24 w-24 text-cyan-500/30" />
                      </div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-semibold">{service.title}</p>
                      </div>
                    </div>

                    
                  </motion.div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}