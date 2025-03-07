"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { RxChevronRight } from "react-icons/rx";

export function Layout26() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Quality</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Discover Our Product Performance Metrics
            </h2>
            <p className="mb-6 md:mb-8 md:text-md">
              Our product boasts an impressive rating of 4.8 stars based on
              customer feedback. With over 1,500 units sold, it’s a trusted
              choice among farmers.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  50%
                </h3>
                <p>Customer satisfaction rating from verified buyers.</p>
              </div>
              <div>
                <h3 className="mb-2 text-5xl font-bold md:text-7xl lg:text-8xl">
                  1,500
                </h3>
                <p>Units sold in the last quarter.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Buy Now"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <Dialog>
            <DialogTrigger className="relative flex w-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
