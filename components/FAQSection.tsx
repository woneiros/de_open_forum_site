import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { type FAQItem } from "@/data/homepage";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border border-accent/30 rounded-sm px-4"
        >
          <AccordionTrigger className="font-mono text-left hover:text-accent hover:no-underline">
            {"// "}
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
