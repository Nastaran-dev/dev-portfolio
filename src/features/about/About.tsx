"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Parallax } from "@/components/ui/Parallax";
import { SITE } from "@/constants/site";

import { TechStack } from "./TechStack";
import { ShowcasePreview } from "./ShowcasePreview";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".about-heading");
      const illustration = section.querySelector(".about-illustration");
      const illustrationImage = section.querySelector(
        ".about-illustration-image",
      );
      const techStack = section.querySelector(".about-tech-stack");
      const showcase = section.querySelector(".about-showcase");

      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 16,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 65%",
            scrub: 2,
          },
        },
      );

      gsap.fromTo(
        heading,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            end: "top 65%",
            scrub: 1.8,
          },
        },
      );

      gsap.fromTo(
        illustration,
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: illustration,
            start: "top 90%",
            end: "top 62%",
            scrub: 2,
          },
        },
      );

      gsap.to(illustration, {
        y: -16,
        ease: "none",
        scrollTrigger: {
          trigger: illustration,
          start: "top 78%",
          end: "bottom 25%",
          scrub: 2.5,
        },
      });

      gsap.to(illustrationImage, {
        y: -10,
        ease: "none",
        scrollTrigger: {
          trigger: illustration,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.5,
        },
      });

      gsap.fromTo(
        techStack,
        {
          y: 24,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: techStack,
            start: "top 90%",
            end: "top 62%",
            scrub: 1.8,
          },
        },
      );

      gsap.to(techStack, {
        y: -14,
        ease: "none",
        scrollTrigger: {
          trigger: techStack,
          start: "top 78%",
          end: "bottom 25%",
          scrub: 2.5,
        },
      });

      gsap.fromTo(
        showcase,
        {
          y: 26,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: showcase,
            start: "top 90%",
            end: "top 62%",
            scrub: 2,
          },
        },
      );

      gsap.to(showcase, {
        y: -16,
        ease: "none",
        scrollTrigger: {
          trigger: showcase,
          start: "top 78%",
          end: "bottom 22%",
          scrub: 3,
        },
      });

      gsap.to(illustration, {
        y: 5,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="container-page flex flex-col gap-28 py-14 lg:gap-36 lg:py-20"
    >
      <div className="flex flex-col items-center gap-16">
        <div className="about-heading">
          <SectionHeading
            title="About"
            description={SITE.aboutText}
            align="center"
          />
        </div>

        <Parallax
          speed={30}
          rotate={0.5}
          scale={1.01}
          mouse={15}
          className="about-illustration relative h-[280px] w-full max-w-2xl sm:h-[360px]"
        >
          <div className="absolute inset-[-15%] -z-10">
            <div
              className="h-full w-full rounded-full bg-brand-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />
          </div>

          <Image
            src="/images/about-illustration.svg"
            alt=""
            fill
            className="about-illustration-image object-contain"
          />
        </Parallax>
      </div>

      <div className="about-tech-stack">
        <TechStack />
      </div>

      <div className="about-showcase">
        <ShowcasePreview />
      </div>
    </section>
  );
}
