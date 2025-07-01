import { stripHtmlTags } from "../utils/index.ts";

export default ({ resume, title, children }: Lume.Data) => {
  const about = stripHtmlTags(resume.about);

  return (
    <>
      {{ __html: "<!DOCTYPE html>" }}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* Primary Meta Tags */}
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={about} />
          <meta name="author" content={resume.name} />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={about} />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={about} />

          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="./images/favicon.ico" />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&display=swap"
            rel="stylesheet"
          />

          <link rel="stylesheet" href="./styles.css" />
        </head>

        <body className="bg-black text-gray-300 min-h-screen">
          <script defer src="./javascript/oneko.js" type="text/javascript" />
          <script defer src="./javascript/title.js" type="text/javascript" />

          {/* Simple header */}
          {/* <header className="border-b border-gray-800 py-4">
            <div className="max-w-3xl mx-auto px-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg">
                  ~/
                </span>
                <nav className="flex space-x-8">
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-[#a2c9eb]"
                  >
                    Home
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-[#a2c9eb]"
                  >
                    Blog
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-[#a2c9eb]"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </header> */}

          <main className="max-w-3xl mx-auto px-6 py-8">{children}</main>
        </body>
      </html>
    </>
  );
};
