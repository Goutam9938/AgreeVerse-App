"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  Button,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@relume_io/relume-ui";
import React, { Fragment, useEffect, useState } from "react";

const Star = () => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => {
        const isFullStar = i < fullStars;
        const isHalfStar = hasHalfStar && i === fullStars;

        return (
          <div key={i}>
            {isFullStar ? (
              <BiSolidStar />
            ) : isHalfStar ? (
              <BiSolidStarHalf />
            ) : (
              <BiStar />
            )}
          </div>
        );
      })}
    </div>
  );
};

const useCarousel = () => {
  const [mainApi, setMainApi] = useState();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!mainApi) {
      return;
    }
    mainApi.on("select", () => {
      const index = mainApi.selectedScrollSnap();
      setCurrent(index);
    });
  }, [mainApi]);
  const handleClick = (index) => () => {
    return mainApi?.scrollTo(index);
  };
  const getDotsStyles = (index) => {
    return clsx("relative mx-[3px] inline-block size-2 rounded-full", {
      "bg-black": current === index,
      "bg-neutral-darker/40": current !== index,
    });
  };
  return {
    setMainApi,
    handleClick,
    getDotsStyles,
  };
};

export function ProductHeader7_3() {
  const useActive = useCarousel();
  return (
    <header id="relume" className="px-[5%] py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 lg:grid-cols-[1.25fr_1fr] lg:gap-x-20">
          <div className="order-first md:order-none">
            <div className="lg:sticky lg:inset-y-[10vh]">
              <div className="flex flex-col gap-y-4">
                <div className="group overflow-hidden">
                  <Carousel
                    setApi={useActive.setMainApi}
                    opts={{ loop: true, align: "start" }}
                    className="relative m-0"
                  >
                    <CarouselContent className="relative m-0 pt-[120%] lg:pt-0">
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 1"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 2"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 3"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                      <CarouselItem className="absolute inset-0 size-full basis-full pl-0 lg:static">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                          alt="Relume placeholder image 4"
                          className="size-full object-cover lg:h-[80vh]"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex" />
                    <CarouselNext className="right-4 z-10 hidden size-12 opacity-0 transition-opacity group-hover:opacity-100 md:flex" />
                    <div className="absolute bottom-[26px] left-0 flex w-full items-center justify-center">
                      <button
                        onClick={useActive.handleClick(0)}
                        className={useActive.getDotsStyles(0)}
                      />
                      <button
                        onClick={useActive.handleClick(1)}
                        className={useActive.getDotsStyles(1)}
                      />
                      <button
                        onClick={useActive.handleClick(2)}
                        className={useActive.getDotsStyles(2)}
                      />
                      <button
                        onClick={useActive.handleClick(3)}
                        className={useActive.getDotsStyles(3)}
                      />
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Breadcrumb className="mb-6 flex flex-wrap items-center text-sm">
              <BreadcrumbList>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="" href="#">
                      Shop all
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="" href="#">
                      Fruits
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </Fragment>
                <Fragment>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="font-semibold" href="#">
                      Fresh Apples
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </Fragment>
              </BreadcrumbList>
            </Breadcrumb>
            <div>
              <h1 className="mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
                Fresh Apples
              </h1>
              <div className="mb-5 flex flex-col flex-wrap sm:flex-row sm:items-center md:mb-6">
                <p className="text-xl font-bold md:text-2xl">$55</p>
                <div className="mx-4 hidden w-px self-stretch bg-background-alternative sm:block" />
                <div className="flex flex-wrap items-center gap-3">
                  <Star rating={3.5} />
                  <p className="text-sm">(3.5 stars) • 10 reviews</p>
                </div>
              </div>
              <p>
                Enjoy the crisp taste of our fresh apples, sourced from local
                orchards. Perfect for snacking or baking!
              </p>
              <ul className="mb-5 mt-4 list-inside list-disc md:mb-6">
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Perfect for healthy meals
                </li>
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Perfect for healthy meals
                </li>
                <li className="py-0.5 pl-1.5 first:pt-0 last:pb-0">
                  Perfect for healthy meals
                </li>
              </ul>
              <form className="mb-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex flex-col">
                    <Label className="mb-2">Variant</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="first-choice">Option One</SelectItem>
                        <SelectItem value="second-choice">
                          Option Two
                        </SelectItem>
                        <SelectItem value="third-choice">
                          Option Three
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col">
                    <Label className="mb-2">Variant</Label>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary bg-background-alternative text-text-alternative px-4 py-2"
                      >
                        Gala Apples
                      </a>
                      <a
                        href="#"
                        className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2"
                      >
                        Fuji Apples
                      </a>
                      <a
                        href="#"
                        className="focus-visible:ring-border-primary inline-flex gap-3 items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border-primary text-text-primary bg-background-primary px-4 py-2 pointer-events-none opacity-25"
                      >
                        Granny Smith
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Label htmlFor="quantity" className="mb-2">
                      Quantity
                    </Label>
                    <Input
                      type="number"
                      id="quantity"
                      placeholder="1"
                      className="w-16"
                    />
                  </div>
                </div>
                <div className="mb-4 mt-8 flex flex-col gap-y-4">
                  <Button title="Add to cart">Add to cart</Button>
                  <Button title="Buy now" variant="secondary">
                    Buy now
                  </Button>
                </div>
                <p className="text-center text-xs">Free shipping over $50</p>
              </form>
              <div className="space-y-5 md:space-y-6">
                <div>
                  <p className="mb-2 font-semibold md:text-md">Details</p>
                  <p>
                    If you're not satisfied with your purchase, you can return
                    it within 30 days. Please ensure the product is in its
                    original condition. Contact our support team for assistance.
                  </p>
                  <div className="mt-5 h-px w-full bg-black md:mt-6" />
                </div>
                <div>
                  <p className="mb-2 font-semibold md:text-md">Shipping</p>
                  <p>
                    If you're not satisfied with your purchase, you can return
                    it within 30 days. Please ensure the product is in its
                    original condition. Contact our support team for assistance.
                  </p>
                  <div className="mt-5 h-px w-full bg-black md:mt-6" />
                </div>
                <div>
                  <p className="mb-2 font-semibold md:text-md">Returns</p>
                  <p>
                    If you're not satisfied with your purchase, you can return
                    it within 30 days. Please ensure the product is in its
                    original condition. Contact our support team for assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
