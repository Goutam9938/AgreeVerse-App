"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header76() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0"
    >
      <div className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Empowering Farmers, Connecting Markets, Transforming Agriculture
        </h1>
        <p className="md:text-md">
          Agri Verse is your go-to platform for revolutionizing the agricultural
          landscape. Join us in bridging the gap between farmers and buyers for
          a sustainable future.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          <Button title="Get Started">Get Started</Button>
          <Button title="Learn More" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
      <div className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0">
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f1.jpg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f2.jpg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f3.jpg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f4.webp"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f5.jpg"
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f6.jpeg"
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f7.webp"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f8.jpg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f9.jpg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f10.jpg"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f11.jfif"
                  alt="Relume placeholder image 5"
                />
              </div>
            </div>
            <div className="grid size-full grid-cols-1 gap-4">
              <div className="relative w-full pt-[120%]">
                <img
                  className="absolute inset-0 size-full object-cover"
                  src="/images/f12.jpg"
                  alt="Relume placeholder image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
