interface HeroProps {
  name: string;
}

export default function ({ name }: HeroProps) {
  return (
    <section class="mb-6">
      <pre class="hidden sm:block font-mono text-xs sm:text-sm overflow-x-auto">
        {`
 ██╗   ██╗ █████╗ ███████╗ █████╗ ███╗   ██╗
 ╚██╗ ██╔╝██╔══██╗╚══███╔╝██╔══██╗████╗  ██║
  ╚████╔╝ ███████║  ███╔╝ ███████║██╔██╗ ██║
   ╚██╔╝  ██╔══██║ ███╔╝  ██╔══██║██║╚██╗██║
    ██║   ██║  ██║███████╗██║  ██║██║ ╚████║
    ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
      </pre>
      <div class="sm:hidden mb-4">
        <h1 class="text-3xl font-bold">Hi, I'm {name} 👋</h1>
      </div>
    </section>
  );
}
