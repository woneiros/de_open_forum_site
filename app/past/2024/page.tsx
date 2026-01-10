import TalksList from "@/components/TalksList";
import eventData from "@/data/past/2024.json";

export const metadata = {
  title: "Talks 2024 - Data Engineering Open Forum",
  description:
    "Watch all the talks from Data Engineering Open Forum 2024 in San Francisco.",
};

export default function Talks2024Page() {
  return <TalksList talks={eventData.talks} year={eventData.year} />;
}
