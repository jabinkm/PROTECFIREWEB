import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, Lightbulb, Cable, LayoutGrid, PanelTop, Sun } from "lucide-react"

const services = [
  {
    title: "LIGHTING & POWER",
    sublink: "/electrical/lighting-and-power",
    description:
      "We provide comprehensive lighting and power installation services for industrial, commercial, and residential projects. Our expert team ensures safe, efficient, and code-compliant electrical systems that meet your specific requirements.",
    image: "/images/ELE1.jpg",
    icon: Lightbulb,
    features: [
      "Industrial Lighting Systems",
      "Commercial Power Distribution",
      "Emergency Lighting Installation",
      "Power Factor Correction",
      "Energy-Efficient LED Solutions",
    ],
  },
  {
    title: "TRANSFORMER ERECTION",
    sublink: "/electrical/transformer-erection",
    description:
      "Our specialized team handles the complete erection and commissioning of transformers of all capacities. We ensure precise installation, testing, and maintenance for optimal performance and longevity of your power transformation equipment.",
    image: "/images/ELE2.jpg",
    icon: Zap,
    features: [
      "Distribution Transformer Installation",
      "Power Transformer Erection",
      "Oil Filling & Processing",
      "Testing & Commissioning",
      "Preventive Maintenance Services",
    ],
  },
  {
    title: "LV & HV CABLE LAYING & TERMINATION",
    sublink: "/electrical/cable-laying-termination",
    description:
      "We specialize in low voltage and high voltage cable laying and termination services. Our experienced technicians ensure proper installation techniques, jointing, and termination for reliable power transmission and distribution.",
    image: "/images/ELE3.jpg",
    icon: Cable,
    features: [
      "LV Cable Installation (up to 1kV)",
      "HV Cable Installation (up to 33kV)",
      "Cable Jointing & Splicing",
      "Heat Shrink Terminations",
      "Cable Testing & Certification",
    ],
  },
  {
    title: "INSTALLATION OF CABLE LADDER, TRAY & TRUNKING",
    sublink: "/electrical/cable-management",
    description:
      "We provide professional installation of cable management systems including cable ladders, trays, and trunking. Our solutions ensure organized, protected, and easily accessible cable routing for industrial and commercial facilities.",
    image: "/images/ELE4.jpg",
    icon: LayoutGrid,
    features: [
      "Cable Ladder Systems",
      "Perforated Cable Trays",
      "Wire Mesh Cable Trays",
      "Cable Trunking Installation",
      "Fire-Rated Cable Supports",
    ],
  },
  {
    title: "INSTALLATION OF ALL LV PANELS",
    sublink: "/electrical/lv-panels",
    description:
      "Our team specializes in the installation of all types of low voltage panels including distribution boards, motor control centers, and power factor correction panels. We ensure proper mounting, wiring, and commissioning for safe and reliable operation.",
    image: "/images/ELE5.jpg",
    icon: PanelTop,
    features: [
      "Main Distribution Boards (MDB)",
      "Sub Distribution Boards (SDB)",
      "Motor Control Centers (MCC)",
      "Power Factor Correction Panels",
      "Automatic Transfer Switch Panels",
    ],
  },
  {
    title: "STREET LIGHTING & HIGH MAST LIGHTING",
    sublink: "/electrical/street-lighting",
    description:
      "We offer complete street lighting and high mast lighting solutions for roads, highways, stadiums, ports, and industrial areas. Our services include design, installation, and maintenance of energy-efficient lighting systems.",
    image: "/images/ELE6.jpg",
    icon: Sun,
    features: [
      "Street Light Pole Installation",
      "High Mast Tower Erection",
      "LED Street Lighting Upgrades",
      "Stadium & Area Lighting",
      "Smart Lighting Control Systems",
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
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default function ElectricalServicesPage() {
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
              "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')",
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
              ELECTRICAL
            </h1>
            <p className="text-amber-400 text-xl md:text-2xl font-semibold mt-2">
              COMPREHENSIVE ELECTRICAL SOLUTIONS FOR EVERY PROJECT
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering excellence in electrical installations with the highest
              safety standards and engineering specifications.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Quick Navigation Buttons */}
      {/* <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-slate-900 text-white hover:bg-amber-600 hover:text-white border-slate-700 px-4 py-2 rounded-full transition duration-300"
            >
              {service.title}
            </Button>
          ))}
        </div>
      </div> */}

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR ELECTRICAL SERVICES
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
                      <div className="p-2 bg-amber-500/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-amber-500" />
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
                      {/* <Button className="mt-8 bg-slate-900 text-white hover:bg-amber-600 rounded-full px-6">
                        View More
                      </Button> */}
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
                        <IconComponent className="h-24 w-24 text-amber-500/30" />
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

                    {/* <div className="relative w-full h-[300px] rounded-lg shadow-lg overflow-hidden bg-slate-800">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-24 w-24 text-amber-500/30" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-white font-semibold">{service.title}</p>
                      </div>
                    </div> */}
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
              Beyond our core electrical services, we offer valuable resources to add
              value to your projects:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {[
                "Initial Site Assessment & Electrical Survey",
                "Load Analysis & System Design",
                "Project Management & Supervision",
                "Preventive Maintenance Plans",
                "Energy Audit & Optimization",
                "24/7 Emergency Support Services",
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

