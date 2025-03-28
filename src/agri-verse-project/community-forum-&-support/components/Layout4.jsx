"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Connect</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Join Our Thriving Farming Community Today
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Engage with fellow farmers and share your insights. Our forum is
              the perfect place to seek advice and discuss farming challenges.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Start Discussions
                </h6>
                <p>
                  Share your experiences and learn from others in the community.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Expert Q&A
                </h6>
                <p>
                  Get answers to your pressing questions from experienced
                  farmers and industry experts.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Join" variant="secondary">
                Join
              </Button>
              <Button
                title="Ask"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Ask
              </Button>
            </div>
          </div>
          <div>
            <img
              src="/images/if.webp"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
