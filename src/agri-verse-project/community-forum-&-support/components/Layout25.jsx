"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout25() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Get Answers from Agricultural Experts
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Have questions about farming? Our experts are here to help you
              with insights and solutions tailored to your needs.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Ask
                </h3>
                <p>Join the conversation and enhance your knowledge.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  Support
                </h3>
                <p>Connect with fellow farmers and share experiences.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Submit" variant="secondary">
                Submit
              </Button>
              <Button
                title="Chat"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Chat
              </Button>
            </div>
          </div>
          <img
            src="/images/if2.jpg"
            className="w-full object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
