import Section from "./blocks/Section.tsx";

type ExperienceProps = Pick<Lume.Data["resume"], "experience">;

export default function ({ experience }: ExperienceProps) {
  return (
    <Section id="experience" title="Experience">
      <div class="space-y-6">
        {experience.map((exp) => (
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 class="text-white font-semibold">{exp.position}</h3>
                <p class="text-gray-400">{exp.company}</p>
              </div>
              <div class="text-sm text-gray-500">
                <p>{exp.period}</p>
              </div>
            </div>
            <p class="text-gray-500 text-sm mb-3">{exp.location} · {exp.type}</p>
            <ul class="space-y-1 text-gray-300 mb-3">
              {exp.description.map((item, index) => (
                <li class="flex items-start gap-2">
                  <span class="text-gray-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              {exp.skills.map((skill) => (
                <span class="text-gray-300">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}