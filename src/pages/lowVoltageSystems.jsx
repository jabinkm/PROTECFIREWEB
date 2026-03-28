// import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
// import { Footer } from "../components/footer";
// import { Navigation } from "../components/navigationOurServices";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const services = [
//   {
//     title: "PIPING",
//     description:
//       "Our mechanical division provides effective piping solutions for industrial and commercial facilities, ensuring reliability and efficiency.",
//     image: "images/piping.jpeg",
//     features: [
//       "Industrial Equipment",
//       "Process Piping and Equipment",
//       "Energy Efficiency Solutions",
//     ],
//     sublink: "/mechanical-division/piping"
//   },
//   {
//     title: "EQUIPMENT ERECTION",
//     description:
//       "We offer comprehensive equipment erection services, ensuring precise installation and alignment of industrial machinery and structures.",
//     image: "images/mechanical-equipment-erection.jpg",
//     features: [
//       "Heavy Machinery Installation",
//       "Structural Assembly",
//       "Precision Alignment",
//     ],
//     sublink: "/mechanical-division/equipment-erection"
//   },
//   {
//     title: "STEEL STRUCTURE FABRICATION AND ERECTION",
//     description:
//       "Our expertise in steel structure fabrication and erection ensures robust and durable constructions for various industrial applications.",
//     image: "images/Steel-Structure-Fabrication.jpg",
//     features: [
//       "Custom Steel Fabrication",
//       "On-site Assembly",
//       "Quality Assurance",
//     ],
//     sublink: "/mechanical-division/steel-structure"
//   },
//   {
//     title: "PRE ENGINEERED BUILDINGS",
//     description:
//       "We specialize in pre-engineered buildings, offering cost-effective and efficient solutions for industrial and commercial spaces.",
//     image: "images/pre-engineered-building.jpg",
//     features: [
//       "Design and Engineering",
//       "Quick Installation",
//       "Cost-effective Solutions",
//     ],
//     sublink: "/mechanical-division/pre-engineered-buildings"
//   },
//   {
//     title: "VALVES AND INSTRUMENTS",
//     description:
//       "Our services include the supply and installation of high-quality valves and instruments for precise control and monitoring of industrial processes.",
//     image: "/images/valves1.jpg",
//     features: [
//       "Wide Range of Valves",
//       "Instrumentation Solutions",
//       "Installation and Maintenance",
//     ],
//     sublink: "/mechanical-division/valves-and-instruments"
//   },
// ];

// function AnimatedSection({ children }) {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start("visible");
//     }
//   }, [controls, inView]);

//   return (
//     <motion.div
//       ref={ref}
//       animate={controls}
//       initial="hidden"
//       variants={{
//         visible: { opacity: 1, y: 0 },
//         hidden: { opacity: 0, y: 50 }
//       }}
//       transition={{ duration: 0.5 }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function MED() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="min-h-screen">
    
//       <Navigation />
//       {/* Hero Section */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-[600px] bg-black"
//       >
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/mechanical.png')",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/70" />
//         </div>
//         <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//           >
//             <Typography
//               variant="h1"
//               className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
//             >
//               MECHANICAL SERVICES FOR INDUSTRIAL AND COMMERCIAL PROJECTS
//             </Typography>
//           </motion.div>
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             <Typography className="text-gray-300 mt-4 max-w-2xl">
//               Working with the highest engineered specifications.
//             </Typography>
//           </motion.div>
//         </div>
//       </motion.div>
      
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-wrap justify-center gap-4">
//             {services.map((service, index) => (
//               <Link key={index} to={service.sublink}>
//                 <Button className="bg-blue-gray-900 text-white hover:text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
//                   {service.title}
//                 </Button>
//               </Link>
//             ))}
//           </div>
//         </div>
      
//       {/* Services Section */}
//       <div className="container mx-auto px-4 py-16">
//         <AnimatedSection>
//           <Typography
//             variant="h2"
//             className="text-3xl font-bold mb-12 text-center"
//           >
//             OUR MECHANICAL DIVISION
//           </Typography>
//         </AnimatedSection>

//         <div className="space-y-16">
//           {services.map((service, index) => (
//             <AnimatedSection key={index}>
//               <div
//                 className={`grid md:grid-cols-2 gap-8 items-center ${
//                   index % 2 === 0 ? "" : "md:grid-flow-dense"
//                 }`}
//               >
//                 <div className={index % 2 === 0 ? "md:pr-8" : "md:pl-8"}>
//                   <Typography variant="h3" className="text-2xl font-bold mb-4">
//                     {service.title}
//                   </Typography>
//                   <Typography className="text-gray-700 mb-4">
//                     {service.description}
//                   </Typography>
//                   <ul className="list-disc list-inside space-y-2 text-gray-600">
//                     {service.features.map((feature, featureIndex) => (
//                       <motion.li
//                         key={featureIndex}
//                         initial={{ x: 20, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
//                       >
//                         {feature}
//                       </motion.li>
//                     ))}
//                   </ul>
//                   <motion.div
//                     initial={{ y: 20, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: 0.5, duration: 0.5 }}
//                   >
//                     <Link to={service.sublink}>
//                       <Button className="lg:inline-block bg-blue-gray-900 text-white hover:text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 mt-8 ml-8">
//                         view more
//                       </Button>
//                     </Link>
//                   </motion.div>
//                 </div>
//                 <motion.div
//                   className={index % 2 === 0 ? "" : "md:order-first"}
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ delay: 0.3, duration: 0.8 }}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-[300px] object-cover rounded-lg shadow-lg"
//                   />
//                 </motion.div>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>

