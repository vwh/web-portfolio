interface SkillsProps {
  skills: string[];
}

export default function ({ skills }: SkillsProps) {
  return (
    <section id="skills" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Skills
      </h2>
      <div class="flex flex-wrap gap-x-4 gap-y-1">
        {skills.map((skill: string) => (
          <span class="text-gray-300">{skill}</span>
        ))}
      </div>
    </section>
  );
}
