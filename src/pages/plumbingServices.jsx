import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Droplets, Trash2, CloudRain, Leaf, Wind } from "lucide-react"

const services = [
  {
    title: "DOMESTIC WATER SUPPLY NETWORK",
    sublink: "/plumbing/domestic-water-supply",
    description:
      "We provide comprehensive domestic water supply network installations for residential, commercial, and industrial facilities. Our expert team designs and installs complete water distribution systems that ensure reliable and safe water delivery throughout your premises.",
    image: "/images/PL1.png",
    icon: Droplets,
    features: [
      "Hot & Cold Water Distribution Systems",
      "Pressure Boosting Systems Installation",
      "Water Storage Tank Installation",
      "Pipe Network Design & Installation",
      "Water Meter & Valve Installation",
    ],
  },
  {
    title: "WASTE & SEWAGE DRAINAGE NETWORK",
    sublink: "/plumbing/waste-sewage-drainage",
    description:
      "Our specialized team handles the complete design, installation, and commissioning of waste and sewage drainage systems. We provide efficient drainage solutions including soil pipes, waste pipes, and ventilation systems for proper waste management.",
    image: "/images/PL2.jpeg",
    icon: Trash2,
    features: [
      "Soil & Waste Pipe Installation",
      "Sewage Ejector Pump Systems",
      "Vent Pipe Network Installation",
      "Grease Trap Installation",
      "Septic Tank & Treatment Systems",
    ],
  },
  {
    title: "STORM WATER NETWORK",
    sublink: "/plumbing/storm-water-network",
    description:
      "We specialize in storm water drainage system installations. Our experienced technicians ensure proper design, installation, and commissioning of rainwater collection and drainage systems for buildings, parking areas, and outdoor facilities.",
    image: "/images/PL3.jpg",
    icon: CloudRain,
    features: [
      "Roof Drainage & Gutter Systems",
      "Floor Drain Installation",
      "Catch Basin & Manhole Installation",
      "Rainwater Harvesting Systems",
      "Sump Pump Installation",
    ],
  },
  {
    title: "IRRIGATION NETWORK",
    sublink: "/plumbing/irrigation-network",
    description:
      "We provide professional installation of irrigation systems for landscaping, agricultural, and commercial applications. Our solutions include sprinkler systems, drip irrigation, and automated control systems that ensure efficient water distribution for your green spaces.",
    image: "/images/PL4.jpg",
    icon: Leaf,
    features: [
      "Sprinkler System Installation",
      "Drip Irrigation Systems",
      "Irrigation Controller & Timer Setup",
      "Underground Pipe Network",
      "Water-Efficient Landscape Solutions",
    ],
  },
  {
    title: "COMPRESSED AIR SYSTEM NETWORK",
    sublink: "/plumbing/compressed-air-system",
    description:
      "Our team specializes in compressed air system network installations for industrial and commercial facilities. We ensure proper pipe sizing, layout design, and installation of compressed air distribution networks with optimal pressure and flow rates.",
    image: "/images/PL5.jpg",
    icon: Wind,
    features: [
      "Air Compressor Installation",
      "Compressed Air Pipe Network",
      "Air Dryer & Filter Systems",
      "Pressure Regulator Installation",
      "Air Receiver Tank Setup",
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

export default function PlumbingServicesPage() {
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
              "url('https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop')",
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
              PLUMBING SERVICES
            </h1>
            <p className="text-blue-400 text-xl md:text-2xl font-semibold mt-2">
              COMPREHENSIVE WATER & DRAINAGE SOLUTIONS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering professional plumbing installations with expert design,
              quality materials, and reliable performance for all your water and drainage needs.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR PLUMBING SERVICES
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
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-blue-500" />
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
              Beyond our core plumbing services, we offer valuable resources to add
              value to your projects:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {[
                "Site Survey & Plumbing Design Consultation",
                "Water Pressure & Flow Assessment",
                "Plumbing System Audit & Recommendations",
                "Preventive Maintenance Programs",
                "System Testing & Commissioning",
                "24/7 Emergency Plumbing Support",
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