import Section from "./blocks/Section.tsx";

type SkillsProps = Pick<Lume.Data["resume"], "skills">;

export default function ({ skills }: SkillsProps) {
  return (
    <Section id="skills" title="Skills">
      <div class="flex flex-wrap gap-x-4 gap-y-1">
        {skills.map((skill: string) => (
          <span class="text-gray-300">{skill}</span>
        ))}
      </div>
    </Section>
  );
}
