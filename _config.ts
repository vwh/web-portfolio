import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";

const site = lume({
  src: "./src",
});

site.use(jsx());

site.add("/styles.css");
site.add("/images/");

export default site;
