export default (data: Lume.Data, helpers: Lume.Helpers) => {
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
          <title>{data.title}</title>
          <meta name="title" content={data.title} />
          <meta name="description" content={data.resume.about} />
          <meta name="author" content={data.resume.name} />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.resume.about} />
          <meta property="og:locale" content="en_US" />

          {/* Twitter */}
          <meta property="twitter:title" content={data.title} />
          <meta property="twitter:description" content={data.resume.about} />

          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />

          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Stylesheets */}
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body className="bg-gray-900 text-gray-100 font-mono min-h-screen">
          <script defer src="/javascript/oneko.js" type="text/javascript" />
          <script defer src="/javascript/title.js" type="text/javascript" />

          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-blue-600 text-white px-4 py-2 rounded z-50"
          >
            Skip to main content
          </a>

          {/* Terminal-style header */}
          <header className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-4xl mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2" aria-hidden="true">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="ml-4 text-[#a2c9eb] font-medium">
                    ~/portfolio
                  </span>
                </div>
                <nav className="hidden md:flex space-x-6" role="navigation">
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200"
                  >
                    /About
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200"
                  >
                    /Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200"
                  >
                    /Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-[#a2c9eb] transition-colors duration-200"
                  >
                    /Contact
                  </a>
                </nav>
              </div>
            </div>
          </header>

          <main
            id="main-content"
            className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8"
          >
            {data.children}
          </main>

          {/* Footer */}
          <footer className="border-t border-gray-700 bg-gray-800/30 mt-16">
            <div className="max-w-4xl mx-auto px-6 py-8">
              <div className="text-center text-gray-400">
                <p className="text-[#a2c9eb]">yazan@portfolio:~$</p>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
};
