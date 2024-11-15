"use client";

import { useState, useEffect } from "react";

export default function Title() {
  const [name, setName] = useState("Visitor");

  useEffect(() => {
    document.title = `Hello ${name}!`;
  }, [name]);

  return (
    <main>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="enter your name"
      />
      <p>Your name: {name}</p>
    </main>
  );
}
