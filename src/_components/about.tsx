import Section from "./blocks/Section.tsx";
import HtmlContent from "./blocks/HtmlContent.tsx";
import Link from "./blocks/Link.tsx";

type AboutProps = Pick<
  Lume.Data["resume"],
  "about" | "locationLink" | "location" | "resumeLink"
>;

export default function ({
  about,
  locationLink,
  location,
  resumeLink,
}: AboutProps) {
  return (
    <Section id="about" title="About Me">
      <p class="text-gray-300 mb-2 hidden sm:block">Hey.</p>
      <HtmlContent content={about} />
      <div class="flex justify-between items-center">
        <p class="text-gray-300">
          Currently based in <Link href={locationLink}>{location}</Link>.
        </p>
        <div class="hidden sm:block">
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
              px-3
              py-1.5
              rounded-md
              text-sm
              font-medium
              transition-colors
              duration-200
              hover:shadow-sm
              hover:shadow-accent/10
            "
          >
            Resume
          </Link>
        </div>
      </div>
    </Section>
  );
}
