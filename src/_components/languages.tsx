import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

type LanguagesProps = Pick<Lume.Data["resume"], "languagesSummary">;

export default function ({ languagesSummary }: LanguagesProps) {
  return (
    <Section id="languages" title="Languages">
      <HtmlContent content={languagesSummary} />
    </Section>
  );
}
