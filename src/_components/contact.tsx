import Section from "./blocks/Section.tsx";
import Link from "./blocks/Link.tsx";

type ContactProps = Pick<Lume.Data["resume"], "resumeLink"> & {
  email: Lume.Data["resume"]["contact"]["email"];
  socials: Lume.Data["resume"]["contact"]["social"];
};

export default function ({ email, socials, resumeLink }: ContactProps) {
  return (
    <Section id="contact" title="Contact">
      <div class="space-y-1">
        <div>
          <Link href={`mailto:${email}`} className="underline break-all">
            {email}
          </Link>
        </div>
        {Object.entries(socials).map(([key, social]) => (
          <div key={key}>
            <Link href={social.url}>{social.name}</Link>
          </div>
        ))}
        <div class="block sm:hidden">
          <Link href={resumeLink}>
            <strong>Resume</strong>
          </Link>
        </div>
      </div>
    </Section>
  );
}
