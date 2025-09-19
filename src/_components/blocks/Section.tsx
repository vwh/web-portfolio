interface SectionProps {
  id?: string;
  title: string;
  children: JSX.Children;
}

export default function ({ id, title, children }: SectionProps) {
  return (
    <section id={id} class="mb-12">
      <div class="section-header">
        <h2 class="section-title font-bold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
