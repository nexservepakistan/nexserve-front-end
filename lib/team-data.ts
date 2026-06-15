export type TeamMember = {
  name: string;
  role: string;
  image: string;
  showBadge?: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Ahmed Khan",
    role: "Electrician",
    image: "/images/team.png",
    showBadge: true,
  },
  {
    name: "Usman Ali",
    role: "AC Technician",
    image: "/images/team.png",
  },
  {
    name: "Hassan Raza",
    role: "Cleaning Specialist",
    image: "/images/team.png",
  },
  {
    name: "Bilal Ahmed",
    role: "Plumber",
    image: "/images/team.png",
  },
];

export const teamHighlights = [
  {
    type: "icon" as const,
    title: "Verified Professionals",
    description:
      "All our service providers are background-checked and verified for your safety.",
  },
  {
    type: "text" as const,
    highlight: "5+",
    title: "Years Experience",
    description:
      "Each technician has minimum 5 years of professional experience.",
  },
  {
    type: "text" as const,
    highlight: "100%",
    title: "Customer Satisfaction",
    description:
      "We guarantee quality workmanship and professional service every time.",
  },
];
