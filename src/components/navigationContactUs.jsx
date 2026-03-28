'use client'

import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Collapse, Typography, IconButton, Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const DIVISIONS_MENU = [
  {
    title: "ELECTRICAL",
    link: "/electrical-services",
    subMenu: []
  },
  {
    title: "LOW VOLTAGE SYSTEMS",
    link: "/low-voltage-systems",
    subMenu: []
  },
  {
    title: "PLUMPING",
    link: "/plumbing-services",
    subMenu: []
  },
  {
    title: "FIRE FIGHTING SYSTEM",
    link: "/fire-fighting-services",
    subMenu: []
  },
  {
    title: "FIRE ALARM SYSTEM",
    link: "/fire-alarm-services",
    subMenu: []
  },
  {
    title: "HVAC SYSTEM",
    link: "/hvac-services",
    subMenu: []
  },
];

function DivisionsMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <Menu>
      <MenuHandler>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Typography as="div" variant="small" className="font-normal cursor-pointer text-gray-300 hover:text-orange-600">
            OUR SERVICES
          </Typography>
        </motion.div>
      </MenuHandler>
      <MenuList className="p-1">
        {DIVISIONS_MENU.map((division, index) => (
          <Menu key={index} placement="right-start">
            <MenuHandler>
              <motion.div
                whileHover={{ backgroundColor: "#f3f4f6" }}
                transition={{ duration: 0.2 }}
              >
                <Link to={division.link}>
                  <MenuItem>{division.title}</MenuItem>
                </Link>
              </motion.div>
            </MenuHandler>
            <MenuList>
              <AnimatePresence>
                {division.subMenu.map((item, subIndex) => (
                  <motion.div
                    key={subIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, delay: subIndex * 0.05 }}
                  >
                    <MenuItem>
                      <Link to={item.path}>{item.name}</Link>
                    </MenuItem>
                  </motion.div>
                ))}
              </AnimatePresence>
            </MenuList>
          </Menu>
        ))}
      </MenuList>
    </Menu>
  );
}

function MobileDivisionsMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="pl-3"
    >
      <Typography variant="small" color="white" className="font-medium">
        OUR SERVICES
      </Typography>
      {DIVISIONS_MENU.map((division, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="pl-3 mt-1"
        >
          <Link to={division.link}>
            <Typography variant="small" color="white" className="font-medium">
              {division.title}
            </Typography>
          </Link>
          <ul className="pl-3">
            {division.subMenu.map((item, subIndex) => (
              <motion.li
                key={subIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: subIndex * 0.05 }}
              >
                <Link to={item.path}>
                  <Typography variant="small" color="white" className="font-normal">
                    {item.name}
                  </Typography>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar className="sticky top-0 z-50 max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-black">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-300">
        <Link to={"/"}>
                <motion.img
                  src="/images/A.png"
                  alt="ANC Logo"
                  width={300}
                  height={90}
                  className="md:h-16 w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
                </Link>
        <div className="hidden lg:block">
          <motion.ul
            className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link to={"/"} className="flex items-center text-gray-300 font-medium">
                  HOME
                </Link>
              </Typography>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link to={"/about-us"} className="flex items-center text-gray-300 hover:text-orange-600">
                  ABOUT US
                </Link>
              </Typography>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <DivisionsMenu />
              </Typography>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link to={"/projects"} className="flex items-center text-gray-300 hover:text-orange-600">
                  PROJECTS
                </Link>
              </Typography>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Typography
                as="div"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <Link to={"/contact-us"} className="flex items-center text-orange-600 hover:text-orange-900">
                  CONTACT US
                </Link>
              </Typography>
            </motion.li>
          </motion.ul>
        </div>
        <Link to={"/contact-us"}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="hidden lg:inline-block bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-900 transition duration-300">
              GET A QUOTE
            </Button>
          </motion.div>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fas fa-times" />
          ) : (
            <i className="fas fa-bars" />
          )}
        </IconButton>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Collapse open={isOpen}>
              <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <Link to={"/"} className="flex items-center text-gray-300 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                    HOME
                  </Link>
                </Typography>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <Link to={"/about-us"} className="flex items-center text-gray-300 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                    ABOUT US
                  </Link>
                </Typography>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <MobileDivisionsMenu />
                </Typography>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <Link to={"/projects"} className="flex items-center text-gray-300 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                    PROJECTS
                  </Link>
                </Typography>
                <Typography
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className="p-1 font-normal"
                >
                  <Link to={"/contact-us"} className="flex items-center text-orange-600 hover:text-orange-600" onClick={() => setIsOpen(false)}>
                    CONTACT US
                  </Link>
                </Typography>
              </ul>
              <Link to={"/contact-us"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="mb-2 bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-900 mt-4 transition duration-300">
                    GET A QUOTE
                  </Button>
                </motion.div>
              </Link>
            </Collapse>
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  )
}

