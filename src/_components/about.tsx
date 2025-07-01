interface AboutProps {
  about: string;
  locationLink: string;
  location: string;
  resumeLink: string;
}

export default function ({
  about,
  locationLink,
  location,
  resumeLink,
}: AboutProps) {
  return (
    <section id="about" class="mb-8">
      <p class="text-gray-300 mb-2 hidden sm:block">Hey.</p>
      <div
        class="text-gray-300 mb-2"
        dangerouslySetInnerHTML={{ __html: about }}
      />
      <div class="flex justify-between items-center">
        <p class="text-gray-300">
          Currently based in{" "}
          <a href={locationLink} target="_blank" class="underline">
            {location}
          </a>
          .
        </p>
        <div class="hidden sm:block">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            class="
              underline
              bg-white/10
              font-semibold
              px-4
              py-1
              rounded
            "
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
