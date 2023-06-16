const fs = require("fs-extra");

try {
  fs.copySync("dist/plugin.cjs", "site/static/js/react/plugin.cjs");
  console.log("Successfully copied plugin.cjs");
} catch (err) {
  console.log("Failed to copy plugin.cjs");
}
