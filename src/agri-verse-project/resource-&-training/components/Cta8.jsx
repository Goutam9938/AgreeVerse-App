"use client"

import React from 'react';

export function Cta8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:gap-x-12 md:gap-y-8 lg:grid-cols-[1fr_max-content] lg:gap-x-20">
        <div className="w-full max-w-lg">
          <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
            Stay Updated with Our Resources
          </h2>
          <p className="md:text-md">Subscribe for the latest farming insights and tips.</p>
        </div>
        <div>
          <form className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md"
            />
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs">
            By clicking Sign Up you're confirming that you agree with our Terms and Conditions
          </p>
        </div>
      </div>
    </section>
  );
}