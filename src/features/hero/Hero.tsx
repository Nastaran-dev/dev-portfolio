"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Parallax } from "@/components/ui/Parallax";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const ctx = gsap.context(() => {
      const title = hero.querySelector(".hero-title");
      const role = hero.querySelector(".hero-role");
      const description = hero.querySelector(".hero-description");
      const button = hero.querySelector(".hero-button");

      const visual = hero.querySelector(".hero-visual");

      const grid = hero.querySelector(".hero-grid");

      const outerGlow = hero.querySelector(".hero-glow-outer");
      const innerGlow = hero.querySelector(".hero-glow-inner");

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .fromTo(
          title,
          {
            y: 24,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
          },
        )
        .fromTo(
          role,
          {
            y: 18,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.7",
        )
        .fromTo(
          description,
          {
            y: 16,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
          },
          "-=0.55",
        )
        .fromTo(
          button,
          {
            y: 14,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
          },
          "-=0.5",
        )
        .fromTo(
          visual,
          {
            opacity: 0,
            scale: 0.96,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.9",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      scrollTl.to(
        title,
        {
          y: -30,
          opacity: 0.4,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        role,
        {
          y: -24,
          opacity: 0.4,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        description,
        {
          y: -18,
          opacity: 0.4,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        button,
        {
          y: -12,
          opacity: 0.4,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        visual,
        {
          y: -40,
          opacity: 0.55,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        grid,
        {
          y: 30,
          opacity: 0.25,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        outerGlow,
        {
          y: -25,
          opacity: 0.18,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        innerGlow,
        {
          y: 20,
          opacity: 0.12,
          ease: "none",
        },
        0,
      );

      scrollTl.to(
        hero,
        {
          opacity: 0.85,
          ease: "none",
        },
        0,
      );

      gsap.to(visual, {
        y: -6,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(outerGlow, {
        x: 8,
        y: -6,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(innerGlow, {
        x: -6,
        y: 8,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative overflow-hidden">
      <Parallax
        speed={50}
        rotate={0}
        scale={1.01}
        mouse={20}
        className="pointer-events-none absolute inset-0 opacity-50"
      >
        <div
          className="hero-grid absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(174, 12, 167, 0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(90, 60, 255, 0.18) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
            maskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(circle at 75% 30%, black, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </Parallax>

     

      <div className="container-page relative grid min-h-[85vh] grid-cols-1 items-center gap-16 py-24 lg:grid-cols-2 lg:gap-12 lg:py-32">
       

        <div className="flex max-w-2xl flex-col gap-10 text-center lg:text-left">
          <div className="flex flex-col gap-1.5">
            <h1 className="hero-title text-h2 text-neutral-text ">
              Hi, I&rsquo;m {SITE.name}
            </h1>

            <GradientText
              as="p"
              className="hero-role text-h3 font-semibold"
            >
              {SITE.role}
            </GradientText>
          </div>

          <p className="hero-description text-body-lg text-neutral-text/80 lg:max-w-xl">
            {SITE.tagline}
          </p>

          <div className="hero-button">
            <Button href="#contact" className="mx-auto w-fit lg:mx-0">
              Contact
            </Button>
          </div>
        </div>

      

        <div className="hero-visual relative mx-auto aspect-square w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]">
         

          <Parallax
            speed={22}
            rotate={0.5}
            scale={1.04}
            mouse={15}
            className="hero-glow-outer pointer-events-none absolute inset-[-15%]"
          >
            <div
              className="h-full w-full rounded-full bg-brand-gradient opacity-30 blur-3xl"
              aria-hidden="true"
            />
          </Parallax>

         

          <Parallax
            speed={-20}
            rotate={-0.5}
            scale={1.06}
            mouse={-8}
            className="hero-glow-inner pointer-events-none absolute inset-[8%]"
          >
            <div
              className="h-full w-full rounded-full bg-button-gradient opacity-20 blur-2xl"
              aria-hidden="true"
            />
          </Parallax>

          

          <div
            className="absolute inset-0 rounded-full ring-1 ring-neutral-text/10"
            aria-hidden="true"
          />

        

          <Parallax
            speed={12}
            rotate={0}
            scale={1.005}
            mouse={10}
            className="absolute inset-0"
          >
            <Image
              src="/images/profile-photo.webp"
              alt={`${SITE.name}, Front-End Developer, sitting at a laptop`}
              fill
              priority
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 420px, 340px"
              className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(174,12,167,0.35)]"
            />
          </Parallax>
        </div>
      </div>
    </section>
  );
}
