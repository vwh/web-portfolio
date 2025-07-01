interface Languages {
  languagesSummary: string;
}

export default function ({ languagesSummary }: Languages) {
  return (
    <section id="languages" class="mb-8">
      <h2 class="mb-3">Languages</h2>
      <div
        class="text-gray-300 mb-4"
        dangerouslySetInnerHTML={{ __html: languagesSummary }}
      />
    </section>
  );
}
