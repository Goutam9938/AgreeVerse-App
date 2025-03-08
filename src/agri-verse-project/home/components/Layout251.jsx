"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout251() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Explore</p>
            <h2 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              Discover Our Premium Agricultural Products
            </h2>
          </div>
          <div>
            <p className="md:text-md">
              At Agri Verse, we offer a diverse range of high-quality
              agricultural products tailored to meet the needs of modern
              farmers. Our platform connects farmers with buyers, ensuring a
              seamless transaction experience. Explore our selection and elevate
              your farming practices today!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12">
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/Seeds.jpg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Quality Seeds for Every Crop Type
            </h3>
            <p>Choose from a variety of seeds that guarantee robust growth.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/innovative tool.jpg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Innovative Tools for Efficient Farming
            </h3>
            <p>Equip yourself with the latest farming technology.</p>
          </div>
          <div>
            <div className="mb-6 md:mb-8">
              <img
                src="/images/fertilizers.jpg"
                alt="Relume placeholder image"
              />
            </div>
            <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Nutrient-Rich Fertilizers for Optimal Yield
            </h3>
            <p>Enhance your soil health with our premium fertilizers.</p>
          </div>
        </div>
        <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
          <Button variant="secondary">Shop</Button>
          <Button iconRight={<RxChevronRight />} variant="link" size="link">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
