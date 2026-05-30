// data/siteData.ts
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  text: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface ScheduleItem {
  date: string;
  title: string;
  time: string;
}

export interface Badge {
  src: string;
  alt: string;
}

export const services: Service[] = [
  {
    title: "GROUP & PRIVATE OBEDIENCE",
    description:
      "Structured group classes and one‑on‑one private sessions to teach your dog basic commands, leash manners, and social skills.",
    icon: "🐾",
  },
  {
    title: "PUPPY TRAINING",
    description:
      "Early‑life training that covers house‑breaking, bite inhibition, and building a solid foundation for lifelong obedience.",
    icon: "🐶",
  },
  {
    title: "BEHAVIOR MODIFICATION",
    description:
      "Targeted solutions for aggression, separation anxiety, and other problem behaviours.",
    icon: "⚡",
  },
];

export const whyChoose = [
  "20+ years of professional experience",
  "Positive‑reinforcement based methods",
  "Tailored programs for every dog’s personality",
  "Flexible scheduling – in‑person or virtual",
];

export const ctaBanner = {
  text: "Ready to transform your dog’s life? Book a FREE consultation today!",
};

export const schedule: ScheduleItem[] = [
  { date: "Jun 10", title: "Puppy Play & Learn", time: "10:00 AM – 12:00 PM" },
  { date: "Jun 12", title: "Obedience Basics", time: "2:00 PM – 4:00 PM" },
  { date: "Jun 15", title: "Behavior Reset", time: "6:00 PM – 8:00 PM" },
];

export const afterTraining = [
  "Improved obedience and confidence",
  "Stronger bond with your dog",
  "Reduced problem behaviours",
  "Happy, well‑adjusted pet",
];

export const badges = [
  { src: "/images/badge1.png", alt: "AAA Certified Trainer" },
  { src: "/images/badge2.png", alt: "Top 100 Dog Trainers" },
  { src: "/images/badge3.png", alt: "Best Pet Care Service" },
];

export const testimonials: Testimonial[] = [
  {
    name: "Emily R.",
    text: "Kim transformed our stubborn pup into a joy to be around. The progress was amazing!",
    avatar: "/images/avatar1.jpg",
  },
  {
    name: "Mark T.",
    text: "The group classes are fun and effective. Our whole family learned together.",
    avatar: "/images/avatar2.jpg",
  },
  {
    name: "Sofia L.",
    text: "The behavior modification program helped my dog overcome severe anxiety.",
    avatar: "/images/avatar3.jpg",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Tips for a Stress‑Free Walk",
    excerpt: "Learn how to make daily walks enjoyable for both you and your dog.",
    image: "/images/blog1.jpg",
    date: "2024‑08‑12",
  },
  {
    id: 2,
    title: "Understanding Puppy Play Biting",
    excerpt: "Why puppies bite and how to redirect that energy safely.",
    image: "/images/blog2.jpg",
    date: "2024‑07‑28",
  },
  {
    id: 3,
    title: "When to Seek Professional Help",
    excerpt: "Signs that your dog needs a trained professional’s guidance.",
    image: "/images/blog3.jpg",
    date: "2024‑07‑05",
  },
];
