const fs = require("fs-extra");

// try {
//   fs.copySync(
//     "dist/tw-elements-react.umd.min.js",
//     "site/static/js/tw-elements-react.umd.min.js"
//   );
//   console.log("Successfully copied tw-elements-react.umd.min.js");
// } catch (err) {
//   console.log("Failed to copy tw-elements-react.umd.min.js");
// }

// try {
//   fs.copySync(
//     "dist/tw-elements-react.umd.min.js.map",
//     "site/static/js/tw-elements-react.umd.min.js.map"
//   );
//   console.log("Successfully copied tw-elements-react.umd.min.js.map");
// } catch (err) {
//   console.log("Failed to copy tw-elements-react.umd.min.js.map");
// }

try {
  fs.copySync("dist/plugin.cjs", "site/static/js/plugin.cjs");
  console.log("Successfully copied plugin.cjs");
} catch (err) {
  console.log("Failed to copy plugin.cjs");
}
