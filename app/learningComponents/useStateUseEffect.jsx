"use client"

import { useState, useEffect } from "react";

export default function UseStateUseEffect() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(null);


  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailPattern.test(email));
  }, [email]); // Runs only when email changes

  return (
    <main className="flex flex-col items-center justify-center max-w-6xl mx-auto p-10 sm:p-10 min-h-screen">
        <h2 className="mb-10">useState & useEffect</h2>
      <input
      className="p-2 border rounded-lg shadow-inner"
      type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      />
      {isValid === null ? (
        <p>please enter an email</p>
      ) : isValid ? (
        <p className="text-green-500">Email is valid</p>
      ) : (
        <p className="text-rose-500">Email is invalid</p>
      )}
    </main>
  );
}

// Explanation:

// useEffect with [email] dependency checks the email’s validity whenever email changes.
// emailPattern is a regular expression that checks if the email format is valid.
// isValid is updated based on whether email matches the pattern.
// The message displayed below the input changes based on the validity of the email.

// Summary
// useState: Initializes state and updates it when needed.
// useEffect: Executes code after a component renders, useful for side effects like data fetching, timers, or interacting with the DOM.
// The dependency array ([]) in useEffect controls how often it runs. An empty array runs once on mount, while including specific dependencies will make it run whenever those dependencies change.