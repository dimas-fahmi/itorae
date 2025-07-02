import { Metadata } from "next";
import React from "react";
import LandingPageIndex from "./LandingPageIndex";

export const metadata: Metadata = {
  title: "Japanese & Italian Cuisine | ITORAE",
};

const LandingPage = () => {
  return <LandingPageIndex />;
};

export default LandingPage;
