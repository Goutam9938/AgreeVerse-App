"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about our products and services for
            your convenience.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is Agri Verse?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Agri Verse is a comprehensive platform designed to connect farmers
              with buyers. It facilitates easy product listings and
              transactions. Our goal is to empower farmers and enhance
              agricultural commerce.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How do I register?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can register by visiting the registration page and providing
              your details. An OTP will be sent to your phone for verification.
              Once verified, you can access your dashboard.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to list products?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              After logging into your dashboard, navigate to the product listing
              section. Fill in the required details about your products,
              including images and pricing. Once submitted, your products will
              be available for buyers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What payment methods available?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We support various payment methods including credit/debit cards,
              bank transfers, and mobile wallets. This ensures a seamless
              transaction experience for both farmers and buyers. Choose the
              method that works best for you during checkout.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to get support?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              For support, you can visit our Community Forum or use the AI
              chatbot for immediate assistance. Additionally, our customer
              service team is available via the Contact Us page. We're here to
              help you!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
