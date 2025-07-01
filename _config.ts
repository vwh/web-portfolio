import lume from "lume/mod.ts";

import jsx from "lume/plugins/jsx.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import robots from "lume/plugins/robots.ts";

const site = lume({
  src: "./src",
});

site.use(jsx());
site.use(tailwindcss());
site.use(minifyHTML());
site.use(
  robots({
    rules: [
      {
        userAgent: "*",
      },
    ],
  })
);

site.add("/styles.css");
site.add("/images/");
site.add("/javascript/");

export default site;
