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
            {item.answerLinkText && item.answerLinkHref ? (
              <>
                <a
                  href={item.answerLinkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  {item.answerLinkText}
                </a>
                {item.answerSuffix ?? ""}
              </>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
