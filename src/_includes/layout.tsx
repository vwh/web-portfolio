import Head from "../_components/blocks/Head.tsx";
import Scripts from "../_components/blocks/Scripts.tsx";

export default ({ resume, title, children }: Lume.Data) => {
  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang="en">
        <Head resume={resume} title={title} />
        <body className="bg-black text-gray-300 min-h-screen">
          <Scripts />
          <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>
        </body>
      </html>
    </>
  );
};
