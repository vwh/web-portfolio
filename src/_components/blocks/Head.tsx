import { stripHtmlTags } from "../../utils/index.ts";

interface HeadProps {
  resume: {
    name: string;
    about: string;
  };
  title: string | undefined;
}

export default ({ resume, title }: HeadProps) => {
  const about = stripHtmlTags(resume.about);

  return (
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  );
};
