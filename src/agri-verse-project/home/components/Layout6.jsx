"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Empowering Farmers and Buyers Through Innovative Agricultural
              Solutions
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Agri Verse revolutionizes the agricultural marketplace by
              connecting farmers directly with buyers. Our platform simplifies
              transactions and enhances farming efficiency.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Direct Access
                </h6>
                <p>
                  Easily list products and reach a wider audience without
                  intermediaries.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Comprehensive Support
                </h6>
                <p>
                  Access resources, training, and community support to enhance
                  your farming journey.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/images/f13.jpg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
