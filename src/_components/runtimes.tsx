import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

interface RuntimeProps {
  runtimesSummary: string;
}

export default function ({ runtimesSummary }: RuntimeProps) {
  return (
    <Section id="runtimes" title="Runtime Environments">
      <HtmlContent content={runtimesSummary} />
    </Section>
  );
}