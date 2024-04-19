"use client";

import { data } from "@/constants/data";
import React, { createContext, useState } from "react";
// import { data } from "../data";
export const SelectedServiceContext = createContext();

export const SelectedServiceProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState(data[0]); // Assuming data is defined somewhere

  return (
    <SelectedServiceContext.Provider
      value={{ selectedService, setSelectedService }}
    >
      {children}
    </SelectedServiceContext.Provider>
  );
};
