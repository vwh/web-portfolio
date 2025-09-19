import Section from "./blocks/Section.tsx";
import Link from "./blocks/Link.tsx";

type ContactProps = Pick<Lume.Data["resume"], "resumeLink"> & {
  email: Lume.Data["resume"]["contact"]["email"];
  socials: Lume.Data["resume"]["contact"]["social"];
};

export default function ({ email, socials, resumeLink }: ContactProps) {
  return (
    <Section id="contact" title="Contact">
      <div class="space-y-2">
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
        <div class="block sm:hidden mt-6">
          <Link 
            href={resumeLink} 
            className="
              inline-block
              bg-white/5
              border
              border-accent/30
              text-accent
              hover:text-white
              hover:bg-accent/10
              hover:border-accent
              px-4
              py-2
              rounded-md
              text-sm
              font-medium
              transition-colors
              duration-200
              hover:shadow-sm
              hover:shadow-accent/10
              w-full
              text-center
            "
          >
            Resume
          </Link>
        </div>
      </div>
    </Section>
  );
}
