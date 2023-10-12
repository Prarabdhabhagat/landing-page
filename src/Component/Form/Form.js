import React from "react";
import ContactUs from "./ContactUs/ContactUs.js";
import ContactForm from "./ContactForm/ContactForm.js";
import Navigation from "./Navigation/Navigation.js";

export default function Form() {
  return (
    <div className="max-w-[1280px] mx-auto">
      <Navigation />
      <ContactUs />
      <ContactForm />
    </div>
  );
}
