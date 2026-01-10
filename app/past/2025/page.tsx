import TalksList from "@/components/TalksList";
import eventData from "@/data/past/2025.json";

export const metadata = {
  title: "Talks 2025 - Data Engineering Open Forum",
  description:
    "Watch all the talks from Data Engineering Open Forum 2025 in San Francisco.",
};

export default function Talks2025Page() {
  return <TalksList talks={eventData.talks} year={eventData.year} />;
}