//         {/* Other Resources Section */}
//         <AnimatedSection>
//           <div className="mt-16">
//             <Typography variant="h3" className="text-2xl font-bold mb-4">
//               OTHER RESOURCES
//             </Typography>
//             <Typography className="text-gray-700 mb-4">
//               Beyond our core services, we offer valuable resources to add value
//               to your projects:
//             </Typography>
//             <ul className="list-disc list-inside space-y-2 text-gray-600">
//               {["Initial Site Assessment", "Budget and planning services", "Project Management", "Ongoing Maintenance Plans", "Energy Optimization"].map((item, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ x: 20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ delay: 0.1 * index, duration: 0.5 }}
//                 >
//                   {item}
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//         </AnimatedSection>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigationOurServices";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Cctv, Volume2, DoorOpen, Tv, Cpu } from "lucide-react"

const services = [
  {
    title: "TELEPHONE & DATA SYSTEM",
    sublink: "/low-voltage/telephone-data-system",
    description:
      "We provide comprehensive telephone and data system installations for commercial, industrial, and institutional facilities. Our expert team designs and installs structured cabling solutions that ensure reliable voice and data communication throughout your premises.",
    image: "/images/LV1.jpg",
    icon: Phone,
    features: [
      "Structured Cabling Systems (Cat5e/Cat6/Cat6A)",
      "PABX & IP Telephony Systems",
      "Fiber Optic Backbone Installation",
      "Data Center Cabling Solutions",
      "Network Infrastructure Design",
    ],
  },
  {
    title: "CCTV SYSTEM",
    sublink: "/low-voltage/cctv-system",
    description:
      "Our specialized team handles the complete design, installation, and commissioning of CCTV surveillance systems. We provide state-of-the-art security solutions including IP cameras, NVRs, and video management systems for comprehensive property protection.",
    image: "/images/LV2.jpg",
    icon: Cctv,
    features: [
      "IP Camera Installation & Configuration",
      "Network Video Recorder (NVR) Setup",
      "Video Management Software Integration",
      "Remote Monitoring Solutions",
      "Analog to IP System Upgrades",
    ],
  },
  {
    title: "PA SYSTEM",
    sublink: "/low-voltage/pa-system",
    description:
      "We specialize in public address and voice evacuation system installations. Our experienced technicians ensure proper coverage design, speaker placement, and system configuration for clear audio communication in commercial buildings, industrial facilities, and public venues.",
    image: "/images/LV3.jpg",
    icon: Volume2,
    features: [
      "Public Address System Installation",
      "Voice Evacuation Systems (EVAC)",
      "Background Music Systems",
      "Paging & Intercom Solutions",
      "Audio System Integration",
    ],
  },
  {
    title: "DOOR ACCESS CONTROL SYSTEM",
    sublink: "/low-voltage/access-control",
    description:
      "We provide professional installation of door access control systems for secure entry management. Our solutions include card readers, biometric systems, and integrated security platforms that protect your premises while providing convenient access for authorized personnel.",
    image: "/images/LV4.jpg",
    icon: DoorOpen,
    features: [
      "Card Reader & Proximity Systems",
      "Biometric Access Control (Fingerprint/Face)",
      "Electric Lock & Magnetic Lock Installation",
      "Visitor Management Systems",
      "Integration with CCTV & Alarm Systems",
    ],
  },
  {
    title: "SMATV SYSTEM",
    sublink: "/low-voltage/smatv-system",
    description:
      "Our team specializes in Satellite Master Antenna Television (SMATV) system installations for hotels, residential complexes, and commercial buildings. We ensure high-quality satellite TV distribution with proper signal levels and channel management throughout your facility.",
    image: "/images/LV5.webp",
    icon: Tv,
    features: [
      "Satellite Dish & LNB Installation",
      "Head-End Equipment Setup",
      "Coaxial Cable Distribution Network",
      "IPTV System Integration",
      "Hotel TV System Solutions",
    ],
  },
  {
    title: "PLC, SCADA & BMS SYSTEM",
    sublink: "/low-voltage/plc-scada-bms",
    description:
      "We offer complete Programmable Logic Controller (PLC), Supervisory Control and Data Acquisition (SCADA), and Building Management System (BMS) solutions. Our services include system design, programming, installation, and commissioning for industrial automation and building control applications.",
    image: "/images/LV6.webp",
    icon: Cpu,
    features: [
      "PLC Programming & Installation",
      "SCADA System Design & Implementation",
      "Building Management System (BMS)",
      "HVAC Control Integration",
      "Energy Management & Monitoring",
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

export default function LowVoltageSystems() {
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
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop')",
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
              LOW VOLTAGE SYSTEMS
            </h1>
            <p className="text-cyan-400 text-xl md:text-2xl font-semibold mt-2">
              INTELLIGENT BUILDING SOLUTIONS & SECURITY SYSTEMS
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="text-gray-300 mt-4 max-w-2xl text-lg">
              Delivering cutting-edge low voltage system installations with advanced
              technology integration and reliable performance.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            OUR LOW VOLTAGE SERVICES
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

        {/* Other Resources Section */}
        {/* <AnimatedSection>
          <div className="mt-16 bg-slate-50 dark:bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              OTHER RESOURCES
            </h3>
            <p className="text-muted-foreground mb-4">
              Beyond our core low voltage services, we offer valuable resources to add
              value to your projects:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {[
                "Site Survey & System Design Consultation",
                "Network Infrastructure Assessment",
                "Security System Audit & Recommendations",
                "Preventive Maintenance Programs",
                "System Integration & Commissioning",
                "24/7 Technical Support Services",
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