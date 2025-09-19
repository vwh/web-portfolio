import Section from "./blocks/Section.tsx";

type EducationProps = Pick<Lume.Data["resume"], "education">;

export default function ({ education }: EducationProps) {
  return (
    <Section id="education" title="Education">
      <div class="space-y-6">
        {education.map((edu) => (
          <div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <div>
                <h3 class="text-white font-semibold">{edu.degree}</h3>
                <p class="text-gray-400">{edu.institution}</p>
              </div>
              <div class="text-sm text-gray-500">
                <p>{edu.period}</p>
              </div>
            </div>
            <p class="text-gray-300 mb-3">{edu.description}</p>
            <div class="flex flex-wrap gap-x-4 gap-y-1">
              {edu.skills.map((skill) => (
                <span class="text-gray-300">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}