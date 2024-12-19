'use client';

import React from 'react';

const InputField = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '2px solid #2D3748',
        borderRadius: '50px',
        padding: '5px 15px',
        width: '600px',
        margin: '40px auto',
        background: 'linear-gradient(135deg, #F7FAFC 0%, #E3F2FD 100%)',
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <input
        type="text"
        placeholder="Describe your requirements..."
        style={{
          border: 'none',
          outline: 'none',
          flex: 1,
          fontSize: '1.5rem',
          padding: '15px',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: '#1A202C',
          backgroundColor: 'transparent',
        }}
      />
      <button
        style={{
          backgroundColor: '#2563EB',
          color: 'white',
          padding: '10px 30px',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.backgroundColor = '#1E3A8A';
          e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.backgroundColor = '#2563EB';
          e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default InputField;
