export interface CommitteeMember {
  name: string;
  company: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "logistics" | "community" | "content";
}

export const programCommittee: CommitteeMember[] = [
  { name: "Xinran Waibel", company: "OpenAI" },
  { name: "Apoorva Bapat", company: "Netflix" },
  { name: "Goutham Budati", company: "The Farmer's Dog" },
  { name: "Jerry Wang", company: "Airbnb" },
  { name: "Michelle Winter", company: "eBay" },
  { name: "Sharath Chandra", company: "Figma" },
  { name: "Shruthi Jaganath", company: "Netflix" },
  { name: "Tulika Bhatt", company: "Netflix" },
  { name: "Will Monge", company: "Netflix" },
];

export const faqItems: FAQItem[] = [
  {
    question: "When and where is the conference?",
    answer:
      "The Data Engineering Open Forum will be held on April 16th, 2026 in San Francisco, California. Specific venue details will be announced soon.",
    category: "logistics",
  },
  {
    question: "How much does it cost to attend?",
    answer:
      "Registration details and pricing will be announced soon. Join our Google Group to be notified when registration opens.",
    category: "logistics",
  },
  {
    question: "How do I register?",
    answer:
      "Registration is not yet open. We'll announce registration details through our Google Group mailing list. Make sure to join to stay updated.",
    category: "logistics",
  },
  {
    question: "Is there a Code of Conduct?",
    answer:
      "Yes, we are committed to providing a welcoming and inclusive environment for all attendees. Our Code of Conduct will be published alongside registration details.",
    category: "logistics",
  },
  {
    question: "Who organizes this event?",
    answer:
      "This conference is organized by the Data Engineering Team (DET), a grassroots community of data engineering practitioners. We are community-driven and vendor-neutral — this is not a Netflix event, though some Netflix employees are involved as community members.",
    category: "community",
  },
  {
    question: "Is this a vendor-sponsored conference?",
    answer:
      "This is a community-driven, vendor-neutral conference. While we may have sponsors to help cover costs, the content, speakers, and direction are controlled by the community, not by vendors. Our goal is to create an open space for authentic dialogue about data engineering.",
    category: "community",
  },
  {
    question: "What makes this conference different from others?",
    answer:
      "We focus on building a genuine community rather than just hosting an event. This means technically deep content from practitioners, meaningful connections that outlive the conference, and open dialogue free from vendor influence. We're building something the community actively seeks out.",
    category: "community",
  },
  {
    question: "What kind of sessions can I expect?",
    answer:
      "Expect technically deep talks from practitioners sharing real-world experiences, lessons learned, and production system insights. Check out our previous editions from 2024 and 2025 to get a sense of the content quality and topics covered.",
    category: "content",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes! We plan to record sessions and make them available online after the conference, just like we did for our 2024 and 2025 events. You can find recordings from previous years on our website.",
    category: "content",
  },
  {
    question: "Can I submit a talk proposal for future events?",
    answer:
      "The Call for Proposals (CFP) for this year's event has closed. However, we welcome talk proposals throughout the year for future events. Stay tuned to our Google Group for announcements about the next CFP.",
    category: "content",
  },
];
