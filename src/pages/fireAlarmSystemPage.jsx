import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Bell, Volume2, BatteryCharging } from "lucide-react"


const services = [
  {
    title: "FIRE ALARM SYSTEM (CONVENTIONAL & ADDRESSABLE)",
    sublink: "/fire-alarm/fire-alarm-system",
    description:
      "We provide comprehensive fire alarm system installations including both conventional and addressable systems. Our expert team designs and installs complete detection networks with smoke detectors, heat detectors, manual call points, and control panels for residential, commercial, and industrial facilities.",
    image: "/images/FA1.png",
    icon: Bell,
    features: [
      "Conventional Fire Alarm Panel Installation",
      "Addressable Fire Alarm System Design",
      "Smoke & Heat Detector Installation",
      "Manual Call Point Placement",
      "Sounder & Beacon Installation",
      "Loop Wiring & System Programming",
    ],
  },
  {
    title: "VOICE EVACUATION SYSTEM",
    sublink: "/fire-alarm/voice-evacuation",
    description:
      "Our specialized team handles the complete design, installation, and commissioning of voice evacuation systems. We provide clear audio communication solutions for emergency announcements, ensuring safe and orderly building evacuation during fire emergencies with pre-recorded and live voice messages.",
    image: "/images/FA2a.jpg",
    icon: Volume2,
    features: [
      "Voice Evacuation Panel Installation",
      "Speaker & Horn Installation",
      "Amplifier & Audio Router Setup",
      "Pre-recorded Message Programming",
      "Microphone & Paging Console Setup",
      "Zone-based Evacuation Configuration",
    ],
  },
  {
    title: "CENTRAL BATTERY SYSTEM",
    sublink: "/fire-alarm/central-battery",
    description:
      "We specialize in central battery system installations for emergency lighting and fire alarm backup power. Our experienced technicians ensure proper design, installation, and commissioning of centralized power backup systems that provide reliable emergency illumination and system operation during power failures.",
    image: "/images/FA3.jpg",
    icon: BatteryCharging,
    features: [
      "Central Battery Unit Installation",
      "Emergency Lighting Circuit Design",
      "Exit Sign & Emergency Luminaire Installation",
      "Battery Monitoring System Setup",
      "Automatic Changeover Switch Installation",
      "Load Testing & Commissioning",
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

export default function FireAlarmServicesPage() {
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
                "url('/images/FA.jpeg')",
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
              FIRE ALARM SYSTEM
            </h1>
            <p className="text-orange-500 text-xl md:text-2xl font-semibold mt-2">
              ADVANCED DETECTION & NOTIFICATION SOLUTIONS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering professional fire alarm system installations with expert design,
              quality equipment, and reliable performance for complete fire detection and notification.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR FIRE ALARM SERVICES
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
                      <div className="p-2 bg-orange-500/10 rounded-lg">
                        <IconComponent className="h-8 w-8 text-orange-500" />
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
        
      </div>
      <Footer />
    </div>
  );
}