import React from "react";
import SlackIntegration from "../components/AddToSlack";
import ScrollToTop from "../components/ScrollToTop";


const AddToSlack = () => {
  return (
    <>
      <ScrollToTop/>
      <SlackIntegration/>
    </>
  );
};

export default AddToSlack;
