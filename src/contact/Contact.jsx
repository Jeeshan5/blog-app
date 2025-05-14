import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
import "./contact.css";
import icon from "../assets/icon.png";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "Jeeshan",
//           from_email: form.email,
//           to_email: "jeeme1004@gmail.com",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           alert("Thank you. I will get back to you as soon as possible.");
//           setForm({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           alert("Oops, something went wrong. Please try again.");
//         }
//       );
//   };
  };

  return (
   <div className="contactWrapper">
  <div className="contactContainer">
    <p className="contactSubtitle">
      Search with ‘Digital Marketing Near Me’ and Find Us
    </p>
    <h2 className="contactTitle">Contact Me</h2>
    <form ref={formRef} onSubmit={handleSubmit} className="contactForm">
      <label>
        <span>Your Name</span>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </label>
      <label>
        <span>Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </label>
      <label>
        <span>Your Message</span>
        <textarea
          rows="6"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here"
          required
        />
      </label>
      <button type="submit" className="submitBtn">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  </div>

  {/* Logo shown only on large screens */}
  <div className="logoSection">
    <img src={icon} alt="Logo" className="contactLogo" />
  </div>
</div>

  );
};

export default Contact;