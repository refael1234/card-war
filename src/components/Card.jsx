import React from 'react';
import '../Card.css'

export default function Card({ number }) {
  return (
    <div className="card">
      {number}
    </div>
  );
}
