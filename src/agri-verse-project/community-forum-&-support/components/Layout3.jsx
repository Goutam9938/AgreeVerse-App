"use client";

import React from "react";

export function Layout3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Get Instant Help with Our 24/7 AI Chatbot Support
            </h1>
            <p className="md:text-md">
              Our AI chatbot is available around the clock to assist you with
              any questions or troubleshooting needs. Experience seamless
              support and get back to what matters most—your farming success.
            </p>
          </div>
          <div>
            <img
              src="/images/if3.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
