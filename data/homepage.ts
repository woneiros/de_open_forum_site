export interface CommitteeMember {
  name: string;
  title: string;
  linkedin: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  answerLinkText?: string;
  answerLinkHref?: string;
  answerSuffix?: string;
  category: "logistics" | "community" | "content";
}

export const programCommittee: CommitteeMember[] = [
  {
    name: "Xinran Waibel",
    title: "Head of DET Community",
    linkedin: "https://www.linkedin.com/in/xinranwaibel/",
  },
  {
    name: "Apoorva Bapat",
    title: "Data Engineering @ Netflix",
    linkedin: "https://www.linkedin.com/in/apoorvabapat/",
  },
  {
    name: "Goutham Budati",
    title: "VP of Data Strategy and Insights @ The Farmer's Dog",
    linkedin: "https://www.linkedin.com/in/gouthambudati/",
  },
  {
    name: "Jerry Wang",
    title: "Data Infrastructure Leadership @ Airbnb",
    linkedin: "https://www.linkedin.com/in/jerry-wang-aa813637/",
  },
  {
    name: "Michelle Winters",
    title: "Distinguished Architect @ eBay",
    linkedin: "https://www.linkedin.com/in/mufford/",
  },
  {
    name: "Sharath Chandra",
    title: "Data Engineering Manager @ Figma",
    linkedin: "https://www.linkedin.com/in/sharathchandra1288/",
  },
  {
    name: "Shruthi Jaganathan",
    title: "Data Engineering @ Netflix",
    linkedin: "https://www.linkedin.com/in/shruthi-jaganathan/",
  },
  {
    name: "Tulika Bhatt",
    title: "Data Engineering @ Netflix",
    linkedin: "https://www.linkedin.com/in/tulikabhatt/",
  },
  {
    name: "Will Monge",
    title: "Data Engineering @ Netflix",
    linkedin: "https://www.linkedin.com/in/willmonge/",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "When and where is the conference?",
    answer:
      "The Data Engineering Open Forum will be held on April 16th, 2026 at the Contemporary Jewish Museum in San Francisco, California.",
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
    question: "Who organizes Data Engineering Open Forum 2026?",
    answer:
      "This conference is organized by Data Engineer Things (DET). This is not a Netflix event, though some Netflix employees are involved in the Program Committee.",
    category: "community",
  },
  {
    question: "Is there a Code of Conduct?",
    answer:
      "Yes, we are committed to providing a welcoming and inclusive environment for all attendees. Our Code of Conduct will be published alongside registration details.",
    category: "logistics",
  },
  {
    question: "Is this a vendor-sponsored conference?",
    answer:
      "While we have sponsors to help cover costs, all sessions are reviewed and approved by the Program Committee.",
    category: "community",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "Yes! We plan to record sessions and upload them to the ",
    answerLinkText: "Data Engineer Things YouTube channel",
    answerLinkHref: "https://www.youtube.com/@data-engineer-things/",
    answerSuffix: " after the event.",
    category: "content",
  },
  {
    question: "Can I submit a talk proposal for future events?",
    answer:
      "The Call for Proposals (CFP) for this year's event has closed. However, we welcome talk proposals throughout the year for future events. Stay tuned to our Google Group for announcements about the next CFP.",
    category: "content",
  },
];
