"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import React, { Fragment } from "react";

export function Content28() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-[1fr_20rem] lg:gap-x-16 xxl:gap-x-48">
          <div className="max-w-lg">
            <div className="prose md:prose-md lg:prose-lg">
              <Fragment>
                <h2 id="heading-2">Soil Health</h2>
                <p>
                  <strong>
                    Soil health is crucial for sustainable agriculture and high crop yields. Healthy soil is rich in organic matter, has good structure, retains moisture well, and supports diverse microbial life. Farmers can maintain soil health by practicing crop rotation, using cover crops, and applying organic fertilizers.
                  </strong>
                </p>
                <p>
                  Testing soil regularly helps in understanding nutrient levels and pH balance, ensuring that the soil provides optimal conditions for plant growth. Avoiding excessive chemical fertilizers and pesticides also preserves soil biodiversity.
                </p>
                <h3 id="heading-3">Crop Selection</h3>
                <p>
                  Choosing the right crops depends on factors like climate, soil type, water availability, and market demand. Farmers should consider crop rotation strategies to prevent soil depletion and reduce pest infestations.
                </p>
                <p>
                  Selecting drought-resistant crops in water-scarce regions and pest-resistant varieties can help ensure better yields. Additionally, integrating intercropping methods can improve soil fertility and increase overall productivity.
                </p>
                <h4 id="heading-4">Irrigation Techniques</h4>
                <p>
                  Efficient irrigation techniques are essential to ensure that crops receive the right amount of water without wastage. Methods such as drip irrigation, sprinkler systems, and rainwater harvesting can help optimize water usage.
                </p>
                <p>
                  Implementing soil moisture sensors can help farmers determine when and how much to irrigate. Using mulch around plants can also reduce water evaporation and maintain soil moisture levels.
                </p>
                <figure>
                  <img
                    src="/images/et.jpg"
                    alt="Relume placeholder image"
                  />
                  <figcaption>Efficient irrigation techniques help conserve water.</figcaption>
                </figure>
                <h5 id="heading-5">Pest Management</h5>
                <p>
                  Integrated Pest Management (IPM) is an effective approach to controlling pests while minimizing environmental damage. It involves using natural predators, crop rotation, resistant plant varieties, and organic pesticides.
                </p>
                <p>
                  Regular field monitoring and early detection of pest infestations can prevent large-scale crop damage. Using neem-based products and biological pest control methods also reduces dependency on chemical pesticides.
                </p>
                <blockquote>
                  "A well-managed pest control strategy not only protects crops but also maintains ecological balance, ensuring long-term agricultural sustainability."
                </blockquote>
                <h6 id="heading-6">Harvesting Tips</h6>
                <p>
                  Harvesting crops at the right time ensures maximum yield and quality. Timing varies based on the crop type, weather conditions, and intended use (fresh consumption or storage).
                </p>
                <p>
                  Using proper harvesting tools and techniques reduces damage to crops. After harvesting, proper storage methods such as drying, refrigeration, or controlled atmosphere storage help in preserving produce quality and preventing spoilage.
                </p>
              </Fragment>
            </div>
          </div>
          <div className="order-first lg:order-none">
            <div className="lg:sticky lg:top-24">
              <Accordion
                type="single"
                defaultValue="aside-menu"
                className="lg:block"
                collapsible={true}
              >
                <AccordionItem value="aside-menu" className="border-none">
                  <AccordionTrigger className="flex cursor-pointer items-center justify-between gap-3 border border-border-primary px-4 py-3 lg:pointer-events-none lg:cursor-auto lg:border-none lg:p-0 [&_svg]:size-4 [&_svg]:lg:hidden">
                    <h3 className="text-lg font-bold leading-[1.4] md:text-2xl">
                      Table of Contents
                    </h3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-3 md:mt-4">
                      <a
                        href="#heading-2"
                        className="block px-4 py-3 md:text-md"
                        style={{ marginLeft: 0 }}
                      >
                        Soil Health
                      </a>
                      <a
                        href="#heading-3"
                        className="block px-4 py-3 md:text-md"
                        style={{ marginLeft: "16px" }}
                      >
                        Crop Selection
                      </a>
                      <a
                        href="#heading-4"
                        className="block px-4 py-3 md:text-md"
                        style={{ marginLeft: "32px" }}
                      >
                        Irrigation Techniques
                      </a>
                      <a
                        href="#heading-5"
                        className="block px-4 py-3 md:text-md"
                        style={{ marginLeft: "48px" }}
                      >
                        Pest Management
                      </a>
                      <a
                        href="#heading-6"
                        className="block px-4 py-3 md:text-md"
                        style={{ marginLeft: "64px" }}
                      >
                        Harvesting Tips
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
