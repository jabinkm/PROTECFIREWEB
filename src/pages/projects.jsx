import React, { useEffect, useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Navigation } from "../components/navigationProjects";
import { Footer } from "../components/footer";

// const categories = [
//   { id: "all", name: "ALL" },
//   { id: "insulation", name: "INSULATION & COATING" },
//   { id: "pipe", name: "PIPE COLD CUTTING" },
//   { id: "trading", name: "INDUSTRIAL TRADING" },
//   { id: "support", name: "SUPPORT SERVICES" },
// ];

const projects = [
  {
    id: 1,
    title: "SHEIKH KHALIFA CENTRAL HOSPITAL ",
    description: " FUJAIRAH",
    image: "/images/PROJECT1.jpg",

  },
  {
    id: 2,
    title: "EPC WORKS FOR CONTINUOUS BASALT FIBER PRODUCTION FACILITY ",
    description: " FUJAIRAH",
    image: "/images/PROJECT2.jpg",

  },
  {
    id: 3,
    title: "47 FLOWER SHOW ROOM ",
    description: " UMM AL QUWAIN",
    image: "/images/PROJECT3.jpg",

  },
  {
    id: 4,
    title: "EXPO 2020 - SERBIA PAVILION ",
    description: " DUBAI",
    image: "/images/PROJECT4.jpg",

  },
  {
    id: 5,
    title: "EXPO 2020 - KUWAIT PAVILION ",
    description: " DUBAI",
    image: "/images/PROJECT5.jpg",

  },
  {
    id: 6,
    title: "EXPO 2020 - INDONASIA PAVILION ",
    description: " DUBAI",
    image: "/images/PROJECT6.jpg",

  },
  {
    id: 7,
    title: "EXPO 2020 - GCC PAVILION ",
    description: " DUBAI",
    image: "/images/PROJECT7.jpg",

  },
  {
    id: 8,
    title: "CARS VEHICLE TESTING CENTRE ",
    description: " DUBAI",
    image: "/images/PROJECT8.jpg",

  },
  {
    id: 9,
    title: "JUMAIRAH GOLF ESTATE - PHASE 2 ",
    description: " JUMAIRAH",
    image: "/images/PROJECT9.jpg",

  },
  {
    id: 10,
    title: "COMMAND OF MILITARY WORKS ",
    description: " JAZEERA, RAK",
    image: "/images/PROJECT10.jpg",

  },
  {
    id: 11,
    title: "RAK MEDICAL & HEALTH SCIENCE UNIVERSITY ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT11.jpg",

  },
  {
    id: 12,
    title: "INDUSTRIAL WAREHOUSES @ MAFRAQ ",
    description: " ABU DHABI",
    image: "/images/PROJECT12.jpg",

  },
  {
    id: 13,
    title: "AL HOOR SCHOOL, DIBBA ",
    description: " FUJAIRAH",
    image: "/images/PROJECT13.jpg",

  },
  {
    id: 14,
    title: "AL MASAH SCHOOL, DIBBA ",
    description: " FUJAIRAH",
    image: "/images/PROJECT14.jpg",

  },
  {
    id: 15,
    title: "AL QIAAN PRIMARY SCHOOL ",
    description: " FUJAIRAH",
    image: "/images/PROJECT15.jpg",

  },
  {
    id: 16,
    title: "AL ASAMA'A BIN ALHARETH & SEC. SCHOOL ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT16.jpg",

  },
  {
    id: 17,
    title: "WADI ASFENI BASIC & SEC. SCHOOL ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT17.jpg",

  },
  {
    id: 18,
    title: "P1590- ADDITION, ALTERATION & REFURBISHMENT OF RAK MALL ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT18.jpg",

  },
  {
    id: 19,
    title: "G+3 PARK + 3 OFFICE + 9 TYPE FLOORS ",
    description: " FUJAIRAH",
    image: "/images/PROJECT19.jpg",

  },
  {
    id: 20,
    title: "AL HAMRA BEACH RESORT ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT20.jpg",

  },
  {
    id: 21,
    title: "2B+G+M+12+GYM BUILDING ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT21.jpg",

  },
  {
    id: 22,
    title: "HIGHER COLLEGE OF TECHNOLOGY ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT22.jpg",

  },
  {
    id: 23,
    title: "G+M+6 BUILDING ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT23.jpg",

  },
  {
    id: 24,
    title: "HIRA INDUSTRIES & G+2 LABOUR ACCOMMODATION ",
    description: " AL GHAIL, RAS AL KHAIMAH",
    image: "/images/PROJECT24.jpg",

  },
  {
    id: 25,
    title: "RAK BANK BUILDINGS AT AL DHAIT & DIGDAGA ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT25.jpg",

  },
  {
    id: 26,
    title: "RICHMOND(2000 GPM Horizontal Armstrong Pump) ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT26.jpg",

  },
  {
    id: 27,
    title: "HIRA INDUSTRIES (2000 GPM Vertical Pump) ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT27.jpg",

  },
  {
    id: 28,
    title: "EXTENSION OF PRODUCTION AREA (2500 GPM Horizontal Pump) ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT28.jpg",

  },
  {
    id: 29,
    title: "CONTINENTAL OIL (1500 GPM Horizontal Pump) ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT29.jpg",

  },
  {
    id: 30,
    title: "CONTINENTAL OIL ",
    description: " RAS AL KHAIMAH",
    image: "/images/PROJECT30.jpg",

  },
];

