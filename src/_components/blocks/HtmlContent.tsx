interface HtmlContentProps {
  content: string;
}

export default function ({ content }: HtmlContentProps) {
  return (
    <div
      class="text-gray-300 mb-2"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
