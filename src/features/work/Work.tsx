"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeading } from "@/components/ui/SectionHeading";

import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "./work.data";
import { SITE } from "@/constants/site";

gsap.registerPlugin(ScrollTrigger);

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
   
      const heading = section.querySelector(".work-heading");
      const projects = section.querySelectorAll(".project-item");

    
      gsap.fromTo(
        heading,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            end: "top 60%",
            scrub: 1.4,
          },
        },
      );

    
      projects.forEach((project, index) => {
        const fromLeft = index % 2 === 0;

        const glow = project.querySelector(".project-glow");

        gsap.fromTo(
          project,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: project,
              start: "top 88%",
              end: "top 55%",
              scrub: 1.4,
            },
          },
        );

        gsap.to(project, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.8,
          },
        });

        if (glow) {
          gsap.to(glow, {
            x: fromLeft ? 15 : -15,
            y: -15,
            opacity: 0.28,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: 2,
            },
          });
        }

        gsap.to(project, {
          y: index % 2 === 0 ? 4 : -4,
          duration: 5 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

     
      gsap.to(section, {
        opacity: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom 80%",
          end: "bottom 30%",
          scrub: 1.8,
        },
      });

     

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="container-page flex flex-col gap-20 py-14 lg:py-32"
    >
    
      <div className="work-heading">
        <SectionHeading
          title="Recent Work"
          description={SITE.workSubtitle}
          align="center"
        />
      </div>

   

      <div className="flex flex-col gap-24 lg:gap-32">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="project-item relative"
          >
          
            <div
              className="project-glow pointer-events-none absolute -inset-20 -z-10 rounded-[50%] bg-brand-gradient opacity-20 blur-3xl"
              aria-hidden="true"
            />

           

            <div className="project-card">
              <ProjectCard
                project={project}
                reverse={index % 2 === 1}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}