const projectData = [
  {
    year: "RUNNING",
    client: "UNION CONSULTANT ENGINEERS",
    projectName: "SHOWROOM + SHOPS + CARWASH (1 WAREHOUSE + SHOPS + LABOUR CAMP)",
    location: "FUJAIRAH",
    typeOfWork: "FULL MEP / FA/FF"
  },
  {
    year: "RUNNING",
    client: "AWTHAD",
    projectName: "G+M+6+4R BUILDING AWTHAD",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "RUNNING",
    client: "DELTA ENGINEERING CONSULTANT",
    projectName: "G+2+R BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },

  {
    year: "2024",
    client: "INTERNATIONAL ENGINEERING CENTER",
    projectName: "AG CARS VEHICLE TESTING & REGISTRATION CENTER",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2024",
    client: "BECKER INDUSTRIES",
    projectName: "BECKER INDUSTRIAL COATING LLC",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2024",
    client: "FAIZAL ABDULLA ESSA RASHEED",
    projectName: "G+M+4 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2024",
    client: "CAPITAL ENGINEERING CONSULTANCY LLC",
    projectName: "ETISALAT SOCIAL CENTRE BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2024",
    client: "ARABIAN COMPANY",
    projectName: "MEP WORKS FOR LOUVRE ABU DHABI OFFICE OPTIMIZATION",
    location: "AUH",
    typeOfWork: "ELE, HVAC, FAFF (FITOUT)"
  },

  {
    year: "2023",
    client: "TRAINING & DEVELOPMENT CENTER",
    projectName: "MOHAP TDC SHARJAH REFURBISHMENT PROJECT",
    location: "SHARJAH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2023",
    client: "DELTA CONSULTANTS",
    projectName: "47 FLOWER SHOW ROOM @ UMM AL QUWAIN",
    location: "UAQ",
    typeOfWork: "ELE"
  },
  {
    year: "2023",
    client: "MOZOON ENGINEERING CONSULTANTS",
    projectName: "EPC WORKS FOR CONTINUOUS BASALT FIBER (CBF) PRODUCTION FACILITY, FUJAIRAH, UAE",
    location: "FUJAIRAH",
    typeOfWork: "ELE"
  },
  {
    year: "2023",
    client: "SEAH STEEL UAE LLC",
    projectName: "EXISTING SEAH UAE STEEL PIPE MILL PROJECT",
    location: "AL GHAIL",
    typeOfWork: "FA/FF"
  },
  {
    year: "2021",
    client: "COMMAND OF MILITARY WORKS",
    projectName: "CONSTRUCTION OF FOOD STORAGE BUILDING IN ALAIN CMW - 2019-NO19",
    location: "AL AIN",
    typeOfWork: "FA/FF, ELE & PLB"
  },
  {
    year: "2021",
    client: "GOVERNMENT OF FUJAIRAH, MINISTRY OF PRESIDENTIAL AFFAIRS/CONSULTANT FOR DESIGN GROUP",
    projectName: "SHEIKH KHALIFA CENTRAL HOSPITAL, AL FUJAIRAH",
    location: "FUJAIRAH",
    typeOfWork: "ELE / HVAC"
  },
  {
    year: "2021",
    client: "DESIGN CONCEPTS CONSULTING ARCHITECTS & ENGINEERS",
    projectName: "P1590 - ADDITION, ALTERATION & REFURBISHMENT OF RAK MALL (G+2+F+R)",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2021",
    client: "SHARJAH CO-OPERATIVE SOCIETY",
    projectName: "SHARJAH CO-OPERATIVE SOCIETY - AL ZUBAIR BRANCH (LOT NO: 2196, AL ZUBAIR, BR SH)",
    location: "SHARJAH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2021",
    client: "KUWAITI / A2Z ARCHITECTURAL ENG. CONSULTANCIES",
    projectName: "EXPO 2020 - KUWAIT PAVILION",
    location: "DXB",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2021",
    client: "DESIGN HOUSE ENGINEERING CONSULTANCY",
    projectName: "EXPO 2020 - CONSTRUCTION OF UG + LG+1+ROOF GULF COOPERATION COUNCIL FOR THE COORDINATION OF THE GULF (GCC)",
    location: "DXB",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2021",
    client: "HGEC",
    projectName: "EXPO 2020 - REPUBLIC OF SERBIA PAVILION",
    location: "DXB",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2021",
    client: "M/s Investment Engineering Consultancy",
    projectName: "EXPO 2020 - P1767 - INDONESIA PAVILION",
    location: "DXB",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2020",
    client: "Command of Military Works",
    projectName: "Construction and Maintenance of Ghanoot Naval Base Officer's Accommodation – CM-4001",
    location: "AUH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2020",
    client: "Command of Military Works",
    projectName: "CM#18039-CO01- Construction of Administrative Building in SADR Camp",
    location: "AUH",
    typeOfWork: "FA/FF & MEP"
  },
  {
    year: "2020",
    client: "GEMS Winchester School",
    projectName: "GEMS Winchester School G+M+R Building (Phase II, Plot No. 200, Area Al Sharia 6, FUJ)",
    location: "FUJAIRAH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "Elite Design & Engineering Consultancy / Ministry of Education",
    projectName: "Al Qiaan Primary School – (Fujairah)",
    location: "FUJAIRAH",
    typeOfWork: "ELE/PLB/FA/FF"
  },
  {
    year: "2020",
    client: "International Design Consultant",
    projectName: "DIBBA EXPO SHOWROOM",
    location: "FUJAIRAH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "International Design Consultancy / Ministry of Education",
    projectName: "Al Asama’a Bin Alhareth Basic & Secondary – (RAK)",
    location: "RAK",
    typeOfWork: "ELE/PLB/FA/FF"
  },
  {
    year: "2020",
    client: "Elite Design & Engineering Consultancy / Ministry of Education",
    projectName: "Wadi Asifen Basic & Secondary – (RAK)",
    location: "RAK",
    typeOfWork: "ELE"
  },
  {
    year: "2020",
    client: "Khalifa University",
    projectName: "Khalifa University – Level 5",
    location: "AUH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "Al Zain Eng. Consultant",
    projectName: "B+G+M+4 Typ 4 Roof Building",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "Al Zain Eng. Consultant",
    projectName: "G+M+4 Typ Roof Building",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "Kayan Eng. Consultant",
    projectName: "G+M+3 Typ Roof Building",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2020",
    client: "International Engineering Consultancy",
    projectName: "Material Recovery Facility",
    location: "DXB",
    typeOfWork: "ELE/PLB/HVAC"
  },
  {
    year: "2020",
    client: "Consortium Consultant",
    projectName: "Proposed Warehouse at Plot No. TP040312, Techno Park, Dubai, UAE",
    location: "DXB",
    typeOfWork: "ELE/PLB/HVAC"
  },
  {
    year: "2020",
    client: "Knight Frank Real Estate",
    projectName: "CATA Fitout (Floor 3 & 3, Irem Island)",
    location: "AUH",
    typeOfWork: "ELE/HVAC"
  },
  {
    year: "2020",
    client: "Federal Electricity & Water Authority",
    projectName: "FEWA Office Building (G+5), Ajman – Fitout Works",
    location: "AJMAN",
    typeOfWork: "ELE/PLB/HVAC"
  },
  {
    year: "2020",
    client: "Ministry of Infrastructure Development",
    projectName: "Construction of General Directorate of Residency and Foreigners Affairs (Grade A Building – UAQ)",
    location: "UAQ",
    typeOfWork: "ELE/PLU"
  },
  {
    year: "2018",
    client: "Command of Military Works",
    projectName: "Military Works",
    location: "JEBAL - ALI",
    typeOfWork: "HVAC"
  },
  {
    year: "2018",
    client: "Command of Military Works",
    projectName: "CMW Command of Military Works",
    location: "FUJAIRAH",
    typeOfWork: "ELE/HVAC"
  },
  {
    year: "2018",
    client: "Hamdan Abdullah Khamis Al Mehrzi",
    projectName: "Industrial Warehouses @ Mafraq, Abu Dhabi",
    location: "AUH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Golden Square Engg. Consultant",
    projectName: "Cars Vehicle Testing Centre",
    location: "DUBAI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Desert",
    projectName: "B+G+10",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Concept Consulting Engineers",
    projectName: "G+3 Park + 3 Office + 9 Typ Floors",
    location: "FUJAIRAH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Emirates",
    projectName: "G + 9 Building – J-036",
    location: "FUJAIRAH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "P.S.E",
    projectName: "Arjaan Rotana Hotel Interior Modification & Upgrade Phase One, Dubai Media City",
    location: "DUBAI",
    typeOfWork: "FULL MEP (fitout jobs)"
  },
  {
    year: "2018",
    client: "Danube",
    projectName: "Danube Properties Main Office, Sheikh Zayed Road – Dubai",
    location: "DUBAI",
    typeOfWork: "FULL MEP / HVAC (fitout jobs)"
  },
  {
    year: "2018",
    client: "Bluehaus Engineering",
    projectName: "Kaya Al Barsha Clinic",
    location: "DUBAI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Al Hamrah Real Estate Development",
    projectName: "Ritz Carlton Beach Resort & Reception Building",
    location: "RAK",
    typeOfWork: "FULL MEP / HVAC / FA/FF"
  },
  {
    year: "2018",
    client: "International Engineering Center Consultant Engineering",
    projectName: "G+M+3 Building, Plot Number 315040201",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "UTICO Consultancy FZ LLC",
    projectName: "IWPP at Khor Khwair",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2018",
    client: "Ministry of Education",
    projectName: "Rama Primary & Secondary School and Al Taleaa Primary & Secondary School in Al Ain",
    location: "AL AIN",
    typeOfWork: "MEP"
  },
  {
    year: "2018",
    client: "Al Zein",
    projectName: "Casablanca Hotel, G+5 Typical Floor",
    location: "RAK",
    typeOfWork: "HVAC / FAFF"
  },
  {
    year: "2018",
    client: "Ministry of Education",
    projectName: "Refurbishment of Ground to Level 3 of ADEC HQ Building in Al Ain",
    location: "AUH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Ministry of Education",
    projectName: "Al Madam Kindergarten, Area Kalba, Sharjah",
    location: "SHARJAH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Ministry of Education",
    projectName: "Al Nafais Kindergarten",
    location: "SHARJAH",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Milestone Engineering Consultancy",
    projectName: "Canadian Carton",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Capital Consultancy",
    projectName: "Concept Flexible Packing Proposed Shed & G+2 Labour Accommodation",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Al Zein",
    projectName: "Vega Middle East",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Middle East",
    projectName: "Met Fab",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Ministry of Interior",
    projectName: "Operation & Control Room at RAK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Capital Engineering Consultant",
    projectName: "Proposed BMW Showroom G+M+Mezz",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2018",
    client: "Abu Dhabi Company for On Shore Oil Operation",
    projectName: "ADCO Leased Offices in Shining Tower",
    location: "AUH",
    typeOfWork: "ELE / HVAC (fitout jobs)"
  },
  {
    year: "2018",
    client: "Ministry of Public Works",
    projectName: "86 National Housing Villas Umm Al Quwain",
    location: "UAQ",
    typeOfWork: "ELE/PLU"
  },
  {
    year: "2016",
    client: "ASCON",
    projectName: "JUMAIRAH GOLF ESTATE – PHASE 2",
    location: "DUBAI",
    typeOfWork: "MEP"
  },
  {
    year: "2016",
    client: "ACCIONA",
    projectName: "WATER DESALINATION PLANT",
    location: "FUJAIRAH",
    typeOfWork: "FA/FF / HVAC"
  },
  {
    year: "2016",
    client: "GULF CO. FOR CONT. & GENERAL ENTERPRISES",
    projectName: "SITE OFFICE & STUDENTS WAITING AREA RAK WOMENS COLLEGE",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "AL SHAER ELECTROMECHANICAL",
    projectName: "TULIP HOTEL",
    location: "RAK", 
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "GK WIRE",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "RICHMOND",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "AL NUAIMI GROUP",
    projectName: "RAK MEDICAL UNIVERSITY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "AL ENSHA ELECTROMECHANICAL",
    projectName: "COMMERCIAL BUILDING G+M (111 SHOP)",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "EHE",
    projectName: "HIRA INDUSTRIES PROPOSED MANUFACTURING PLANT PLOT 309-311",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "EHE",
    projectName: "HIRA INDUSTRIES PROPOSED MANUFACTURING PLANT PLOT 118-123 & G + 2 LABOUR ACCOMMODATION",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "EHE",
    projectName: "HIRA INDUSTRIES PROPOSED MANUFACTURING PLANT PLOT 307",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "PROMINENT STAR",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "NTEGRATED INDUSTRIES LLC",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "IQBAL CONTRACTING CO. L.L.C",
    projectName: "PROPOSED G+2 OBAIDULLA DIALYSIS HOSPITAL RAK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "EMIRATES HEAVY ENGINEERING",
    projectName: "FACTORY SHED , OFFICE BUILDING , ACCOMODATION AL GHAIL RAK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "EMIRATES HEAVY ENGINEERING",
    projectName: "MANUFACTURING PLANT, SHED & ACCOMODATION",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "KHALEEJ RUBBER PROPOSED SHED & LOBOUR ACCOMODATION",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "PROTEC FIRE",
    projectName: "RAK PLASTIC FACTORY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "AL KARMEL BUILDING CONT.LLC",
    projectName: "EXTENSION OF PRODUCTION AREA ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "GULF CONTRACTING",
    projectName: "ASWAQ SUPER MARKET ",
    location: "MASAFI",
    typeOfWork: "FA/FF"
  },
  {
    year: "2016",
    client: "AL KARMEL BUILDING CONT.LLC",
    projectName: "UTICO – IWPP3",
    location: "RAK",
    typeOfWork: "HVAC"
  },
  {
    year: "2016",
    client: "AL KARMEL BUILDING CONT.LLC",
    projectName: "UTICO -  SUBSTATION – 2 & 3",
    location: "RAK",
    typeOfWork: "HVAC"
  },
  {
    year: "2016",
    client: "ASIAN BUILDING CONT. LLC ",
    projectName: "CONTINENTAL OIL",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "ASIAN BUILDING CONT. LLC ",
    projectName: "ABC  INDUSTRIES PROPOSED SHED 3&4",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "ASIAN BUILDING CONT. LLC ",
    projectName: "ABC INDUSTRIES PROPOSED SHED 5 & G+2 LABOUR ACCOMMODATION",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "ASIAN BUILDING CONT. LLC ",
    projectName: "PROPOSED WAREHOUSE, SERVICE BLOCK & COMPOUND WALL",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "MAJESTIC MOUNTAIN BUILDING CONSTRUCTION",
    projectName: "PROPOSED FACTORY, LABOUR ACCOMODATION & SERVICE BLOCK (INFRATECH)",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "AL KARMEL BUILDING CONTRACTING",
    projectName: "RAK BANK BUILDINGS AT AL DHAIT & DIGDAGA",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "AL NOOR CONTRACTING LLC",
    projectName: "BUILDING - E- AMERICAN UNIVERSITY",
    location: "RAK",
    typeOfWork: "ELE / PLB"
  },
  {
    year: "2014",
    client: "KHALIFA AL FAHAD CONSULTANT",
    projectName: "COMMAND OF MILITARY WORKS",
    location: "AL JAZEERA, RAK",
    typeOfWork: "FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "AL HILL INTERNATIONAL",
    projectName: "INNOVATION CENTRE FOR BOROUGE",
    location: "ABU DHABI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2014",
    client: "GCGI",
    projectName: "ABU DHABI JUDICIAL DEPARTMENT HEAD QUARTERS",
    location: "ABU DHABI",
    typeOfWork: "ELE / HVAC"
  },
  {
    year: "2014",
    client: "GULF COMMERCIAL INT GROUP",
    projectName: "ABU DHABI EDUCATION COUNCIL (ADEC)",
    location: "ABU DHABI",
    typeOfWork: "ELE"
  },
  {
    year: "",
    client: "TOWER TECH CONTRACTING",
    projectName: "PROPOSED 10 NOS WORKER ACCOMODATION BLDG",
    location: "BARACA, ABUDHABI",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "ASCON",
    projectName: "JUMAIRAH GOLF ESTATE  PHASE A CLUB HOUSE",
    location: "DUBAI",
    typeOfWork: "MEP"
  },
  {
    year: "2014",
    client: "PRO ARC ARCHITECS",
    projectName: "SHAMS 3 JBR HOTEL",
    location: "DUBAI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2016",
    client: "FUTURE HOPE ELECTRO MECHANICAL WORKS LLC",
    projectName: "LE MERIDIAN AIRPORT HOTEL",
    location: "DUBAI",
    typeOfWork: "ELE"
  },
  {
    year: "2014",
    client: "AL KARMEL BUILDING",
    projectName: "SUBSTATION 2 & SUBSTATION 3",
    location: "AL JAZEERA, RAK",
    typeOfWork: "ELE / FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "AL KARMEL BUILDING",
    projectName: "UTICO IWPP POWER PLANT NO : 3",
    location: "AL JAZEERA, RAK",
    typeOfWork: "ELE / FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "AL KARMEL BUILDING",
    projectName: "WAREHOUSE & PRODUCTION AREA PHASE 3 ",
    location: "AL JAZEERA, RAK",
    typeOfWork: "ELE / FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "ABC INDUSTRIES LLC",
    projectName: "PROPOSED INK STORE 1 & SHED 2 OFFICE BLOCK GROUND ONLY LABOUR ACCOMODATION SERVICE BLOCK, SECURITYBLDG & PRAYER HALL",
    location: "AL GHAIL, RAK",
    typeOfWork: "ELE / FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "ABDULLAH KHAMES AHMAD MAHARSI",
    projectName: "PRO. RESIDENTIAL & COMMERCIAL BLDG, G+5 PLOT 262",
    location: "MASAFI, FUJAIRAH",
    typeOfWork: "ELE / FA/FF / HVAC"
  },
  {
    year: "2014",
    client: "UTICO FZE",
    projectName: "DEWA AL YASSAT ISLAND",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2014",
    client: "PARKWAY INTERNATIONAL",
    projectName: "POLICE HEAD QUARTERS",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "ABANOS",
    projectName: "RAK WOMENS COLLEGE( EXTENSION )",
    location: "RAK",
    typeOfWork: "ELE / FA/FF "
  },
  {
    year: "2014",
    client: "MIDDLE EAST CONSULTANT",
    projectName: "MIDDLE EAST MANUFACTURING ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "NESTO CENTRE",
    projectName: "SUPER MARKET ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "EW MODEL BUILDING CONTRACT",
    projectName: "PROPOSED WORKSHOP & LABOUR CAMP",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "AFA ELECTRO MECHANICAL",
    projectName: "BZE WEDDING HALL, PLOT NO : 607014001",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "STAR CEMENT CO LLC",
    projectName: "WAREHOUSE 1",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "STAR CEMENT CO LLC",
    projectName: "WAREHOUSE 2",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "",
    client: "CEMENTECH",
    projectName: "PROPER  ROLLER MILL UNIT HOUSE PLAN UNIT",
    location: "AL JAZEERA, RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "HAFIZ ELECTRO MECHANICAL",
    projectName: "FACTORY SHED ACCOMODATION SERVICE BLOCK",
    location: "AL JAZEERA, RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "MAICO GULF LLC",
    projectName: "WAREHOUSE OFFICE EXTENSION",
    location: "AL JAZEERA, RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2014",
    client: "PRO ARC ARCHITECS",
    projectName: "COMMUNITY MALL SHOPPING  CENTRE",
    location: "AJMAN",
    typeOfWork: "MEP"
  },
  {
    year: "2014",
    client: "SKYLINE CONTRACTING",
    projectName: "11 NATIONAL HOUSES, MINISTRY OF PUBLIC WORKS",
    location: "ISFAI, FUJAIRAH",
    typeOfWork: "ELE/PLB"
  },
  {
    year: "2012",
    client: "ZENATH REAL ESTATE",
    projectName: "G+M+DIPSHOWROOM",
    location: "ABU DHABI",
    typeOfWork: "FA/FF"
  },
  {
    year: "2012",
    client: "ADNOC",
    projectName: "RUWAIS HOUSING COMPLEX (G+5+TYPICAL)",
    location: "ABU DHABI",
    typeOfWork: "ELE / FA/FF"
  },
  {
    year: "2012",
    client: "AL DHAFRA AIR BASE",
    projectName: "PHANTOM NORTH BILLETS",
    location: "ABU DHABI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "ATKINS",
    projectName: "CENTRAL MARKET REDEVELOPMENT TOWER T2",
    location: "ABU DHABI",
    typeOfWork: "ELE"
  },
  {
    year: "2012",
    client: "MAHAMOD AHMED MAHAMOD",
    projectName: "MUSHRIF VILLA (B+G+2F)",
    location: "ABU DHABI",
    typeOfWork: "ELE"
  },
  {
    year: "2012",
    client: "AMTHAL ENGINEERING CONSULTANT",
    projectName: "BEDA ZAYED (B+G+2F)",
    location: "ABU DHABI",
    typeOfWork: "ELE"
  },
  {
    year: "2012",
    client: "AL NKHEEL CONTRACTING",
    projectName: "G+1 VILLA PROJECT, PALM JUMAIRAH ",
    location: "DUBAI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "GULF AGENCY COMPANY",
    projectName: "GAC WAREHOUSE CDC 4, JABEL ALI",
    location: "DUBAI",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "ZENATH REAL ESTATE",
    projectName: "G+3STAFF & LABOUR ACCO, AT DIP",
    location: "DUBAI",
    typeOfWork: "FA/FF"
  },
  {
    year: "2012",
    client: "ADNOC",
    projectName: "DUBAI WATER FRONT",
    location: "DUBAI",
    typeOfWork: "ELE"
  },
  {
    year: "2012",
    client: "DUBAI MUNICIPALITY",
    projectName: "WOMEN ASSOCIATION, HATTA",
    location: "DUBAI",
    typeOfWork: "FA/FF"
  },
  {
    year: "2012",
    client: "HOME OF ARCHITECTURE",
    projectName: "KNUAF DRYWALL SYSTEMS",
    location: "RAK",
    typeOfWork: "ELE / FA/FF"
  },
  {
    year: "",
    client: "ADNAN SAFFARINI",
    projectName: "EMKE GROUP-RAK MALL Additional works",
    location: "RAK",
    typeOfWork: "ELE / FA/FF"
  },
  {
    year: "2012",
    client: "AL BONIAN ENGINEERING CONSULTANT",
    projectName: "AL RABWA BUILDING CON.(Inter Coil Factory) ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2012",
    client: "CORPERATE ENGINEERING CONSULTANT",
    projectName: "STREIGHT SECURITY VEHICLES",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "DIVAN ENGINEEERING CONSULTANT",
    projectName: "HIGHER COLLEGE OF TECHNOLOGY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "INTEGRATED ENGINEERING CONSULTANT",
    projectName: "LIMA HEAVY INDUSTRIES LLC ADDL WORK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "AL MANZIL ENGINEERING CONSULTANT",
    projectName: "DANUBE ADDL WORK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "CHAULA ENGINEERING CONSULTANT",
    projectName: "HIRA INDUSTRIES",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "HOME OF ARCHITECTURE",
    projectName: "AL WADI INTERIOR DESIGN",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "DAR AL EMAR",
    projectName: "B+G+2+ROOF COMPLEX -3 NOS",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "MIDDLE EAST ENGINEERING CONSULTANT",
    projectName: "SPINNEYS, AL GHAYL",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "AL HESN ENGINEERING CONSULTANT",
    projectName: "G+3+2+16 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "GULF ENGINEERING GROUP CONSULTANT",
    projectName: "G+M SHOWROOM",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "ZEIN CONSULTANT",
    projectName: "G+M+2 FLOOR",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "FALCON GENERAL CONTRACTING",
    projectName: "G+4 RESIDENTIAL BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "ENGR. ADNAN SAFFARINI CONSULTANT",
    projectName: "2B+G+M+6+H.C BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "MIDDLE EAST ENGINEERING CONSULTANT",
    projectName: "MANSOR SAXON FACTORY SHED SPRINKLER ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
   {
    year: "2012",
    client: "AL HASHEMI CONSULTANT",
    projectName: "+4 RESIDENTIAL BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2012",
    client: "ISLAMIC BUILDING CONT.",
    projectName: "12 NATIONAL HOUSE",
    location: "FUJAIRAH",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "MIDDLE EAST ENGINEERING CONSULTANT",
    projectName: "EURO SYSTEM ADD. WORK",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "HOME OF ARCHITECTURE",
    projectName: "QUANTUM INDUSTRIES",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2012",
    client: "WINNER ENG. CONSULTANTS",
    projectName: "B+G+S+12  Hospital Building for Zulekha Health Care Group @ Al Sharjah",
    location: "SHARJAH",
    typeOfWork: "Testing and Commissioning and Final handing over of Nurse Callsystem, BMS system & Fire alarm system. Snagging, T&C of Electrical system."
  },
  {
    year: "2012",
    client: "ADNAN SAFFARINI",
    projectName: "RAK MALL SHOPS VARIATION WORKS",
    location: "RAK",
    typeOfWork: "ELE"
  },
  {
    year: "2010",
    client: "MIDDLE EAST CONSULTANT",
    projectName: "MANSOR SAXON PRO. FACTORY & OFFICE 3 ",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "BECKER INDUSTRIES",
    projectName: "BECKER INDUSTRIES",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "BEST ENGINEERING CONSULTANT",
    projectName: "AKSHARA ELECTROMECHANICAL",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "AL MANZIL ENGINEERING CONSULTANT",
    projectName: "D. K CONTRACTING (DANUBE)",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "BEST ENGINEERING CONSULTANT",
    projectName: "FACTORY PLOT NO. 2, 32 BLOCK #2",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "INTERNATIONAL ENGINEERING CONSLT.",
    projectName: "MPH CHAMBER OF COMMERCE",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "HOME OF ARCHITECTURE",
    projectName: "RAK INVESTMENT AUTHORITY WH #14",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "AL MANZIL ENGINEERING CONSULTANT",
    projectName: "DANUBE BUILDING MATERIALS",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "HOME OF ARCHITECTURE",
    projectName: "RAK MEDIA CITY ADD. WORK",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "ARC ENGINEERING CONSULTANT",
    projectName: "AL NAMARIQ GAS",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "CAPITAL ENGINEERING CONSULTANT",
    projectName: "HITACHI PLANT TECH.",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2010",
    client: "AL BONIAN ENGINEERING CONSULT",
    projectName: "AL HAMRA SHIPPING & SHIP MAINTENANCE,JAZEERA PORT",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2010",
    client: "MIDDLE EAST CONSULTANT",
    projectName: "EURO SYSTEM PROP. FACTORY, OFFICE & ACCO",
    location: "RAK",
    typeOfWork: "FULL MEP"
  },
  {
    year: "2009",
    client: "ADNAN SAFFARINI",
    projectName: "RAK MALL",
    location: "RAK",
    typeOfWork: "ELE / FA/FF"
  },
  {
    year: "2009",
    client: "SCHUSTER PECHTOID",
    projectName: "BANYAN TREE RESORT FOR RAKEEN",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "ICC",
    projectName: "LIMA HEAVY INDUSTRIES LLC",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "HOME OF ARCHITECT",
    projectName: "AL HAMRA BEACH RESORT",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "ELITE ENGINEERING",
    projectName: "2B+G+M+12+GYM BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "CAPITAL ENGINEERING",
    projectName: "HIRA INDUSTRIES",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "HOME OF ARCHITECT",
    projectName: "RAKIA WAREHOUSE 18, 19",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "HOME OF ARCHITECT",
    projectName: "RAKIA WAREHOUSE 8, 9",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "CAPITAL ENGINEERING",
    projectName: "AIR CONFLEX INDUSTRY LLC",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "DESIGN ENGINEERING",
    projectName: "G+M+6 PLOT NO. 450/ML",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "MICRO ENGINEERING",
    projectName: "G+M+6 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "DESIGN ENGINEERING",
    projectName: "G+M+6 PLOT NO 317/ML",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "COSULTING ENGINEERING",
    projectName: "YASMINE VILLAGE NO 2",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "MANSOR SAXON FACTORY & ACCOM",
    projectName: "MIDDLE EAST COSULTANT",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "AL ZAIN ENGINEERING",
    projectName: "ASNANI STEEL FACTORY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "AL BONIAN",
    projectName: "INTERLOCK FACTORY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "AL QASER ENGINEERING",
    projectName: "RESIDENTIAL BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "HOME OF ARCHITECT",
    projectName: "RAKIA WAREHOUSES 2,3,8.",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2009",
    client: "HOME OF ARCHITECT",
    projectName: "USTOMS CLEARANCE OFFICE",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "XPERT ENGINEERING",
    projectName: "MED. UNIVERSITY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "CONSULTING ENGINEERING",
    projectName: "STAFF ACCO. BLDG G+11 (5, 3B)",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "CONSULTING ENGINEERING",
    projectName: "CHAMBER OF COMMERCE BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "HOME OF ARCHITECT",
    projectName: "RAKIA WAREHOUSE 1,2,3",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "HOME OF ARCHITECT",
    projectName: "RAKIA WAREHOUSE 4, 5",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "MODEL ENGINEERING",
    projectName: "RUBBER FACTORY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "MIDDLE EAST CONSULTANT",
    projectName: "V-TEC FACTORY",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "ABRA AL EMARAT",
    projectName: "G+4 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "MODEL ENGINEERING",
    projectName: "G+6 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "TERNATIONAL ENGINEERING",
    projectName: "HANDICAPPED HOSPITAL",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "JUMA AL QABOOEI",
    projectName: "AYSHA WEDDING HALL",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "INTERNATIONAL ENGINEERING",
    projectName: "YOUNG HWA",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "JUMA AL QABOOEI",
    projectName: "STYLE BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "MIDDLE EAST CONSULTANT",
    projectName: "LINK MIDDLE EAST",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
  {
    year: "2008",
    client: "ABRA AL EMARAT",
    projectName: "G+6 BUILDING",
    location: "RAK",
    typeOfWork: "FA/FF"
  },
];

const Input = ({ ...props }) => (
  <input
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
);

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.type === activeCategory);

  const [searchTerm, setSearchTerm] = useState("");
  const [displayData, setDisplayData] = useState(projectData);
  const [visibleData, setVisibleData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const filtered = projectData.filter((project) =>
      Object.values(project).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setDisplayData(filtered);
    setCurrentIndex(0);
  }, [searchTerm]);

  useEffect(() => {
    setVisibleData(displayData.slice(0, currentIndex + itemsPerPage));
  }, [displayData, currentIndex]);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (
      scrollHeight - scrollTop <= clientHeight * 1.5 &&
      visibleData.length < displayData.length
    ) {
      setCurrentIndex((prev) => prev + itemsPerPage);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen">
      <motion.div
        className="min-h-screen"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Navigation />
        {/* Hero Section */}
        <motion.div
          className="relative h-[500px] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative h-[500px] bg-black">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/project.jpg')",
              }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-evenly text-white/80"
              initial={{ opacity: 10, x: 200 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ duration: 3 }}
            >
              <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
                <Typography
                  variant="h1"
                  className="text-white text-5xl font-bold"
                >
                  PROJECTS
                </Typography>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        {/* <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 duration-300">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "filled" : "outlined"
                  }
                  color={activeCategory === category.id ? "red" : "gray"}
                  className="rounded-full"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Projects Grid */}

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {project.title}
                  : 
                  {project.description}
                  {/* <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button color="white" variant="outlined" size="lg">
                    View Project
                  </Button>
                </div> */}
                </div>
                {/* <div className="mt-4">
                <Typography variant="h5" className="mb-2">
                  {project.title}
                </Typography>
                <Typography color="gray" className="mb-2">
                  {project.description}
                </Typography>
                <div className="flex gap-2">
                  {project.categories.map((category, index) => (
                    <Typography
                      key={index}
                      variant="small"
                      color="gray"
                      className="italic"
                    >
                      {category}
                      {index < project.categories.length - 1 && ", "}
                    </Typography>
                  ))}
                </div>
              </div> */}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-[90%] mx-auto mt-16"
        >
          <div className="flex items-center gap-2 mb-4 max-w-sm">
            <Search className="w-5 h-5 text-gray-500" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
            <div
              className="overflow-y-auto max-h-[700px]"
              onScroll={handleScroll}
            >
              <table className="w-full">
                <thead className="bg-black text-white sticky top-0">
                  <tr>
                    <th className="text-left p-3 font-bold">YEAR</th>
                    <th className="text-left p-3 font-bold">CLIENT</th>
                    <th className="text-left p-3 font-bold">PROJECT NAME</th>
                    <th className="text-left p-3 font-bold">LOCATION</th>
                    <th className="text-left p-3 font-bold">TYPE OF WORK</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleData.map((project, index) => (
                    <motion.tr
                      key={`${project.year}-${project.projectName}-${index}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="p-3 font-medium">{project.year}</td>
                      <td className="p-3">{project.client}</td>
                      <td className="p-3">{project.projectName}</td>
                      <td className="p-3">{project.location}</td>
                      <td className="p-3">{project.typeOfWork}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <Footer />
      </motion.div>
    </div>
  );
}
