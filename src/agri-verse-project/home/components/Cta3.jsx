"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta3() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
            Join Our Farming Community Today
          </h2>
          <p className="text-text-alternative md:text-md">
            Sign up now to connect with buyers and grow your agricultural
            business effortlessly.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Register">Register</Button>
            <Button title="Explore" variant="secondary-alt">
              Explore
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/agri.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
