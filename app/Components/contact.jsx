"use client";

import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    alert("form submitted");

    setSubmitted(true);
    console.log(formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <main className="max-w-5xl w-full bg-slate-100 mt-5 rounded-lg border shadow-md p-10">
      <h2 className="text-center text-3xl mb-4 text-slate-500">Contact</h2>
      {submitted ? (
        <p>Thanks for the message!</p>
      ) : (
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="p-2 w-full rounded-lg shadow-inner border"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="p-2 w-full rounded-lg shadow-inner border"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              className="p-2 w-full rounded-lg shadow-inner border"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
            className="bg-indigo-500 hover:bg-indigo-700 duration-400 text-white rounded-lg mx-auto py-2 px-4 w-[140px]"
            type="submit"
          >
            Send
          </button>
        </form>
      )}
    </main>
  );
}
