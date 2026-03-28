// import { Card, CardBody, Typography, IconButton, Button } from "@material-tailwind/react";
// import { Link } from "react-router-dom";

// const services = [
//   {
//     icon: "fas fa-shield-alt",
//     title: 'Thermal Insulation',
//     description: 'High-performance thermal insulation solutions for industrial and commercial applications.',
//   },
//   {
//     icon: "fas fa-tint",
//     title: 'Protective Coatings',
//     description: 'Advanced coating systems to protect surfaces from corrosion, chemicals, and extreme weather conditions.',
//   },
//   {
//     icon: "fas fa-thermometer-half",
//     title: 'Heat Tracing',
//     description: 'Electric heat tracing systems to maintain process temperatures and prevent freezing in pipelines.',
//   },
//   {
//     icon: "fas fa-wrench",
//     title: 'Maintenance Services',
//     description: 'Comprehensive maintenance and repair services for insulation and coating systems.',
//   },
// ]

// export function Services() {
//   return (
//     <section id="services" className="py-16 md:py-24">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300">
//               <CardBody>
//                 <IconButton color="red" className="mb-4">
//                   <i className={service.icon} />
//                 </IconButton>
//                 <Typography variant="h5" color="blue-gray" className="mb-2">
//                   {service.title}
//                 </Typography>
//                 <Typography>
//                   {service.description}
//                 </Typography>
//               </CardBody>
//             </Card>
//           ))}
//           <Link to={"/services"}>
//           <Button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition duration-300 mx-auto">
//            View Our Services
//           </Button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


import { Card, CardBody, Typography, IconButton, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "fas fa-fire-extinguisher",
    title: "Fire Fighting Systems",
    description:
      "Complete fire fighting solutions including hydrant systems, hose reels, and portable extinguishers designed to suppress and control fires effectively across industrial and commercial facilities.",
  },
  {
    icon: "fas fa-bell",
    title: "Fire Alarm Systems",
    description:
      "Advanced fire alarm systems with intelligent detection panels, manual call points, and audible/visual notification devices to ensure early warning and rapid emergency response.",
  },
  {
    icon: "fas fa-sensor",
    title: "Fire Detection Systems",
    description:
      "State-of-the-art smoke, heat, and flame detection systems utilizing optical, ionization, and multi-sensor technologies for reliable and early fire identification.",
  },
  {
    icon: "fas fa-water",
    title: "Fire Pumps",
    description:
      "High-capacity fire pump installations including electric, diesel, and jockey pumps engineered to deliver consistent water pressure for fire suppression networks.",
  },
  {
    icon: "fas fa-cloud",
    title: "High & Low Expansion Foam Systems",
    description:
      "Specialized foam-based suppression systems for high-risk environments such as fuel storage areas, aircraft hangars, and petrochemical plants using high and low expansion foam agents.",
  },
  {
    icon: "fas fa-shower",
    title: "Deluge Systems",
    description:
      "Open-head deluge fire protection systems designed for high-hazard areas requiring rapid and simultaneous water discharge to control fast-spreading fires.",
  },
  {
    icon: "fas fa-tint",
    title: "Fire Water Sprinkler Systems",
    description:
      "Automatic wet, dry, and pre-action sprinkler systems tailored for commercial, residential, and industrial buildings to provide continuous and reliable fire suppression.",
  },
  {
    icon: "fas fa-wind",
    title: "FM200 Clean Agent Systems",
    description:
      "Environmentally safe FM200 (HFC-227ea) clean agent suppression systems ideal for protecting sensitive equipment in data centers, server rooms, and electrical control rooms.",
  },
  {
    icon: "fas fa-utensils",
    title: "Kitchen Hood Fire Suppression Systems",
    description:
      "Wet chemical fire suppression systems specifically designed for commercial kitchen hoods, protecting cooking areas from grease fires with automatic detection and discharge.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="mt-6 hover:shadow-lg transition-shadow duration-300">
              <CardBody>
                <IconButton color="orange" className="mb-4">
                  <i className={service.icon} />
                </IconButton>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
          <Link to={"/services"}>
          <Button className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-800 transition duration-300 mx-auto">
           View Our Services
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
