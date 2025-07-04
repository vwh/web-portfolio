import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

interface Languages {
  languagesSummary: string;
}

export default function ({ languagesSummary }: Languages) {
  return (
    <Section id="languages" title="Languages">
      <HtmlContent content={languagesSummary} />
    </Section>
  );
}