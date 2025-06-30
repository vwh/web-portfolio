interface ContactProps {
  email: string;
  socials: Record<string, { name: string; url: string }>;
  resumeLink: string;
}

export default function ({ email, socials, resumeLink }: ContactProps) {
  return (
    <section id="contact" class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        Contact
      </h2>
      <div class="space-y-1">
        <div>
          <a
            href={`mailto:${email}`}
            class="underline break-all"
            style="color: #a2c9eb"
          >
            {email}
          </a>
        </div>
        {Object.entries(socials).map(([key, social]) => (
          <div key={key}>
            <a
              href={social.url}
              target="_blank"
              class="underline"
              style="color: #a2c9eb"
            >
              {social.name}
            </a>
          </div>
        ))}
        <div>
          <a
            href={resumeLink}
            target="_blank"
            class="underline"
            style="color: #a2c9eb"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}
