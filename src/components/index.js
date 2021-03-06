import footer from "./footer.js";
import header from "./header.js";
import baseLayout from "./base-layout.js";

[
    footer,
    header,
    baseLayout
].forEach(c => {
    Vue.component(c.name, c)
})