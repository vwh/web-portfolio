import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

type RuntimeProps = Pick<Lume.Data["resume"], "runtimesSummary">;

export default function ({ runtimesSummary }: RuntimeProps) {
  return (
    <Section id="runtimes" title="Runtime Environments">
      <HtmlContent content={runtimesSummary} />
    </Section>
  );
}
