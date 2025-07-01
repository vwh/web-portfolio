interface FutureProps {
  futurePlans: string;
}

export default function ({ futurePlans }: FutureProps) {
  return (
    <section class="mb-8">
      <h2 class="mb-3">What's Next</h2>
      <div
        class="text-gray-300"
        dangerouslySetInnerHTML={{ __html: futurePlans }}
      />
    </section>
  );
}
