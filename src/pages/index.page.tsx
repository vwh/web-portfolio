export const layout = "layout.tsx";

export const url = "/";
export const title = "About Me";

export default ({ resume, comp }: Lume.Data) => (
  <>
    <comp.hero name={resume.name} ascii={resume.ascii} />
    <comp.about
      about={resume.about}
      locationLink={resume.locationLink}
      location={resume.location}
      resumeLink={resume.resumeLink}
    />
    <comp.contact
      email={resume.contact.email}
      socials={resume.contact.social}
      resumeLink={resume.resumeLink}
    />
    <comp.languages languagesSummary={resume.languagesSummary} />
    <comp.runtimes runtimesSummary={resume.runtimesSummary} />
    <comp.skills skills={resume.skills} />
    <comp.projects projects={resume.projects} />
    <comp.future futurePlans={resume.futurePlans} />
  </>
);
