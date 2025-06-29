export default ({ title, children }: Lume.Data, helpers: Lume.Helpers) => (
  <>
    {{ __html: "<!DOCTYPE html>" }}
    <html>
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <script
          defer
          src="/javascript/oneko.js"
          type="text/javascript"
        ></script>
        {children}
      </body>
    </html>
  </>
);
