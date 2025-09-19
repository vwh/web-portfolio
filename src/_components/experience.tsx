import Section from "./blocks/Section.tsx";

type ExperienceProps = Pick<Lume.Data["resume"], "experience">;

export default function ({ experience }: ExperienceProps) {
  return (
    <Section id="experience" title="Experience">
      <div class="space-y-4">
        {experience.map((exp) => (
          <div class="bg-white/5 border border-white/10 rounded-xl p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 class="text-white font-semibold text-lg mb-1">
                  {exp.position}
                </h3>
                <p class="text-gray-400">{exp.company}</p>
              </div>
              <div class="text-sm text-gray-500 text-right">
                <p class="font-medium">{exp.period}</p>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-4">
              {exp.location} · {exp.type}
            </p>
            <ul class="space-y-2 text-gray-300 mb-4">
              {exp.description.map((item, _index) => (
                <li class="flex items-start gap-2">
                  <span class="text-accent mt-1 text-sm">▸</span>
                  <span class="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div class="flex flex-wrap gap-2">
              {exp.skills.map((skill, index) => (
                <span key={index} class="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
