export const KARACHI_MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462490.0663013114!2d66.8320188!3d24.9056011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e6d9bad9cb1%3A0x10e6ffa6c67dcb7c!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1718400000000!5m2!1sen!2s";

export const KARACHI_MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Karachi%2C%20Pakistan";

export const contactInfo = [
  {
    title: "Office Timings",
    value: "Monday - Saturday (9:00am to 5pm)\nSunday (Closed)",
    icon: "clock" as const,
    iconBg: "#FDA400",
    href: undefined,
  },
  {
    title: "Email Address",
    value: "nexserve.pakistan@gmail.com",
    icon: "email" as const,
    iconBg: "#FDA400",
    href: "mailto:nexserve.pakistan@gmail.com",
  },
  {
    title: "Phone Number",
    value: "0315-1018419",
    icon: "phone" as const,
    iconBg: "#FDA400",
    href: "tel:+923151018419",
  },
] as const;

export const serviceOptions = [
  "Plumbing Services",
  "Electrical Services",
  "AC Repair & Maintenance",
  "Regular Home Cleaning",
  "Deep Cleaning",
  "Other",
] as const;
