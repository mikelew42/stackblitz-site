import app, { el, div, h1, h2, h3, p, style, pre, code } from "./app.js";
import "./framework/ext/CodeEditor/CodeEditor.js";

app.$root.ac("page");

h1("Home Page");


p.c("intro", "No bundlers, pure JavaScript.");

p("This is `/docs/page.js`.  This is your homepage.  Copy the `/page-template/` directory to create a new page. Then you can link to it, ", el("a", "like this").attr("href", "page-template/"), ".");

code.edit(`h1("Home Page");

p.c("intro", "No bundlers, pure JavaScript.");

p("Hello world, this is a paragraph.");`);

p("This allows us to do cool things with JavaScript:");

code.edit(`p("Let's count to 10.");

el("ul", () => {
    for (let i = 1; i <= 10; i++){
        el("li", "Item " + i + ".");
    }
})`);