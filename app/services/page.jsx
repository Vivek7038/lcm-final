"use client";
import { GiRotaryPhone } from "react-icons/gi";
import React, { useState } from "react";
import Image from "next/image";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { FaqData, data } from "@/constants/data";
import { useContext } from "react";
import { SelectedServiceContext } from "@/provider/ServicesProvider.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carosole from "@/components/carosole";

const Page = () => {
  const { selectedService, setSelectedService } = useContext(
    SelectedServiceContext
  );

  const handleClick = (index) => {
    setSelectedService(data[index]);
  };
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };
  return (
    <div className="w-[100dvw] h-auto min-h-[100dvh] flex-col  relative dark:bg-dark_bg overflow-y-auto">
      <Carosole />

      {/*  seperator*/}
      <div className="flex flex-col px-5 md:px-20 w-[100dvw] h-auto overflow-y-auto">
        <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 items-start pt-[10dvh]">
          <div className="w-full h-auto md:w-[70%] ">
            <Image
              width={1000}
              height={600}
              src={selectedService.img}
              alt="banner"
              className="object-cover w-full h-[600px] border rounded-md"
            />
          </div>
          <div className="bg-[#F4F4F4] w-full md:w-[40%] border rounded-lg flex flex-col h-fit min-h-full max-h-fit pb-2 dark:bg-black dark:text-white">
            <h1 className="text-[16px] font-bold px-4 py-8">All Serivces</h1>
            <div className="px-8 flex flex-col gap-y-2 py-2">
              {data.map((item, index) => (
                <div
                  className="flex flex-row justify-between gap-x-2 max-w-70  border-black border-[2px] p-3 cursor-pointer dark:bg-[#2C2C2C] dark:text-white"
                  key={index}
                  onClick={() => handleClick(index)}
                >
                  <h1 className="font-bold">{item.name}</h1>
                  <p
                    className="cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <KeyboardArrowRightIcon />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-y-8 gap-x-5 pt-20 dark:text-white">
          <div className="w-full h-100 md:w-[70%]">
            <h1 className="md:text-6xl text-4xl font-bold py-10">Overview</h1>
            <p className="text-justify ">{selectedService.desc}</p>
          </div>
          <div className="bg-black md:w-[40%] border rounded-lg flex flex-col h-fit min-h-full md:min-h-[300px]  pb-2 justify-between ">
            <div className="ml-auto mr-auto flex mt-4 items-center justify-center w-12 h-12 bg-white rounded-full">
              <GiRotaryPhone className="text-black w-6 h-6 dark:light_txt" />
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">Best Logistics services</p>
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">+91 93424 29282</p>
            </div>
            <div className="mx-auto max-h-50 py-3">
              <p className="text-lg text-white ">Call us any time</p>
            </div>
          </div>
        </div>

        {/* faq section */}

        <div className="flex flex-col justify-start w-full md:max-w-[60%] py-10 dark:text-white">
          <h1 className="md:text-6xl text-4xl  font-bold">FAQ</h1>
          <p className="w-full md:max-w-[90%] py-7">
            All commonly asked questions answered here .
          </p>

          <div className="flex flex-col gap-y-1">
            {FaqData.map((item, index) => (
              <Accordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{
                        color:
                          expanded === `panel${index}` ? "white" : "initial",
                      }}
                    />
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  style={{
                    backgroundColor:
                      expanded === `panel${index}` ? "black" : "white",
                    borderBottom: "1px solid #ccc",
                    color: expanded === `panel${index}` ? "white" : "initial",
                    padding: "10px", // Add additional styles as needed
                  }}
                >
                  {item.ques}
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "10px", // Add additional styles as needed
                  }}
                >
                  {item.ans}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
