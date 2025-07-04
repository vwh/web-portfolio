interface LinkProps {
  href: string;
  children: JSX.Children;
  external?: boolean;
  className?: string;
}

export default function ({
  href,
  children,
  external = true,
  className = "underline",
}: LinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      class={className}
    >
      {children}
    </a>
  );
}
