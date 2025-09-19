import Section from "./blocks/Section.tsx";

type SkillsProps = Pick<Lume.Data["resume"], "skills">;

export default function ({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills">
      <div class="flex flex-wrap gap-2">
        {skills.map((skill: string, index: number) => (
          <span key={index} class="skill-tag">{skill}</span>
        ))}
      </div>
    </Section>
  );
}
