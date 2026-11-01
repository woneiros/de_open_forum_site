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

export const volunteerLeads: CommitteeMember[] = [
  {
    name: "Anna Peng",
    title: "Engineering Director @ RISE2GETHER",
    linkedin: "https://www.linkedin.com/in/huipeng/",
  },
  {
    name: "Annu Joshi",
    title: "Data Engineer @ Doordash",
    linkedin: "https://www.linkedin.com/in/annu-joshi/",
  },
  {
    name: "Balachandar Paulraj",
    title: "Staff Engineer @ Quizlet",
    linkedin: "https://www.linkedin.com/in/balachandar-paulraj-b8a26727/",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "How do I register for the event?",
    answer:
      "You can register for Data Engineering Open Forum 2027 using our ",
    answerLinkText: "event registration page",
    answerLinkHref: "https://luma.com/deof2027",
    answerSuffix: ".",
    category: "logistics",
  },
  {
    question: "When and where is the conference?",
    answer:
      "The Data Engineering Open Forum will be held on Tuesday, April 20, 2027 at ",
    answerLinkText: "South San Francisco Conference Center",
    answerLinkHref: "https://www.google.com/maps/search/?api=1&query=South+San+Francisco+Conference+Center",
    answerSuffix: ".",
    category: "logistics",
  },
  {
    question: "Will sessions be recorded?",
    answer:
      "We plan to record sessions with speakers’ permission and upload the recordings to the ",
    answerLinkText: "Data Engineer Things YouTube channel",
    answerLinkHref: "https://www.youtube.com/@data-engineer-things/",
    answerSuffix: " after the event.",
    category: "content",
  },
  {
    question: "Can I submit a talk proposal for DEOF 2027?",
    answer:
      "Call for Proposals (CFP) details for DEOF 2027 are coming soon. Subscribe to our ",
    answerLinkText: "community calendar",
    answerLinkHref: "https://luma.com/det-meetup-bay-area",
    answerSuffix: " for email updates about the CFP.",
    category: "content",
  },
  {
    question: "Who organizes Data Engineering Open Forum 2027?",
    answer:
      "This conference is organized by Data Engineer Things (DET), a global community built by data engineers for data engineers.",
    category: "community",
  },
  {
    question: "Is there a Code of Conduct?",
    answer:
      "Yes, we are committed to providing a welcoming and inclusive environment for all attendees. Please review our ",
    answerLinkText: "Code of Conduct",
    answerLinkHref: "https://www.dataengineerthings.org/coc",
    answerSuffix: ".",
    category: "logistics",
  },
];
