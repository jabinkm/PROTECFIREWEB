import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Droplets, Flame, Wind, Waves, ArrowUpFromLine, FireExtinguisher } from "lucide-react"


const services = [
  {
    title: "WET SPRINKLER",
    sublink: "/fire-fighting/wet-sprinkler",
    description:
      "We provide comprehensive wet sprinkler system installations for commercial, industrial, and residential facilities. Our expert team designs and installs complete automatic fire suppression systems that ensure immediate water discharge upon fire detection for maximum protection.",
    image: "/images/FF1.jpg",
    icon: Droplets,
    features: [
      "Automatic Sprinkler Head Installation",
      "Main & Branch Pipe Network Design",
      "Fire Pump & Jockey Pump Installation",
      "Alarm Valve & Flow Switch Setup",
      "System Testing & Commissioning",
    ],
  },
  {
    title: "WATER DELUGE SYSTEM",
    sublink: "/fire-fighting/water-deluge",
    description:
      "Our specialized team handles the complete design, installation, and commissioning of water deluge systems. We provide high-volume water discharge solutions for high-hazard areas including transformer yards, aircraft hangars, and chemical storage facilities.",
    image: "/images/FF2.jpg",
    icon: Waves,
    features: [
      "Deluge Valve Installation",
      "Open Sprinkler Head Network",
      "Detection System Integration",
      "High-Capacity Pump Systems",
      "Emergency Release Mechanisms",
    ],
  },
  {
    title: "GAS SUPPRESSION SYSTEM",
    sublink: "/fire-fighting/gas-suppression",
    description:
      "We specialize in gas suppression system installations for sensitive environments. Our experienced technicians ensure proper design, installation, and commissioning of clean agent systems for data centers, server rooms, electrical panels, and archive storage areas.",
    image: "/images/FF3.jpg",
    icon: Wind,
    features: [
      "FM200 System Installation",
      "CO2 Suppression Systems",
      "Novec 1230 Clean Agent Systems",
      "Cylinder Storage & Piping Network",
      "Detection & Control Panel Integration",
    ],
  },
  {
    title: "FOAM WATER SPRINKLER SYSTEM",
    sublink: "/fire-fighting/foam-water-sprinkler",
    description:
      "We provide professional installation of foam water sprinkler systems for flammable liquid hazards. Our solutions include AFFF and protein foam systems that provide effective fire suppression for fuel storage, aircraft hangars, and petrochemical facilities.",
    image: "/images/FF4.jpg",
    icon: Flame,
    features: [
      "Foam Concentrate Storage Tanks",
      "Proportioning System Installation",
      "Foam-Water Sprinkler Heads",
      "Bladder Tank & Pump Systems",
      "Low/Medium/High Expansion Foam",
    ],
  },
  {
    title: "DRY RISER SYSTEM",
    sublink: "/fire-fighting/dry-riser",
    description:
      "Our team specializes in dry riser system installations for high-rise buildings and structures. We ensure proper vertical pipe installation with landing valves at each floor level, providing firefighters with quick access to water supply during emergencies.",
    image: "/images/FF5.jpg",
    icon: ArrowUpFromLine,
    features: [
      "Vertical Riser Pipe Installation",
      "Landing Valve Installation",
      "Inlet Breeching Connection",
      "Air Release Valve Setup",
      "Drain Valve & Test Points",
    ],
  },
  {
    title: "FIRE HYDRANT",
    sublink: "/fire-fighting/fire-hydrant",
    description:
      "We provide complete fire hydrant system installations for buildings, industrial complexes, and outdoor areas. Our solutions include pillar hydrants, underground hydrants, and hose reel systems with proper pump rooms and water storage tanks.",
    image: "/images/FF6.png",
    icon: FireExtinguisher,
    features: [
      "Pillar & Underground Hydrant Installation",
      "Hose Reel Cabinet Systems",
      "Fire Pump Room Setup",
      "Underground Pipe Network",
      "Water Storage Tank Installation",
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

export default function FireFightingServicesPage() {
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
                "url('/images/FF.webp')",
            //   "url('https://images.unsplash.com/photo-1642524811533-3d8a6f8b0c2f?q=80&w=2070&auto=format&fit=crop')",
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
              FIRE FIGHTING SYSTEM
            </h1>
            <p className="text-red-500 text-xl md:text-2xl font-semibold mt-2">
              COMPREHENSIVE FIRE PROTECTION SOLUTIONS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering professional fire fighting system installations with expert design,
              quality equipment, and reliable performance for complete fire protection.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR FIRE FIGHTING SERVICES
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
                      <div className="p-2 bg-red-500/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-red-500" />
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
                        <IconComponent className="h-24 w-24 text-blue-500/30" />
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

        {/* Other Resources Section */}
        {/* <AnimatedSection>
          <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              OTHER RESOURCES
            </h3>
            <p className="text-muted-foreground mb-4">
              Beyond our core fire fighting services, we offer valuable resources to add
              value to your projects:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {[
                "Site Survey & Fire Protection Design Consultation",
                "Fire Risk Assessment & Analysis",
                "Fire System Audit & Recommendations",
                "Annual Maintenance Contracts (AMC)",
                "System Testing, Inspection & Commissioning",
                "24/7 Emergency Fire System Support",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimatedSection> */}
      </div>
      <Footer />
    </div>
  );
}