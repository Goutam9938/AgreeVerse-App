"use client";

import {
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };
  const dotClassName = (index) => {
    return clsx("mx-[3px] inline-block size-2 rounded-full", {
      "bg-black": current === index + 1,
      "bg-neutral-light": current !== index + 1,
    });
  };
  return { api, setApi, handleDotClick, dotClassName };
};

export function Product5() {
  const carouselState = useCarousel();
  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Shop</p>
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              Products
            </h1>
            <p className="md:text-md">
              Explore our diverse range of agricultural products.
            </p>
          </div>
          <div className="hidden md:flex">
            <Button variant="secondary" size="primary" title="View all">
              View all
            </Button>
          </div>
        </div>
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
        >
          <div className="relative pb-24">
            <CarouselContent className="ml-0">
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Organic Seeds</h3>
                    <div className="text-sm font-normal">Seeds</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Fertilizer Mix</h3>
                    <div className="text-sm font-normal">Mix</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Pesticide Spray</h3>
                    <div className="text-sm font-normal">Spray</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Garden Tools</h3>
                    <div className="text-sm font-normal">Tools</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Irrigation System</h3>
                    <div className="text-sm font-normal">System</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Soil Tester</h3>
                    <div className="text-sm font-normal">Tester</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
              <CarouselItem className="basis-[95%] pl-0 pr-6 sm:basis-4/5 md:basis-1/2 md:pr-8 lg:basis-1/4">
                <a href="#" className="font-semibold md:text-md">
                  <div className="mb-3 block aspect-[5/6] md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                      alt="Relume placeholder image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h3>Compost Bin</h3>
                    <div className="text-sm font-normal">Bin</div>
                  </div>
                  <div className="text-md md:text-lg">$55</div>
                </a>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-0 flex w-full items-end justify-between">
              <div className="flex h-7 pt-[10px]">
                <button
                  onClick={carouselState.handleDotClick(0)}
                  className={carouselState.dotClassName(0)}
                />
                <button
                  onClick={carouselState.handleDotClick(1)}
                  className={carouselState.dotClassName(1)}
                />
                <button
                  onClick={carouselState.handleDotClick(2)}
                  className={carouselState.dotClassName(2)}
                />
                <button
                  onClick={carouselState.handleDotClick(3)}
                  className={carouselState.dotClassName(3)}
                />
                <button
                  onClick={carouselState.handleDotClick(4)}
                  className={carouselState.dotClassName(4)}
                />
                <button
                  onClick={carouselState.handleDotClick(5)}
                  className={carouselState.dotClassName(5)}
                />
                <button
                  onClick={carouselState.handleDotClick(6)}
                  className={carouselState.dotClassName(6)}
                />
              </div>
              <div className="flex gap-2 md:gap-4">
                <CarouselPrevious className="static size-12 -translate-y-0" />
                <CarouselNext className="static size-12 -translate-y-0" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
