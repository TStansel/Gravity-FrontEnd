import React from "react";
import SlackIntegration from "../components/AddToSlack";
import ScrollToTop from "../components/shared/ScrollToTop";


const AddToSlack = () => {
  return (
    <>
      <ScrollToTop/>
      <SlackIntegration/>
    </>
  );
};

export default AddToSlack;
