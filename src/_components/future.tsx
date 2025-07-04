import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

interface FutureProps {
  futurePlans: string;
}

export default function ({ futurePlans }: FutureProps) {
  return (
    <Section title="What's Next">
      <HtmlContent content={futurePlans} />
    </Section>
  );
}