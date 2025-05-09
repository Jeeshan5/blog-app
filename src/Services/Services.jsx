import React from "react";
import "./Services.css";

const services = [
  {
    title: "Web Development",
    description: "We build fast, responsive, and scalable websites using the latest technologies."
  },
  {
    title: "UI/UX Design",
    description: "We design clean and modern interfaces that enhance user experience."
  },
  {
    title: "SEO Optimization",
    description: "We help your website rank higher in search engine results with proven techniques."
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
