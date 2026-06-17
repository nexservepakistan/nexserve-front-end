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
    name: "Sara Ali",
    role: "AC Technician",
    image:
      "https://d27735ao2xxhhe.cloudfront.net/blog/pro/job-opportunities-for-pakistani-expats-in-europe-600x4006389e0b6c6e7b1669980342.jpg",
  },
  {
    name: "Hassan Raza",
    role: "Cleaning Specialist",
    image:
      "https://www.adecco.com/-/media/project/adecco/adeccohu/image/resized-pictures/landscape-resized/15.png?h=500&iar=0&w=900&hash=C7820E8DD5AE5BCECD40276EBC6758BF",
  },
  {
    name: "Bilal Ahmed",
    role: "Plumber",
    image:
      "https://www.intracen.org/sites/default/files/styles/content_100/public/media/image/media_image/2026/03/25/UKTP_Pakistan_Techimen_Agha_hand_20260319.jpg?itok=7Y4TJuQn",
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
