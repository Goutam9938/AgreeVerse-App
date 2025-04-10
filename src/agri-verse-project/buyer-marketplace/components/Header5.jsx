"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              Discover Fresh Produce at Your Fingertips
            </h1>
            <p className="text-text-alternative md:text-md">
              Welcome to our Buyer Marketplace, where farmers and buyers connect
              seamlessly. Explore a wide range of quality products tailored to
              your needs and preferences.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Shop">Shop</Button>
              <Button title="Learn More" variant="secondary-alt">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/images/veg.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
