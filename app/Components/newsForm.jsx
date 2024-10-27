// File: app/components/NewsletterForm.js
'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Subscribed successfully!');
      } else {
        setStatus(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('An error occurred');
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="newsletter-form">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="email-input"
      />
      <button type="submit" className="subscribe-button">Subscribe</button>
      <p>{status}</p>
    </form>
  );
}
