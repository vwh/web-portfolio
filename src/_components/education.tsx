import Section from "./blocks/Section.tsx";

type EducationProps = Pick<Lume.Data["resume"], "education">;

export default function ({ education }: EducationProps) {
  return (
    <Section id="education" title="Education">
      <div class="space-y-8">
        {education.map((edu) => (
          <div class="bg-white/5 border border-white/10 rounded-xl p-6">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 class="text-white font-semibold text-lg mb-1">
                  {edu.degree}
                </h3>
                <p class="text-gray-400">{edu.institution}</p>
              </div>
              <div class="text-sm text-gray-500">
                <p>{edu.period}</p>
              </div>
            </div>
            <p class="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>
            <div class="flex flex-wrap gap-2">
              {edu.skills.map((skill, index) => (
                <span key={index} class="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
