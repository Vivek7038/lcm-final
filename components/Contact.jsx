"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email using EmailJS
    emailjs
      .send(
        "service_bbv5ctd",
        "template_rzcs0tk",
        formData,
        "cYDeWt6ldWF65SpZK"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          // Reset the form after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send email:", error);
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "xl:w-[100%] md:w-[80%] md:ml-6 flex flex-col xl:gap-10 md:gap-6"
      }
    >
      <div className={"grid grid-cols-2 gap-4"}>
        <label>
          First name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={"First name"}
            className={
              "pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%] text-black"
            }
          />
        </label>
        <label>
          Last name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={"Last name"}
            className={
              "pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%] text-black"
            }
          />
        </label>
      </div>
      <div>
        <label>
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={"Email address"}
            className={
              "pl-4 border-0 outline-0 h-12 rounded-xl bg-gray-200 w-[100%] text-black"
            }
          />
        </label>
      </div>
      <div>
        <label>
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={"Leave a message"}
            className={
              "pl-4 border-0 outline-0 h-28 rounded-xl bg-gray-200 w-[100%] text-black"
            }
          />
        </label>
      </div>
      <button
        type="submit"
        className={
          "mt-4 md:mt-0 outline-0 border-2 h-12 md:border-black md:dark:border-white border-b-white border-solid rounded-xl mb-8"
        }
      >
        Send
      </button>
    </form>
  );
};

export default Contact;
