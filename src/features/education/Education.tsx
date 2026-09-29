"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineCard } from "@/components/ui/TimelineCard";
import { EDUCATION } from "./education.data";

gsap.registerPlugin(ScrollTrigger);

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const heading = section.querySelector(".education-heading");
      const items = section.querySelectorAll(".education-item");

      gsap.fromTo(
        heading,
        { y: 20, opacity: 0 },
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
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            end: "top 45%",
            scrub: 1.8,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="container-page flex flex-col gap-16  pt-20"
    >
      <div className="education-heading">
        <SectionHeading title="Education" align="center" />
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        {EDUCATION.map((entry) => (
          <div key={entry.id} className="education-item">
            <TimelineCard entry={entry} />
          </div>
        ))}
      </div>
    </section>
  );
}
