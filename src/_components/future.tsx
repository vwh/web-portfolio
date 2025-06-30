interface FutureProps {
  futurePlans: string;
}

export default function ({ futurePlans }: FutureProps) {
  return (
    <section class="mb-8">
      <h2 class="mb-3" style="color: #a2c9eb">
        What's Next
      </h2>
      <div
        class="text-gray-300"
        dangerouslySetInnerHTML={{ __html: futurePlans }}
      />
    </section>
  );
}
