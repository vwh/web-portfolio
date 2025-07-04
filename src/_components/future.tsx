import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";

type FutureProps = Pick<Lume.Data["resume"], "futurePlans">;

export default function ({ futurePlans }: FutureProps) {
  return (
    <Section title="What's Next">
      <HtmlContent content={futurePlans} />
    </Section>
  );
}
