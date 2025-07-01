interface AboutProps {
  about: string;
  locationLink: string;
  location: string;
}

export default function ({ about, locationLink, location }: AboutProps) {
  return (
    <section id="about" class="mb-8">
      <p class="text-gray-300 mb-2 hidden sm:block">Hey.</p>
      <div
        class="text-gray-300 mb-2"
        dangerouslySetInnerHTML={{ __html: about }}
      />
      <p class="text-gray-300">
        Currently based in{" "}
        <a href={locationLink} target="_blank" class="underline">
          {location}
        </a>
        .
      </p>
    </section>
  );
}
