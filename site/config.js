import fs from "fs-extra";

fs.copy(`./demo-url.js`, `./static/js/demo-url.js`, (err) => {
  if (err) throw err;
});

console.log("'demo-url' was successfully added to resources directory");
