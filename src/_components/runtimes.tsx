interface RuntimeProps {
  runtimesSummary: string;
}

export default function ({ runtimesSummary }: RuntimeProps) {
  return (
    <section id="runtimes" class="mb-8">
      <h2 class="mb-3">Runtime Environments</h2>
      <div
        class="text-gray-300 mb-4"
        dangerouslySetInnerHTML={{ __html: runtimesSummary }}
      />
    </section>
  );
}
