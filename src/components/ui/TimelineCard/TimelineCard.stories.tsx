import type { Meta, StoryObj } from "@storybook/react";
import { TimelineCard } from "./TimelineCard";

const meta: Meta<typeof TimelineCard> = {
  title: "UI/TimelineCard",
  component: TimelineCard,
  parameters: { backgrounds: { default: "dark" }, layout: "padded" },
};

export default meta;
type Story = StoryObj<typeof TimelineCard>;

export const Experience: Story = {
  args: {
    entry: {
      id: "tamland",
      title: "Front-End Developer",
      organization: "Tamland",
      period: "2026",
      description: "Worked on large-scale admin panel features and reusable UI components.",
      technologies: ["React", "TypeScript", "React Query", "Axios"],
    },
  },
};

export const WithoutTechStack: Story = {
  args: {
    entry: {
      id: "parnian-school",
      title: "Front-End Developer",
      organization: "Parnian School",
      period: "9 Months",
      description:
        "Worked on front-end development and contributed to building and improving web interfaces and user-facing features.",
    },
  },
};

export const Education: Story = {
  args: {
    entry: {
      id: "azad-university",
      title: "B.Sc. in Computer Engineering",
      organization: "Islamic Azad University",
      period: "Present",
    },
  },
};
