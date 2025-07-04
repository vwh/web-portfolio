interface SectionProps {
  id?: string;
  title: string;
  children: JSX.Children;
}

export default function ({ id, title, children }: SectionProps) {
  return (
    <section id={id} class="mb-8">
      <h2 class="mb-3">{title}</h2>
      {children}
    </section>
  );
}
