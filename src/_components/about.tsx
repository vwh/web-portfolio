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
              underline
              bg-white/5
              font-semibold
              px-2
              py-1
              rounded
            "
          >
            Resume
          </Link>
        </div>
      </div>
    </Section>
  );
}
